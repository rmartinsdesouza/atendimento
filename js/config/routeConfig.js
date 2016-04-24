angular.module("listaSetores").config(function ($routeProvider) {
  $routeProvider.when("/setores", {
    templateUrl: "view/setores.html"

  })
  .when('/edit-setor/:setorID', {
        //title: 'Edit Customers',
        templateUrl: "view/edit-setor.html",//,
        //controller: 'editCtrl',
        //editSetorCtrl.js
        //return services.getSetor(setorID);

		resolve: {
		setor: function(services, $route){
			
			var setorID = $route.current.params.setorID;
			return services.getSetor(setorID);
		}}
   })
 
  $routeProvider.otherwise({
    redirectTo: "/"
  })
});




