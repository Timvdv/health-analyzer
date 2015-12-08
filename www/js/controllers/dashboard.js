angular.module('app.controllers').controller('dashboardCtrl', ['$scope', '$http', '$location', "timeline", function($scope, $http, $location, timeline)
{
    console.log('dashboardCtrl');
    $scope.location = $location.path();

    $scope.timeline = timeline;

    $scope.updateAvatar = function(obj)
    {
        var calories = obj.target.parentElement.attributes.calories.value;
    };

}]);
