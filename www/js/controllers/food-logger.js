angular.module('app.controllers').controller('foodLoggerCtrl', ['$scope', '$http', function($scope, $http)
{
    $scope.search = "";
    $scope.details = "no search yet";
    var counter = 0;
    var search = document.getElementById('search');
    var countdown_interval = null;
    var itemList = [];
    

    $scope.searchChange = function (event)
    {
        $http.post("http://tvdv.me/fatsecret/s/search.php?food="+event.search).success(function(result)
        {
            console.log(result.food);
            $scope.details = result.food;
            $scope.$apply;
        });
    };

    $scope.searchDelay = function (searchEvent)
    {
        clearInterval(countdown_interval);
        counter = 4;
        console.log(counter);
        countdown_interval = setInterval(function(){
            if(counter>0){
                counter--;
                console.log(counter);
            } else{
                console.log("Searching...");
                clearInterval(countdown_interval);
                $scope.searchChange(searchEvent);
            }
        }, 200);
    };

    // WORK IN PROGRESS.
    // Momenteel sla ik de ID van het voedsel op ipv de naam, beschrijving etc. zodat ik later een API call 
    // kan doen met een ID. (Voor het tonen van JOUW eigen lijst) maar weet niet of dit mogelijk/makkelijk is.
    $scope.addItem = function (item)
    {
        console.log(item);
        itemList.push(item);
        localStorage["items"] = JSON.stringify(itemList);
        console.log(localStorage["items"]);
        var element = document.getElementById(item);
        element.className += "checked";
        // Uncomment deze zin om de localstorage te legen.
        //localStorage["items"] = "";
        //itemList.push(JSON.parse(localStorage["items"]));
    }
}]);