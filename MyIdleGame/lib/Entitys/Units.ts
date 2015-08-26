interface IUnit {
}

class AUnit implements IBuilding {
    public name: string;
    public displayName: string;
    public data: DataUnit;
    public conf: any;
    public maxLevel: number;
    public type: string;

    constructor(data: DataUnit, conf: any) {
        this.data = data;
        this.conf = conf;
        this.type = "def";
        this.displayName = conf.displayName;
    }


}

class WorkerUnit extends AUnit {
    public building: string;
    constructor(data: DataUnit, conf: any) {
        super(data, conf);
        this.building = conf.building;
        this.type = "worker";
    }

    public addUnit(scope: GameController) {

        for (var i = 0; i < GameInfo.addPerClick; i++) {
            var max = scope.buildings[this.building].maxUnits();
            if (this.data.amount >= max) {
                return;
            }

            var villager = scope.units["Villager"].data;
            if (villager.amount <= 0) { return; }

            villager.amount--;
            this.data.amount++;
        }
       
    }

    public removeUnit(scope: GameController, building: string) {
        for (var i = 0; i < GameInfo.addPerClick; i++) {
            if (this.data.amount <= 0) {
                return;
            }

            var villager = scope.units["Villager"].data;

            villager.amount++;
            this.data.amount--;
        }

    }

    public upgradeUnit(scope: GameController) {
        if (this.canUpgrade(scope)) {

            var cost = this.getUpgradeCost(scope);
            scope.data.honorPoints -= cost;
            this.data.level++;
        }
    }

    public canUpgrade(scope: GameController): boolean {
       
        if (this.getUpgradeCost(scope) <= scope.data.honorPoints && this.data.level < this.conf.maxLevel) {
            return true;
        } else {
            return false;
        }
    }

    public getUpgradeCost(scope: GameController): number {
       return this.data.level * this.conf.ruhmPerLevel;
    }
}

class FightUnit extends AUnit {
    public unitId: number;
    public unitCost: CostBag;

    constructor(data: DataUnit, conf: any) {
        super(data, conf);
        this.type = "armee";
    }
}

class Villager extends AUnit {

}

class LumberjackUnit extends WorkerUnit {

}