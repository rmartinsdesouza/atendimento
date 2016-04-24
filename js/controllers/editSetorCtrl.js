angular
	.module("listaSetores")
    .controller('editSetorCtrl', function ($scope, $rootScope, $location, $routeParams, services, customer) {
    var setorID = ($routeParams.customerID) ? parseInt($routeParams.setorID) : 0;
    $rootScope.title = (setorID > 0) ? 'Edit Setores' : 'Add Setores';
    $scope.buttonText = (setorID > 0) ? 'Update Setores' : 'Add New Setores';
      var original = setor.data;
      original._id = setorID;
      $scope.setor = angular.copy(original);
      $scope.setor._id = setorID;

      $scope.isClean = function() {
        return angular.equals(original, $scope.setor);
      }

      $scope.deleteCustomer = function(setor) {
        $location.path('/');
        if(confirm("Are you sure to delete setor number: "+$scope.setor._id)==true)
        services.deleteCustomer(setor.setorNumber);
      };

      $scope.saveCustomer = function(setor) {
        $location.path('/');
        if (setorID <= 0) {
            services.insertCustomer(setor);
        }
        else {
            services.updateCustomer(setorID, setor);
        }
    };
});

