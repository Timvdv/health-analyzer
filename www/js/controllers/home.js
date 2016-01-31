angular.module('app.controllers').controller('homeCtrl', ['$scope', '$http', '$location', function($scope, $http, $location)
{
    console.log('homeCtrl1');
    $scope.location = $location.path();

    if(!localStorage.user)
    {
        window.location = '#/questions';
    }

    var get_user_data = localStorage.getItem('user');   
    var user_data = JSON.parse(get_user_data);

    var user_weight = 0;
    var user_length = 0;

    if(user_data && user_data.weight && user_data.length)
    {
        user_weight = user_data.weight;
        user_length = user_data.length;
    }

    var bmi_result;
    var bmi_advice;
    user_length = user_length / 100;
    var bmi_calculation = user_weight / user_length / user_length;
    bmi_calculation = bmi_calculation.toFixed();

    if(bmi_calculation < 18.5) {
        bmi_result = "Ondergewicht";
        bmi_advice = "je lijdt aan ondergewicht. Probeer wat meer te eten, maar probeer er wel voor te zorgen dat je gezond aankomt. Zorg ervoor dat" +
        " geen ongezonde dingen gaat eten.";
    }
    if(bmi_calculation >= 18.5 && bmi_calculation < 25) {
        bmi_result = "Gezond gewicht";
        bmi_advice = "Goed bezig! Je hebt een gezond gewicht. Probeer ervoor te zorgen dat je dit gewicht vasthoudt. Zorg er wel voor dat je gezond blijft eten. Blijfen sporten kan natuurlijk ook geen kwaad!";
    }
    if(bmi_calculation >= 25 && bmi_calculation < 30) {
        bmi_result = "Overgewicht";
        bmi_advice = "Je lijdt aan overgewicht. Je bent iets te zwaar. Probeer wat minder te eten of probeer meer gezond te eten. Je kan er ook aan denken om wat meer te gaan sporten.";
    }
    if(bmi_calculation >= 30 && bmi_calculation < 35) {
        bmi_result = "Obesitas";
        bmi_advice = "Je lijdt aan obesitas en bent daarom te zwaar voor je gewicht. Probeer meer te spoten en let goed op je eten. Zorg ervoor " +
        "dat je een voedingspatroon voor een lange tijd kan volhouden";
    }
    if(bmi_calculation >= 35) {
        bmi_result = "Extreme obesitas";
        bmi_advice = "Oei.. je lijdt aan extreme obesitas. Dat is niet goed! Je bent veel te zwaar en wij raden je aan om contact op te nemen " +
        "met een huisarts om te kijken wat er gedaan kan worden. Een maagverkleining kan tot deze opties behoren.";
    }

    $scope.weight = user_weight;
    $scope.length = user_length;
    $scope.bmi_result = bmi_result;
    $scope.bmi = bmi_calculation;
    $scope.bmi_advice = bmi_advice;


//===========================================================================================================
// DYNAMIC HOME CONTENT
//=========================================================================================================== 

    var getDate = new Date();
    var currentDate = getDate.toJSON().slice(0,10);
    var currentMonth = getDate.getMonth()+1;

    var dayRegex = /\d+\-\d+\-(\d+)/ig;
    var regexCal = dayRegex.exec(currentDate);
    var currentDay = parseInt(regexCal[1]);
    
    var items = [];
    var tempArray = [];
    var yesterdayArray = [];
    var dayBeforeYesterdayArray = [];

    var monthFix = currentMonth;
    var dayFix = currentDay;

    var todayLength = -1;

    $scope.resfreshArray = function()
    {
        console.log("refresh");
        $scope.lastItemToday = (tempArray.length > 0 ? tempArray[0].name : "Nothing Added Yet.");
        $scope.lastItemYesterday = (yesterdayArray.length > 0 ? yesterdayArray[0].name : "Nothing Added Yet.");
        $scope.lastItemDayBeforeYesterday = (dayBeforeYesterdayArray.length > 0 ? dayBeforeYesterdayArray[0].name : "Nothing Added Yet.");
        $scope.$apply;
        console.log("Refresh loop: " ,$scope.lastItemToday,$scope.lastItemYesterday,$scope.lastItemDayBeforeYesterday );
    }

    $scope.numberFix = function()
    {
        console.log("numberfix");
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
    var dateStringToday = "2016-" + monthFix + "-" + dayFix;
    var dateStringYesterday = "2016-" + monthFix + "-" + (dayFix-1);
    var dateStringDayBeforeYesterday = "2016-" + monthFix + "-" + (dayFix-2);
    console.log(dateStringYesterday);

    $scope.today = dateStringToday; 
    $scope.yesterday = dateStringYesterday;
    $scope.dayBeforeYesterday = dateStringDayBeforeYesterday;
    

    $scope.checkForMatch = function(date)
    {
        tempArray = [];
        yesterdayArray = [];
        dayBeforeYesterdayArray = [];
        $scope.totalCaloriesToday = 0;
        $scope.totalFatToday = 0;
        $scope.totalCaloriesYesterday = 0;
        $scope.totalFatYesterday = 0;
        $scope.totalCaloriesDayBeforeYesterday = 0;
        $scope.totalFatDayBeforeYesterday = 0;

        totalCalories = 0;
        totalFat = 0;

        if(localStorage['items'])
        {
            items = localStorage.items && localStorage.items.length ? JSON.parse(localStorage.items) : []; 
        }
        if(localStorage['items']){
            //===========================================================================================================
            // Array for TODAY
            //=========================================================================================================== 
            for (var i = items[getDate.getMonth()].items.length - 1; i >= 0; i--) {
                if(items[getDate.getMonth()].items[i].date == date || items[getDate.getMonth()].items[i].date == String(dateStringToday))
                {
                    console.log("true!");
                    tempArray.push(items[getDate.getMonth()].items[i]);
                    totalCalories += items[getDate.getMonth()].items[i].calories;
                    totalFat += items[getDate.getMonth()].items[i].fat;
                    $scope.totalCaloriesToday = totalCalories;
                    $scope.totalFatToday = totalFat;
                    todayLength++;
                    console.log(todayLength);

                    // $scope.lastItemToday = items[getDate.getMonth()].items[i].name;
                }
                else if(items[getDate.getMonth()].items[i].date != date || items[getDate.getMonth()].items[i].date != String(dateStringToday))
                {
                    console.log("False!");        
                    $scope.$apply;
                }
            }
            //===========================================================================================================
            // Array for YESTERDAY
            //=========================================================================================================== 
            for (var i = items[getDate.getMonth()].items.length - 1; i >= 0; i--) {
                if(items[getDate.getMonth()].items[i].date == date || items[getDate.getMonth()].items[i].date == String(dateStringYesterday))
                {
                    console.log("true!");
                    yesterdayArray.push(items[getDate.getMonth()].items[i]);
                    totalCalories += items[getDate.getMonth()].items[i].calories;
                    totalFat += items[getDate.getMonth()].items[i].fat;
                    $scope.totalCaloriesYesterday = totalCalories;
                    $scope.totalFatYesterday = totalFat;
                }
                else if(items[getDate.getMonth()].items[i].date != date || items[getDate.getMonth()].items[i].date != String(dateStringYesterday))
                {
                    console.log("False!");          
                    $scope.$apply;
                }
            }
            //===========================================================================================================
            // Array for DAY BEFORE YESTERDAY
            //=========================================================================================================== 
            for (var i = items[getDate.getMonth()].items.length - 1; i >= 0; i--) {
                if(items[getDate.getMonth()].items[i].date == date || items[getDate.getMonth()].items[i].date == String(dateStringDayBeforeYesterday))
                {
                    console.log("true!");
                    dayBeforeYesterdayArray.push(items[getDate.getMonth()].items[i]);
                    totalCalories += items[getDate.getMonth()].items[i].calories;
                    totalFat += items[getDate.getMonth()].items[i].fat;
                    $scope.totalCaloriesDayBeforeYesterday = totalCalories;
                    $scope.totalFatDayBeforeYesterday = totalFat;
                }
                else if(items[getDate.getMonth()].items[i].date != date || items[getDate.getMonth()].items[i].date != String(dateStringDayBeforeYesterday))
                {
                    console.log("False!");          
                    $scope.$apply;
                }               
            }
        }
        $scope.lastItemToday = (tempArray.length > 0 ? tempArray[0].name : "Nothing Added Yet.");
        $scope.lastItemYesterday = (yesterdayArray.length > 0 ? yesterdayArray[0].name : "Nothing Added Yet.");
        $scope.lastItemDayBeforeYesterday = (dayBeforeYesterdayArray.length > 0 ? dayBeforeYesterdayArray[0].name : "Nothing Added Yet.");
        console.log($scope.lastItemToday,$scope.lastItemYesterday,$scope.lastItemDayBeforeYesterday );
        $scope.resfreshArray();
    }  
    $scope.checkForMatch();
    
    $scope.itemsToday = tempArray;
    $scope.itemsYesterday = yesterdayArray;
    $scope.itemsDayBeforeYesterday = dayBeforeYesterdayArray;
    
    $scope.multipleDaysItems = [
    {
        "lastItem": ($scope.lastItemToday != null ? $scope.lastItemToday : "Nothing Added Yet."),
        "totalCalories": $scope.totalCaloriesToday,
        "totalFat": $scope.totalFatToday
    },
    {
        "lastItem": ($scope.lastItemYesterday !=null ? $scope.lastItemYesterday : "Nothing Added Yet."),
        "totalCalories": $scope.totalCaloriesYesterday,
        "totalFat": $scope.totalFatYesterday
    },
    {
        "lastItem": ($scope.lastItemDayBeforeYesterday != null ? $scope.lastItemDayBeforeYesterday : "Nothing Added Yet."),
        "totalCalories": $scope.totalCaloriesDayBeforeYesterday,
        "totalFat": $scope.totalFatDayBeforeYesterday
    }];

    console.log("All Days: ", $scope.multipleDaysItems);
    console.log("Today: ",$scope.itemsToday);
    console.log("Yesterday: ", $scope.itemsYesterday);
    console.log("Day Before Yesterday", $scope.itemsDayBeforeYesterday);
    $scope.resfreshArray();

    $scope.calorieChecker = function(calToday, fatToday, calYesterday, fatYesterday, calDayBeforeYesterday, fatDayBeforeYesterday)
    {
        console.log("calorieChecker");

        var fatAmountToday = (calToday / 100 * 30)/9;
        var fatAmountYesterday = (calYesterday / 100 * 30)/9;
        var fatAmountDayBeforeYesterday = (calDayBeforeYesterday / 100 * 30)/9;

        var calTodayButton = document.getElementById('caloriesToday');
        var fatTodayButton = document.getElementById('fatToday');

        var calYesterdayButton = document.getElementById('caloriesYesterday');
        var fatYesterdayButton = document.getElementById('fatYesterday');

        var calDayBeforeYesterdayButton = document.getElementById('caloriesDayBeforeYesterday');
        var fatDayBeforeYesterdayButton = document.getElementById('fatDayBeforeYesterday');

        //=====================================================================================================
        // TODAY
        //=====================================================================================================
        if (calToday >= 0 && calToday <= 1249 || calToday >= 4100)
        {
            calTodayButton.className = "negative";
        }
        if (calToday >= 1250 && calToday <= 2499 || calToday >= 2900 && calToday <= 4099)
        {
            calTodayButton.className = "danger";
        }
        if (calToday >= 2500 && calToday <= 2899)
        {
            calTodayButton.className = "positive";
        }

        if (fatToday >= (fatAmountToday*0.95) && fatToday <= (fatAmountToday*1.05))
        {
            fatTodayButton.className = "positive";
        }
        if (fatToday >= (fatAmountToday*0.80) && fatToday <= (fatAmountToday*0.94) || fatToday >= (fatAmountToday*1.06) && fatToday <= (fatAmountToday*1.20))
        {
            fatTodayButton.className = "danger";
        }
        if (fatToday <= (fatAmountToday*0.65) || fatToday >= (fatAmountToday*1.21))
        {
            fatTodayButton.className = "negative";
        }

        //=====================================================================================================
        // YESTERDAY
        //=====================================================================================================


        if (calYesterday >= 0 && calYesterday <= 1249 || calYesterday >= 4100)
        {
            calYesterdayButton.className = "negative";
        }
        if (calYesterday >= 1250 && calYesterday <= 2499 || calYesterday >= 2900 && calYesterday <= 4099)
        {
            calYesterdayButton.className = "danger";
        }
        if (calYesterday >= 2500 && calYesterday <= 2899)
        {
            calYesterdayButton.className = "positive";
        }

        if (fatYesterday >= (fatAmountYesterday*0.95) && fatYesterday <= (fatAmountYesterday*1.05))
        {
            fatYesterdayButton.className = "positive";
        }
        if (fatYesterday >= (fatAmountYesterday*0.80) && fatYesterday <= (fatAmountYesterday*0.94) || fatYesterday >= (fatAmountYesterday*1.06) && fatYesterday <= (fatAmountYesterday*1.20))
        {
            fatYesterdayButton.className = "danger";
        }
        if (fatYesterday <= (fatAmountYesterday*0.65) || fatYesterday >= (fatAmountYesterday*1.21))
        {
            fatYesterdayButton.className = "negative";
        }

        //=====================================================================================================
        // DAY BEFORE YESTERDAY
        //=====================================================================================================


        if (calDayBeforeYesterday >= 0 && calDayBeforeYesterday <= 1249 || calDayBeforeYesterday >= 4100)
        {
            calDayBeforeYesterdayButton.className = "negative";
        }
        if (calDayBeforeYesterday >= 1250 && calDayBeforeYesterday <= 2499 || calDayBeforeYesterday >= 2900 && calDayBeforeYesterday <= 4099)
        {
            calDayBeforeYesterdayButton.className = "danger";
        }
        if (calDayBeforeYesterday >= 2500 && calDayBeforeYesterday <= 2899)
        {
            calDayBeforeYesterdayButton.className = "positive";
        }

        if (fatDayBeforeYesterday >= (fatAmountDayBeforeYesterday*0.95) && fatDayBeforeYesterday <= (fatAmountDayBeforeYesterday*1.05))
        {
            fatDayBeforeYesterdayButton.className = "positive";
        }
        if (fatDayBeforeYesterday >= (fatAmountDayBeforeYesterday*0.80) && fatDayBeforeYesterday <= (fatAmountDayBeforeYesterday*0.94) || fatDayBeforeYesterday >= (fatAmountDayBeforeYesterday*1.06) && fatDayBeforeYesterday <= (fatAmountDayBeforeYesterday*1.20))
        {
            fatDayBeforeYesterdayButton.className = "danger";
        }
        if (fatDayBeforeYesterday <= (fatAmountDayBeforeYesterday*0.65) || fatDayBeforeYesterday >= (fatAmountDayBeforeYesterday*1.21))
        {
            fatDayBeforeYesterdayButton.className = "negative";
        }
        console.log((fatAmountToday*0.95));
    }

    $scope.calorieChecker($scope.totalCaloriesToday, $scope.totalFatToday, $scope.totalCaloriesYesterday, $scope.totalFatYesterday, $scope.totalCaloriesDayBeforeYesterday, $scope.totalFatDayBeforeYesterday);

   
}]);