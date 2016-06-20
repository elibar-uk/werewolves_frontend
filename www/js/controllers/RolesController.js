angular.module('werewolvesTwo', ['ionic'])

.controller('RolesController', function($scope) {
  $scope.cards = [
    { image: 'assets/img/villager.png',
    text: 'The most commonplace role, a simple Villager, spends the game trying to root out who they believe the werewolves (and other villagers) are. While they do not need to lie, the role requires players to keenly sense and point out the flaws or mistakes of their fellow players. Someone is speaking too much? Could mean they are a werewolf. Someone it is not speaking enough? Could mean the same thing. It all depends on the people you are playing with, and how well you know them' },
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
