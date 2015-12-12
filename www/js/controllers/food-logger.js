angular.module('app.controllers').controller('foodLoggerCtrl', ['$scope', '$http', function($scope, $http)
{
    $scope.search = "";
    $scope.details = "no search yet";

    var search = document.getElementById('search');

    $scope.searchChange = function (event)
    {
        $http.post("http://tvdv.me/fatsecret/s/search.php?food="+event.search).success(function(result)
        {
            console.log(result.food);
            $scope.details = result.food;
            $scope.$apply;
        });
    };
}]);