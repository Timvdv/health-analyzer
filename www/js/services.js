angular.module('app.services', [])

.factory('timeline', [function()
{
    return [
        {
            'month': 1,
            'month_name': 'jan',
            'year': 2015,
            'calories': 321,
            'health': 'good',
            'water': 70,
            'vitamins':  89
        },
        {
            'month': 2,
            'month_name': 'feb',
            'year': 2015,
            'calories': 532,
            'health': 'good',
            'water': 70,
            'vitamins':  89
        },
        {
            'month': 3,
            'month_name': 'ma',
            'year': 2015,
            'calories': 532,
            'health': 'good',
            'water': 70,
            'vitamins':  89
        },
        {
            'month': 4,
            'month_name': 'apr',
            'year': 2015,
            'calories': 513,
            'health': 'good',
            'water': 70,
            'vitamins':  89
        },
        {
            'month': 5,
            'month_name': 'mei',
            'year': 2015,
            'calories': 1245,
            'health': 'good',
            'water': 70,
            'vitamins':  89
        },
        {
            'month': 6,
            'month_name': 'jun',
            'year': 2015,
            'calories': 531,
            'health': 'good',
            'water': 70,
            'vitamins':  89
        },
        {
            'month': 7,
            'month_name': 'jul',
            'year': 2015,
            'calories': 521,
            'health': 'good',
            'water': 70,
            'vitamins':  89
        },
        {
            'month': 8,
            'month_name': 'aug',
            'year': 2015,
            'calories': 521,
            'health': 'good',
            'water': 70,
            'vitamins':  89
        },
        {
            'month': 9,
            'month_name': 'sep',
            'year': 2015,
            'calories': 531,
            'health': 'good',
            'water': 70,
            'vitamins':  89
        },
        {
            'month': 10,
            'month_name': 'okt',
            'year': 2015,
            'calories': 421,
            'health': 'good',
            'water': 70,
            'vitamins':  89
        }                                                                        
    ];
}])

.service('BlankService', [function(){

}]);

