angular.module('werewolvesTwo', ['ionic'])
  .controller('RolesController', function($scope) {
  $scope.cards = [
    { image: 'assets/img/villager.png',
  text: '' },
    { image: 'assets/img/werewolf.png',
  text: '' },
    { image: 'assets/img/little-girl.png',
  text: '' },
    { image: 'assets/img/sheriff.png',
  text: '' },
    { image: 'assets/img/seer.png',
  text: '' },
    { image: 'assets/img/white-werewolf.png',
  text: ''},
    { image: 'assets/img/wild-child.png',
  text: ''},
    { image: 'assets/img/witch.png',
  text: '' },
    { image: 'assets/img/cupid.png',
  text: '' }

  ];

});



// $scope.clickEvent = function() {
//   alert('Clicked');
// }
