app.controller('HomeController', function($scope) {
  $scope.message = "In home controller"
})

app.controller('MovieController', function($scope, $routeParams, $location) {
  $scope.message = $routeParams.id;
})