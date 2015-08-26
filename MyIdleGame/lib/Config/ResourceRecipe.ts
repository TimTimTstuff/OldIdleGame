class ResourceRecipe {    

    public key: number;
    public produceRes: string;
    public cost: CostBag;

}

class ProductionQ {
    public q: number[];
}

class ProductionHandler {

    public recip: ResourceRecipe;

    constructor(data: GameDatabase, ct: GameController) {


    }
    
}