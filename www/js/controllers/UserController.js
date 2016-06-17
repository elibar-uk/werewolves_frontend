angular.module('werewolvesTwo')
.controller('UserController', function($location, $rootScope, $scope, $auth, $state){
  $scope.handleRegBtnClick = function() {
    $auth.submitRegistration($scope.registrationForm)
      .then(function(resp) {
       $state.go('werewolves');
      })
      .catch(function(resp) {
        //error pages
      });
    };
    $scope.handleLoginBtnClick = function() {
      $auth.submitLogin($scope.loginForm)
        .then(function(resp) {
           $state.go('/');
        })
        .catch(function(resp) {
          // handle error response
        });
    };
    $scope.handleSignOutBtnClick = function() {
    $auth.signOut()
      .then(function(resp) {
        debugger
        $state.go('/');

      })
      .catch(function(resp) {
        // handle error response
      });
    };
    $rootScope.$on('auth:login-success', function(ev, user) {
      alert('Welcome ', user.email);
      $location.path('/')
    });

    $scope.$on('devise:new-registration', function (e, user){
      $scope.user = user;
    });

    $scope.$on('devise:login', function (e, user){
      $scope.user = user;
    });

    $scope.$on('devise:logout', function (e, user){
      $scope.user = {};

    });
    $auth.validateUser().then(function(resp){
      console.log(resp.uid)
    })

    // $rootScope.$on('auth:login-error', function(ev, reason) {
    //   alert('auth failed because', reason.errors[0]);
    // });
    $rootScope.$on('auth:logout-success', function(ev) {
      alert('goodbye');
    });
  });
