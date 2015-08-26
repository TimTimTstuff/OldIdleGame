class GameSetup {

    public init(): GameDatabase
    {
        var data = new GameDatabase();

        var b = new DataBuilding();
        b.name = "House";
        b.level = 1;
        data.buildings[b.name] = b;

        var b = new DataBuilding();
        b.name = "Bakery";
        b.level = 1;
        data.buildings[b.name] = b;

         b = new DataBuilding();
        b.name = "Storagehouse";
        b.level = 1;
        data.buildings[b.name] = b;

        b = new DataBuilding();
        b.name = "Lumberjack";
        b.level = 1;
        data.buildings[b.name] = b;

        b = new DataBuilding();
        b.name = "Farm";
        b.level = 1;
        data.buildings[b.name] = b;

        b = new DataBuilding();
        b.name = "Waterhouse";
        b.level = 1;
        data.buildings[b.name] = b;

        b = new DataBuilding();
        b.name = "Stonehouse";
        b.level = 1;
        data.buildings[b.name] = b;

        b = new DataBuilding();
        b.name = "Research";
        b.level = 1;
        data.buildings[b.name] = b;

        var u = new DataUnit();
        u.name = "Villager";
        u.amount = 0;
        u.level = 1;
        data.units[u.name] = u;


        var u = new DataUnit();
        u.name = "Researcher";
        u.amount = 0;
        u.level = 1;
        data.units[u.name] = u;

        var u = new DataUnit();
        u.name = "Baker";
        u.amount = 0;
        u.level = 1;
        data.units[u.name] = u;

        var u = new DataUnit();
        u.name = "Lumberjack";
        u.amount = 0;
        u.level = 1;
        data.units[u.name] = u;

        var u = new DataUnit();
        u.name = "Stoneminer";
        u.amount = 0;
        u.level = 1;
        data.units[u.name] = u;

        var u = new DataUnit();
        u.name = "Waterguy";
        u.amount = 0;
        u.level = 1;
        data.units[u.name] = u;

        var u = new DataUnit();
        u.name = "Farmer";
        u.amount = 0;
        u.level = 1;
        data.units[u.name] = u;
     

        var r = new DataResource();
        r.name = "Water";
        r.amount = 50;
        data.resources[r.name] = r;

         r = new DataResource();
        r.name = "Wood";
        r.amount = 50;
        data.resources[r.name] = r;

        r = new DataResource();
        r.name = "Wheat";
        r.amount = 50;
        data.resources[r.name] = r;

        r = new DataResource();
        r.name = "Stone";
        r.amount = 50;
        data.resources[r.name] = r;

        r = new DataResource();
        r.name = "Food";
        r.amount = 50;
        data.resources[r.name] = r;


        return data;
    }

    public upgradeSaveFile(scope: GameController) {

        var defaultGD = new GameDatabase();

        for (var field in defaultGD) {

            if (scope.data[field] == undefined) {

                scope.data[field] = defaultGD[field];
                console.log("Add Field: " + field);
            }

        }


    }
}