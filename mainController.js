app.controller('MainController', ['$scope', function($scope) {
  
  $scope.courses = [
		  {	
			name: "JavaScript",
			progress: 100,
			datetime: new Date(2016, 01, 12, 21, 00, 00, 00) 
			
		  },
		  {	
			name: "AngularJS",
			progress: 100,
			datetime: new Date(2016, 01, 25, 21, 00, 00, 00) 
			
		  },
		  {	
			name: "HTML & CSS",
			progress: 100,
			datetime: new Date(2016, 01, 22, 21, 00, 00, 00) 
			
		  },
		  {	
			name: "Python",
			progress: 24,
			datetime: new Date(2016, 01, 14, 21, 00, 00, 00) 
			
		  },
		  {	
			name: "PHP",
			progress: 13,
			datetime: new Date(2016, 01, 14, 21, 00, 00, 00) 
			
		  },
		  {	
			name: "jQuery",
			progress: 100,
			datetime: new Date(2016, 01, 25, 21, 00, 00, 00) 
			
		  }],
  $scope.indivCourseProg = [
		{
			course: "JavaScript",
			numberOfUnits: 8,
			unitsDone: 8,
			unitProgress: 0,
			date: new Date(2016, 01, 11, 21, 00, 00, 00),
			subjects: "Functions, For/While Loops, Control Flow, Data Structures, & Objects"
		},
		{
			course: "HTML & CSS",
			numberOfUnits: 7,
			unitsDone: 6,
			unitProgress: 0,
			date: new Date(2016, 01, 22, 21, 00, 00, 00),
			subjects: "Lists, Tables, Divs, Spans, Classes, IDs, & Element Positioning"
		},
		{
			course: "AngularJS",
			numberOfUnits: 5,
			unitsDone: 4,
			unitProgress: 0,
			date: new Date(2016, 01, 25, 21, 00, 00, 00),
			subjects: "Directives, Services, & Routing"
		},
		{
			course: "jQuery",
			numberOfUnits: 6,
			unitsDone: 5,
			unitProgress: 0,
			date: new Date(2016, 01, 25, 21, 00, 00, 00),
			subjects: "Functions, Dynamic HTML, Events, & Effects"
		}],
		
	$scope.Division = function(){
		for(var i = 0; i < $scope.indivCourseProg.length; i++)
		{
			$scope.indivCourseProg[i].unitProgress = 
			Math.ceil(($scope.indivCourseProg[i].unitsDone/$scope.indivCourseProg[i].numberOfUnits)*100);
		}
	};
	$scope.angularProjects = [
		{
			name: "Bolt Network",
			description: "Created a movie review board using a controller and a view.",
			completionDate: new Date(2016, 01, 12, 21, 00, 00, 00),
			linkToSite: "https://s3.amazonaws.com/codecademy-content/projects/4/bolt-network-1/index.html"
		},
		{
			name: "Pizza Planet",
			description: "Created a restaraunt menu using filters and directives.",
			completionDate: new Date(2016, 01, 12, 21, 00, 00, 00),
			linkToSite: "https://s3.amazonaws.com/codecademy-content/projects/4/pizza-planet/index.html"
		},
		{
			name: "MOVE",
			description: "Created an exercise tracking app using directives.",
			completionDate: new Date(2016, 01, 12, 21, 00, 00, 00),
			linkToSite: "https://s3.amazonaws.com/codecademy-content/projects/4/move-log/index.html"
		},
		{
			name: "Bolt Network 2",
			description: "Expanded on Bolt Network project by adding custom directives.",
			completionDate: new Date(2016, 01, 14, 21, 00, 00, 00),
			linkToSite: "https://s3.amazonaws.com/codecademy-content/projects/4/bolt-network-2/index.html"
		},
		{
			name: "Gameboard",
			description: "Created a game score display board using custom directives.",
			completionDate: new Date(2016, 01, 14, 21, 00, 00, 00),
			linkToSite: "https://s3.amazonaws.com/codecademy-content/projects/4/gameboard/index.html"
		},
		{
			name: "Feedster",
			description: "Built a news feed using custom directives.",
			completionDate: new Date(2016, 01, 14, 21, 00, 00, 00),
			linkToSite: "https://s3.amazonaws.com/codecademy-content/projects/4/feedster/index.html"
		}],
		$scope.htmlProjects = [
		{
			name: "Broadway",
			description: "Created an HTML and CSS webpage to practice adding a navigation menu, background image and making a button.",
			completionDate: new Date(2016, 01, 22, 21, 00, 00, 00),
			linkToSite: "https://s3.amazonaws.com/codecademy-content/projects/broadway/index.html"
		}]
}]);