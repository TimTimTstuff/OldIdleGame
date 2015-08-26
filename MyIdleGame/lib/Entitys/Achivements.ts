
enum ATypes {
    UNIT_AMOUNT,
    RES_AMOUNT,
    BUILDING_LEVEL,
    UNIT_LEVEL,
    UPGRADE_PURCHASED,
    TIME_PLAYED,
    BUILDING_UNIT_AMOUNT,
    BUILDING_PPS,
    BUILDING_ORDER_RES,
    BUILDING_ORDER_UNIT,
    RESOURCE_TOTAL,
    RESEARCHPOINT_TOTAL,
    BUILDING_UPGRADED,

}

class AchivementsList {

    public active: AchivementRecord[] = [];
    public inactiv: AchivementRecord[] = [];

    public produceLevel: number = 0;

    public updateProducingLevel(ppT: number): boolean {
        this.produceLevel += ppT * (GameInfo.tickTime / 1000);
        if (this.produceLevel >= 1) {
            return true;
        }
        return false;
    }

    public formatDate(date:Date):string {
        var f = "";

        f += date.getDate();
        f += ".";
        f += date.getMonth() + 1;
        f += ".";
        f += date.getFullYear();
        f += " ";
        f += date.getHours();
        f += ":";
        f += date.getMinutes();

        return f;
    }

    public hasUpdate: boolean = false;

    public generateList(scope: GameController) {
        this.active = [];
        this.inactiv = [];
        var dList = AchivementsConfig.aList();
        var uList = scope.data.achivements;

        for (var a in dList) {
            if (uList[dList[a].name] == undefined) {
                this.inactiv.push(dList[a]);
            } else {
                dList[a].data = uList[dList[a].name];
                dList[a].date = new Date(uList[dList[a].name].date);
                this.active.push(dList[a]);
            }
        }
      
    }

    public checkUpgradeLevel(scope: GameController, a: AchivementRecord) {

        var isA = false;
         if (a.eName == "BUILDING_UPDATE") {
            if (scope.data.statistics["BuildingUpgrades"].value >= a.value) {
                isA = true;
            }
        }

         if (isA) {
             var da = new DataAchivements();
             da.name = a.name;
             da.pDate = this.formatDate(new Date());
             da.date = new Date();
             scope.data.achivements[a.name] = da;
             this.hasUpdate = true;
         }

    }

    public checkUnitAmount(scope: GameController, a: AchivementRecord) {

        var isA = false;

        if (a.eName == "UNIT") {
            if (scope.data.unitsTotal >= a.value) {
                isA = true;
            }
           
        } else {
            if (scope.units[a.eName].data.amount >= a.value) {
                isA = true;
            }
        }

        if (isA) {
            var da = new DataAchivements();
            da.name = a.name;
            da.pDate = this.formatDate(new Date());
            da.date = new Date();
            scope.data.achivements[a.name] = da;
            this.hasUpdate = true;
        }

    }

    public checkResourceTotalAmount(scope: GameController, a: AchivementRecord) {

        if (scope.data.statistics["RES_" + a.eName] == undefined) {
            return;
        }

        if (scope.data.statistics["RES_" + a.eName].value >= a.value) {
            var da = new DataAchivements();
            da.name = a.name;


            da.date = new Date();
            da.pDate = this.formatDate(new Date());
            scope.data.achivements[a.name] = da;
            this.hasUpdate = true;
        }

    }

    public checkForAchivementReached(scope: GameController) {

        for (var l in this.inactiv) {
            switch (this.inactiv[l].type) {
                case ATypes.UNIT_AMOUNT:
                    this.checkUnitAmount(scope, this.inactiv[l]);
                    break;
                case ATypes.RESOURCE_TOTAL:
                
                    this.checkResourceTotalAmount(scope, this.inactiv[l]);
                    break;
                case ATypes.BUILDING_UPGRADED:
                    this.checkUpgradeLevel(scope, this.inactiv[l]);
                    break;
                default:
                    console.error("Missing Achivementtype: " + this.inactiv[l].type);
                    break;
                
            }
        }

        if (this.hasUpdate) {
            this.generateList(scope);
            this.hasUpdate = false;
        }
    }

    public getAchivementsTotal(): number {
        return this.active.length + this.inactiv.length;
    }

    public process(scope: GameController) {

        if (!scope.data.fAchivements) { return;}

        var pps = this.active.length / 1000;
        if (this.updateProducingLevel(pps)) {
            scope.data.honorPoints += Math.round(this.produceLevel);
            StatisticSetup.updateStat("HONOR", Math.round(this.produceLevel), scope);
            this.produceLevel = 0;
        }
    }
}



class AchivementRecord {
    public name: string;
    public level: number = 1;
    public displayName: string;
    public displayText: string;
    public data: DataAchivements = null;
    public type: ATypes;
    public eName: string;
    public value: number;
    public date: Date;
  
}






