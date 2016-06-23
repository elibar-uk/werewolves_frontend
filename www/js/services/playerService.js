angular.module('werewolvesTwo')
.service('playerService', ['playerFactory', function(playerFactory) {

  var player = new playerFactory;

  player.name = function (name) {
    player.name = name;
  };

  player.assign = function (role) {
    player.role = role;
  };
  player.isAlive = function () {
    return !(player.isDead);
  };
  player.makeVote = function (name) {
    player.vote = name;
  };

  player._kill = function () {
    player.isDead = true;
  };
}]);
