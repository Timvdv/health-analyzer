angular.module('app.services', [])

.factory('timeline', [function()
{
        function getAll()
        {
            return [
            {
                'month': 7,
                'month_name': 'jul',
                'year': 2015,
                'calories': 521,
                'health': 'good',
                'water': 54,
                'vitamins':  53
            },
            {
                'month': 8,
                'month_name': 'aug',
                'year': 2015,
                'calories': 521,
                'health': 'good',
                'water': 83,
                'vitamins':  65
            },
            {
                'month': 9,
                'month_name': 'sep',
                'year': 2015,
                'calories': 531,
                'health': 'good',
                'water': 84,
                'vitamins':  92
            },
            {
                'month': 10,
                'month_name': 'okt',
                'year': 2015,
                'calories': 421,
                'health': 'good',
                'water': 56,
                'vitamins':  73
            },
            {
                'month': 11,
                'month_name': 'nov',
                'year': 2015,
                'calories': 721,
                'health': 'good',
                'water': 25,
                'vitamins':  51
            },
            {
                'month': 12,
                'month_name': 'dec',
                'year': 2015,
                'calories': 532,
                'health': 'good',
                'water': 89,
                'vitamins':  64
            },
             {
                'month': 1,
                'month_name': 'jan',
                'year': 2015,
                'calories': 321,
                'health': 'good',
                'water': 45,
                'vitamins':  41
            },
            {
                'month': 2,
                'month_name': 'feb',
                'year': 2015,
                'calories': 532,
                'health': 'good',
                'water': 72,
                'vitamins':  71
            },
            {
                'month': 3,
                'month_name': 'ma',
                'year': 2015,
                'calories': 532,
                'health': 'good',
                'water': 89,
                'vitamins':  64
            },
            {
                'month': 4,
                'month_name': 'apr',
                'year': 2015,
                'calories': 513,
                'health': 'good',
                'water': 55,
                'vitamins':  43
            },
            {
                'month': 5,
                'month_name': 'mei',
                'year': 2015,
                'calories': 1245,
                'health': 'good',
                'water': 26,
                'vitamins':  62
            },
            {
                'month': 6,
                'month_name': 'jun',
                'year': 2015,
                'calories': 531,
                'health': 'good',
                'water': 53,
                'vitamins':  69
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

.service('BlankService', [function(){

}]);

