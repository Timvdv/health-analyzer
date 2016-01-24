angular.module('app.controllers').controller('questionController', ['$scope', '$http', '$location', function($scope, $http, $location)
{
    if(localStorage.getItem('user') != null) {
        $location.path('#/home');
    }

    $scope.formData = {};

    $scope.saveUserData = function () {
        $scope.error = {error:false, message: ""};

        var name = document.getElementById('questions_name').value;
        var length = document.getElementById('questions_length').value;
        var weight = document.getElementById('questions_weight').value;
        var birthdate = document.getElementById('questions_date').value;

        var birthdate_test =/^(([0-9]{4}-[0-9]{2})-([0-9]{2}))$/;
        if(!birthdate_test.test(birthdate))
        {            
            $scope.error = {error:true, message: "Enter a valid birthdate"};
            return false;
        }

        if(name === "" || birthdate === "")
        {
            $scope.error = {error:true, message: "Please fill in all fields"};
            return false;
        }

        //remove , and .
        length = length.replace('.','');
        length = length.replace(',','');

        //parse int
        length = parseInt(length);
        weight = parseInt(weight);

        //Check if it's an int. when tehre is text it wont be a int.
        if(!isInt(length) || !isInt(weight))
        {
            $scope.error = {error:true, message: "Make sure your weight and length are correct values"};
            return false;            
        }

        var sport = $scope.formData.questions_sport;

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
        window.location = '#/home';
        window.location.reload(true);
    };
}]);

function isInt(n) {
   return n % 1 === 0;
}
