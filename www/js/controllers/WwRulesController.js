angular.module('werewolvesTwo')
.controller('WwRulesController',['$state','$scope', '$ionicSideMenuDelegate', function($state,$scope,$ionicSideMenuDelegate){
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.gameModes = [
    {name: "test 4 Players",
        desc: "A simple 4-player game with a Werewolf and 3 Villagers.",
        players: 4,
        roles: [
          {role:wwRules.roles.Werewolf, count: 1},
          {role:wwRules.roles.Villager, count: 3}
        ]
    },
    {name: "7 Players",
          desc: "A simple 7-player game with 2 Werewolves and 5 Villagers.",
          players: 7,
          roles: [
            {role:wwRules.roles.Werewolf, count: 2},
            {role:wwRules.roles.Villager, count: 5}
          ]
    },
    {name:"8 Players",
        desc:"A simple 8-player game with 2 Werewolves and 6 Villagers.",
        players: 8,
        roles: [
            {role:wwRules.roles.Werewolf, count: 2},
            {role:wwRules.roles.Villager, count: 6}
        ]
    },
    {name:"9 Players",
        desc:"A simple 9-player game with 2 Werewolves and 7 Villagers.",
        players: 9,
        roles: [
            {role:wwRules.roles.Werewolf, count: 2},
            {role:wwRules.roles.Villager, count: 7}
        ]
    },
    {name:"10 Players",
        desc:"A simple 10-player game with 3 Werewolves and 7 Villagers.",
        players: 10,
        roles: [
            {role:wwRules.roles.Werewolf, count: 3},
            {role:wwRules.roles.Villager, count: 7}
        ]
    },
    {name:"11 Players",
        desc:"A simple 11-player game with 3 Werewolves and 8 Villagers.",
        players: 11,
        roles: [
            {role:wwRules.roles.Werewolf, count: 3},
            {role:wwRules.roles.Villager, count: 8}
        ]
    },
    {name:"12 Players",
        desc:"A simple 12-player game with 3 Werewolves and 9 Villagers.",
        players: 12,
        roles: [
            {role:wwRules.roles.Werewolf, count: 3},
            {role:wwRules.roles.Villager, count: 9}
        ]
    }
  ]

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
}]);
