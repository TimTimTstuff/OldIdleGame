/*
        //Get Number of resources
        var size = 0, key;
        for (key in resList) {
            if (resList.hasOwnProperty(key)) size++;
        }
        var min = 3;
        var resMax = Math.floor(Math.random() * (size - min + 1)) + min;

        //console.log(resMax);
        //Get resourcelist
        var tempArray = [];
        for (var r in resList) {
            tempArray.push(r);
        }
        tempArray = this.shuffle(tempArray);
*/

class MarketProcessor {

    public data: any;
    public stats: any;
    public targetTime: Date;
    public timeString: string;

    constructor(marketData: any, marketDataStats: any) {
        this.data = marketData;
        this.stats = marketDataStats;
        
    }

    private getNewMarketChangeDate(): Date {
        var tDate = new Date(new Date().getTime()+GameInfo.marketReloadSeconds*1000);
        return tDate;
    }

    public generateNewStock(scope: GameController) {

        //Parse SaveGameInfo
        var targetDate:Date = new Date();
        if (scope.data.marktSwitchTime != "") {
            targetDate = new Date(scope.data.marktSwitchTime);
            
        }
        this.targetTime = targetDate;
        this.getTimeDiffAsString();
        //Break if date issnt reached
        if (targetDate > new Date()) {
            
            return;
        }

        /*
            Do some Fancy calculation Stuff.
        */
        this.getMarketResourceList(scope.data.resources);

        this.regenPriceValue(scope);
        //Set new Change
        scope.data.marktSwitchTime = this.getNewMarketChangeDate().toString();

    }

    public getMarketResourceList(resList:any) {

        //Create new ResMarketList
       
        for (var r in resList) {

            if (this.data[r] == undefined) {
                this.data[r] = new DataMarketStock();
                this.data[r].resId = r;
                this.data[r].basicPriceBuy = resList[r].mvalue;
                this.data[r].basicPriceSell = resList[r].mvalue;

              
            }


            var currStatBuy = this.data[r].mFactorBuy;
            var currStatSell = this.data[r].mFactorSell;
            var xStatBuy = currStatBuy / 100 * GameInfo.marketRegenPercent;
            var xStatSell = currStatSell / 100 * GameInfo.marketRegenPercent;

            //if (currStatBuy > 0) {
                this.data[r].mFactorBuy = currStatBuy - xStatBuy;
                this.data[r].mFactorSell = currStatSell - xStatSell;
            //} else {
            //    this.data[r].mFactorBuy = currStatBuy + xStatBuy;
            //    this.data[r].mFactorSell = currStatSell + xStatSell;
            //}
        }
       
    }

    public getTimeDiffAsString() {
        var milDiff = Math.round((this.targetTime.getTime() - new Date().getTime())/ 1000) ;
        var hour = Math.round(milDiff / 3600);
        var min = Math.round((milDiff - (hour * 3600)) / 60);
        var sec = milDiff - ((hour * 3600) + (min * 60));
        this.timeString = hour + ":" + min + ":" + sec;
    }

    public regenPriceValue(scope: GameController) {

        
        for (var r in this.data) {
            var currStatBuy = this.data[r].mFactorBuy;
            var currStatSell = this.data[r].mFactorSell;

            var newPrice = scope.resources[r].conf.mvalue;
         

            this.data[r].basicPriceBuy = newPrice * (1 + (this.data[r].mFactorBuy / 10000));
            this.data[r].basicPriceSell = newPrice * (1 + (this.data[r].mFactorSell / 10000));




            if (this.data[r].basicPriceBuy < 1) {
                this.data[r].basicPriceBuy = 1;
            }

            if (this.data[r].basicPriceSell < 1) {
                this.data[r].basicPriceSell = 1;
            }
        
        }

        
    }

    public getBuyPriceDisplay(resId: string, scope): string{
       
        return this.getBuyPrice(this.data[resId].basicPriceBuy, scope).toString();
    }

    public getSellPriceDisplay(resId: string, scope: GameController): string {
        return this.getSellPrice(this.data[resId].basicPriceSell, scope).toString();
    }

    public getTaxValue(price:number, scope: GameController):number {
        var tax = scope.buildings.Market.conf.tax;
       
        return (price / 100 * tax);
    }

    public getBuyPrice(price, scope: GameController) {
        
        return Math.round(price + this.getTaxValue(price, scope));
    }

    public getSellPrice(price, scope: GameController) {
        var sPrice = price * (1 + (GameInfo.marketDefaultSellDiff/100));

      
        return Math.round(sPrice - this.getTaxValue(sPrice, scope));
        
    }

    public buyRes(resId: string, scope: GameController) {
        for (var i = 0; i < GameInfo.addPerClick; i++) {

            var buyValue = this.getBuyPrice(this.data[resId].basicPriceBuy, scope);
           
            if (scope.data.gold < buyValue || scope.data.totalRes >= scope.buildings.Storagehouse.getSpace(scope) || scope.data.currentSellAtMarket < 1) {
                return;
            }
           
            scope.data.gold -= buyValue;
            scope.data.resources[resId].amount += 1;
            scope.data.currentSellAtMarket -= 1;

            this.data[resId].mFactorBuy += 1;
            this.data[resId].mFactorSell += 1;
            StatisticSetup.updateStat("MARKET_BUY", 1, scope);
        }
        this.regenPriceValue(scope);
        
    }

    public sellRes(resId: string, scope: GameController) {

        for (var i = 0; i < GameInfo.addPerClick; i++) {

            var sellValue = this.getSellPrice(this.data[resId].basicPriceSell, scope);
            
            if (scope.data.resources[resId].amount < 1 || scope.data.currentSellAtMarket < 1) {
                return;
            }

            scope.data.gold += sellValue;
            scope.data.resources[resId].amount -= 1;
            scope.data.currentSellAtMarket-=1;

            this.data[resId].mFactorSell -= 1;
            this.data[resId].mFactorBuy -= 1;
            StatisticSetup.updateStat("MARKET_SELL", 1, scope);
        }
        this.regenPriceValue(scope);
    }

    public shuffle(o:string[]):string[] {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

}