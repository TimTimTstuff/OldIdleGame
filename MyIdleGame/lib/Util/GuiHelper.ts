class GuiHelper {

    public scope: GameController;

    constructor(scope: GameController) {
        this.scope = scope;
    }

    public smallView(bname: string) {
        this.scope.data.ui.bView[bname + '_smallView'] = !this.scope.data.ui.bView[bname + '_smallView'];
    }

    public showRes() {
        for (var b in this.scope.data.buildings) {

            this.scope.data.ui.bView[b + '_showBuilding'] = this.scope.buildings[b].type == "basicresource";
        }
    }

    public showUnit() {
        for (var b in this.scope.data.buildings) {

            this.scope.data.ui.bView[b + '_showBuilding'] = this.scope.buildings[b].type == "unit";
        }
    }
    public showProd() {
        for (var b in this.scope.data.buildings) {

            this.scope.data.ui.bView[b + '_showBuilding'] = this.scope.buildings[b].type == "extendresource";
        }

    }

    public  showAllBuildings() {
        for (var b in this.scope.data.buildings) {
            
            this.scope.data.ui.bView[b + '_showBuilding'] = true;
        }
    }

    public hideAllBuildings() {
        for (var b in this.scope.data.buildings) {
            this.scope.data.ui.bView[b + '_showBuilding'] = false;
        }
    }



}