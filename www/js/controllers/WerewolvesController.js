angular.module('werewolvesTwo')
.controller('WerewolvesController',['$state','$scope', '$ionicSideMenuDelegate', function($state,$scope,$ionicSideMenuDelegate){
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}]);
