class GameDatabase {

    /*Main Info*/
    public startDate: Date = new Date();
    public version: string = "0.0.0.1";
    public lastTick: Date;

    /* Entity Data*/
    public buildings: any = {};
    public units: any = {};
    public resources: any = {};
    public upgradeList: any = {};
    public statistics: any = {};
    public achivements: any = {};
    public market: any = {};
    
    /* Additional MarketInfo */
    public marktSwitchTime: string = "";
    public currentSellAtMarket:number = 0;

   
    /* Other Ratings */
    public unitsTotal: number;
    public totalRes: number;
    public researchPoints: number = 0;
    public honorPoints: number = 0;
    public gold: number = 0;
    

    /*Feature Activ*/
    public fMarket: boolean = false;
    public fStats: boolean = false;
    public fArmee: boolean = false;
    public fAchivements: boolean = false;

   /* Statistics */
    public resMaxList: any = {};
    public gameStarts: number = 0;
    public resMarketStats: any = {};

    /* UI Settings */
    public ui: any = {
        bView: {},
        uView: {},
        rView: {},
        aView: {},
        upView: {},
    };
}



class DataMarketStats {
    public resId: string;
    public buyed: number = 0;
    public selled: number = 0;
    public earnGold: number = 0;
    public lossGold: number = 0;

}

class DataBuilding {
    public name: string;
    public level: number = 1;
    public processQ: number = 0;
    public multiQ: any[] = [];
}

class DataUnit {
    public name: string;
    public level: number = 1;
    public amount: number = 0;
}

class DataResource {
    public name: string;
    public amount: number;
}

class DataUpgrade {
    public name: string;
    public activ: boolean;
    public pDate: string;

}

class DataAchivements {
    public name: string;
    public pDate: string;
    public date: Date;
}

class DataMarketStock {
    public resId: string;

    public basicPriceSell: number;
    public basicPriceBuy:number
    public mFactorBuy: number = 0;
    public mFactorSell: number = 0;
}


