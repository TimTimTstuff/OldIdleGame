
enum STypes {
    RESOURCE,
    BUILDING_UPGRADE,
    UNIT_UPGRADE,
    BUY_UPGRADES,
    UNITS,
    META_GAME,
    RESEARCHPOINTS,
    MARKET,
}

class Statistics { }

class StatisticRecord {

    public name: string;
    public displayText: string;
    public value: number;
    public sType: STypes;
}


class StatisticSetup {

    public static statisticList: any = {};



    public static updateStat(name: string, value: number, scope: GameController) {

        if (scope.data.statistics[name] == undefined) {
            var n = name.split("_");
            if (n[0] == "RES") {

                var rec = new StatisticRecord();
                rec.name = name;
                rec.displayText = scope.resources[n[1]].conf.displayName + " Total";
                rec.value = 0;
                rec.sType = STypes.RESOURCE;
                scope.data.statistics[rec.name] = rec;

            } else if (n[0] == "UNIT") {
                var rec = new StatisticRecord();
                rec.name = name;
                rec.displayText = scope.units[n[1]].conf.displayName + " Total";
                rec.value = 0;
                rec.sType = STypes.UNITS;
                scope.data.statistics[rec.name] = rec;


            }
            else {

                scope.data.statistics[name] = StatisticSetup.statisticList[name];
                var s: StatisticRecord = scope.data.statistics[name];

            }

        }
        scope.data.statistics[name].value += value;
    }


    constructor() {

        var rec = new StatisticRecord();
        rec.name = "BuildingUpgrades";
        rec.displayText = "Gebäude Upgrades Total";
        rec.value = 0;
        rec.sType = STypes.BUILDING_UPGRADE;
        StatisticSetup.statisticList[rec.name] = rec;


        var rec = new StatisticRecord();
        rec.name = "ResearchUpgrades";
        rec.displayText = "Gehlerten Upgrades Total";
        rec.value = 0;
        rec.sType = STypes.BUY_UPGRADES;
        StatisticSetup.statisticList[rec.name] = rec;

        var rec = new StatisticRecord();
        rec.name = "Gamereloads";
        rec.displayText = "Gehlerten Upgrades Total";
        rec.value = 0;
        rec.sType = STypes.BUY_UPGRADES;
        StatisticSetup.statisticList[rec.name] = rec;

        var rec = new StatisticRecord();
        rec.name = "RESEARCHPOINTS";
        rec.displayText = "Forschungspunkte Total:";
        rec.value = 0;
        rec.sType = STypes.RESEARCHPOINTS;
        StatisticSetup.statisticList[rec.name] = rec;

        var rec = new StatisticRecord();
        rec.name = "MARKET_BUY";
        rec.displayText = "Markt Einkauf";
        rec.value = 0;
        rec.sType = STypes.MARKET;
        StatisticSetup.statisticList[rec.name] = rec;

        var rec = new StatisticRecord();
        rec.name = "MARKET_SELL";
        rec.displayText = "Markt Verkauft";
        rec.value = 0;
        rec.sType = STypes.MARKET;
        StatisticSetup.statisticList[rec.name] = rec;

        var rec = new StatisticRecord();
        rec.name = "HONOR";
        rec.displayText = "Ruhm Total:";
        rec.value = 0;
        rec.sType = STypes.RESEARCHPOINTS;
        StatisticSetup.statisticList[rec.name] = rec;

    }

}