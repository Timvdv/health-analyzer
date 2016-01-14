angular.module('app.controllers').controller('accountController', ['$scope', '$http', '$location', function($scope, $http, $location)
{
    console.log('accountController');
    $scope.location = $location.path();

    var get_user_data = localStorage.getItem('user');
    var user_data = JSON.parse(get_user_data);


    if(localStorage.getItem('user') != null) {
        var user_name = user_data.name;
        var user_weight = user_data.weight;
        var user_length = user_data.length;
        var user_birthdate = user_data.birthdate;
        var user_sport = user_data.sport;

        var name = document.getElementById("questions_name");
        name.value = user_name;

        var length = document.getElementById("questions_length");
        length.value = user_length;

        var weight = document.getElementById("questions_weight");
        weight.value = user_weight;

        var birthdate = document.getElementById("questions_date");
        birthdate.value = user_birthdate;
    }

    $scope.formData = {};

    $scope.saveUserData = function()  {
        var name = document.getElementById("questions_name").value;
        var length = document.getElementById("questions_length").value;
        var weight = document.getElementById("questions_weight").value;
        var birthdate = document.getElementById("questions_date").value;

        var userData = {
            name: name,
            length: length,
            weight: weight,
            birthdate: birthdate,
            sport: user_sport,
            fitbit: false,
            hologram: false
        };

        localStorage.setItem('user',  JSON.stringify(userData));
        var retrievedObject = localStorage.getItem('user');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        location.reload();
    };
}]);
