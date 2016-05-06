
app.controller('editSetorCtrl', function ($scope, $rootScope, $location, $routeParams, services) {
    var setorID = ($routeParams.setorID) ? parseInt($routeParams.setorID) : 0;
    $rootScope.title = (setorID > 0) ? 'Edit setor' : 'Add setor';
    $scope.buttonText = (setorID > 0) ? 'Update setor' : 'Add New setor';
      //var original = setor.data;
      // original._id = setorID;
      // $scope.setor = angular.copy(original);
      // $scope.setor._id = setorID;
      console.log($routeParams.setorID);
      console.log($rootScope.title);

      $scope.isClean = function() {
        return angular.equals(original, $scope.setor);
      }
});

