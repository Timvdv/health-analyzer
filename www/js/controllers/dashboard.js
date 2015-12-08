angular.module('app.controllers').controller('dashboardCtrl', ['$scope', '$http', '$location', "timeline", function($scope, $http, $location, timeline)
{
    console.log('dashboardCtrl');
    $scope.location = $location.path();

    $scope.timeline = timeline;

    $scope.updateAvatar = function(obj)
    {
        var calories = 0;
    };
    
    $scope.images = {
	    Droplet: "img/Droplet-Icon.png",
	    Graph: "img/Graph-Icon.png",
	    Heart: "img/Heart-Icon.png",
	    Fat: "img/Person-Fat.png",
	    Skinny: "img/Person-Skinny.png"
	};


}]);
