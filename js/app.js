var app = angular.module('myapp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/results', {
    templateUrl : 'parials/results.html',
    controller: 'ResultsController'
  })
  .when('/show/:id', {
    templateUrl : 'partials/movie.html',
    controller: 'MovieController'
  })
  .otherwise({
    redirectTo: "/"
  })
})