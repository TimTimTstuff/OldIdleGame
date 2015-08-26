
enum UpgradeType {
    Upgrade,
    NewBuilding,
    NewFeature,
    Special
}

enum EntityTypes {
    Buildings,
    Units
}

enum BuildingUpgradeType {
    Special,
    Worker,
    PPS,
    UpCost,
    ResCost,
    Storage,
    MaxLevel,
}



class UpdateConfig {

    public upgradeList: any = {};

    constructor() {

        this.upgradeBuilding();
        this.upgradeFeature();
        this.upgradeU();
    }


    public upgradeU() {
        var upRec = new UpgradeRecord();
        upRec.displayName = "Tiefbaulager";
        upRec.description = "Unser kleines Dorf wird so langsam zu einer Stadt. Unsere neue Lagerstrategie sollte hierfür nützlich sein. Speicher +300% ";
        upRec.name = "StoragehouseV2";
        upRec.type = UpgradeType.Upgrade;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "House";
        upRec.activLevel = 15;
        upRec.forEntity = "Storagehouse";
        upRec.upgradeValue = 300;
        upRec.cost = 1600;
        upRec.research = 5;
        upRec.buildingUpgrade = BuildingUpgradeType.Storage;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Holzfäller V1";
        upRec.description = "Euch ist aufgefallen das die Holzfäller ihre Werkzeuge falschrum nutzen. PpS: +5%";
        upRec.name = "LumberjackV1";
        upRec.type = UpgradeType.Upgrade;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Lumberjack";
        upRec.activLevel = 2;
        upRec.forEntity = "Lumberjack";
        upRec.research = 1;
        upRec.upgradeValue = 5;
        upRec.buildingUpgrade = BuildingUpgradeType.PPS;
        upRec.cost = 100;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Holzfäller V2";
        upRec.description = "Krankenversicherung für deine Holzfäller. PpS: +10%";
        upRec.name = "LumberjackV2";
        upRec.type = UpgradeType.Upgrade;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Lumberjack";
        upRec.activLevel = 8;
        upRec.forEntity = "Lumberjack";
        upRec.upgradeValue = 10;
        upRec.research = 1;
        upRec.buildingUpgrade = BuildingUpgradeType.PPS;
        upRec.cost = 600;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Motivierte Steinmetze";
        upRec.description = "Sie waren doch etwas unmotiviert, doch jetzt darf jeder Steinmetz sein Zeichen in den Stein hauen, schau wie stolz sie doch sind. PpS: +5%";
        upRec.name = "StoneHouseV1";
        upRec.type = UpgradeType.Upgrade;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Stonehouse";
        upRec.activLevel = 5;
        upRec.forEntity = "Stonehouse";
        upRec.upgradeValue = 5;
        upRec.cost = 150;
        upRec.research = 1;
        upRec.buildingUpgrade = BuildingUpgradeType.PPS;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Stein um Stein mit Klenkogi";
        upRec.description = "Sie brauchen eine Führungskraft, er trägt den Titel: Klenkogi. PpS: +10%";
        upRec.name = "StoneHouseV2";
        upRec.type = UpgradeType.Upgrade;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Stonehouse";
        upRec.activLevel = 7;
        upRec.forEntity = "Stonehouse";
        upRec.upgradeValue = 10;
        upRec.cost = 300;
        upRec.research = 2;
        upRec.buildingUpgrade = BuildingUpgradeType.PPS;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Wir brauchen Dünger!";
        upRec.description = "Dünger würde das Weizen schneller wachsen lassen.. aber woher sollen wir diesen nehmen?  Hee.. was macht ihr da.. das Feld ist kein Klo!. PpS: +5%";
        upRec.name = "WheatV1";
        upRec.type = UpgradeType.Upgrade;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Farm";
        upRec.activLevel = 2;
        upRec.forEntity = "Farm";
        upRec.upgradeValue = 5;
        upRec.cost = 150;
        upRec.research = 1;
        upRec.buildingUpgrade = BuildingUpgradeType.PPS;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Ich glaub mit Musik geht das Besser";
        upRec.description = "Die Pflanzen sollen mit Musik besser wachsen. Deshalb machen wir nun Castingshows auf den Feldern. PpS: +10%";
        upRec.name = "WheatV2";
        upRec.type = UpgradeType.Upgrade;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Farm";
        upRec.activLevel = 7;
        upRec.forEntity = "Farm";
        upRec.upgradeValue = 10;
        upRec.cost = 400;
        upRec.research = 3;
        upRec.buildingUpgrade = BuildingUpgradeType.PPS;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Lagersystem";
        upRec.description = "Es war wohl keine so gute Idee, jeden seine Waren einfach in das Lagerhaus werfen zu lassen. Nun müssen sich alle an Regeln halten. Speicher +10% ";
        upRec.name = "StoragehouseV1";
        upRec.type = UpgradeType.Upgrade;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Storagehouse";
        upRec.activLevel = 5;
        upRec.forEntity = "Storagehouse";
        upRec.upgradeValue = 10;
        upRec.cost = 400;
        upRec.research = 1;
        upRec.buildingUpgrade = BuildingUpgradeType.Storage;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Stockbetten";
        upRec.description = "Wenn der Boden voller Menschen ist, wird es wohl Zeit sie zu stapeln. Maximale Einheiten +10%";
        upRec.name = "HouseV1";
        upRec.type = UpgradeType.Upgrade;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "House";
        upRec.activLevel = 3;
        upRec.forEntity = "House";
        upRec.upgradeValue = 10;
        upRec.cost = 500;
        upRec.research = 1;
        upRec.buildingUpgrade = BuildingUpgradeType.Storage;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Kleinere Menschen";
        upRec.description = "Wir bekommen mehr Menschen in das Häuschen, wenn wir sie kleiner sind. Maximale Einheiten +15%";
        upRec.name = "HouseV3";
        upRec.type = UpgradeType.Upgrade;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "House";
        upRec.activLevel = 5;
        upRec.forEntity = "House";
        upRec.upgradeValue = 15;
        upRec.cost = 500;
        upRec.research = 2;
        upRec.buildingUpgrade = BuildingUpgradeType.Storage;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Keller und Dachstuhl";
        upRec.description = "Wenn es in der Ebene kein Platz mehr gibt, brauchen wir neue Möglichkeiten. Wenn wir die Häußer nach oben und Unten erweitern, bekommen wir vielleicht mehr Leute unter! Max Level Haus: +10";
        upRec.name = "HouseV2";
        upRec.type = UpgradeType.Upgrade;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "House";
        upRec.activLevel = 10;
        upRec.forEntity = "House";
        upRec.upgradeValue = 10;
        upRec.cost = 800;
        upRec.research = 4;
        upRec.buildingUpgrade = BuildingUpgradeType.MaxLevel;
        this.upgradeList[upRec.name] = upRec;

    }

    public upgradeFeature() {
        var upRec = new UpgradeRecord();
        upRec.displayName = "Sollen alle Wissen was wir getan haben!";
        upRec.description = "Lasst uns den anderen zeigen wie großartig unsere Stadt ist. Aktiviert Achivements";
        upRec.name = "NewFeatureAchive";
        upRec.type = UpgradeType.NewFeature;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Research";
        upRec.activLevel = 3;
        upRec.forEntity = "NewFeatureAchive";
        upRec.upgradeValue = 0;
        upRec.cost = 500;
        upRec.research = 3;
        upRec.buildingUpgrade = BuildingUpgradeType.Special;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Was haben wir eigentlich so gemacht?";
        upRec.description = "Schlagen wir doch mal in den Büchern nach. Statistiken werden Freigeschalten.";
        upRec.name = "NewFeatureStats";
        upRec.type = UpgradeType.NewFeature;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Research";
        upRec.activLevel = 2;
        upRec.forEntity = "NewFeatureStats";
        upRec.upgradeValue = 0;
        upRec.cost = 300;
        upRec.research = 2;
        upRec.buildingUpgrade = BuildingUpgradeType.Special;
        this.upgradeList[upRec.name] = upRec;


        var upRec = new UpgradeRecord();
        upRec.displayName = "Frische Fische, Frische Fische!";
        upRec.description = "Wir sollten wie die anderen Dörfer unsere Waren weiterverkaufen!. Der Globale Markt wird freigeschalten.";
        upRec.name = "NewFeatureGmarkt";
        upRec.type = UpgradeType.NewFeature;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Research";
        upRec.activLevel = 3;
        upRec.forEntity = "NewFeatureGmarkt";
        upRec.upgradeValue = 0;
        upRec.cost = 2000;
        upRec.research = 3;
        upRec.buildingUpgrade = BuildingUpgradeType.Special;
        this.upgradeList[upRec.name] = upRec;

        
    }

    public upgradeBuilding() {
        var upRec = new UpgradeRecord();
        upRec.displayName = "So roh schmecken die Tierchen nicht!";
        upRec.description = "Hat ja etwas gedauert bis jemand merkte, das Wald- und Wassertierchen roh garnicht geniesbar sind. Aktiviert Metzger und Fischkonserven";
        upRec.name = "NewBuildingButcherAndFish";
        upRec.type = UpgradeType.NewBuilding;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Fishhouse";
        upRec.activLevel = 1;
        upRec.forEntity = "Butcher";
        upRec.upgradeValue = 0;
        upRec.cost = 400;
        upRec.research = 3;
        upRec.buildingUpgrade = BuildingUpgradeType.Special;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Da wir haben ein loch voller Lehm gefunden!";
        upRec.description = "Mit dem Lehm können wir auf jedenfall schönere Häuser bauen!";
        upRec.name = "Clayhouse";
        upRec.type = UpgradeType.NewBuilding;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Stonehouse";
        upRec.activLevel = 10;
        upRec.forEntity = "Clayhouse";
        upRec.upgradeValue = 0;
        upRec.cost = 2500;
        upRec.research = 6;
        upRec.buildingUpgrade = BuildingUpgradeType.Special;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Im Wald waren doch so Tiere?";
        upRec.description = "Hachjah.. jeden Tag Brot ist ja auch langweilig. Wie wäre es welche von den niedlichen Tierchen im Wald zu Essen? Schaltet Jagdthütte frei";
        upRec.name = "NewBuildingHunter";
        upRec.type = UpgradeType.NewBuilding;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Farm";
        upRec.activLevel = 5;
        upRec.forEntity = "Hunter";
        upRec.upgradeValue = 0;
        upRec.cost = 800;
        upRec.research = 3;
        upRec.buildingUpgrade = BuildingUpgradeType.Special;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Für mich sollen keine Waldbewohner sterben!!!";
        upRec.description = "Jetzt haben wir schon was andere als jeden Tag Brot, aber die Leute sind dennoch unzufrieden.. Dann Essen wir eben noch diese Glitschdinger aus dem See!";
        upRec.name = "NewBuildingFisher";
        upRec.type = UpgradeType.NewBuilding;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Hunterhouse";
        upRec.activLevel = 2;
        upRec.forEntity = "Fisher";
        upRec.upgradeValue = 0;
        upRec.cost = 1000;
        upRec.research = 3;
        upRec.buildingUpgrade = BuildingUpgradeType.Special;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Das Fell über die Ohren ziehen!";
        upRec.description = "Immer Nackt herumzulaufen ist jetzt nicht so toll. Wie wäre es wenn wir stattdessen den Tieren das Fell abnehmen?";
        upRec.name = "NewBuildingFurrfarm";
        upRec.type = UpgradeType.NewBuilding;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Hunterhouse";
        upRec.activLevel = 5;
        upRec.forEntity = "Furrfarm";
        upRec.upgradeValue = 0;
        upRec.cost = 3500;
        upRec.research = 6;
        upRec.buildingUpgrade = BuildingUpgradeType.Special;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Verbrennen wir das ganze Holz!";
        upRec.description = "Wir haben gemerkt, das wenn wir Holz stark erhitzen, Kohle erhalten. Das könnte noch nützlich werden!";
        upRec.name = "NewBuildingCharcoal";
        upRec.type = UpgradeType.NewBuilding;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Clayhouse";
        upRec.activLevel = 1;
        upRec.forEntity = "Charcoalhouse";
        upRec.upgradeValue = 0;
        upRec.cost = 3000;
        upRec.research = 7;
        upRec.buildingUpgrade = BuildingUpgradeType.Special;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Tief im Berg, ein Schatz!";
        upRec.description = "Tief in den Bergen haben wir Schätze gefunden. Eisen, Gold, Kohle. Wir sollten es abbauen gehen!";
        upRec.name = "NewBuildingMines";
        upRec.type = UpgradeType.NewBuilding;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Charcoalhouse";
        upRec.activLevel = 1;
        upRec.forEntity = "Mining";
        upRec.upgradeValue = 0;
        upRec.cost = 15000;
        upRec.research = 8;
        upRec.buildingUpgrade = BuildingUpgradeType.Special;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Tief im Berg, ein Schatz!";
        upRec.description = "Tief in den Bergen haben wir Schätze gefunden. Eisen, Gold, Kohle. Wir sollten es abbauen gehen!";
        upRec.name = "NewBuildingNaturals";
        upRec.type = UpgradeType.NewBuilding;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Letherhouse";
        upRec.activLevel = 2;
        upRec.forEntity = "Naturals";
        upRec.upgradeValue = 0;
        upRec.cost = 9000;
        upRec.research = 7;
        upRec.buildingUpgrade = BuildingUpgradeType.Special;
        this.upgradeList[upRec.name] = upRec;

        var upRec = new UpgradeRecord();
        upRec.displayName = "Wie macht Feuer Metalle flüssig?";
        upRec.description = "Wir haben Tag und Nacht geforscht. Aber jetzt haben wir es glaube ich geschafft. Nurnoch die Schmelzen müssen gebaut werden!";
        upRec.name = "NewBuildingSmeltery";
        upRec.type = UpgradeType.NewBuilding;
        upRec.forType = EntityTypes.Buildings;
        upRec.activBuilding = "Ironmine";
        upRec.activLevel = 2;
        upRec.forEntity = "Smeltery";
        upRec.upgradeValue = 0;
        upRec.cost = 12000;
        upRec.research = 8;
        upRec.buildingUpgrade = BuildingUpgradeType.Special;
        this.upgradeList[upRec.name] = upRec;
    }
    

}

class UpgradeRecord {

    public name: string;
    public type: UpgradeType;
    public activLevel: number;
    public activBuilding: string;
    public research: number;

    public displayName: string;
    public description: string;

    public forType: EntityTypes;
    public forEntity: string;
    
    public cost: number;

    public upgradeValue: number; 


    /*special Config*/
    public buildingUpgrade: BuildingUpgradeType;


}