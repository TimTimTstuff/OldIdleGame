interface WorkProcessor {
    process(scope: GameController): void;
    processOfflineTime(seconds: number, scope: GameController);
}

interface IBuilding {
}

class ABuilding implements IBuilding {
    public name: string;
    public displayName: string;
    public data: DataBuilding;
    public buildCost: CostBag;
    public produceLevel: number = 0;
    public conf: any;
    public maxLevel: number;
    public type: string;
    public isMulti: boolean = false;

    constructor(data: DataBuilding, conf: any) {
        this.data = data;
        this.conf = conf;
        this.maxLevel = this.conf.maxLevel;
    }

    public canUp: boolean = false;

    public isToBig = false;
    public updateProducingLevel(ppT: number): boolean {
        this.produceLevel += ppT * (GameInfo.tickTime / 1000);
        if (ppT > 2) {
            this.isToBig = true;
        }
        if (this.produceLevel >= 1) {
            return true;
        }
        return false;
    }

    public getProducingPercent(): number {
        if (this.isToBig) { return 100 };
        return Math.round(this.produceLevel * 100);
    }

    private upgradeResCalc(rBaseAmount: number) {

        return Math.round((rBaseAmount * (this.data.level * this.data.level)) * Math.pow(1 + (this.conf.upgradeModifierPercent / 100), this.data.level));
    }

    public viewArray: any = {};

    public getUpgradeViewArray(scope: GameController): any {
        var mBag: CostBag = this.conf.upgradeCost;
        var bMaxLevel = scope.upgrades.getForBuilding(this.data.name, UpgradeType.Upgrade, EntityTypes.Buildings, BuildingUpgradeType.MaxLevel);
        if (this.maxLevel + bMaxLevel <= this.data.level) {
            return {};
        }

        var costArray = {};
        var ar = mBag.getCostObject();
        var is = false;
        for (var r in ar) {
             this.canUp = true;
            costArray[ar[r].Id] = {};
            costArray[ar[r].Id].o = ar[r].Id;
            costArray[ar[r].Id].need = this.upgradeResCalc(ar[r].amount);
            if (scope.resources.hasOwnProperty(ar[r].Id)) {
                costArray[ar[r].Id].name = scope.resources[ar[r].Id].displayName;
                costArray[ar[r].Id].stock = scope.resources[ar[r].Id].data.amount;
            } else {
                costArray[ar[r].Id].name = "?";
                costArray[ar[r].Id].stock = 0;
            }
        }

        
       
            this.viewArray = costArray;
       
    }

    public upgradePossible(scope: GameController): boolean {
        var dataR = this.viewArray;
        var bMaxLevel = scope.upgrades.getForBuilding(this.data.name, UpgradeType.Upgrade, EntityTypes.Buildings, BuildingUpgradeType.MaxLevel);
        if (this.maxLevel + bMaxLevel <= this.data.level) {
            return false;
        }

        for (var r in dataR) {
            if (dataR[r].need > dataR[r].stock) {
                return false;
            }
        }
      
        return true;
    }

    public upgrade(scope: GameController): void {

        if (!this.upgradePossible(scope)) { console.log("not possible"); return; }
       

        var dataR = this.viewArray;
        for (var r in dataR) {
            scope.resources[r].data.amount -= dataR[r].need;
        }

        this.data.level += 1;

        StatisticSetup.updateStat("BuildingUpgrades", 1, scope);

    }
}

class BasicResourceProduceBuilding extends ABuilding {
    public resId: string;
    public pUnitId: string;

    constructor(data: DataBuilding, conf: any) {
        super(data, conf);
        this.displayName = conf.displayName;
        this.type = "basicresource";
        this.resId = this.conf.produceRest;
        this.pUnitId = this.conf.processUnit;
    }
}

class ExtendResourceProduceBuilding extends ABuilding {
    public resId: string;
    public pUnitId: string;
    public resCost: CostBag;
    public resViewArray: any;

    constructor(data: DataBuilding, conf: any) {
        super(data, conf);
        this.displayName = conf.displayName;
        this.type = "extendresource";
        this.resId = this.conf.produceRest;
        this.resCost = this.conf.resCost;
        this.pUnitId = this.conf.processUnit;
    }

    public getProducePerSecond(scope: GameController) {
        var ps = (this.conf.producePerSecond * scope.units[this.pUnitId].data.amount) * Math.pow(1 + ((this.conf.producePerUpdatePercent) / 100), this.data.level);
        ps = ps * (1 + (scope.units[this.pUnitId].data.level / 100));

        var upgr = scope.upgrades.getForBuilding(this.data.name, UpgradeType.Upgrade, EntityTypes.Buildings, BuildingUpgradeType.PPS);
        if (upgr > 0) {

            ps = ps * (1 + (upgr / 100));
        }

        return ps;
    }

    public currentUnits(scope: GameController) {
        return scope.units[this.pUnitId].data.amount;
    }

    public maxUnits(): number {
        return Math.round((this.conf.maxUnitsInBuilding + (this.data.level * this.conf.maxUnitsPerLevel) * Math.pow(1 + (this.conf.maxUnitsPerLevel / 100), this.data.level)));
    }

    public processOfflineTime(seconds: number, scope: GameController) {
        return;
        var amount = Math.round(this.getProducePerSecond(scope) * seconds);
        var max = scope.buildings["Storagehouse"].getSpace(scope);

        if (scope.data.totalRes + amount > max) {
            var diff = Math.round(max - scope.data.totalRes);
            if (diff < 0) { return; }
            (<DataUnit>scope.data.resources[this.resId]).amount += diff;
            StatisticSetup.updateStat("RES_" + this.resId, diff, scope);
            this.data.processQ -= diff;
        } else {
            (<DataUnit>scope.data.resources[this.resId]).amount += amount;
            StatisticSetup.updateStat("RES_" + this.resId, amount, scope);
            this.data.processQ -= amount;
        }
    }

    public process(scope: GameController): void {

        if (this.data.processQ <= 0) {
            return;
        }

        if (scope.data.totalRes >= scope.buildings["Storagehouse"].getSpace(scope)) {
            return;
        }

        if (this.updateProducingLevel(this.getProducePerSecond(scope))) {

            (<DataUnit>scope.data.resources[this.resId]).amount += Math.round(this.produceLevel);
            StatisticSetup.updateStat("RES_" + this.resId, Math.round(this.produceLevel), scope);
            this.data.processQ--;
            this.produceLevel = 0;
        }


    }

    public orderPossible(scope: GameController): boolean {
        var dataR = this.resViewArray;


        for (var r in dataR) {
            if (dataR[r].need > dataR[r].stock) {
                return false;
            }
        }

        return true;
    }

    public resResCalc(amount: number) {
        return amount;
        ///TI_KE Entfernt if Update 0.0.0.6
        //return Math.round(1 + (this.data.level / 3 * amount));
    }

    public getUnitCostViewArray(scope: GameController): any {
        var mBag: CostBag = this.resCost;

        var costArray = {};
        var ar = mBag.getCostObject();
        for (var r in ar) {

            costArray[ar[r].Id] = {};
            costArray[ar[r].Id].o = ar[r].Id;
            costArray[ar[r].Id].need = this.resResCalc(ar[r].amount);
            if (scope.resources.hasOwnProperty(ar[r].Id)) {
                costArray[ar[r].Id].name = scope.resources[ar[r].Id].displayName;
                costArray[ar[r].Id].stock = scope.resources[ar[r].Id].data.amount;
            } else {
                costArray[ar[r].Id].name = "?";
                costArray[ar[r].Id].stock = 0;
            }
        }

        this.resViewArray = costArray;

    }

    public addUnitToQ(scope: GameController) {
        for (var i = 0; i < GameInfo.addPerClick; i++){
            if (this.orderPossible(scope)) {
                this.data.processQ++;

                var dataR = this.resViewArray;
                for (var r in dataR) {
                    scope.resources[r].data.amount -= dataR[r].need;
                }
                scope.updateInfo();
                scope.metaDataCalculation();
            }

        }
    }

    public remUnitQ(scope) {
        for (var i = 0; i < GameInfo.addPerClick; i++) {
            if (this.data.processQ > 0) {
                this.data.processQ--;


                var dataR = this.resViewArray;
                for (var r in dataR) {
                    scope.resources[r].data.amount += dataR[r].need;
                }
            }
            scope.updateInfo();
            scope.metaDataCalculation();
        }
    }
}

class MultiExtendResourceProduceBuilding extends ABuilding {
    public resId: string;
    public pUnitId: string;
    public resCost: CostBag;
    public resViewArray: any;

    constructor(data: DataBuilding, conf: any) {
        super(data, conf);
        this.displayName = conf.displayName;
        this.type = "extendresource";
        this.resId = this.conf.produceRest;
        this.resCost = this.conf.resCost;
        this.pUnitId = this.conf.processUnit;
        this.isMulti = true;
    }

    public getProducePerSecond(scope: GameController) {
        var ps = (this.conf.producePerSecond * scope.units[this.pUnitId].data.amount) * Math.pow(1 + ((this.conf.producePerUpdatePercent) / 100), this.data.level);
        ps = ps * (1 + (scope.units[this.pUnitId].data.level / 100));

        var upgr = scope.upgrades.getForBuilding(this.data.name, UpgradeType.Upgrade, EntityTypes.Buildings, BuildingUpgradeType.PPS);
        if (upgr > 0) {

            ps = ps * (1 + (upgr / 100));
        }

        return ps;
    }

    public currentUnits(scope: GameController) {
        return scope.units[this.pUnitId].data.amount;
    }

    public maxUnits(): number {
        return Math.round((this.conf.maxUnitsInBuilding + (this.data.level * this.conf.maxUnitsPerLevel) * Math.pow(1 + (this.conf.maxUnitsPerLevel / 100), this.data.level)));
    }

    public processOfflineTime(seconds: number, scope: GameController) {
        return;
        var amount = Math.round(this.getProducePerSecond(scope) * seconds);
        var max = scope.buildings["Storagehouse"].getSpace(scope);

        if (scope.data.totalRes + amount > max) {
            var diff = Math.round(max - scope.data.totalRes);
            if (diff < 0) { return; }
            (<DataUnit>scope.data.resources[this.resId]).amount += diff;
            StatisticSetup.updateStat("RES_" + this.resId, diff, scope);
            this.data.processQ -= diff;
        } else {
            (<DataUnit>scope.data.resources[this.resId]).amount += amount;
            StatisticSetup.updateStat("RES_" + this.resId, amount, scope);
            this.data.processQ -= amount;
        }
    }

    public process(scope: GameController): void {

        if (this.data.processQ <= 0) {
            return;
        }

        if (scope.data.totalRes >= scope.buildings["Storagehouse"].getSpace(scope)) {
            return;
        }

        if (this.updateProducingLevel(this.getProducePerSecond(scope))) {

            (<DataUnit>scope.data.resources[this.resId]).amount += Math.round(this.produceLevel);
            StatisticSetup.updateStat("RES_" + this.resId, Math.round(this.produceLevel), scope);
            this.data.processQ--;
            this.produceLevel = 0;
        }


    }

    public orderPossible(scope: GameController, res: string): boolean {

        var dataR = this.resViewArray;

        for (var r in dataR[res]) {
            if (dataR[res][r].need > dataR[r][res].stock) {
                return false;
            }
        }

        return true;
    }

    public resResCalc(amount: number) {
        return amount;
        ///TI_KE Entfernt if Update 0.0.0.6
        //return Math.round(1 + (this.data.level / 3 * amount));
    }

    public getUnitCostViewArray(scope: GameController): any {

        for (var r in this.conf.production) {

            var mBag: CostBag = this.conf[r].resCost;

                var costArray = {};
                var ar = mBag.getCostObject();
                for (var r in ar) {

                    costArray[ar[r].Id] = {};
                    costArray[ar[r].Id].o = ar[r].Id;
                    costArray[ar[r].Id].need = this.resResCalc(ar[r].amount);
                    if (scope.resources.hasOwnProperty(ar[r].Id)) {
                        costArray[ar[r].Id].name = scope.resources[ar[r].Id].displayName;
                        costArray[ar[r].Id].stock = scope.resources[ar[r].Id].data.amount;
                    } else {
                        costArray[ar[r].Id].name = "?";
                        costArray[ar[r].Id].stock = 0;
                    }
                }

            this.resViewArray[r] = costArray;

        }
        

    }

    public addUnitToQ(scope: GameController,res:string) {
        for (var i = 0; i < GameInfo.addPerClick; i++) {
            if (this.orderPossible(scope, res)) {

                if (this.data.processQ[res] == undefined) {
                    this.data.processQ[res] = 0;
                }
               
                this.data.processQ[res]++;

                var dataR = this.resViewArray[res];
                for (var r in dataR) {
                    scope.resources[r].data.amount -= dataR[r].need;
                }
                scope.updateInfo();
                scope.metaDataCalculation();
            }

        }
    }

    public remUnitQ(scope, res:string) {
        for (var i = 0; i < GameInfo.addPerClick; i++) {

            if (this.data.processQ > 0) {
                this.data.processQ--;


                var dataR = this.resViewArray;
                for (var r in dataR) {
                    scope.resources[r].data.amount += dataR[r].need;
                }

            }
            scope.updateInfo();
            scope.metaDataCalculation();
        }
    }
}

class UnitProduceBuilding extends ABuilding {
    public unitId: string;
    public unitCost: CostBag;
    public resViewArray: any;

    constructor(data: DataBuilding, conf: any) {
        super(data, conf);
        this.unitId = conf.produceUnit;
        this.unitCost = conf.unitCost;
        this.displayName = conf.displayName;
        this.type = "unit";

    }
    
   

    public getProducePerSecond() {
        return this.conf.producePerSecond * Math.pow(1 + (this.conf.producePerUpdatePercent / 100), this.data.level);

    }

    public processOfflineTime(seconds: number, scope: GameController) {
        return;
        var amount = Math.round(this.getProducePerSecond() * seconds);
        var max = this.getMaxUnits(scope);
        if (this.data.processQ <= 0) {
            return;
        }

        if (scope.data.unitsTotal + amount > max) {
            var diff = Math.round(max - scope.data.unitsTotal);
            (<DataUnit>scope.data.units[this.unitId]).amount += diff;
            this.data.processQ -= diff;
        } else {
            this.data.processQ -= amount;
            (<DataUnit>scope.data.units[this.unitId]).amount += amount;
        }
    }

    public process(scope: GameController): void {
        if (this.data.processQ <= 0) {
            return;
        }
        if (scope.data.unitsTotal >= this.getMaxUnits(scope)) {

            return;
        }

        if (this.updateProducingLevel(this.getProducePerSecond())) {

            (<DataUnit>scope.data.units[this.unitId]).amount += Math.round(this.produceLevel);
  StatisticSetup.updateStat("UNIT_" + this.unitId, Math.round(this.produceLevel), scope);
            this.data.processQ -= Math.round(this.produceLevel);
          
            this.produceLevel = 0;

            
        }


        // console.log("Unit producing " + this.getProducingPercent() + "%");
    }

    public orderPossible(scope: GameController): boolean {
        var dataR = this.resViewArray;

        //if (this.maxLevel <= this.data.level) {
        //    return false;
        //}

        for (var r in dataR) {
            if (dataR[r].need > dataR[r].stock) {
                return false;
            }
        }
        
        return true;
    }

    public unitResCalc(amount: number) {
        return Math.round(1+ (this.data.level / 3 * amount))
    }

    public getUnitCostViewArray(scope: GameController): any {
        var mBag: CostBag = this.unitCost;
        
        var costArray = {};
        var ar = mBag.getCostObject();
        for (var r in ar) {

            costArray[ar[r].Id] = {};
            costArray[ar[r].Id].o = ar[r].Id;
            costArray[ar[r].Id].need = this.unitResCalc(ar[r].amount);
            if (scope.resources.hasOwnProperty(ar[r].Id)) {
                costArray[ar[r].Id].name = scope.resources[ar[r].Id].displayName;
                costArray[ar[r].Id].stock = scope.resources[ar[r].Id].data.amount;
            } else {
                costArray[ar[r].Id].name = "?";
                costArray[ar[r].Id].stock = 0;
            }
        }

        this.resViewArray = costArray;

    }

    public addUnitToQ(scope: GameController) {
       
        for (var i = 0; i < GameInfo.addPerClick; i++) {
            if (this.orderPossible(scope)) {
                this.data.processQ++;

                var dataR = this.resViewArray;
                for (var r in dataR) {
                    scope.resources[r].data.amount -= dataR[r].need;
                }
            }
            scope.updateInfo();
            scope.metaDataCalculation();
        }

    }

    public remUnitQ(scope: GameController) {
        {
            for (var i = 0; i < GameInfo.addPerClick; i++) {
                if (this.data.processQ > 0) {
                    this.data.processQ--;


                    var dataR = this.resViewArray;
                    for (var r in dataR) {
                        scope.resources[r].data.amount += dataR[r].need;
                    }
                }
                scope.updateInfo();
                scope.metaDataCalculation();
            }
        }
    }

    public getMaxUnits(scope: GameController): number {
        var basic = this.conf.maxUnitPerLevel * Math.pow(1 + (this.conf.maxUnitUpdatePercent / 100), this.data.level / 2);

        var upgr = scope.upgrades.getForBuilding(this.data.name, UpgradeType.Upgrade, EntityTypes.Buildings, BuildingUpgradeType.Storage);
        if (upgr > 0) {
            basic = basic * (1 + (upgr / 100));
        }

        return basic;

    }
}

class SpecialBuilding extends ABuilding {

    public pUnitId:string;

    constructor(data: DataBuilding, conf: any) {
        super(data, conf);
        this.type = conf.type;
        this.displayName = conf.displayName;
        this.pUnitId = conf.processUnit;
    }
}

class House extends UnitProduceBuilding implements WorkProcessor {

   


}

class StorageHouse extends SpecialBuilding implements WorkProcessor {
    public process(scope: GameController): void { }
    public processOfflineTime(seconds: number, scope: GameController) { }

    public getSpace(scope: GameController) {
        var basic = this.conf.storagePerLevel * Math.pow(1 + (this.conf.storagePerUpdatePercent / 100), this.data.level);

        var upgr = scope.upgrades.getForBuilding(this.data.name, UpgradeType.Upgrade, EntityTypes.Buildings, BuildingUpgradeType.Storage);
        if (upgr > 0) {
            basic = basic * (1 + (upgr / 100));
        }

        return basic;
    }
}

class Research extends SpecialBuilding implements WorkProcessor {

    public getProducePerSecond(scope: GameController) {
        var ps = (this.conf.researchPointPerUnit * scope.units[this.pUnitId].data.amount) * Math.pow(1 + ((this.conf.researchPointUpdate) / 100), this.data.level);
        ps = ps * (1 + (scope.units[this.pUnitId].data.level / 100));
        return ps;
    }
    public maxUnits(): number {
        return Math.round((this.conf.maxUnitsInBuilding + (this.data.level * this.conf.maxUnitsPerLevel) * Math.pow(1 + (this.conf.maxUnitsPerLevel / 100), this.data.level)));
    }
    public process(scope: GameController): void {
        if (scope.data.researchPoints >= this.getSpace(scope)) {
            return;
        }

        if (this.updateProducingLevel(this.getProducePerSecond(scope))) {

            scope.data.researchPoints += Math.round(this.produceLevel);
            StatisticSetup.updateStat("RESEARCHPOINTS", Math.round(this.produceLevel), scope);
            this.produceLevel = 0;
        }
    }
    public processOfflineTime(seconds: number, scope: GameController) {
        var max = this.getSpace(scope);
        var amount = Math.round(this.getProducePerSecond(scope) * seconds);

        if (scope.data.researchPoints + amount > max) {
            var diff = Math.round(max - scope.data.researchPoints);
            if (diff < 0) { return; }
            scope.data.researchPoints += diff;
            StatisticSetup.updateStat("RESEARCHPOINTS", diff, scope);
        } else {
            scope.data.researchPoints += amount;
            StatisticSetup.updateStat("RESEARCHPOINTS", amount, scope);
        }

    }

    public getSpace(scope: GameController): number {
        return this.conf.storagePerLevel * Math.pow(1 + (this.conf.storagePerUpdatePercent / 100), this.data.level);
    }

    public currentUnits(scope: GameController) {
        return scope.units[this.pUnitId].data.amount;
    }
}

class Market extends SpecialBuilding implements WorkProcessor {

    public getProducePerSecond(scope: GameController) {

        

        var ps = (this.conf.sellBuyPerSecond) * Math.pow(1 + ((this.conf.sellBuyUpdate) / 100), this.data.level);
     
        return ps;
    }
   
    public process(scope: GameController): void {

        if (scope.data.currentSellAtMarket >= this.getSpace(scope)) {
            return;
        }

        if (this.updateProducingLevel(this.getProducePerSecond(scope))) {

            scope.data.currentSellAtMarket += Math.round(this.produceLevel);
            this.produceLevel = 0;
        }
    }

    public processOfflineTime(seconds: number, scope: GameController) {
        var max = this.getSpace(scope);
        var amount = Math.round(this.getProducePerSecond(scope) * seconds);

        if (scope.data.currentSellAtMarket + amount > max) {
            var diff = Math.round(max - scope.data.currentSellAtMarket);
            if (diff < 0) { return; }
            scope.data.currentSellAtMarket += diff;
        } else {
            scope.data.currentSellAtMarket += amount;
        }

    }

    public getSpace(scope: GameController): number {
        return this.conf.storagePerLevel * Math.pow(1 + (this.conf.storagePerUpdatePercent / 100), this.data.level);
    }

    
}


class BasicResourceBuilding extends BasicResourceProduceBuilding implements WorkProcessor
{
   

    public getProducePerSecond(scope: GameController) {
        var ps = (this.conf.producePerSecond * scope.units[this.pUnitId].data.amount) * Math.pow(1 + ((this.conf.producePerUpdatePercent) / 100), this.data.level);
        ps = ps * (1 + (scope.units[this.pUnitId].data.level / 100));

        var upgr = scope.upgrades.getForBuilding(this.data.name, UpgradeType.Upgrade, EntityTypes.Buildings, BuildingUpgradeType.PPS);
        if (upgr > 0) {
            
            ps = ps * (1 + (upgr / 100));
        }

        return ps;
    }

    public currentUnits(scope: GameController) {
        return scope.units[this.pUnitId].data.amount;
    }

    public maxUnits(): number {
        return Math.round((this.conf.maxUnitsInBuilding + (this.data.level * this.conf.maxUnitsPerLevel) * Math.pow(1 + (this.conf.maxUnitsPerLevel / 100), this.data.level)));
    }

    public processOfflineTime(seconds: number, scope: GameController) {
        var amount = Math.round(Math.round(this.getProducePerSecond(scope) * seconds) / 10);
        var max = scope.buildings["Storagehouse"].getSpace(scope);
        
        if (scope.data.totalRes + amount > max) {
            var diff = Math.round(max - scope.data.totalRes);
            if (diff < 0) { return; }
            (<DataUnit>scope.data.resources[this.resId]).amount += diff;
            StatisticSetup.updateStat("RES_" + this.resId, diff, scope);
        } else {
            (<DataUnit>scope.data.resources[this.resId]).amount += amount;
            StatisticSetup.updateStat("RES_" + this.resId, amount, scope);
        }
    }

    public process(scope: GameController): void {

        if (scope.data.totalRes >= scope.buildings["Storagehouse"].getSpace(scope)) {
            return;
        }

        if (this.updateProducingLevel(this.getProducePerSecond(scope))) {

            (<DataUnit>scope.data.resources[this.resId]).amount += Math.round(this.produceLevel);
            StatisticSetup.updateStat("RES_" + this.resId, Math.round(this.produceLevel), scope);
            this.produceLevel = 0;
        }

        
    }
}