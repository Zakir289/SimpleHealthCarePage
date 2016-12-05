
var app = angular.module('AthenaTest', [
  'ngRoute'
]);


app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider  
    // careers
    .when("/careers", {templateUrl: "partials/careers.html", controller: "CareerCtrl"})

}]);


app.controller('CareerCtrl', function (/*written for name sake */) {
  console.log("controller for name sake.");

  
});