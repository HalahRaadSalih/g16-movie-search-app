var app = angular.module('myapp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'partials/home.html',
    controller: 'HomeController'
  })
  .when('/show/:id', {
    templateUrl : 'partials/movie.html',
    controller: 'MovieController'
  })
  .otherwise({
    redirectTo: "/"
  })

  $locationProvider.html5Mode(true);
})