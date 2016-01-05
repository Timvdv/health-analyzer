angular.module('app.controllers').controller('questionController', ['$scope', '$http', '$location', function($scope, $http, $location)
{
    if(localStorage.getItem('user') != null) {
        $location.path('#/home');
    }

    $scope.formData = {};

    $scope.saveUserData = function () {
        var name = document.getElementById('questions_name').value;
        var length = document.getElementById('questions_length').value;
        var weight = document.getElementById('questions_weight').value;
        var birthdate = document.getElementById('questions_date').value;

        var sport = $scope.formData.questions_sport;
        console.log(sport);

        var userData = {
            name: name,
            length: length,
            weight: weight,
            birthdate: birthdate,
            sport: sport
        };

        localStorage.setItem('user',  JSON.stringify(userData));
        var retrievedObject = localStorage.getItem('user');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        $location.path('#/home');
    };

    console.log('questionController');
}]);
