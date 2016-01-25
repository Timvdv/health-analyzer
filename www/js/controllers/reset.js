angular.module('app.controllers').controller('resetCtrl', ['$scope', '$http', '$location', function($scope, $http, $location)
{
	console.log("LocalStorage has been cleared!");
	localStorage.clear(); 
	window.location.reload(true);  
	$location.path('#/home');
}]);