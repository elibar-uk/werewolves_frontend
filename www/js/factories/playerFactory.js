angular.module('werewolvesTwo')
.factory('playerFactory', function() {

  var Player = function(name) {
    this.name = name;
    this.role = null;
    this.isDead = false;
    this.vote = null;

    this.assignRole = function (role) {
      this.role = role;
    };
    this.isAlive = function () {
      return !(this.isDead);
    };
    this.makeVote = function (name) {
      this.vote = name;
    };

    this.kill = function () {
      this.isDead = true;
    };

    this.isAWerewolf = function () {
      return this.role.desc === "Werewolf"
    }
  };

  return Player;
});
