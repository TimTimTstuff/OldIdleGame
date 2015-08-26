class Resource {

    constructor(data: DataResource, conf: any) {
        this.conf = conf;
        this.data = data;
        this.displayName = conf.displayName;
        this.type = conf.type;
    }

    public data: DataResource;
    public conf: any;
    public displayName: string;
    public type: string;
}