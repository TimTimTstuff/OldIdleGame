class OnlineFeatures {

    public sessionKey: string;
    public userName: string;
    public passWord: string;

    

}

class TServiceHelper {

    public response: string;
    public http: any;

    constructor($http: ng.IHttpProvider, context: GameController) {
        console.log("Start online Service");

        this.http = $http;
        this.getSaveFile("mo", "mo");
        this.saveGame(localStorage.getItem(GameInfo.storageKey));
    }

    public saveGame(saveFile: string) {
        var a = new WebserviceObject();
        a.action = "savegame";
        a.data = { savegame: saveFile };

        this.sendMessage(a);
    }

    public getSaveFile(user: string, pass: string) {
        var obj = new WebserviceObject();
        obj.action = "whoami";
        obj.data = { who: "Timo" };
        this.sendMessage(obj);
    }

    public param(obj) {
    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

    for (name in obj) {
        value = obj[name];

        if (value instanceof Array) {
            for (i = 0; i < value.length; ++i) {
                subValue = value[i];
                fullSubName = name + '[' + i + ']';
                innerObj = {};
                innerObj[fullSubName] = subValue;
                query += this.param(innerObj) + '&';
            }
        }
        else if (value instanceof Object) {
            for (subName in value) {
                subValue = value[subName];
                fullSubName = name + '[' + subName + ']';
                innerObj = {};
                innerObj[fullSubName] = subValue;
                query += this.param(innerObj) + '&';
            }
        }
        else if (value !== undefined && value !== null)
            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }

    return query.length ? query.substr(0, query.length - 1) : query;
}

    public sendMessage(serviceObject: WebserviceObject) {
       
        this.http({
            method: 'POST',
            url: 'http://localhost/TServices/service.php',
            data: this.param({tjws: JSON.stringify(serviceObject) }),
            headers: {
                //'Access-Control-Allow-Origin': '*',
               // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
               'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).success(function (data, status, headers, config) {
            console.log(data);
            console.log(status);
          
           
            }).error(function (data, status, headers, config) {
            console.log("Error");
            console.log(data);
            console.log(status);
            });

    }

}

class WebserviceObject {

    public action: string;
    public data: any;

}