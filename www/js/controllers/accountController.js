angular.module('app.controllers').controller('accountController', ['$scope', '$http', '$location', function($scope, $http, $location)
{
    console.log('accountController');
    $scope.location = $location.path();

    var get_user_data = localStorage.getItem('user');
    var user_data = JSON.parse(get_user_data);

    var user_name = user_data.name;
    var user_weight = user_data.weight;
    var user_length = user_data.length;
    var user_birthdate = user_data.birthdate;
    //var user_sport = user_data.sport;

    var name = document.getElementById("questions_name");
    name.value = user_name;

    var length = document.getElementById("questions_length");
    length.value = user_length;

    var weight = document.getElementById("questions_weight");
    weight.value = user_weight;

    var birthdate = document.getElementById("questions_date");
    birthdate.value = user_birthdate;

    var test = 15;

    $scope.formData = {};

    $scope.saveUserData = function()  {
        var name = document.getElementById("questions_name").value;
        var length = document.getElementById("questions_length").value;
        var weight = document.getElementById("questions_weight").value;
        var birthdate = document.getElementById("questions_date").value;

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
        location.reload();
    };

    function checkBMI() {
        var bmi_result;
        user_length = user_length / 100;
        var bmi_calculation = user_weight / user_length / user_length;
        bmi_calculation = bmi_calculation.toFixed();

        if(bmi_calculation < 18.5) {
            bmi_result = "Je hebt ondergewicht";
        }
        if(bmi_calculation >= 18.5 && test < 25) {
            bmi_result = "Je hebt een gezond gewicht"
        }
        if(bmi_calculation >= 25 && test < 30) {
            bmi_result = "Je hebt overgewicht"
        }
        if(bmi_calculation >= 30 && test < 35) {
            bmi_result = "Je hebt obesitas"
        }
        if(bmi_calculation >= 35) {
            bmi_result = "Je hebt extreme obesitas"
        }

        $scope.weight = user_weight;
        $scope.length = user_length;
        $scope.bmi_result = bmi_result;
        $scope.bmi = bmi_calculation;
    }

    checkBMI();
}]);
