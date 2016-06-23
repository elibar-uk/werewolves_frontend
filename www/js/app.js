angular.module('werewolvesTwo', ['ionic', 'ng-token-auth','ngFileUpload'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($authProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'views/menu.html',
      controller: 'WerewolvesController'
    })
    .state('app.rules', {
      url: '/rules',
      views: {
        'menuContent': {
          templateUrl: 'views/rules.html'
        }
      }
    })
    .state('app.instructions', {
      url: '/instructions',
      views: {
        'menuContent': {
          templateUrl: 'views/instructions.html'
        }
      }
    })
    .state('app.roles', {
      url: '/roles',
      views: {
        'menuContent': {
          templateUrl: 'views/roles.html'
        }
      }
    })
    .state('app.villager', {
     url: '/villager',
     views: {
       'menuContent': {
         templateUrl: 'views/cards/villager.html'
       }
     }
   })
   .state('app.werewolf', {
    url: '/werewolf',
    views: {
      'menuContent': {
        templateUrl: 'views/cards/werewolf.html'
      }
    }
  })
    .state('app.seer', {
     url: '/seer',
     views: {
       'menuContent': {
         templateUrl: 'views/cards/seer.html'
       }
     }
   })
   .state('app.sheriff', {
    url: '/sheriff',
    views: {
      'menuContent': {
        templateUrl: 'views/cards/sheriff.html'
      }
    }
  })
  .state('app.witch', {
   url: '/witch',
   views: {
     'menuContent': {
       templateUrl: 'views/cards/witch.html'
     }
   }
  })
  .state('app.little-girl', {
   url: '/little-girl',
   views: {
     'menuContent': {
       templateUrl: 'views/cards/little-girl.html'
     }
   }
  })
  .state('app.white-werewolf', {
   url: '/white-werewolf',
   views: {
     'menuContent': {
       templateUrl: 'views/cards/white-werewolf.html'
     }
   }
  })
  .state('app.wild-child', {
   url: '/wild-child',
   views: {
     'menuContent': {
       templateUrl: 'views/cards/wild-child.html'
     }
   }
  })
  .state('app.cupid', {
   url: '/cupid',
   views: {
     'menuContent': {
       templateUrl: 'views/cards/cupid.html'
     }
   }
  })
  .state('app.werewolves', {
    url: '/werewolves',
    views: {
      'menuContent': {
        templateUrl: 'views/werewolves.html',
      }
    },
  })
      // resolve: {
      //    auth: function($auth) {
      //      return $auth.validateUser();
      //    }
      //  }

    .state('players', {
      url: '/players',
      templateUrl: 'views/game/players.html',
      controller: 'WerewolvesController'
    })
    .state('revealRoleHidden', {
      url: '/revealRoleHidden',
      templateUrl: 'views/game/revealRoleHidden.html',
      controller: 'WerewolvesController'
    })
    .state('revealRoleShow', {
      url: '/revealRoleShow',
      templateUrl: 'views/game/revealRoleShow.html',
      controller: 'WerewolvesController'
    })
    .state('nightPlayHidden', {
      url: '/nightPlayHidden',
      templateUrl: 'views/game/nightPlayHidden.html',
      controller: 'WerewolvesController'
    })
    .state('nightPlayShow', {
      url: '/nightPlayShow',
      templateUrl: 'views/game/nightPlayShow.html',
      controller: 'WerewolvesController'
    })
    .state('dayPlay', {
      url: '/dayPlay',
      templateUrl: 'views/game/dayPlay.html',
      controller: 'WerewolvesController'
    })
    .state('lynch', {
      url: '/lynch',
      templateUrl: 'views/game/lynch.html',
      controller: 'WerewolvesController'
    })
    .state('kill', {
      url: '/kill',
      templateUrl: 'views/game/kill.html',
      controller: 'WerewolvesController'
    })
    .state('gameOver', {
      url: '/gameOver',
      templateUrl: 'views/game/gameOver.html',
      controller: 'WerewolvesController'
    })
    .state('app.account', {
      url: '/account',
      views: {
        'menuContent': {
          templateUrl: 'views/user/account.html'
        }
      },
      controller: 'UserController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'UserController'
    })

    .state('sign_up', {
      url: '/sign_up',
      templateUrl: 'views/user/sign_up.html',
      controller: 'UserController'
    })
    .state('sign_in', {
      url: '/sign_in',
      templateUrl: 'views/user/sign_in.html',
      controller: 'UserController'
    });

    $urlRouterProvider.otherwise('home');

    $authProvider.configure({
      apiUrl: 'http://localhost:3000'
  });

});
