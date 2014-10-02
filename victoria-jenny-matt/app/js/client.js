require('angular/angular');
require('angular-route');

(function(){
  var gemstoreApp = angular.module('gemstoreApp', ['ngRoute']);

  gemstoreApp.controller('storeController', function($scope) {
    $scope.products = gems;
    $scope.tab = 1

    $scope.selectTab = function(setTab) {
      $scope.tab = setTab;
    }
    $scope.isSelected = function(checkTab) {
      return $scope.tab === checkTab;
    }
  });

  var gems = [
    {
      name: 'Dodecahedron Gem',
      price: 2.95,
      description: 'A really cool gem!',
      canPurchase: true,
      soldOut: false,
      image:'/img/dodecahedron.png',
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "guy@gmail.com"
        },
        {
          stars: 4,
          body: "This is great!",
          author: "gal@gmail.com"
        }
      ]
    },

    {
      name: 'Pentagonal Gem',
      price: 5.9,
      description: 'It has five sides!',
      canPurchase: false,
      soldOut: false,
      image:'/img/octagon.png'
    },

    {
      name: 'Octogonal Gem',
      price: 7.9,
      description: 'All the rave in Flatland!',
      canPurchase: true,
      soldOut: true,
      image:'/img/pentagon.png'
    }
  ];

  gemstoreApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'storeController'
      })
  }]);
})();
