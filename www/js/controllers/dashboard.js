angular.module('app.controllers').controller('dashboardCtrl', ['$scope', '$http', '$location', function($scope, $http, $location)
{
    console.log('dashboardCtrl');
    $scope.location = $location.path();
}]);
