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
    .state('app.werewolves', {
      url: '/werewolves',
      views: {
        'menuContent': {
          templateUrl: 'views/werewolves.html',
        }
      },
      resolve: {
         auth: function($auth) {
           return $auth.validateUser();
         }
       }
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

    $urlRouterProvider.otherwise('/home');

    $authProvider.configure({
      apiUrl: 'http://localhost:3000'
  });

});
