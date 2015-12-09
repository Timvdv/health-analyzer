angular.module('app.controllers').controller('dashboardCtrl', ['$scope', '$http', '$location', "timeline", function($scope, $http, $location, timeline)
{
    console.log('dashboardCtrl');
    $scope.location = $location.path();
    
    $scope.images = {
            Droplet: "img/Droplet-Icon.png",
            Graph: "img/Graph-Icon.png",
            Heart: "img/Heart-Icon.png",
            Fat: "img/Person-Fat.png",
            Skinny: "img/Person-Skinny.png"
        };

    $scope.timeline = timeline.getAll();

    console.log(timeline.getCurrentMonth()[0]);

    $scope.currentMonth = timeline.getCurrentMonth()[0];

    $scope.updateAvatar = function(obj)
    {
        var calories = obj.target.parentElement.attributes.calories.value;
        console.log(calories);
    };

}]);
