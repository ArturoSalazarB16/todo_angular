angular.module('app')
    .config(config);

config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

function config($stateProvider, $locationProvider, $urlRouterProvider) {
    var main = {
        name: 'main',
        url: '/main',
        templateUrl: 'main.html',
    };
    $locationProvider.hashPrefix('');
    $stateProvider.state(main);
    $urlRouterProvider.otherwise('/');
}
   