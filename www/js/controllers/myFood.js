angular.module('app.controllers').controller('myFoodCtrl', ['$scope', '$http', '$location', function($scope, $http, $location)
{
    var getDate = new Date();
    var currentDate = getDate.toJSON().slice(0,10);
    var currentMonth = getDate.getMonth()+1;

    var dayRegex = /\d+\-\d+\-(\d+)/ig;
    var regexCal = dayRegex.exec(currentDate);
    var currentDay = parseInt(regexCal[1]);
    var dateContainer = document.getElementById('date');
    var items = [];
    var monthFix = currentMonth;
    var dayFix = currentDay;
//===========================================================================================================
// NUMBER FIX FUNCTION
//=========================================================================================================== 
    $scope.numberFix = function()
    {
        if(String(currentMonth).length == 1)
        {
            monthFix = "0"+currentMonth;
        }
        else{
            monthFix = currentMonth;
        }

        if(String(currentDay).length == 1)
        {
            dayFix = "0"+currentDay;
        }
        else{
            dayFix = currentDay;
        }
    }
    $scope.numberFix();

    var dateString = "2016-" + monthFix + "-" + dayFix;
    dateContainer.innerHTML = dateString;
    if(localStorage["items"] != ""){
       items = JSON.parse(localStorage["items"]); 
    }
    
    var tempArray = [];
//===========================================================================================================
// CHECK FOR MATCH FUNCTION
//===========================================================================================================     
    $scope.checkForMatch = function (date)
    {
        tempArray = [];
        $scope.dailyItems = "";
        items = JSON.parse(localStorage["items"]); 
        //console.log("Checking...");
        //console.log("Items date: ", items[getDate.getMonth()].items[14].date); //Dit is om even te vergelijken in de console. (deze heeft als datum de 12e).
        //console.log("Datestring: ", dateString);
        for (var i = items[getDate.getMonth()].items.length - 1; i >= 0; i--) {
            if(items[getDate.getMonth()].items[i].date == date || items[getDate.getMonth()].items[i].date == String(dateString))
            {
                console.log("true!");
                tempArray.push(items[getDate.getMonth()].items[i]);
                $scope.message = "";
            }
            else if(items[getDate.getMonth()].items[i].date != date || items[getDate.getMonth()].items[i].date != String(dateString))
            {
                console.log("False!");
                $scope.dailyItems = "";
                $scope.message = "Nothing added yet."
                $scope.$apply;
            }
        };
        $scope.dailyItems = tempArray;
        $scope.$apply; 
    };
    
    $scope.checkForMatch();
//===========================================================================================================
// PREVIOUS DAY FUNCTION
//=========================================================================================================== 
    $scope.previousDay = function()
    {
        currentDay--;
        $scope.numberFix();
        
        dateString = "2016-" + monthFix + "-" + dayFix;
        dateContainer.innerHTML = dateString;
        
        $scope.checkForMatch(String(dateString));

    };

//===========================================================================================================
// NEXT DAY FUNCTION
//=========================================================================================================== 
    $scope.nextDay = function()
    {
        currentDay++;
        $scope.numberFix();

        dateString = "2016-" + monthFix + "-" + dayFix;
        dateContainer.innerHTML = dateString;

        $scope.checkForMatch();
        
    };
}]);
