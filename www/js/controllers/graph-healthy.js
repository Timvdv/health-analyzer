angular.module('app.controllers').controller('graphHealthyCtrl', ['$scope', '$http', '$location', function($scope, $http, $location)
{
    console.log('graphCtrl1');
    $scope.location = $location.path();




    var data = {
        labels: ["December","January", "February", "March"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgb(51, 204, 255)",
                strokeColor: "#FFF",
                pointColor: "#FFF",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(200, 204, 255, 0.80)",
                strokeColor: "#FFF",
                pointColor: "#FFF",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };



    var context = document.getElementById('skills3').getContext('2d');
    var options = {

        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: false,
        responsive: true,
        scaleShowLabels: false
    };


    var myLineChart = new Chart(context).Line(data, options);



}]);/**
 * Created by Domin on 10/12/2015.
 */
