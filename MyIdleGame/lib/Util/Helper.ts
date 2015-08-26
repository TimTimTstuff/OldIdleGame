
/*
    Helper
*/

class CostBag {

    public costId: string[] = [];
    public costAmount: number[] = [];

    public addCost(resId: string, resAmount: number): CostBag {
        this.costId.push(resId);
        this.costAmount.push(resAmount);
        return this;
    }

    public getCostObject(): any {

        var cA = [];
        for (var i in this.costId) {
            var x:any = {};
            x.Id = this.costId[i];
          
            x.amount = this.costAmount[i];
            cA.push(x);
        }
        return cA;
    }
    
}