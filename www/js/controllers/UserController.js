angular.module('werewolvesTwo')
.controller('UserController', function($location, $rootScope, $scope, $auth, $state, $window){

  $scope.handleRegBtnClick = function() {
    $auth.submitRegistration($scope.registrationForm)
      .then(function(resp) {
      $location.path('/app');
      $window.location.reload();
      //  $state.go('app');
      })
      .catch(function(resp) {
        //error pages
      });
    };
    $scope.handleLoginBtnClick = function() {
      $auth.submitLogin($scope.loginForm)
        .then(function(resp) {
           $state.go('/app');
        })
        .catch(function(resp) {
          // handle error response
        });
    };
    $scope.handleSignOutBtnClick = function() {
    $auth.signOut()
      .then(function(resp) {
        $state.go('/sign_out');
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

    // Upload Picture on file select or drop
    // $scope.upload = function (file) {
    //   Upload.upload({
    //     url: 'avatars/' + avatar.id + '.json',
    //     method: 'PUT',
    //     headers: { 'Content-Type': false },
    //     fields: {
    //       'avatar[title]': avatar.title,
    //       'avatar[body]': avatar.body,
    //       'avater[image]': file
    //     },
    //     file: file,
    //     sendFieldsAs: 'json'
    //   }).then(function (resp) {
    //     console.log('Success ' + resp.config.file.name + 'uploaded. Response: ' + resp.data);
    //   }, function (resp) {
    //     console.log('Error status: ' + resp.status);
    //   }, function (evt) {
    //     var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    //     console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
    //   });
    // };


    $rootScope.$on('auth:login-success', function(ev, user) {
      $scope.user = user;
      $location.path('/');
    });

    $scope.$on('devise:new-registration', function (e, user){
      $scope.user = user;
    });

    $scope.$on('devise:login', function (e, user){
      $scope.user = user;
    });


    // // this.user = $auth.validateUser().then(function(resp){
    //   return resp.uid
    // })

    // $rootScope.$on('auth:login-error', function(ev, reason) {
    //   alert('auth failed because', reason.errors[0]);
    // });
    $rootScope.$on('auth:logout-success', function(ev) {
      $location.path('/sign_out');
    });
  });
