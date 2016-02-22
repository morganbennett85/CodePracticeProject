app.directive('codeCourse', function(){
  return{
    restrict: 'E',
    scope: {
      
      	course: '='
    },
    templateUrl: 'js/directives/codeCourse.html'
  };  
});