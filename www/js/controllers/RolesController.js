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
    { image: 'assets/img/big-bad-wolf.png',
  text: '' }
  { image: 'assets/img/accursed-wolf.png',
  text: '' }
  { image: 'assets/img/angel.png',
  text: '' }
  { image: 'assets/img/defender.png',
  text: '' }
  { image: 'assets/img/hunter.png',
  text: '' }

  ];

});



// $scope.clickEvent = function() {
//   alert('Clicked');
// }
