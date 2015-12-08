angular.module('app.controllers').controller('foodLoggerCtrl', ['$scope', '$http', function($scope, $http)
{
    $scope.search = "";
    $scope.details = "no search yet";

    var search = document.getElementById('search');

    $scope.searchChange = function ()
    {
        console.log(search.value);
        $http.get("http://www.omdbapi.com/?t=" + search).success(function(response)
        {
            $scope.details = response;
        });
    };
}]);