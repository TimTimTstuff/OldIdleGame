class AchivementsConfig {

    public static aList(): AchivementRecord[] {
        var l: AchivementRecord[] = [];
        l = AchivementsConfig.resourceAchivementStone(l);
        l = AchivementsConfig.resourceAchivementsWood(l);
        l = AchivementsConfig.alVillager(l);
        l = AchivementsConfig.resourceAchivementsWheat(l);
        l = AchivementsConfig.resourceAchivementFood(l);
        l = AchivementsConfig.resourceAchivementsWater(l);
        l = AchivementsConfig.buildingUpgradeAchivement(l);
        return l;
    }

    public static alVillager(l: AchivementRecord[]): AchivementRecord[] {
        var a = new AchivementRecord();
        a.name = "VillagerV1";
        a.displayName = "Meine Familie";
        a.displayText = "Habe 10 Dorfbewohner";
        a.eName = "UNIT";
        a.value = 10;
        a.type = ATypes.UNIT_AMOUNT;
        a.level = 1;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "VillagerV2";
        a.displayName = "Mein Gruppe";
        a.displayText = "Habe 25 Dorfbewohner";
        a.eName = "UNIT";
        a.value = 25;
        a.type = ATypes.UNIT_AMOUNT;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "VillagerV3";
        a.displayName = "Meine Dorf";
        a.displayText = "Habe 50 Dorfbewohner";
        a.eName = "UNIT";
        a.value = 50;
        a.type = ATypes.UNIT_AMOUNT;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "VillagerV4";
        a.displayName = "Meine Kleinstadt";
        a.displayText = "Habe 100 Dorfbewohner";
        a.eName = "UNIT";
        a.value = 100;
        a.type = ATypes.UNIT_AMOUNT;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "VillagerV5";
        a.displayName = "So viele Menschen";
        a.displayText = "Habe 150 Dorfbewohner";
        a.eName = "UNIT";
        a.value = 150;
        a.type = ATypes.UNIT_AMOUNT;
        l.push(a);



        return l;
    }

    public static buildingUpgradeAchivement(l: AchivementRecord[]): AchivementRecord[] {

        var a = new AchivementRecord();
        a.name = "BuildingUpgradeV1";
        a.displayName = "Last uns Entwickeln!";
        a.displayText = "10 Gebäudeausbauten";
        a.eName = "BUILDING_UPDATE";
        a.value = 10;
        a.type = ATypes.BUILDING_UPGRADED;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "BuildingUpgradeV2";
        a.displayName = "Größer ist Besser!";
        a.displayText = "25 Gebäudeausgebauten";
        a.eName = "BUILDING_UPDATE";
        a.value = 25;
        a.type = ATypes.BUILDING_UPGRADED;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "BuildingUpgradeV3";
        a.displayName = "Wir werden immer Besser!";
        a.displayText = "50 Gebäudeausbauten";
        a.eName = "BUILDING_UPDATE";
        a.value = 50;
        a.type = ATypes.BUILDING_UPGRADED;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "BuildingUpgradeV4";
        a.displayName = "Wie weit geht das noch?";
        a.displayText = "100 Gebäudeausbauten";
        a.eName = "BUILDING_UPDATE";
        a.value = 100;
        a.type = ATypes.BUILDING_UPGRADED;
        l.push(a);

        return l;
    }

    public static resourceAchivementStone(l: AchivementRecord[]): AchivementRecord[]{

        var a = new AchivementRecord();
        a.name = "StoneV1";
        a.displayName = "EinStein!";
        a.displayText = "Insgesamt 100 Stein gesammelt.";
        a.eName = "Stone";
        a.value = 100;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "StoneV2";
        a.displayName = "Nenn mich Barny Geröllheimer!";
        a.displayText = "Insgesamt 500 Stein gesammelt.";
        a.eName = "Stone";
        a.value = 500;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);


        var a = new AchivementRecord();
        a.name = "StoneV3";
        a.displayName = "Kann man die auch Essen?";
        a.displayText = "Insgesamt 2500 Stein gesammelt.";
        a.eName = "Stone";
        a.value = 2500;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);


        var a = new AchivementRecord();
        a.name = "StoneV4";
        a.displayName = "Jetzt haben wir aus einem Gebierge ein neues gemacht!";
        a.displayText = "Insgesamt 10000 Stein gesammelt.";
        a.eName = "Stone";
        a.value = 10000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);


        var a = new AchivementRecord();
        a.name = "StoneV5";
        a.displayName = "Können steine auch schlecht werden?!";
        a.displayText = "Insgesamt 50000 Stein gesammelt.";
        a.eName = "Stone";
        a.value = 50000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "StoneV6";
        a.displayName = "Seit der Berg weg ist, können wir viel weiter schauen!";
        a.displayText = "Insgesamt 250000 Holz gesammelt.";
        a.eName = "Stone";
        a.value = 250000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "StoneV7";
        a.displayName = "Ok Chef! Ich glaube es gibt bald einen Erdrutsch!";
        a.displayText = "Insgesamt 1000000 Stein gesammelt.";
        a.eName = "Stone";
        a.value = 1000000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);



        return l;

    }

    public static resourceAchivementFood(l: AchivementRecord[]): AchivementRecord[] {

        var a = new AchivementRecord();
        a.name = "FoodV1";
        a.displayName = "Mehr Nahrung für das Volk!";
        a.displayText = "Insgesamt 100 Nahrung Produziert.";
        a.eName = "Food";
        a.value = 100;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "FoodV2";
        a.displayName = "Wir haben so viel in den Lagern, das wird schon wieder Schlecht!";
        a.displayText = "Insgesamt 500 Nahrung Produziert.";
        a.eName = "Food";
        a.value = 500;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);


        var a = new AchivementRecord();
        a.name = "FoodV3";
        a.displayName = "Warum keine Lebkuchenhäuser?";
        a.displayText = "Insgesamt 2500 Nahrung Produziert.";
        a.eName = "Food";
        a.value = 2500;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);


        var a = new AchivementRecord();
        a.name = "FoodV4";
        a.displayName = "Hach wie im Schlaraffenland hier!";
        a.displayText = "Insgesamt 10000 Nahrung produziert.";
        a.eName = "Food";
        a.value = 10000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);


        var a = new AchivementRecord();
        a.name = "FoodV5";
        a.displayName = "Fisch und Fleisch und KEKESEEEE!!!";
        a.displayText = "Insgesamt 50000 Nahrung Produziert.";
        a.eName = "Food";
        a.value = 50000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "FoodV6";
        a.displayName = "Man könnte glauben wir betreiben Genmanipulation";
        a.displayText = "Insgesamt 250000 Nahrung Produziert.";
        a.eName = "Food";
        a.value = 250000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "FoodV7";
        a.displayName = "Keine worte!";
        a.displayText = "Insgesamt 1000000 Nahrung Produziert.";
        a.eName = "Food";
        a.value = 1000000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);



        return l;

    }

    public static resourceAchivementsWood(l: AchivementRecord[]) {
        var a = new AchivementRecord();
        a.name = "WoodV1";
        a.displayName = "Ich habe einen Baum gefällt";
        a.displayText = "Insgesamt 100 Holz geschlagen.";
        a.eName = "Wood";
        a.value = 100;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "WoodV2";
        a.displayName = "Bäume fällen mach Spaß!";
        a.displayText = "Insgesamt 500 Holz geschlagen.";
        a.eName = "Wood";
        a.value = 500;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);


        var a = new AchivementRecord();
        a.name = "WoodV3";
        a.displayName = "Wo geht nur der Wald hin?";
        a.displayText = "Insgesamt 2500 Holz geschlagen.";
        a.eName = "Wood";
        a.value = 2500;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);


        var a = new AchivementRecord();
        a.name = "WoodV4";
        a.displayName = "Jemand sollte mal neue Bäume pflanzen!";
        a.displayText = "Insgesamt 10000 Holz geschlagen.";
        a.eName = "Wood";
        a.value = 10000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);


        var a = new AchivementRecord();
        a.name = "WoodV5";
        a.displayName = "Uns wird es im Winter nie kalt!";
        a.displayText = "Insgesamt 50000 Holz geschlagen.";
        a.eName = "Wood";
        a.value = 50000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "WoodV6";
        a.displayName = "Wo der Wald war ist heute eine Wüste";
        a.displayText = "Insgesamt 250000 Holz geschlagen.";
        a.eName = "Wood";
        a.value = 250000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);

        var a = new AchivementRecord();
        a.name = "WoodV7";
        a.displayName = "Ich bin der Meister des Holzes!";
        a.displayText = "Insgesamt 1000000 Holz geschlagen.";
        a.eName = "Wood";
        a.value = 1000000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);

        return l;
    }

    public static resourceAchivementsWheat(l: AchivementRecord[]) {

        var resName = "Wheat";
        var i = 1;

        var a = new AchivementRecord();
        a.name = resName + "V" + i;
        a.displayName = "Meine kleine Farm";
        a.displayText = "Insgesamt 100 Getreide geernted.";
        a.eName = resName;
        a.value = 100;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);
        i++;

        var a = new AchivementRecord();
        a.name = resName + "V" + i;
        a.displayName = "Ein Bett im Kornfeld";
        a.displayText = "Insgesamt 500 Getreide geernted.";
        a.eName = resName;
        a.value = 500;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);
        i++;

        var a = new AchivementRecord();
        a.name = resName + "V" + i;
        a.displayName = "Ganzschön viel Heu!";
        a.displayText = "Insgesamt 2500 Getreide geernted.";
        a.eName = resName;
        a.value = 2500;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);
        i++;

        var a = new AchivementRecord();
        a.name = resName + "V" + i;
        a.displayName = "Müslie Müslie yam yam yam";
        a.displayText = "Insgesamt 10000 Getreide geernted.";
        a.eName = resName;
        a.value = 10000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);
        i++;

        var a = new AchivementRecord();
        a.name = resName + "V" + i;
        a.displayName = "Schau nur diese Goldene Flut";
        a.displayText = "Insgesamt 50000 Getreide geernted.";
        a.eName = resName;
        a.value = 50000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);
        i++;

        var a = new AchivementRecord();
        a.name = resName + "V" + i;
        a.displayName = "Irgendwo in den Feldern ist unser zuhause!";
        a.displayText = "Insgesamt 250000 Getreide geernted.";
        a.eName = resName;
        a.value = 250000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);
        i++;

        var a = new AchivementRecord();
        a.name = resName + "V" + i;
        a.displayName = "Ich bin ein Getreidemogul!";
        a.displayText = "Insgesamt 1000000 Getreide geernted.";
        a.eName = resName;
        a.value = 1000000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);
        i++;

        return l;
    }

    public static resourceAchivementsWater(l: AchivementRecord[]) {

        var resName = "Water";
        var i = 1;

        var a = new AchivementRecord();
        a.name = resName + "V" + i;
        a.displayName = "Wasser für die Menschen";
        a.displayText = "100 Wasser geschöpft.";
        a.eName = resName;
        a.value = 100;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);
        i++;

        var a = new AchivementRecord();
        a.name = resName + "V" + i;
        a.displayName = "Ein schwimbad für das Dorf";
        a.displayText = "500 Wasser geschöpft.";
        a.eName = resName;
        a.value = 500;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);
        i++;

        var a = new AchivementRecord();
        a.name = resName + "V" + i;
        a.displayName = "Ein Wasserpark wäre schön!";
        a.displayText = "2500 Wasser geschöpft.";
        a.eName = resName;
        a.value = 2500;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);
        i++;

        var a = new AchivementRecord();
        a.name = resName + "V" + i;
        a.displayName = "Brauchen wir eine Kläranlage?";
        a.displayText = "10000 Wasser geschöpft.";
        a.eName = resName;
        a.value = 10000;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);
        i++;

        var a = new AchivementRecord();
        a.name = resName + "V" + i;
        a.value = 50000;
        a.displayName = "Jeder bekommt einen eigenen Teich!";
        a.displayText = a.value+" Getreide geernted.";
        a.eName = resName;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);
        i++;

        var a = new AchivementRecord();
        a.name = resName + "V" + i;
        a.value = 250000;
        a.displayName = "Sieht ja aus wie Atlantis!";
        a.displayText = a.value+" Wasser geschöpft.";
        a.eName = resName;
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);
        i++;

        var a = new AchivementRecord();
        a.name = resName + "V" + i;
        a.value = 1000000;
        a.displayName = "Wasser Wasser Wasser!";
        a.displayText = a.value+" Wasser geschöpft.";
        a.eName = resName;
        
        a.type = ATypes.RESOURCE_TOTAL;
        l.push(a);
        i++;

        return l;
    }


}