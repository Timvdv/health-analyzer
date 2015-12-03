angular.module('app.controllers').controller('graphCtrl', ['$scope', '$http', '$location', function($scope, $http, $location)
{
    console.log('graphCtrl1');
    $scope.location = $location.path();

}]);