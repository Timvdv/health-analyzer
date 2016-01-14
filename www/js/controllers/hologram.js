angular.module('app.controllers').controller('hologram', ['$scope','$http','$timeout','$location', function($scope, $http, $timeout,$location)
{
    console.log('hologram');
    $scope.location = $location.path();
    $scope.connected = '';

    function redirect() {
        $timeout(function() {
            window.location = '#/settings';
        },2000);
    }

    $timeout(function() {
        $scope.connected = 'Je bent succesvol verbonden met je Hologram';
        var fitbit = document.getElementById('icon-check-hologram');
        fitbit.className = 'icon ion-checkmark-circled dark';
        redirect();
    }, 3000);
}]);
