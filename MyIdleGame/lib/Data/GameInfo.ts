class GameInfo {

    public static tickTime: number = 70;
    public static autoSave: boolean = true;
    public static storageKey: string = "tstuffidlegame";
    public static lastTick: Date;
    public static gameVersion: string = "0.0.0.10";
    public static lang = "de";
    public static autosaveEach = 100;
    public static currentAs = 0;

    //Game info
    //public static storagePerLevel: number = 100;

    public static imagePath: string = "images/";
    public static imagePathRes: string = GameInfo.imagePath + "resources/";
    public static imageType: string = ".png";

    public static addPerClick: number = 1;

    /* Market Config */
    public static marketReloadSeconds: number = (30* 5);
    public static marketRegenPercent: number = 1;
    public static marketDefaultSellDiff: number = 30;
    public static marketPriceDifferencPerPoint: number= (0.1/100);
}