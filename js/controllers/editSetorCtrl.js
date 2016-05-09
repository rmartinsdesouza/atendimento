
app.controller('editSetorCtrl', function ($scope, $rootScope, $location, $routeParams, services, setor) {
    var setorID = ($routeParams.setorID) ? parseInt($routeParams.setorID) : 0;
    $rootScope.title = (setorID > 0) ? 'Edit setor' : 'Add setor';
    $scope.buttonText = (setorID > 0) ? 'Update setor' : 'Add New setor';
      var original = setor.data;
      // $scope.descricao = original.descricao;
      // original._id = setorID;
      // $scope.vm = angular.copy(original);
      $scope.setor._id = original.id;
      $scope.setor.descricao = original.descricao;
      
      // console.log($routeParams.setorID);
      // console.log($rootScope.title);
      // console.log(setor);
      // console.log(original.descricao);
      $scope.isClean = function() {
        return angular.equals(original, $scope.setor);
      }
});

