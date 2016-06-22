angular.module('werewolvesTwo')
.controller('ImageController',[ '$scope', '$cordovaCamera', 'ImageService',function( $scope, $cordovaCamera, ImageService ){

  $scope.pictureUrl = "http://placehold.it/300x300";

  $scope.takePicture = function() {
    var options = {
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG
    }
    $cordovaCamera.getPicture(options)
    .then(function(data){

      console.log('camera data: ' + angular.toJson(data));

      var picture = "data:image/jpeg;base64," + data;

      ImageService.createImage(picture);
    });
  };

  $scope.takePicturetest = function() {
      ImageService.createImage (picture);
  }



}]);
