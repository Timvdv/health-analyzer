angular.module('app.controllers').controller('homeCtrl', ['$scope', '$http', '$location', function($scope, $http, $location)
{
    console.log('homeCtrl1');
    $scope.location = $location.path();

}]);