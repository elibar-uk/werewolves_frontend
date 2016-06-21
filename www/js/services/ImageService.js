angular.module('werewolvesTwo')
  .service('ImageService', ['$http', function($http) {
    var self = this;
    var imageUrl = 'http://localhost:3000/avatar';

    self.getAll = function() {
      return $http.get(imageUrl)
      .then(function(response) {
        return response.data;
      })
    };

    self.createImage = function(imageData) {
      return $http.post(imageUrl, { image: imageData });
    };
  }]);
