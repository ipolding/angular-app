var articleBrowser = angular.module("articleBrowser", []);

articleBrowser.factory('Data', function() {
	return {message: "I'm data from a service"}


})

articleBrowser.filter('reverse', function(Data){
    return function(text) {
    	return text.split("").reverse().join("") + Data.message;
    }
})

function SecondCtrl($scope, Data){
   $scope.data = Data;
   $scope.turnip = "Sausages";
   $scope.reversedMessage = function(message){
   return message.split("").reverse().join("");



}}


function SpringHello($scope, $http) {
  $scope.text = "sasuages";
  $http.get('http://192.168.1.73:8080/spring-webapp/greeting').
        success(function(data) {
            $scope.greeting = data;
			      });
}


function UserController($scope) {
  $scope.master = {}

  $scope.update = function(user) {
    $scope.master = angular.copy(user);

  };

  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);

  }


}

