angular.module('app.controllers').controller('homeCtrl', ['$scope', '$http', '$location', function($scope, $http, $location)
{
    console.log('homeCtrl1');
    $scope.location = $location.path();

    var get_user_data = localStorage.getItem('user');
    var user_data = JSON.parse(get_user_data);

    var user_weight = 0;
    var user_length = 0;

    if(user_data && user_data.weight && user_data.length)
    {
        user_weight = user_data.weight;
        user_length = user_data.length;
    }

    var bmi_result;
    var bmi_advice;
    user_length = user_length / 100;
    var bmi_calculation = user_weight / user_length / user_length;
    bmi_calculation = bmi_calculation.toFixed();

    if(bmi_calculation < 18.5) {
        bmi_result = "Ondergewicht";
        bmi_advice = "je lijdt aan ondergewicht. Probeer wat meer te eten, maar probeer er wel voor te zorgen dat je gezond aankom. Zorg ervoor dat" +
        " geen ongezonde dingen gaat eten.";
    }
    if(bmi_calculation >= 18.5 && bmi_calculation < 25) {
        bmi_result = "Gezond gewicht";
        bmi_advice = "Goed bezig! Je hebt een gezond gewicht. Probeer ervoor te zorgen dat je dit gewicht vasthoudt. Zorg er wel voor dat je gezond blijft eten. Blijfen sporten kan natuurlijk ook geen kwaad!";
    }
    if(bmi_calculation >= 25 && bmi_calculation < 30) {
        bmi_result = "Overgewicht";
        bmi_advice = "Je lijdt aan overgewicht. Je bent iets te zwaar. Probeer wat minder te eten of probeer meer gezond te eten. Je kan er ook aan denken om wat meer te gaan sporten.";
    }
    if(bmi_calculation >= 30 && bmi_calculation < 35) {
        bmi_result = "Obesitas";
        bmi_advice = "Je lijdt aan obesitas en bent daarom te zwaar voor je gewicht. Probeer meer te spoten en let goed op je eten. Zorg ervoor " +
        "dat je een voedingspatroon voor een lange tijd kan volhouden";
    }
    if(bmi_calculation >= 35) {
        bmi_result = "Extreme obesitas";
        bmi_advice = "Oei.. je lijdt aan extreme obesitas. Dat is niet goed! Je bent veel te zwaar en wij raden je aan om contact op te nemen " +
        "met een huisarts om te kijken wat er gedaan kan worden. Een maagverkleining kan tot deze opties behoren.";
    }

    $scope.weight = user_weight;
    $scope.length = user_length;
    $scope.bmi_result = bmi_result;
    $scope.bmi = bmi_calculation;
    $scope.bmi_advice = bmi_advice;

    console.log('test');

}]);