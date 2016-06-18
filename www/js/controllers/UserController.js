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
        alert('goodbye');

      })
      .catch(function(resp) {
        // handle error response
      });
    };
    $scope.handlePwdResetBtnClick = function() {
      $auth.requestPasswordReset($scope.pwdResetForm)
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
    };




    $rootScope.$on('auth:login-success', function(ev, user) {
      $scope.user = user;
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
    // // this.user = $auth.validateUser().then(function(resp){
    //   return resp.uid
    // })

    // $rootScope.$on('auth:login-error', function(ev, reason) {
    //   alert('auth failed because', reason.errors[0]);
    // });
    $rootScope.$on('auth:logout-success', function(ev) {
      alert('goodbye');
    });
  });
