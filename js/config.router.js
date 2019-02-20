'use strict';

angular.module('myApp')
.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app');
    $stateProvider.state('app', {
        // abstract: true,
        url: '/app',
        templateUrl: 'tpl/app.html'
    })
    .state('app.homepage', {
        url: '/homepage',
        templateUrl: 'tpl/app_homepage.html'
    })
    .state('app.dataAccess', {
        url: '/data-access',
        templateUrl: 'tpl/app_data_access.html'
    })
    .state('app.qualityReport', {
        url: '/quality-report',
        templateUrl: 'tpl/app_quality_report.html'
    })
    .state('app.help', {
        url: '/help',
        templateUrl: 'tpl/app_help.html'
    })

}]);
