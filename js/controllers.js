app.controller('HomeController', function($scope) {
  $scope.message = "In home controller"

  $scope.submit = function(search) {
    console.log("here");
  }
})

app.controller('ResultsController', function($scope, $routeParams, $location) {

})

app.controller('MovieController', function($scope, $routeParams, $location) {
  $scope.message = "here";
})