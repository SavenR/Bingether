
var app = angular.module( "app", [ 'ngRoute' ] );

app.config( [ '$routeProvider', function( $routeProvider ){
    console.log('in app.config');
    $routeProvider
    .when( '/search', {
        templateUrl: '/static/jsframework/views/search.html',
        controller: 'mainController',
        title: 'Search Page',
        css: 'static/app/css/search.css'
     } )
    .when( '/binge_list', {
        templateUrl: '/static/jsframework/views/bingeList.html',
        controller: 'mainController',
        title: 'Binges to Be',
        css: 'static/base/css/test.css'
     } )
    .when( '/community', {
        templateUrl: '/static/jsframework/views/communityBRs.html',
        controller: 'mainController',
        title: 'Community Bingether Requests',
        css: 'static/base/css/test.css'
     } )
    .when( '/my_bingethers', {
        templateUrl: '/static/jsframework/views/myBingethers.html',
        controller: 'mainController',
        title: 'My Bingethers',
        css: 'static/base/css/test.css'
     } )
    .when( '/log_out', {
        templateUrl: '/static/jsframework/views/logOut.html',
        controller: 'mainController',
        title: 'Take care!',
        css: 'static/base/css/test.css'
    })
    .when( '/', {
        templateUrl: '/static/jsframework/views/index.html',
        controller: 'mainController',
        title: 'Welcome',
        css: 'static/base/css/test.css'
    })
    .when( '/uh_oh', {
        templateUrl: '/static/jsframework/views/uhOh.html',
        controller: 'mainController',
        title: 'Oh no...',
        css: 'static/base/css/test.css'
    })
    .otherwise({
        redirectTo: '/uh_oh'
    })
}]);

app.run( [ '$location', '$rootScope', function( $location, $rootScope ){
    $rootScope.$on( '$routeChangeSuccess', function( event, current, previous ){
        if ( current.$$route ){
            $rootScope.title = current.$$route.title;
            $rootScope.css = current.$$route.css;
        }
    } )
}
]);