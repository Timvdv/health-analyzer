angular.module('app.controllers').controller('foodLoggerCtrl', ['$scope', '$http', function($scope, $http)
{
    $scope.search = "";
    $scope.details = "no search yet";

    var search = document.getElementById('search');


    var apiKey = "c824314bf06c4db88fa051f86b6084b7";
    var apiSecret = "bc881e00fa744246afa88c0e4e5934b0";

    $scope.searchChange = function ()
    {
        //console.log(search.value);
        // $http.get("http://platform.fatsecret.com/rest/server.api" + search.value).success(function(response)
        // {
        //     console.log(response);
        //     $scope.details = response;
        // });
        // $http.get("http://platform.fatsecret.com/rest/server.api?oauth_consumer_key=" + apiKey +
        //     "&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1245126631&oauth_nonce=1234&oauth_version=1.0&format=json&method=foods.search&food_name=" + search.value).success(function(result)
        //     {
        //         console.log(result);
        //     })
        $http.post("http://platform.fatsecret.com/rest/server.api?a=foo&oauth_consumer_key=c824314bf06c4db88fa051f86b6084b7&format=json&oauth_nonce=abc&oauth_signature_method=HMAC-SHA1&oauth_timestamp=12345678&oauth_version=1.0&z=bar").success(function(result)
        {
            console.log(result);
        });
    };
}]);