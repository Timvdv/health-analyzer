angular.module('app.services', [])

.factory('timeline', [function()
{
        function getAll()
        {
            return [
            {
                'month': 8,
                'month_name': 'aug',
                'year': 2015,
                'calories': 521,
                'health': 'good',
                'water': "+12",
                'vitamins':  "+13"
            },
            {
                'month': 9,
                'month_name': 'sep',
                'year': 2015,
                'calories': 531,
                'health': 'good',
                'water': "+8",
                'vitamins':  "+4"
            },
            {
                'month': 10,
                'month_name': 'okt',
                'year': 2015,
                'calories': 421,
                'health': 'good',
                'water': "+3",
                'vitamins':  "-2"
            },
            {
                'month': 11,
                'month_name': 'nov',
                'year': 2015,
                'calories': 721,
                'health': 'good',
                'water': "+1",
                'vitamins':  "+6"
            },
            {
                'month': 12,
                'month_name': 'dec',
                'year': 2015,
                'calories': 532,
                'health': 'good',
                'water': "+2",
                'vitamins':  "-4"
            },
             {
                'month': 1,
                'month_name': 'jan',
                'year': 2015,
                'calories': 321,
                'health': 'good',
                'water': "+5",
                'vitamins': "+10"
            },
            {
                'month': 2,
                'month_name': 'feb',
                'year': 2015,
                'calories': 532,
                'health': 'good',
                'water': "-2",
                'vitamins':  "-3"
            },
            {
                'month': 3,
                'month_name': 'ma',
                'year': 2015,
                'calories': 532,
                'health': 'good',
                'water': "+14",
                'vitamins':  "+3"
            },
            {
                'month': 4,
                'month_name': 'apr',
                'year': 2015,
                'calories': 513,
                'health': 'good',
                'water': "+10",
                'vitamins':  "-2"
            },
            {
                'month': 5,
                'month_name': 'mei',
                'year': 2015,
                'calories': 1245,
                'health': 'good',
                'water': "-6",
                'vitamins':  "+4"
            },
            {
                'month': 6,
                'month_name': 'jun',
                'year': 2015,
                'calories': 531,
                'health': 'good',
                'water': "+4",
                'vitamins':  "+6"
            },
            {
                'month': 7,
                'month_name': 'jul',
                'year': 2015,
                'calories': 521,
                'health': 'good',
                'water': "+19",
                'vitamins':  "+20"
            },                         
            ];
        }

        function getCurrentMonth()
        {
            var all_data = getAll(),
                   current_month = new Date().getMonth() + 1; //+1 because some wierd bug need to look at it.

            filtered_data = all_data.filter(function(el)
            {
                return el.month == current_month;
            });

            return filtered_data;
        }

        return {
                getCurrentMonth: getCurrentMonth,
                getAll: getAll
        };

}])

.service('statusMessage', [function(){
    var statusMessage = "";
    function setMessage()
    {
        statusMessage = "Your food has been added.";
        return statusMessage;
    }
    function emptyMessage()
    {
        statusMessage = "";
        return statusMessage;
    }
    function showMessage()
    {
        return statusMessage;
    }

    return {
        setMessage: setMessage,
        emptyMessage: emptyMessage,
        showMessage: showMessage
    }

}]);

