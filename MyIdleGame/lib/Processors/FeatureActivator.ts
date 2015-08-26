class FeatureActivator {

    public static activateBuilding(bName: string, scope: GameController) {
        var data = scope.data;
        switch (bName) {
            case "Hunter":
                var b = new DataBuilding();
                b.name = "Hunterhouse";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Hunter";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;

                var r = new DataResource();
                r.name = "Meat";
                r.amount = 0;
                data.resources[r.name] = r;

                scope.addBuilding(b);
                scope.addUnit(u);
                scope.addResource(r);
                

                break;
            case "Fisher":

                var b = new DataBuilding();
                b.name = "Fishhouse";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Fisher";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;

                var r = new DataResource();
                r.name = "Fish";
                r.amount = 0;
                data.resources[r.name] = r;
                scope.addBuilding(b);
                scope.addUnit(u);
                scope.addResource(r);
                break;

            case "Butcher":

                var b = new DataBuilding();
                b.name = "Butcherhouse";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Butcher";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;
                scope.addBuilding(b);
                scope.addUnit(u);
                var b = new DataBuilding();
                b.name = "Fishbutcherhouse";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Fishbutcher";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;
                scope.addBuilding(b);
                scope.addUnit(u);
                break;
            case "Clayhouse":

                var b = new DataBuilding();
                b.name = "Clayhouse";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Clayfarmer";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;

                var r = new DataResource();
                r.name = "Clay";
                r.amount = 0;
                data.resources[r.name] = r;


                scope.addBuilding(b);
                scope.addUnit(u);
                scope.addResource(r);
                break;
            case "Furrfarm":

                var b = new DataBuilding();
                b.name = "Furrfarm";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Furrfarmer";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;

                var r = new DataResource();
                r.name = "Furr";
                r.amount = 0;
                data.resources[r.name] = r;


                scope.addBuilding(b);
                scope.addUnit(u);
                scope.addResource(r);

                var b = new DataBuilding();
                b.name = "Letherhouse";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Letherer";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;

                var r = new DataResource();
                r.name = "Lether";
                r.amount = 0;
                data.resources[r.name] = r;


                scope.addBuilding(b);
                scope.addUnit(u);
                scope.addResource(r);
                break;
            case "Charcoalhouse":

                var b = new DataBuilding();
                b.name = "Charcoalhouse";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Charcoaler";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;

                var r = new DataResource();
                r.name = "Coal";
                r.amount = 0;
                data.resources[r.name] = r;


                scope.addBuilding(b);
                scope.addUnit(u);
                scope.addResource(r);
                break;
            case "Mining":

                var b = new DataBuilding();
                b.name = "Coalmine";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Coalminer";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;
                

                scope.addBuilding(b);
                scope.addUnit(u);
               

                var b = new DataBuilding();
                b.name = "Ironmine";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Ironminer";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;

                var r = new DataResource();
                r.name = "Ironore";
                r.amount = 0;
                data.resources[r.name] = r;


                scope.addBuilding(b);
                scope.addUnit(u);
                scope.addResource(r);

                var b = new DataBuilding();
                b.name = "Goldmine";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Goldminer";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;

                var r = new DataResource();
                r.name = "Goldore";
                r.amount = 0;
                data.resources[r.name] = r;


                scope.addBuilding(b);
                scope.addUnit(u);
                scope.addResource(r);
                break;
            case "Naturals":
                var b = new DataBuilding();
                b.name = "Flaxfarm";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Flaxfarmer";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;

                var r = new DataResource();
                r.name = "Flax";
                r.amount = 0;
                data.resources[r.name] = r;


                scope.addBuilding(b);
                scope.addUnit(u);
                scope.addResource(r);

                var b = new DataBuilding();
                b.name = "Hopfenfarm";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Hopfenfarmer";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;

                var r = new DataResource();
                r.name = "Hopfen";
                r.amount = 0;
                data.resources[r.name] = r;


                scope.addBuilding(b);
                scope.addUnit(u);
                scope.addResource(r);

                var b = new DataBuilding();
                b.name = "Brewery";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Brewer";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;

                var r = new DataResource();
                r.name = "Beer";
                r.amount = 0;
                data.resources[r.name] = r;


                scope.addBuilding(b);
                scope.addUnit(u);
                scope.addResource(r);

                var b = new DataBuilding();
                b.name = "Ropehouse";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Roper";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;

                var r = new DataResource();
                r.name = "Rope";
                r.amount = 0;
                data.resources[r.name] = r;


                scope.addBuilding(b);
                scope.addUnit(u);
                scope.addResource(r);

                break;
            case "Smeltery":

                var b = new DataBuilding();
                b.name = "Goldsmeltery";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Goldsmelter";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;

                var r = new DataResource();
                r.name = "Goldbar";
                r.amount = 0;
                data.resources[r.name] = r;


                scope.addBuilding(b);
                scope.addUnit(u);
                scope.addResource(r);

                var b = new DataBuilding();
                b.name = "Ironsmeltery";
                b.level = 1;
                data.buildings[b.name] = b;

                var u = new DataUnit();
                u.name = "Ironsmelter";
                u.amount = 0;
                u.level = 1;
                data.units[u.name] = u;

                var r = new DataResource();
                r.name = "Ironbar";
                r.amount = 0;
                data.resources[r.name] = r;


                scope.addBuilding(b);
                scope.addUnit(u);
                scope.addResource(r);

                break;

        }



    }

    public static activateFeature(bName: string, scope: GameController) {
        var data = scope.data;

        switch (bName) {
            case "NewFeatureAchive":
                data.fAchivements = true;
                break;
            case "NewFeatureStats":
                data.fStats = true;
            break;
            case "NewFeatureGmarkt":
                data.fMarket = true;
                var b = new DataBuilding();
                b.name = "Market";
                b.level = 1;
                data.buildings[b.name] = b;
                scope.addBuilding(b);
                break;
            
        }
        
    }
}