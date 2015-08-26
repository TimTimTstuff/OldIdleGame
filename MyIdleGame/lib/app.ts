angular.module("tstuffIG", ["ngRoute", 'ui.bootstrap'])
//    .config([
//    "$routeProvider",
//    "$httpProvider",
  
//    function ($routeProvider, $httpProvider) {
   
//        $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
//    }
//])
    .controller("GameController", ["$scope", "$interval", "$routeParams", "$location", "$http", GameController])
    .filter('reverse', function () {
    return function (items) {
        return items.slice().reverse();
    };
});
    