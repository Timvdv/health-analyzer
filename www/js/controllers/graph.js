angular.module('app.controllers').controller('graphCtrl', ['$scope', '$http', '$location', function($scope, $http, $location)
{
    console.log('graphCtrl1');
    $scope.location = $location.path();
    var currentMonth = new Date().getMonth();
    console.log(currentMonth);
    var monthName = "January";
    switch(currentMonth)
    {
        case 0:
            monthName = "January";
            break;
        case 1:
            monthName = "February";
            break;
        case 2: 
            monthName = "March";
            break;
        case 3:
            monthName = "April";
            break;
        case 4: 
            monthName = "May";
            break;
    }
    
    localStorage.animate = false;
        var current
        var data = {
            labels: [monthName,"Future"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(255, 0, 34, 0.71)",
                    strokeColor: "#FFF",
                    pointColor: "#FFF",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(255, 0, 80, 0.50)",
                    strokeColor: "#FFF",
                    pointColor: "#FFF",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

    var dataBars = {
        labels: [monthName, "Future"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var context = document.getElementById('skills').getContext('2d');
    var options = {
        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: false,
        responsive: true,
        scaleShowLabels: false
    };

    var myLineChart = new Chart(context).Line(data, options);
    //var myBarChart = new Chart(context).Bar(dataBars, options);
}]);