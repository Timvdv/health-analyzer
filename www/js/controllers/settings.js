angular.module('app.controllers').controller('settingsCtrl', ['$scope','$http','$location', function($scope, $http, $location)
{
    console.log('settingsCtrl');
    localStorage.animate = true;
    $scope.location = $location.path();
}]);