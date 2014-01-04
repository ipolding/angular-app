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

   $scope.reversedMessage = function(message){
   return message.split("").reverse().join("");



}}
