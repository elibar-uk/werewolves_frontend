angular.module('werewolvesTwo')
.controller('ImageController', ['ImageService', '$scope', '$cordovaCamera', function( ImageService, $scope, $cordovaCamera ){

  $scope.pictureUrl = "http://placehold.it/300x300";


 //  var self = this;
 //  self.getImages = getImages;
 //
 // function getImages() {
 //   ImageService.getAll()
 //   .then(function(response){
 //     self.images = response;
 //   });
 // }
 //
 // function uploadImage() {
 //   ImageService.createImage(image);
 // }
 // $scope.upload = function (file) {
 //    Upload.upload({
 //        url: 'http://localhost:3000/users',
 //        method: 'POST',
 //        // fields: { 'avatar[user_id]': $scope.name },
 //        file: file,
 //        // fileFormDataName: 'image'
 //
 //    }).then(function (resp) {
 //
 //      console.log(resp)
 //        console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
 //
 //    }, function (resp) {
 //        console.log('Error status: ' + resp.status);
 //    }, function (evt) {
 //        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
 //        console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
 //    });
 //  };
}]);
