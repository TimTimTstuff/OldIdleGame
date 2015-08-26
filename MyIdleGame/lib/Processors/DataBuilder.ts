
class BuildingFactory {

    public static getBuildingFromRecord(data: DataBuilding): IBuilding {
        switch (data.name) {
            case "Market":
                return new Market(data, BuildingConfig[data.name]);
            case "House":
                return new House(data, BuildingConfig[data.name]);
            case "Storagehouse":
                return new StorageHouse(data, BuildingConfig[data.name]);
            case "Research":
                return new Research(data, BuildingConfig[data.name]);
            case "Clayhouse":
            case "Lumberjack":
            case "Stonehouse":
            case "Waterhouse":
            case "Farm":
            case "Hunterhouse":
            case "Fishhouse":
            case "Furrfarm":
            case "Ironmine":
            case "Coalmine":
            case "Goldmine":
            case "Flaxfarm":
            case "Hopfenfarm":
                return new BasicResourceBuilding(data, BuildingConfig[data.name]);
            case "Bakery":
            case "Fishbutcherhouse":
            case "Butcherhouse":
            case "Letherhouse":
            case "Charcoalhouse":
            case "Brewery":
            case "Ropehouse":
            case "Goldsmeltery":
                case "Ironsmeltery":
                return new ExtendResourceProduceBuilding(data, BuildingConfig[data.name]);
            default:
                console.error(data.name + " Cant finde Building");
        }

    }

}

class UnitFactory {

    public static getUnitFromRecord(data: DataUnit): IUnit{
        switch (data.name) {
            case "Villager":
                return new Villager(data, UnitConfig[data.name]);
            case "Lumberjack":
            case "Stoneminer":
            case "Waterguy":
            case "Farmer":
            case "Baker":
            case "Researcher":
            case "Fisher":
            case "Hunter":
            case "Butcher":
            case "Fishbutcher":
            case "Clayfarmer":
            case "Letherer":
            case "Furrfarmer":
            case "Charcoaler":
            case "Coalminer":
            case "Goldminer":
            case "Ironminer": 
            case "Hopfenfarmer":
            case "Flaxfarmer":
            case "Brewer":
            case "Roper":
            case "Goldsmelter":
                case "Ironsmelter":
                return new WorkerUnit(data, UnitConfig[data.name]);
            
            default:
                console.error(data.name + " Cant finde Unit");
        }

    }

}

class ResourceFactory {

    public static getResourceFromRecord(data: DataResource): Resource {
        return new Resource(data, ResourceConfig[data.name]);
    }
}

