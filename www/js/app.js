
  $apiUrl = 'http://localhost:3000';
  angular.module('starter', ['ionic', 'ng-token-auth'])

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
.config(function($authProvider) {
$authProvider.configure({
      apiUrl:                  $apiUrl,
      tokenValidationPath:     '/auth/validate_token',
      signOutUrl:              '/auth/sign_out',
      emailRegistrationPath:   '/auth',
      accountUpdatePath:       '/auth',
      accountDeletePath:       '/auth',
      confirmationSuccessUrl:  window.location.href,
      passwordResetPath:       '/auth/password',
      passwordUpdatePath:      '/auth/password',
      passwordResetSuccessUrl: window.location.href,
      emailSignInPath:         '/auth/sign_in',
      storage:                 'localStorage',
      forceValidateToken:      false,
      validateOnPageLoad:      true,
      proxyIf:                 function() { return false; },
      proxyUrl:                '/proxy',
      omniauthWindowType:      'sameWindow',
      authProviderPaths: {
        github:   '/auth/github',
        facebook: '/auth/facebook',
        google:   '/auth/google'
      },
      tokenFormat: {
        "access-token": "{{ token }}",
        "token-type":   "Bearer",
        "client":       "{{ clientId }}",
        "expiry":       "{{ expiry }}",
        "uid":          "{{ uid }}"
      },
      cookieOps: {
        path: "/",
        expires: 9999,
        expirationUnit: 'days',
        secure: false,
        domain: 'domain.com'
      },
      createPopup: function(url) {
        return window.open(url, '_blank', 'closebuttoncaption=Cancel');
      },
      parseExpiry: function(headers) {

        return (parseInt(headers.expiry) * 1000) || null;
      },
      handleLoginResponse: function(response) {
        return response.data;
      },
      handleAccountUpdateResponse: function(response) {
        return response.data;
      },
      handleTokenValidationResponse: function(response) {
        return response.data;
      }
    });
  })
.config(function($authProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
     url: '/app',
     abstract: true,
     templateUrl: 'templates/menu.html',
     controller: 'AppCtrl'
    })
    .state('signup', {
      url: '/sign-up',
      templateUrl: 'templates/user/sign-up.html',
      controller: 'AuthController as ctrl'

    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/user/login.html',
       controller: 'AuthController as ctrl'
    })
    .state('app.signUp', {
  url: '/sign-up',
  views: {
    'menuContent': {
      templateUrl: 'templates/user/sign-up.html',
      controller: 'AuthController as ctrl'
    }
  }
})

.state('app.login', {
  url: '/login',
  views: {
    'menuContent': {
      templateUrl: 'templates/user/login.html',
      controller: 'AuthController as ctrl'
    }
  }
})
    .state('werewolves', {
      url: '/werewolves',
      templateUrl: 'templates/werewolves.html'
    });


  $urlRouterProvider.otherwise('/');

  $authProvider.configure({
      apiUrl: 'http://localhost:3000'
  });

});
