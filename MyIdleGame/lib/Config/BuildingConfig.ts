

class BuildingConfig {

    /* Resource */
    public static Lumberjack: any = {
        displayName: "Holzfällerhütte",
        upgradeCost: new CostBag().addCost("Wood", 16).addCost("Stone", 9),
        upgradeModifierPercent: 1,
        processUnit: "Lumberjack",
        produceRest: "Wood",
        producePerSecond: 0.16,
        producePerUpdatePercent: 6,
        maxUnitsInBuilding: 1,
        maxUnitsPerLevel: 2,
        maxLevel: 10,
        desc: "Hier lassen wir unsere Holzfäller ihre Arbeit verrichten",
        updDesc: "Erhöhung der maximalen Holzfäller und schärfere Äxte für eine schnellere Rodung unseres heimischen Waldes",

    }

    public static Coalmine: any = {
        displayName: "Kohlemine",
        upgradeCost: new CostBag().addCost("Ironbar", 130).addCost("Stone", 2400).addCost("Wood", 1900),
        upgradeModifierPercent: 3,
        processUnit: "Coalminer",
        produceRest: "Coal",
        producePerSecond: 0.06,
        producePerUpdatePercent: 6,
        maxUnitsInBuilding: 1,
        maxUnitsPerLevel: 2,
        maxLevel: 5,
        desc: "",
        updDesc: "",

    }

  

    public static Goldmine: any = {
        displayName: "Goldmine",
        upgradeCost: new CostBag().addCost("Ironbar",300).addCost("Stone", 2700).addCost("Wood", 3400),
        upgradeModifierPercent: 6,
        processUnit: "Goldminer",
        produceRest: "Goldore",
        producePerSecond: 0.0014,
        producePerUpdatePercent: 4,
        maxUnitsInBuilding: 3,
        maxUnitsPerLevel: 2,
        maxLevel: 5,
        desc: "",
        updDesc: "",

    }

   

    public static Furrfarm: any = {
        displayName: "Kürschnerhütte",
        upgradeCost: new CostBag().addCost("Clay", 1020).addCost("Wood", 2300),
        upgradeModifierPercent: 12,
        processUnit: "Furrfarmer",
        produceRest: "Furr",
        producePerSecond: 0.099,
        producePerUpdatePercent: 7,
        maxUnitsInBuilding: 2,
        maxUnitsPerLevel: 3,
        maxLevel: 5,
        desc: "",
        updDesc: "",

    }

    public static Clayhouse: any = {
        displayName: "Lehmgrube",
        upgradeCost: new CostBag().addCost("Stone", 2100).addCost("Wood", 1800),
        upgradeModifierPercent: 9,
        processUnit: "Clayfarmer",
        produceRest: "Clay",
        producePerSecond: 0.18,
        producePerUpdatePercent: 3,
        maxUnitsInBuilding: 2,
        maxUnitsPerLevel: 1,
        maxLevel: 5,
        desc: "",
        updDesc: "",

    }

    public static Stonehouse: any = {
        displayName: "Steinmetz",
        upgradeCost: new CostBag().addCost("Wood", 15).addCost("Stone", 9),
        upgradeModifierPercent: 1,
        processUnit: "Stoneminer",
        produceRest: "Stone",
        producePerSecond: 0.08,
        producePerUpdatePercent: 10,
        maxUnitsInBuilding: 1,
        maxUnitsPerLevel: 2,
        maxLevel: 10,
    }

    public static Waterhouse: any = {
        displayName: "Wasserstelle",
        upgradeCost: new CostBag().addCost("Wood", 20).addCost("Stone", 9),
        upgradeModifierPercent: 5,
        processUnit: "Waterguy",
        produceRest: "Water",
        producePerSecond: 0.2,
        producePerUpdatePercent: 15,
        maxUnitsInBuilding: 1,
        maxUnitsPerLevel: 1,
        maxLevel: 10,
    }

    public static Farm: any = {
        displayName: "Getreidefarm",
        upgradeCost: new CostBag().addCost("Wood", 20).addCost("Stone", 9),
        upgradeModifierPercent: 3,
        processUnit: "Farmer",
        produceRest: "Wheat",
        producePerSecond: 0.015,
        producePerUpdatePercent: 13,
        maxUnitsInBuilding: 2,
        maxUnitsPerLevel: 1,
        maxLevel: 10,
    }

    public static Hunterhouse: any = {
        displayName: "Jagdhütte",
        upgradeCost: new CostBag().addCost("Wood", 50).addCost("Stone", 12),
        upgradeModifierPercent: 9,
        processUnit: "Hunter",
        produceRest: "Meat",
        producePerSecond: 0.02,
        producePerUpdatePercent: 17,
        maxUnitsInBuilding: 3,
        maxUnitsPerLevel: 2,
        maxLevel: 5,
    }

    public static Fishhouse: any = {
        displayName: "Fischerhütte",
        upgradeCost: new CostBag().addCost("Wood", 20).addCost("Stone", 25),
        upgradeModifierPercent: 9,
        processUnit: "Fisher",
        produceRest: "Fish",
        producePerSecond: 0.035,
        producePerUpdatePercent: 12,
        maxUnitsInBuilding: 2,
        maxUnitsPerLevel: 2,
        maxLevel: 5,
    }

    public static Ironmine: any = {
        displayName: "Eisenmiene",
        upgradeCost: new CostBag().addCost("Wood", 2200).addCost("Stone", 3200),
        upgradeModifierPercent: 6,
        processUnit: "Ironminer",
        produceRest: "Ironore",
        producePerSecond: 0.0028,
        producePerUpdatePercent: 8,
        maxUnitsInBuilding: 3,
        maxUnitsPerLevel: 4,
        maxLevel: 5,
    }

    public static Flaxfarm: any = {
        displayName: "Flachsfelder",
        upgradeCost: new CostBag().addCost("Wood", 1499).addCost("Clay", 1600),
        upgradeModifierPercent: 8,
        processUnit: "Flaxfarmer",
        produceRest: "Flax",
        producePerSecond: 0.028,
        producePerUpdatePercent: 4,
        maxUnitsInBuilding: 2,
        maxUnitsPerLevel: 2,
        maxLevel: 5,
    }

    public static Hopfenfarm: any = {
        displayName: "Hopfenfelder",
        upgradeCost: new CostBag().addCost("Wood", 1300).addCost("Clay", 1200),
        upgradeModifierPercent: 8,
        processUnit: "Hopfenfarmer",
        produceRest: "Hopfen",
        producePerSecond: 0.020,
        producePerUpdatePercent: 4,
        maxUnitsInBuilding: 1,
        maxUnitsPerLevel: 2,
        maxLevel: 5,
    }

    /* Unit */
    public static House: any = {

        displayName: "Haus",
        upgradeCost: new CostBag().addCost("Wood", 10).addCost("Stone", 5),
        upgradeModifierPercent: 2,
        produceUnit: "Villager",
        unitCost: new CostBag().addCost("Water", 5).addCost("Food", 10),
        producePerSecond: 0.1,
        producePerUpdatePercent: 10,
        maxUnitPerLevel: 20,
        maxUnitUpdatePercent: 20,
        maxLevel: 10,
        type: "unit",
        desc: "Das Haus wird zur Erzeugung von neuen Dorfbewohnern benötigt",
        updDesc: "Erhöht die Produktionsgeschwindigkeit so wie die maximale Anzahl an Einheiten die existieren können. Die Kosten pro Einheit steigen ebenfalls",
    };

    /* Production */
    public static Bakery: any = {

        displayName: "Bäckerei",
        upgradeCost: new CostBag().addCost("Wood", 25).addCost("Stone", 20),
        upgradeModifierPercent: 9,
        processUnit: "Baker",
        produceRest: "Food",
        resCost: new CostBag().addCost("Wheat", 2).addCost("Water", 1),
        producePerSecond: 0.6,
        producePerUpdatePercent: 10,
        maxUnitsInBuilding: 1,
        maxUnitsPerLevel: 1,
        maxLevel: 5,
        desc: "Hier backen wir unser Grundnahrungsmittel",
        updDesc: "Da hat wohl jemand mehr Hunger, erhöhen wir doch die Geschwindigkeit unserer Bäcker, wir könnten ja gleich mehr rein lassen",
    };

    public static Fishbutcherhouse: any = {

        displayName: "Fischkonserven",
        upgradeCost: new CostBag().addCost("Wood", 40).addCost("Stone", 35),
        upgradeModifierPercent: 9,
        processUnit: "Fishbutcher",
        produceRest: "Food",
        resCost: new CostBag().addCost("Water", 1).addCost("Fish", 2),
        producePerSecond: 0.3,
        producePerUpdatePercent: 5,
        maxUnitsInBuilding: 2,
        maxUnitsPerLevel: 1,
        maxLevel: 5,
        desc: "Glitschiger Fisch wird hier als leckerer Fisch serviert",
        updDesc: "Erhöht die Geschwindigkeit der Zubereitung durch unsere besser ausgebildeten Meisterköche",
    };

    public static Butcherhouse: any = {

        displayName: "Metzger",
        upgradeCost: new CostBag().addCost("Wood", 32).addCost("Stone", 47),
        upgradeModifierPercent: 9,
        processUnit: "Butcher",
        produceRest: "Food",
        resCost: new CostBag().addCost("Water", 1).addCost("Meat", 2),
        producePerSecond: 0.3,
        producePerUpdatePercent: 12,
        maxUnitsInBuilding: 2,
        maxUnitsPerLevel: 1,
        maxLevel: 5,
        desc: "Die armen Tierchen müssen doch zum Verzehr zubereitet werden. Vegetarier bitte 30m Abstand halten!",
        updDesc: "Erhöhung der Anzahl unserer Meistermetzger und derer Klingen für eine schnellere Ausrottung...ich meine Nutzung unseres Wilds",
    };

    public static Letherhouse: any = {

        displayName: "Lederer",
        upgradeCost: new CostBag().addCost("Wood", 1008).addCost("Clay", 250),
        upgradeModifierPercent: 7,
        processUnit: "Letherer",
        produceRest: "Lether",
        resCost: new CostBag().addCost("Water", 5).addCost("Furr", 6),
        producePerSecond: 0.16,
        producePerUpdatePercent: 7,
        maxUnitsInBuilding: 1,
        maxUnitsPerLevel: 1,
        maxLevel: 5,
        desc: "",
        updDesc: "",
    };

    public static Charcoalhouse: any = {

        displayName: "Köhlerei",
        upgradeCost: new CostBag().addCost("Wood", 690).addCost("Clay", 125).addCost("Stone",500),
        upgradeModifierPercent: 7,
        processUnit: "Charcoaler",
        produceRest: "Coal",
        resCost: new CostBag().addCost("Wood", 50),
        producePerSecond: 0.09,
        producePerUpdatePercent: 11,
        maxUnitsInBuilding: 2,
        maxUnitsPerLevel: 1,
        maxLevel: 5,
        desc: "",
        updDesc: "",
    };

    public static Brewery: any = {

        displayName: "Brauerei",
        upgradeCost: new CostBag().addCost("Wood", 700).addCost("Wheat", 250).addCost("Clay", 340).addCost("Ironbar",120),
        upgradeModifierPercent: 5,
        processUnit: "Brewer",
        produceRest: "Beer",
        resCost: new CostBag().addCost("Wheat", 20).addCost("Water", 25).addCost("Hopfen",10),
        producePerSecond: 0.04,
        producePerUpdatePercent: 11,
        maxUnitsInBuilding: 2,
        maxUnitsPerLevel: 1,
        maxLevel: 5,
        desc: "",
        updDesc: "",
    };

    public static Ropehouse: any = {

        displayName: "Seilerei",
        upgradeCost: new CostBag().addCost("Wood", 400).addCost("Wheat", 250).addCost("Clay", 530).addCost("Ironbar", 90),
        upgradeModifierPercent: 8,
        processUnit: "Roper",
        produceRest: "Rope",
        resCost: new CostBag().addCost("Furr",10).addCost("Flax", 35),
        producePerSecond: 0.03,
        producePerUpdatePercent: 8,
        maxUnitsInBuilding: 3,
        maxUnitsPerLevel: 1,
        maxLevel: 5,
        desc: "",
        updDesc: "",
    };

    public static Ironsmeltery: any = {

        displayName: "Eisenschmelze",
        upgradeCost: new CostBag().addCost("Wood", 1300).addCost("Clay", 530),
        upgradeModifierPercent: 8,
        processUnit: "Ironsmelter",
        produceRest: "Ironbar",
        resCost: new CostBag().addCost("Ironore", 2).addCost("Coal", 5).addCost("Water",3),
        producePerSecond: 0.008,
        producePerUpdatePercent: 8,
        maxUnitsInBuilding: 3,
        maxUnitsPerLevel: 1,
        maxLevel: 5,
        desc: "",
        updDesc: "",
    };

    public static Goldsmeltery: any = {

        displayName: "Goldschmelze",
        upgradeCost: new CostBag().addCost("Wood", 1300).addCost("Clay", 530),
        upgradeModifierPercent: 8,
        processUnit: "Goldsmelter",
        produceRest: "Goldbar",
        resCost: new CostBag().addCost("Goldore", 4).addCost("Coal", 7).addCost("Water", 3),
        producePerSecond: 0.007,
        producePerUpdatePercent: 8,
        maxUnitsInBuilding: 3,
        maxUnitsPerLevel: 1,
        maxLevel: 5,
        desc: "",
        updDesc: "",
    };


    /* Special */

    public static Storagehouse: any = {
        storagePerLevel: 1000,
        storagePerUpdatePercent: 20,
        displayName: "Lagerhaus",
        upgradeCost: new CostBag().addCost("Wood", 20).addCost("Stone", 5),
        maxLevel: 20,
        upgradeModifierPercent: 2,
        type: "special",
    }

    public static Research: any = {
        storagePerLevel: 1000,
        storagePerUpdatePercent: 40,
        displayName: "Gelehrten Turm",
        processUnit: "Researcher",
        upgradeCost: new CostBag().addCost("Wood", 25).addCost("Stone", 45).addCost("Food", 9),
        maxLevel: 20,
        upgradeModifierPercent: 5,
        researchPointPerUnit: 0.05,
        researchPointUpdate: 5,
        maxUnitsInBuilding: 4,
        maxUnitsPerLevel: 2,
        type: "special",
        desc: "Die Besserwisser brauchen einen Platz zum besser-wissen",
        updDesc: "Warum nicht mehr Besserwisser zusammentun? Dann besser-wissen sie ja noch effektiver",
    }

    public static Market: any = {
        storagePerLevel: 1000,
        storagePerUpdatePercent: 25,
        displayName: "Globaler Markt",
        pUnit: null,
        upgradeCost: new CostBag().addCost("Wood", 30).addCost("Stone", 100).addCost("Food", 25),
        maxLevel: 10,
        upgradeModifierPercent: 3,
        sellBuyPerSecond: 1,
        sellBuyUpdate: 10,
        tax: 25,
        type: "special",
    }

    

}


