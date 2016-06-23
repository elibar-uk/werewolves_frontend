angular.module('werewolvesTwo')
  .service('ImageService', ['$http', function($http) {
    var self = this;
    // var imageUrl = 'https://werewolvestwo.herokuapp.com/profiles';
    var imageUrl = 'http://localhost:3000/profiles';

    self.getAll = function() {
      return $http.get(imageUrl)
      .then(function(response) {
        return response.data;
      })
    };

    self.createImage = function(imageData) {
      console.log("working")
      console.log(imageData)
      return $http.post(imageUrl, { image: imageData } );
    };
  }]);
