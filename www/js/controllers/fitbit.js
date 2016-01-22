angular.module('app.controllers').controller('fitbit', ['$scope','$http','$timeout','$location', function($scope, $http, $timeout,$location)
{
    console.log('fitbit');
    $scope.location = $location.path();
    $scope.connected = '';

    function redirect() {
        $timeout(function() {
            window.location = '#/settings';
        },2000);
    }

    $timeout(function() {
        $scope.connected = 'You are successfully connected with your Fitbit';
        var fitbit = document.getElementById('icon-check-fitbit');
        fitbit.className = 'icon ion-checkmark-circled dark';
        redirect();
    }, 3000);
}]);
