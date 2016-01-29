app.controller('HomeController', function($scope, $http, $location, movieService) {
  $scope.submit = function(search) {
    $http
      .get('http://www.omdbapi.com/?s=' + search.text)
      .then(function(results) {
        // console.log(results)
        movieService.movies = results.data.Search;
        $location.path('/results');
      })
  }
})

app.controller('ResultsController', function($scope, $routeParams, $location, movieService) {
  $scope.results = movieService.movies;
})

app.controller('MovieController', function($scope, $http, $routeParams, $location) {
  $http
    .get('http://www.omdbapi.com/?i=' + $routeParams.id + '&plot=full&r=json')
    .then(function(movie) {
      $scope.details = ["Title", "Year", "Rated", "Released", "Runtime", "Genre", "Director", "Writer", "Awards", "Metascore", "imdbVotes"]
      $scope.movie = movie.data;
    })
})