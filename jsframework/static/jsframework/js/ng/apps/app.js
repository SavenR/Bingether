
var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    console.log('in app.config');
    $routeProvider
    .when( '/search', {
        templateUrl: '/static/jsframework/views/search.html',
        controller: 'mainController',
        title: 'Search Page'
     } )
    .when( '/binge_list', {
        templateUrl: '/static/jsframework/views/bingeList.html',
        controller: 'mainController',
        title: 'Binges to Be'
     } )
    .when( '/community', {
        templateUrl: '/static/jsframework/views/communityBRs.html',
        controller: 'mainController',
        title: 'Community Bingether Requests'
     } )
    .when( '/my_bingethers', {
        templateUrl: '/static/jsframework/views/myBingethers.html',
        controller: 'mainController',
        title: 'My Bingethers'
     } )
    .when('/log_out', {
        templateUrl: '/static/jsframework/views/logOut.html',
        controller: 'mainController',
        title: 'Take care!'
    })
    .when('/', {
        templateUrl: '/static/jsframework/views/index.html',
        controller: 'mainController',
        title: 'Welcome'
    })
    .when('/uh_oh', {
        templateUrl: '/static/jsframework/views/uhOh.html',
        controller: 'mainController',
        title: 'Oh no...'
    })
    .otherwise({
        redirectTo: '/uh_oh'
    })
}]);

