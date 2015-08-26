class Upgrade {

    public activeList: UpgradeItem[] = [];
    public buyableList: UpgradeItem[] = [];
    public hiddenList: UpgradeItem[] = [];

    public indexUpgradeList: any = {};

    public getUpgradesTotal(): number {

        return this.activeList.length + this.buyableList.length + this.hiddenList.length;

    }

    public currentIndex: number;
    public isUpdate: boolean = false;

    constructor(scope: GameController) {

        this.processLoadList(scope);

        
    }

    public processLoadList(scope: GameController) {

        this.hiddenList = [];
        this.buyableList = [];
        this.activeList = [];
        this.indexUpgradeList = {};

        var uList: UpgradeRecord[] = new UpdateConfig().upgradeList;
        var dList: DataUpgrade[] = scope.data.upgradeList;

        /*
            Build different Lists
        */
        for (var item in uList) {

            if (dList[item] !== undefined) {

                if (dList[item].activ) {
                    this.activeList.push(new UpgradeItem(dList[item], uList[item], this));
                    var index = uList[item].forEntity + uList[item].type + uList[item].forType + uList[item].buildingUpgrade;

                    if (this.indexUpgradeList[index] == undefined) {
                        this.indexUpgradeList[index] = [];
                    }

                    this.indexUpgradeList[index].push(uList[item]);

                }
                else {
                    this.buyableList.push(new UpgradeItem(dList[item], uList[item],this));
                }
            } else {
                var d = new DataUpgrade();
                d.name = item;
                d.activ = false;
                this.hiddenList.push(new UpgradeItem(d, uList[item],this));
            }
        }//END FOR



           

    }



    public checkForNewBuyable(scope: GameController) {
        var a = this.hiddenList;
        for (var item in a) {
            this.currentIndex = item;
            if (a[item].conf.research > scope.buildings.Research.data.level) {
                continue;
            }

            if (scope.buildings[a[item].conf.activBuilding] == undefined) {
                continue;
            }

            var active = scope.buildings[a[item].conf.activBuilding].data.level >= a[item].conf.activLevel;
            if (active) {
                this.isUpdate = true;
                this.buyableList.push(a[item]);
                scope.data.upgradeList[a[item].conf.name] = a[item].data;
            }

            if (this.isUpdate) {
                this.processLoadList(scope);
            }

        }
          
    }

    public checkForBuildingUpgrade(scope: GameController, i: UpgradeItem) {

        var active = scope.buildings[i.conf.activBuilding].data.level >= i.conf.activLevel;
        if (active) {
            this.isUpdate = true;
            this.buyableList.push(i);
            scope.data.upgradeList[i.conf.name] = i.data;
        }
    }

    public getForBuilding(bName: string, type: number, fType: number, buType:number): number {

        var index = bName + type + fType + buType;
       
        var value: number = 0;
        if (this.indexUpgradeList[index] !== undefined) {
            var l = this.indexUpgradeList[index];
          
            for (var i in l) {
                
                value+= l[i].upgradeValue;
            }
        }

        return value;

    }

   

}


class UpgradeItem {

    public parent: Upgrade;
    public data: DataUpgrade;
    public conf: UpgradeRecord;

    constructor(data: DataUpgrade, conf: UpgradeRecord, up: Upgrade) {
        this.data = data;
        this.conf = conf;
        this.parent = up;
    }

    public formatDate(date: Date): string {
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

    public buy(scope: GameController) {

        if (scope.data.researchPoints < this.conf.cost) {
            return;
        }

        if (this.data.activ) {
            return;
        }

        scope.data.researchPoints -= this.conf.cost;
        this.data.activ = true;
        this.data.pDate = this.formatDate(new Date());

        if (this.conf.type == UpgradeType.NewBuilding) {
            FeatureActivator.activateBuilding(this.conf.forEntity, scope);
        } else if (this.conf.type == UpgradeType.NewFeature) {
            FeatureActivator.activateFeature(this.conf.forEntity, scope);
        }


        this.parent.processLoadList(scope);

    }

}


