
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        title: 'setor',
        templateUrl: 'view/setores.html',
        controller: 'listaSetoresCtrl'
      })
      .when('/edit-setor/:setorID', {
        title: 'Edit setor',
        templateUrl: 'view/edit-setor.html',
        controller: 'editSetorCtrl',
        resolve: {
          customer: function(services, $route){
            var setorID = $route.current.params.setorID;
            return setorID;
            //return services.getCustomer(setorID);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);