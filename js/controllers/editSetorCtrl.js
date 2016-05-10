
app.controller('editSetorCtrl', function ($scope, $rootScope, $location, $routeParams, services, setor) {
    var setorID = ($routeParams.setorID) ? parseInt($routeParams.setorID) : 0;
    $rootScope.title = (setorID > 0) ? 'Edit setor' : 'Add setor';
    $scope.buttonText = (setorID > 0) ? 'Update setor' : 'Add New setor';
      var original = setor.data;
      $scope.vm = angular.copy(original);

      // console.log(original);
      $scope.deleteSetor = function(vm) {
      $location.path('/');
        if(confirm("Tem certeza da exclusão: "+$scope.vm.id)==true)
            services.deleteSetor(vm.id);
        };

      $scope.saveSetor = function(setor) {
      $location.path('#/setores');
      if (customerID <= 0) {
          services.insertSetor(setor);
      }
      else {
          // services.updateCustomer(customerID, customer);
      }

      $scope.isClean = function() {
        return angular.equals(original, $scope.vm);
      }
});

