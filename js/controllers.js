app.controller('HomeController', function($scope, $http) {
  $scope.submit = function(search) {
    $http
      .get('http://www.omdbapi.com/?s=' + search.text)
      .then(function(results) {
        console.log(results);
      })
  }
})

app.controller('ResultsController', function($scope, $routeParams, $location) {

})

app.controller('MovieController', function($scope, $routeParams, $location) {
  $scope.message = "here";
})