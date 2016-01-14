angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            })

            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard.html',
                controller: 'dashboardCtrl'
            })

            .state('logJeVoedsel', {
                url: '/log',
                templateUrl: 'templates/logJeVoedsel.html',
                controller: 'foodLoggerCtrl'
            })

            .state('myfood', {
                url: '/myfood',
                templateUrl: 'templates/myFood.html',
                controller: 'myFoodCtrl'
            })

            .state('menu', {
                url: '/menu',
                templateUrl: 'templates/menu.html',
                controller: 'menuCtrl'
            })

            .state('settings', {
                url: '/settings',
                templateUrl: 'templates/settings.html',
                controller: 'settingsCtrl'
            })

            .state('graph', {
                url: '/graph-heart',
                templateUrl: 'templates/graph.html',
                controller: 'graphCtrl'
            })

            .state('graph-water', {
                url: '/graph-liquid',
                templateUrl: 'templates/graph-water.html',
                controller: 'graphWaterCtrl'
            })

            .state('graph-healthy', {
                url: '/graph-healthy',
                templateUrl: 'templates/graph-healthy.html',
                controller: 'graphHealthyCtrl'
            })

            .state('nieuweGroep', {
                url: '/newgroup',
                templateUrl: 'templates/nieuweGroep.html',
                controller: 'newGroupCtrl'
            })

            .state('vragenLijst', {
                url: '/questions',
                templateUrl: 'templates/vragenLijst.html',
                controller: 'questionController'
            })

            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html',
                controller: 'aboutController'
            })

            .state('account', {
                url: '/account',
                templateUrl: 'templates/account-settings.html',
                controller: 'accountController'
            })

            .state('fitbit', {
                url: '/fitbit',
                templateUrl: 'templates/fitbit.html',
                controller: 'fitbit'
            })

            .state('hologram', {
                url: '/hologram',
                templateUrl: 'templates/hologram.html',
                controller: 'hologram'
            })
        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');

    });