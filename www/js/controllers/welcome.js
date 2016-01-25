angular.module('app.controllers').controller('welcomeCtrl', ['$scope','$http','$timeout','$location', function($scope, $http, $timeout,$location)
{
    $scope.location = $location.path();
    if(localStorage.user)
    {
        window.location = '#/';
    }
    function redirect() {
        $timeout(function() {
            window.location = '#/questions';
        },2500);
    }

    $timeout(function() {
        redirect();
    }, 3000);

    $scope.$watch("location", function(){
        redirect();
    })
}]);
