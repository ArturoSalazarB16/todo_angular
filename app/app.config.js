angular.module('app')
    .config(config);

config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

function config($stateProvider, $locationProvider, $urlRouterProvider) {
    var main = {
        name: 'main',
        url: '/',
        templateUrl: 'main.html',
        controller: 'mainController',
        controllerAs: 'vm'
    };
    $locationProvider.hashPrefix('');
    $stateProvider.state(main);
    $urlRouterProvider.otherwise('/');
}
   