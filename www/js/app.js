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
    .state('werewolves', {
      url: '/',
      templateUrl: 'views/werewolves.html'
    });

    $urlRouterProvider.otherwise('/');

    $authProvider.configure({
      apiUrl: 'http://localhost:3000'
  });

});
