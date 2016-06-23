angular.module('werewolvesTwo')
.controller('WerewolvesController', ['playerService', 'rulesService', 'playerFactory', '$state','$scope', '$ionicSideMenuDelegate', '$window', function(playerService, rulesService, playerFactory, $state, $scope, $ionicSideMenuDelegate, $window){
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.addVote = function(vote) {
    debugger
    if(vote!=null) {
      var stringVote = JSON.stringify(vote);
      sessionStorage.setItem("currentVote", stringVote);
    };
  }

  $scope.refreshWindow = function() {
    $window.location.reload();
  }

  $scope.getVote = function() {
    return JSON.parse(sessionStorage.getItem("currentVote"));
  }

  $scope.killVoted = function() {
    var playerArray = $scope.info.livingPlayers;
    var nameArray = [];
    for(var i = 0; i < playerArray.length; i++) {
      nameArray.push(playerArray[i].name);
    };
    var index = nameArray.indexOf($scope.getVote().name);
    debugger
    playerArray[index].isDead = true;

    debugger
    var stringPlayers = JSON.stringify(playerArray);
    sessionStorage.setItem("players", stringPlayers);
    debugger
    var playerString = JSON.stringify(playerArray[index]);
    sessionStorage.setItem("justDied", playerString)
    debugger
  }

  $scope.getJustKilled = function() {
    return JSON.parse(sessionStorage.getItem("justDied"))
  }

  $scope.getPlayerList = function() {
    return JSON.parse(sessionStorage.getItem("players"));
  }

  $scope.game = {
    mode: 0
  };

  $scope.gameIsOver = function () {
    return (($scope.getLivingWolves().length === 0) || ($scope.getLivingNonWolves().length === $scope.getLivingWolves().length))
    debugger
  }

  $scope.gameIsRunning = function() {
    return (($scope.getLivingWolves().length > 0) && ($scope.getLivingNonWolves().length > $scope.getLivingWolves().length))
  }

  $scope.names = [];

  $scope.submitMode = function(modeIndex) {
    var modeObject = JSON.stringify($scope.gameModes[modeIndex]);
    sessionStorage.setItem("mode", modeObject);
    $scope.makePlayerNamesObject($scope.gameModes[modeIndex].players)
  };

  $scope.getMode = function() {
    return JSON.parse(sessionStorage.getItem("mode"));
  }

  // $scope.killSomeBitch = function() {
  //   $scope.getLivingPlayers()[0].kill()
  // }

  $scope.person = null;

  $scope.clickTest = function() {
    $scope.person = $scope.getLivingPlayers();
  }

  $scope.getPlayers = function() {
    var playerNumber = $scope.getMode().players;
    return $scope.getNumber(playerNumber)
  }

  $scope.listMatchedPlayersByType = function(matchfn) {
      var playerList = [];
      var playerNumber = $scope.getMode().players;

      for (var i = 0; i < playerNumber; i++) {
          if (matchfn($scope.getPlayerList()[i])) {
              playerList.push($scope.getPlayerList()[i]);
          }
      }

      return playerList;
    };

  $scope.getLivingPlayers = function() {
    return $scope.listMatchedPlayersByType(function(p) { return (p.isDead === false) });
  }

  $scope.getLivingWolves = function() {
    return $scope.listMatchedPlayersByType(function(p) { return (p.isDead === false) && (p.role.desc === "Werewolf")})
  }

  $scope.getLivingNonWolves = function() {
    return $scope.listMatchedPlayersByType(function(p) { return (p.isDead === false) && (p.role.desc === "Villager")})
  }

  $scope.addLivingPlayers = function() {
    $scope.info.livingPlayers = $scope.getLivingPlayers();
    debugger
  }

  $scope.info = {
    livingPlayers: null
  }

  $scope.wwVote = {
    vote: null
  }

  $scope.vVote = {
    vote: null
  }

  $scope.werewolfCheck = function(array, index) {
    array[index].role.desc === "Werewolf"
  }

  $scope.getNumber = function(num) {
    arr = new Array(num);
    numArr = [];
    for(var i = 1; i < (arr.length + 1); i++) {
      numArr.push(i);
    }
    return numArr;
  };

  $scope.incrementCurTurnIndex = function() {
    var newTurnIndex = ($scope.getCurTurnIndex() + 1).toString()
    sessionStorage.setItem("turn", newTurnIndex)
  }

  $scope.getCurTurnIndex = function() {
    return parseInt(sessionStorage.getItem("turn"))
  }

  $scope.resetTurnIndex = function() {
    sessionStorage.setItem("turn", "0")
  }

  $scope.makePlayerNamesObject = function(num) {
    for(var i = 0; i < (num); i++) {
      $scope.names.push("")
    }
  };

  $scope.savePlayers = function(names) {
    var playerCount = names.length;
    var players = [];
    for(var i = 0; i < playerCount; i++) {
      player = new playerFactory(names[i]);
      players.push(player);
    }
    $scope.roleAssignment(players)
    var playerArray = JSON.stringify(players);
    sessionStorage.setItem("players", playerArray);
    sessionStorage.setItem("turn", "0")
  };

  $scope.roleAssignment = function (arrayOfPlayers) {
    var roleArray = []
    var wolfCount = $scope.getMode().roles[0].count;
    for (var i = 0; i < wolfCount; i++){
      roleArray.push("werewolf");
    }
    var villagerCount = $scope.getMode().roles[1].count;
    for (var i = 0; i < villagerCount; i++){
      roleArray.push("villager");
    }
    var shuffledRoles = shuffle(roleArray);
    var assignedRolesArray = arrayOfPlayers.map(function(e, i) {
      return [e, shuffledRoles[i]];
    });
    $scope.assign(assignedRolesArray);
  };

  $scope.assign = function (roleArray) {
    var arrayLength = roleArray.length;
    for (var i = 0; i < arrayLength; i++) {
      if(roleArray[i][1] === "werewolf") {
        var wolfRole = $scope.roles.Werewolf;
        var player = roleArray[i][0];
        player.assignRole(wolfRole);
      } else if(roleArray[i][1] === "villager") {
        var villagerRole = $scope.roles.Villager;
        var player = roleArray[i][0];
        player.assignRole(villagerRole);
      }
    }
  };
  $scope.inTurnReveal = function() {
    return $scope.getCurTurnIndex() < ($scope.getMode().players - 1);
  }

  $scope.lastTurnReveal = function() {
    return $scope.getCurTurnIndex() == ($scope.getMode().players - 1);
  }
  $scope.inTurn = function() {
    return $scope.getCurTurnIndex() < ($scope.info.livingPlayers.length - 1);
  }

  $scope.lastTurn = function() {
    return $scope.getCurTurnIndex() == ($scope.info.livingPlayers.length - 1);
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  $scope.roles = {
      Villager: {
        desc:"Villager",
        nightResponsibility: "You ponder in the silence of the night who you think is most... Suspicious.",
        team:"Village"
      },
      Werewolf: {
        desc:"Werewolf",
        nightResponsibility: "The night beckons and your thirst for innocent blood is overwhelming. You choose a victim to fulfill your lycanthropic needs.",
        team:"Werewolves"
      }
  };

  $scope.gameModes = [
    {name: "test 4 Players",
        desc: "A simple 4-player game with a Werewolf and 3 Villagers.",
        players: 4,
        roles: [
          {role:wwRules.roles.Werewolf, count: 1},
          {role:wwRules.roles.Villager, count: 3}
        ],
        index: 0
    },
    {name: "7 Players",
          desc: "A simple 7-player game with 2 Werewolves and 5 Villagers.",
          players: 7,
          roles: [
            {role:wwRules.roles.Werewolf, count: 2},
            {role:wwRules.roles.Villager, count: 5}
          ],
          index: 1
    },
    {name:"8 Players",
        desc:"A simple 8-player game with 2 Werewolves and 6 Villagers.",
        players: 8,
        roles: [
            {role:wwRules.roles.Werewolf, count: 2},
            {role:wwRules.roles.Villager, count: 6}
        ],
        index: 2
    },
    {name:"9 Players",
        desc:"A simple 9-player game with 2 Werewolves and 7 Villagers.",
        players: 9,
        roles: [
            {role:wwRules.roles.Werewolf, count: 2},
            {role:wwRules.roles.Villager, count: 7}
        ],
        index: 3
    },
    {name:"10 Players",
        desc:"A simple 10-player game with 3 Werewolves and 7 Villagers.",
        players: 10,
        roles: [
            {role:wwRules.roles.Werewolf, count: 3},
            {role:wwRules.roles.Villager, count: 7}
        ],
        index: 4
    },
    {name:"11 Players",
        desc:"A simple 11-player game with 3 Werewolves and 8 Villagers.",
        players: 11,
        roles: [
            {role:wwRules.roles.Werewolf, count: 3},
            {role:wwRules.roles.Villager, count: 8}
        ],
        index: 5
    },
    {name:"12 Players",
        desc:"A simple 12-player game with 3 Werewolves and 9 Villagers.",
        players: 12,
        roles: [
            {role:wwRules.roles.Werewolf, count: 3},
            {role:wwRules.roles.Villager, count: 9}
        ],
        index: 6
    }
  ]
}]);
