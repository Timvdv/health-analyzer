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
                url: '/graph',
                templateUrl: 'templates/graph.html',
                controller: 'graphCtrl'
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

        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');

    });