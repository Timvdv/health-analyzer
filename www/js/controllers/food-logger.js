angular.module('app.controllers').controller('foodLoggerCtrl', ['$scope', '$http', function($scope, $http)
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
        }, 125);
    };

    // WORK IN PROGRESS.
    // Momenteel sla ik de ID van het voedsel op ipv de naam, beschrijving etc. zodat ik later een API call 
    // kan doen met een ID. (Voor het tonen van JOUW eigen lijst) maar weet niet of dit mogelijk/makkelijk is.
    $scope.addItem = function (id, name, type, description, url)
    {
        if(firstClick == true && localStorage["items"]){
            itemList = JSON.parse(localStorage["items"]);    
            localStorage["items"] = "";
            console.log("Firstclick :", firstClick);
        } 

        firstClick = false;
        console.log("Firstclick :", firstClick);

        var cal = 0;
        var re = /Calories:\s(\d+)/ig;
        var regexCal = re.exec(description);
        if(regexCal && regexCal.length)
        {
            cal = parseInt(regexCal[1]);
        }

        itemList[currentDate.getMonth()].items.push({
            "id": id,
            "name": name,
            "type": type,
            "description": description,
            "url": url,
            "date": currentDate.toJSON().slice(0,10),
            "calories": cal
        });

        console.log(cal);

        localStorage["items"] = JSON.stringify(itemList);        
        console.log("LocalStorage :",JSON.parse(localStorage["items"]));
        console.log("itemList :", itemList);
        $scope.addMonthToYear();
    };

    $scope.addMonthToYear = function ()
    {
        var currentMonth = itemList[currentDate.getMonth()].items;

        var return_data = {
            'month': 7,
            'month_name': 'jul',
            'year': 2015,
            'calories': 0,
            'health': 'good',
            'water': 54,
            'vitamins':  53
        };

        for (var i = currentMonth.length - 1; i >= 0; i--) {
            var month = currentMonth[i];
            
            // "Per 100g - Calories: 254kcal | Fat: 15.92g | Carbs: 2.77g | Protein: 24.26g"
            return_data.calories += month.calories;
        };

        console.log(return_data);
        

    };
}]);