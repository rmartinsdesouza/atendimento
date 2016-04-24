angular.module("listaSetores").config(function ($routeProvider) {
  $routeProvider.when("/setores", {
    templateUrl: "view/setores.html",

  });
 
  $routeProvider.otherwise({
    redirectTo: "/"
  });
});