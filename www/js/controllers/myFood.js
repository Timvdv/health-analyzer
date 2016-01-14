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

    var totalCalories = 0;
    var calorieButton = document.getElementById('totalCalories');

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
    
    if(localStorage.items && !localStorage.items.length)
    {
       localStorage.items = items;
    }

    var tempArray = [];

//===========================================================================================================
// CHECK FOR MATCH FUNCTION
//=========================================================================================================== 

    $scope.checkForMatch = function (date)
    {
        tempArray = [];
        $scope.dailyItems = "";
        $scope.totalCalories = 0;
        totalCalories = 0;
        if(localStorage['items'])
        {
            items = localStorage.items && localStorage.items.length ? JSON.parse(localStorage.items) : []; 
        }
        

        // if(!(getDate.getMonth() in items))
        // {
        //     $scope.message = "Nothing added yet."
        //     return $scope.$apply;
        // }
        if(localStorage['items'])
        {
            for (var i = items[getDate.getMonth()].items.length - 1; i >= 0; i--) {
                if(items[getDate.getMonth()].items[i].date == date || items[getDate.getMonth()].items[i].date == String(dateString))
                {
                    console.log("true!");
                    
                    tempArray.push(items[getDate.getMonth()].items[i]);
                    totalCalories += items[getDate.getMonth()].items[i].calories;
                    $scope.totalCalories = totalCalories;
                    $scope.message = "";
                }
                else if(items[getDate.getMonth()].items[i].date != date || items[getDate.getMonth()].items[i].date != String(dateString))
                {
                    console.log("False!");
                    $scope.dailyItems = "";            
                    $scope.$apply;
                }
            };
        }
        $scope.dailyItems = tempArray;
        if(!$scope.dailyItems.length){
                    $scope.message = "Nothing added yet.";
                    $scope.totalCalories = 0;
        }
        $scope.$apply; 
        // $scope.calorieChecker($scope.totalCalories);
    };
    
    $scope.checkForMatch();
//===========================================================================================================
// CALORIE CHECKER FUNCTION
//===========================================================================================================
    $scope.calorieChecker = function(calories)
    {
        if (calories >= 0 && calories <= 1249)
        {
            calorieButton.className = "calorie-negative";
        }
        if (calories >= 1250 && calories <= 2499)
        {
            calorieButton.className = "calorie-danger";
        }
        if (calories >= 2500 && calories <= 2899)
        {
            calorieButton.className = "calorie-positive";
        }
        if (calories >= 2900 && calories <= 4099)
        {
            calorieButton.className = "calorie-danger";
        }
        if (calories >= 4100)
        {
            calorieButton.className = "calorie-negative";
        }
    };

    $scope.calorieChecker($scope.totalCalories);
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
        $scope.calorieChecker($scope.totalCalories);
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

        $scope.checkForMatch(String(dateString));
        $scope.calorieChecker($scope.totalCalories);
    };
}]);
