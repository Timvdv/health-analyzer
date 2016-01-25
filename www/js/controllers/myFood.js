angular.module('app.controllers').controller('myFoodCtrl', ['$scope', '$http', '$location', "statusMessage", function($scope, $http, $location, statusMessage)
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
    var totalFat = 0;
    var calorieButton = document.getElementById('totalCalories');
    var fatButton = document.getElementById('totalFat');
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
        if (currentDay == 31 && $scope.plus == true)
        {
            currentDay = 0;
            currentMonth++;
        }
        if (currentDay == 1 && $scope.minus == true)
        {
            currentDay = 32;
            currentMonth--;
        }
        $scope.plus = false;
        $scope.minus = false;
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
        $scope.totalFat = 0;

        totalCalories = 0;
        totalFat = 0;
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
                    totalFat += items[getDate.getMonth()].items[i].fat;
                    $scope.totalCalories = totalCalories;
                    $scope.totalFat = totalFat;
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
                    $scope.totalFat = 0;
        }
        $scope.$apply; 
        // $scope.calorieChecker($scope.totalCalories);
    };
    
    $scope.checkForMatch();
//===========================================================================================================
// CALORIE CHECKER FUNCTION
//===========================================================================================================
    $scope.calorieChecker = function(calories, fat)
    {
        var fatAmount = (calories / 100 * 30)/9;
        console.log(fatAmount);

        if (calories >= 0 && calories <= 1249 || calories >= 4100)
        {
            calorieButton.className = "calorie-negative";
        }
        if (calories >= 1250 && calories <= 2499 || calories >= 2900 && calories <= 4099)
        {
            calorieButton.className = "calorie-danger";
        }
        if (calories >= 2500 && calories <= 2899)
        {
            calorieButton.className = "calorie-positive";
        }


        if (fat >= (fatAmount*0.95) && fat <= (fatAmount*1.05))
        {
            fatButton.className = "calorie-positive";
            console.log("Positief!");
            console.log("min:", (fatAmount*0.95));
            console.log("max:", (fatAmount*1.05));
        }
        if (fat >= (fatAmount*0.80) && fat <= (fatAmount*0.94) || fat >= (fatAmount*1.06) && fat <= (fatAmount*1.20))
        {
            fatButton.className = "calorie-danger";
            console.log("Watch those calories!");
            console.log("min:", (fatAmount*0.80));
            console.log("max:", (fatAmount*0.94));
            console.log("min:", (fatAmount*1.06));
            console.log("max:", (fatAmount*1.20));
        }
        if (fat <= (fatAmount*0.65) || fat >= (fatAmount*1.21))
        {
            fatButton.className = "calorie-negative";
        }
        console.log(fat);
    };


    $scope.calorieChecker($scope.totalCalories, $scope.totalFat);
//===========================================================================================================
// PREVIOUS DAY FUNCTION
//=========================================================================================================== 
    $scope.previousDay = function()
    {
        currentDay--;
        $scope.minus = true;
        $scope.numberFix();
        
        dateString = "2016-" + monthFix + "-" + dayFix;
        dateContainer.innerHTML = dateString;
        
        $scope.checkForMatch(String(dateString));
        $scope.calorieChecker($scope.totalCalories, $scope.totalFat);
    };

//===========================================================================================================
// NEXT DAY FUNCTION
//=========================================================================================================== 
    $scope.nextDay = function()
    {
        currentDay++;
        $scope.plus = true;
        $scope.numberFix();

        dateString = "2016-" + monthFix + "-" + dayFix;
        dateContainer.innerHTML = dateString;

        $scope.checkForMatch(String(dateString));
        $scope.calorieChecker($scope.totalCalories, $scope.totalFat);
    };

//===========================================================================================================
// NEXT DAY FUNCTION
//=========================================================================================================== 
    $scope.changeStatus = function()
    {
        localStorage['status'] == "false";
        statusMessage.emptyMessage();
    }
}]);
