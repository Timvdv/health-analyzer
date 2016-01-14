angular.module('app.controllers').controller('foodLoggerCtrl', ['$scope', '$http', '$location', function($scope, $http, $location)
{
    $scope.search = "";
    $scope.details = "no search yet";
    var counter = 0;
    var search = document.getElementById('search');
    var countdown_interval = null;
    var currentDate = new Date();
    var itemList = [
    {
        'month': 'jan',
        'items': []
    },
    {
        'month': 'feb',
        'items': []
    },
    {
        'month': 'mar',
        'items': []
    },
    {
        'month': 'apr',
        'items': []
    },
    {
        'month': 'may',
        'items': []
    },
    {
        'month': 'jun',
        'items': []
    },
    {
        'month': 'jul',
        'items': []
    },
    {
        'month': 'aug',
        'items': []
    },
    {
        'month': 'sep',
        'items': []
    },
    {
        'month': 'okt',
        'items': []
    },
    {
        'month': 'nov',
        'items': []
    },
    {
        'month': 'dec',
        'items': []
    }];

    var return_data = [{
            'month': 0,
            'month_name': 'jan',
            'year': 2016,
            'calories': 0,
            'health': 'good',
            'water': 54,
            'vitamins':  53,
            'fat': 0
        },
        {
            'month': 1,
            'month_name': 'feb',
            'year': 2016,
            'calories': 0,
            'health': 'good',
            'water': 54,
            'vitamins':  53,
            'fat': 0
        },
        {
            'month': 2,
            'month_name': 'mar',
            'year': 2016,
            'calories': 0,
            'health': 'good',
            'water': 54,
            'vitamins':  53,
            'fat': 0
        },
        {
            'month': 3,
            'month_name': 'apr',
            'year': 2016,
            'calories': 0,
            'health': 'good',
            'water': 54,
            'vitamins':  53,
            'fat': 0
        },
        {
            'month': 4,
            'month_name': 'may',
            'year': 2016,
            'calories': 0,
            'health': 'good',
            'water': 54,
            'vitamins':  53,
            'fat': 0
        },
        {
            'month': 5,
            'month_name': 'jun',
            'year': 2016,
            'calories': 0,
            'health': 'good',
            'water': 54,
            'vitamins':  53,
            'fat': 0
        },
        {
            'month': 6,
            'month_name': 'jul',
            'year': 2016,
            'calories': 0,
            'health': 'good',
            'water': 54,
            'vitamins':  53,
            'fat': 0
        },
        {
            'month': 7,
            'month_name': 'aug',
            'year': 2016,
            'calories': 0,
            'health': 'good',
            'water': 54,
            'vitamins':  53,
            'fat': 0
        },
        {
            'month': 8,
            'month_name': 'sept',
            'year': 2016,
            'calories': 0,
            'health': 'good',
            'water': 54,
            'vitamins':  53,
            'fat': 0
        },
        {
            'month': 9,
            'month_name': 'okt',
            'year': 2016,
            'calories': 0,
            'health': 'good',
            'water': 54,
            'vitamins':  53,
            'fat': 0
        },
        {
            'month': 10,
            'month_name': 'nov',
            'year': 2016,
            'calories': 0,
            'health': 'good',
            'water': 54,
            'vitamins':  53,
            'fat': 0
        },
        {
            'month': 11,
            'month_name': 'dec',
            'year': 2016,
            'calories': 0,
            'health': 'good',
            'water': 54,
            'vitamins':  53,
            'fat': 0
        }];
    var tempItemList = [];
    var firstClick = true;


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
        //console.log(counter);
        countdown_interval = setInterval(function(){
            if(counter>0){
                counter--;
                console.log(counter);
            } else{
                console.log("Searching...");
                clearInterval(countdown_interval);
                $scope.searchChange(searchEvent);
            }
        }, 125);
    };

    // WORK IN PROGRESS.
    $scope.addItem = function (id, name, type, description, url)
    {
        if(firstClick == true && localStorage["items"]){
            itemList = JSON.parse(localStorage["items"]);    
            //localStorage["items"] = "";
            console.log("Firstclick :", firstClick);
        } 

        firstClick = false;
        console.log("Firstclick :", firstClick);

        var cal = 0;
        var fat = 0;
        var caloriesRegex = /Calories:\s(\d+)/ig;
        var fatRegex = /Fat:\s(\d+)/ig;
        var regexCal = caloriesRegex.exec(description);
        var regexFat = fatRegex.exec(description);
        if(regexCal && regexCal.length)
        {
            cal = parseInt(regexCal[1]);
        }
        if(regexFat && regexFat.length)
        {
            fat = parseInt(regexFat[1]);
        }

        itemList[currentDate.getMonth()].items.push({
            "id": id,
            "name": name,
            "type": type,
            "description": description,
            "url": url,
            "date": currentDate.toJSON().slice(0,10),
            "calories": cal,
            "fat": fat
        });

        console.log("Calories:", cal);
        console.log("Fat:", fat);

        localStorage["items"] = JSON.stringify(itemList);        
        console.log("LocalStorage :",JSON.parse(localStorage["items"]));
        $scope.addMonthToYear();
    };

    $scope.addMonthToYear = function ()
    {
        var currentMonth = itemList[currentDate.getMonth()].items;

        for (var i = currentMonth.length - 1; i >= 0; i--) {
            var month = currentMonth[i];  
            // "Per 100g - Calories: 254kcal | Fat: 15.92g | Carbs: 2.77g | Protein: 24.26g"
            return_data[currentDate.getMonth()].calories += month.calories;
            return_data[currentDate.getMonth()].fat += month.fat;
            localStorage['monthlyData'] = JSON.stringify(return_data);
            //$scope.timeline[currentDate.getMonth()].calories = return_data.calories;
        };
        console.log("LocalStorage:", localStorage['monthlyData']);
        console.log();
    };
    $scope.reload = function()
    {
        window.location.reload(true);
        console.log("Reload functie!");
    }
}]); 