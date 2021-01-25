angular.module('app', []).controller('ctrl', function($scope) {

  $scope.range = _.range(1, 5);
  $scope.isList = true;
})