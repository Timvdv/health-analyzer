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

    $scope.currentMonth.person = $scope.currentMonth.calories > 500 ? $scope.images.Fat : $scope.images.Skinny;

    $scope.updateAvatar = function(el)
    {
        var attr = (el.target.attributes && el.target.attributes.calories) ? el.target.attributes : el.target.parentElement.attributes,
               calories = attr.calories.value,
               month = attr.month.value,
               year = attr.year.value,
               water = attr.water.value,
               vitamins = attr.vitamins.value;

       $scope.currentMonth.calories = calories;
       $scope.currentMonth.month = month;
       $scope.currentMonth.year = year;
       $scope.currentMonth.water = water;
       $scope.currentMonth.vitamins = vitamins;

       $scope.currentMonth.person = $scope.currentMonth.calories > 500 ? $scope.images.Fat : $scope.images.Skinny;

       $scope.$apply;

        $http.post("http://tvdv.me/fatsecret/post.php?calories="+calories+"&water="+water+"&vitamins="+vitamins).success(function(result)
        {
          //done.
        });       
    };

}]);
