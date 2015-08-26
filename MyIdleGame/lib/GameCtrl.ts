class GameController {

    public gameLoopInterval: any;
    public data: GameDatabase;
    public buildings: any = {};
    public units: any = {};
    public resources: any = {};
    public note: string;
    public upgrades: Upgrade = null;
    public Achivements: AchivementsList;
    public market: MarketProcessor;
    public disq: boolean = true;
    public service: TServiceHelper;

    public guiHelper: GuiHelper;

    public lang: Language = new Language();
    public info: GameInfo = new GameInfo();


    public get addPerClick():number{
        return GameInfo.addPerClick; 
       
    }
    public disc() {
        this.data.ui.showDisq = !this.data.ui.showDisq;
        
    }
    public set addPerClick(val: number) {
        GameInfo.addPerClick = val;
    }

    public autoSave(f: boolean) {
        GameInfo.autoSave = f;
    }

    public showWindow:string = "";
    
    constructor($scope, $interval, $routeParams,$location,$http) {

        this.showWindow = (<string>$location.url()).replace("/", "");

       

        if (this.showWindow == "") {
            this.showWindow = "B";
        }

        this.service = new TServiceHelper($http,this);

        if (null == localStorage.getItem(GameInfo.storageKey)) {
        this.data  = new GameSetup().init();
            this.saveGame();
            console.log("Startup game");
        } else {
            //LoadGameData
            this.loadGame();
            if (this.data.version != GameInfo.gameVersion) {
                var e = new GameSetup();

              
                e.upgradeSaveFile(this);
                this.data.version = GameInfo.gameVersion;
            }
            console.log("Load game");
            //TimeCalculation
           
        }



        new StatisticSetup();
        this.guiHelper = new GuiHelper(this);
       this.market = new MarketProcessor(this.data.market, null);
        /*
        Build Records
        */
        
        for (var i in this.data.buildings) {
            this.addBuilding(this.data.buildings[i]);
            //this.buildings[i] = BuildingFactory.getBuildingFromRecord(this.data.buildings[i]);
       }
       

        for (var i in this.data.units) {
            this.addUnit(this.data.units[i]);
            //this.units[i] = (UnitFactory.getUnitFromRecord(this.data.units[i]));
        }

        for (var i in this.data.resources) {
            
            this.addResource(this.data.resources[i])
            //this.resources[i] = ResourceFactory.getResourceFromRecord(this.data.resources[i]);
        }
        ///END BUILD RECORDS
        this.upgrades = new Upgrade(this);
        this.upgrades.checkForNewBuyable(this);
        this.Achivements = new AchivementsList();
        this.Achivements.generateList(this);
  
        
        //First datacalculation
        this.metaDataCalculation();
        this.updateInfo();


        /*
            Offline Production
        */  
      
        //TimeCalculation
        var diff = ((new Date()).getTime() - Date.parse(this.data.lastTick.toString()))/1000;
        for (var building in this.buildings) {
            (<WorkProcessor>this.buildings[building]).processOfflineTime(diff, this);
            this.metaDataCalculation();
            this.updateInfo();
        }
        ///END Offline production

      
       
        //Start GameLOOP
        this.gameLoopInterval = $interval(function () {
            var a: GameController = $scope.GC;

            for (var building in a.buildings) {
                (<WorkProcessor>a.buildings[building]).process(a);
            }

            a.Achivements.process(a);

            a.metaDataCalculation();
            a.updateInfo();
            a.market.generateNewStock(a);

            //autosave
            GameInfo.currentAs++;
            if (GameInfo.currentAs == GameInfo.autosaveEach) {
                if (GameInfo.autoSave) {
                    console.log("Time to Save your auto");
                    a.saveGame();
                }
                GameInfo.currentAs = 0;
                
                //UPGRADES CHECK
                a.Achivements.checkForAchivementReached(a);
                a.upgrades.checkForNewBuyable(a);
            }


        }, GameInfo.tickTime, 0);
    
    }

    public saveGame(): void {
        this.data.lastTick = new Date();
        var json = JSON.stringify(this.data);
       
        var b = btoa(json);

        localStorage.setItem(GameInfo.storageKey, b);
    }

    public loadGame(): void {
        var b = atob(localStorage.getItem(GameInfo.storageKey));
        this.data = JSON.parse(b);
       
    }

    public metaDataCalculation() {
        var units = 0;
        for (var u in this.units) {
            units += (<AUnit>this.units[u]).data.amount;
        }

        var res = 0;
        for (var r in this.resources) {
            res += (<Resource>this.resources[r]).data.amount;
        }
        this.data.totalRes = res;
        this.data.unitsTotal = units;

    }

    public updateInfo() {
        for (var building in this.buildings) {
            (<ABuilding>this.buildings[building]).getUpgradeViewArray(this);
            if (this.buildings[building].getUnitCostViewArray !== undefined) {
                
                this.buildings[building].getUnitCostViewArray(this);
            }
        }
    }

    public getPerSecond(i: number): number {
        return i ;
    }

    public clear(): void {
       
        localStorage.removeItem(GameInfo.storageKey);
        console.log("clear gamedata");
    }

    public getImagePath(obj: any): string {
       
        return GameInfo.imagePathRes + obj + GameInfo.imageType;
    }

    public addBuilding(b: DataBuilding) {

        this.buildings[b.name] = BuildingFactory.getBuildingFromRecord(b);
    }

    public addUnit(u: DataUnit) {
        this.units[u.name] = (UnitFactory.getUnitFromRecord(u));
    }

    public addResource(u: DataResource) {
     
        this.resources[u.name] = ResourceFactory.getResourceFromRecord(u);
    }
  
    public getText(key: string) {
        return Language[key][GameInfo.lang];
    }

}