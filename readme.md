## Movie Search Application 

This is the repo for the unit-02 angularJS assignment.

###Features 

- TDD with Angular
- [OMBD API](http://www.omdbapi.com/)
- ngRoute
- $http service
- search for movies based on titles
- access a movie
- still be able to search a movie even if you're in the one movie route

### Necessary Links
- URL to search for movies

	```
 	http://www.omdbapi.com/?s=star
 
 	```
- URL to get movie by ID

	```
	http://www.omdbapi.com/?i=[movie]&plot=full&r=json
	
	```
- URL to load AngularJS

	```	
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-route.js"
	```
- URL to load ngRoute

	```
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-route.js"
	```	
		
<br>
### Folder Sturcture
	├── css
	├── index.html
	├── js
	│   └── app.js
	├── partials
	│ 
	│   └── home.html
	└── readme.md		
<br>	
### ngRoute

ngRoute is what you use for routing in AngularJS. 

How do we use ngRoute? 

Steps:

- Load ngRoute script in your html page 

```
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-route.js"
	
```

- Add the directive ` ng-view ` to your html page (inside your body tags). In order for this directive to work, you need to load the ngRoute first. What does this dirctive does? It renders the template associated with a specfic route. That will make more sense after few steps. 

-  Head to your `app.js` file and add `ngRoute` as a dependency 

	```
	var app = angular.module('app', ['ngRoute']);

	```
- to specify which route renders what page, do the following : (this code assumes you have a directory called `partials`, inside of it there are two html pages called `home.html` and `show.html`). `ng-view` will be able to tell which route renders what depending on what you have set in you when statmenets in config.

	```
		// configure
		app.config(function($routeProvider){
		  $routeProvider
			  .when('/',{
			    templateUrl: 'partials/home.html',
			    controller: "HomeController"
			  })
		    .when('/show', {
		      templateUrl: 'partials/show.html',
		      controller: 'ShowController'
		    })
		});
		
		// controllers
		app.controller('HomeController', function($scope){
  			console.log('HomeController');
		});

		app.controller('ShowController', function($scope){
		  console.log('Show Controllers');
		});

	```
	
- To test that those routes work, open a python server
	
	```
	$ python -m SimpleHTTPServer
		
	```
		
- 	Navigate to you browser, `localhost:8000` or whatever port that you get in console. This route will load the home page you're having. If your route is `localhost:8000/show` this will load the show html page you have. 

	
	