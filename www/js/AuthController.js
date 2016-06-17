angular.module('starter')
  .controller('AuthController', ['$window', '$state', '$auth', function($window, $state, $auth) {
  var self  = this;

  self.submitRegistration = function(registrationForm) {
    console.log("yp");
    $auth.submitRegistration(registrationForm)
      .then(function(resp) {

        $state.go('werewolves');
      })
      .catch(function(resp) {
        console.warn(resp);
      });
  };

  self.submitLogin = function(loginForm) {
    $auth.submitLogin(loginForm)
      .then(function(resp) {
        $state.go('werewolves');

      })
      .catch(function(resp) {
        console.warn(resp);
      });
  };

  self.signOut = function() {
      $auth.signOut()
        .then(function(resp) {
        })
        .catch(function(resp) {
          console.warn(resp);
        });
    };
}]);
