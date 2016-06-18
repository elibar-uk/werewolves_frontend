angular.module('werewolvesTwo', ['ionic', 'ng-token-auth'])


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
    .state('sign_up', {
      url: '/sign_up',
      templateUrl: 'views/user/sign_up.html',
      controller: 'UserController'
    })
    .state('sign_in', {
      url: '/sign_in',
      templateUrl: 'views/user/sign_in.html'
    })
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    })
    .state('werewolves', {
      url: '/werewolves',
      templateUrl: 'views/werewolves.html',
      controller: 'WerewolvesController',
      resolve: {
         auth: function($auth) {
           return $auth.validateUser();
         }
       }
    })
    .state('rules', {
      url: '/rules',
      templateUrl: 'views/rules.html'
    })
    .state('names', {
      url:'/names',
      templateUrl: 'views/names.html'
    });


    $urlRouterProvider.otherwise('/');

    $authProvider.configure({
      apiUrl: 'http://localhost:3000'
  });

});
