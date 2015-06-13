
var app = angular.module( "app", [ 'ngRoute' ] );

app.config( [ '$routeProvider', function( $routeProvider ){
    $routeProvider
    .when( '/search', {
        templateUrl: '/static/jsframework/views/search.html',
        title: 'Search Page',
        controller: 'searchC',
        css: 'static/app/css/search.css'
     } )
    .when( '/binge_list', {
        templateUrl: '/static/jsframework/views/bingeList.html',
        controller: 'bingeListC',
        title: 'Binges to Be',
        css: 'static/app/css/bingeList.css'
     } )
    .when( '/community', {
        templateUrl: '/static/jsframework/views/communityBRs.html',
        controller: 'communityBRsC',
        title: 'Community Bingether Requests',
        css: 'static/app/css/communityBRs.css'
     } )
    .when( '/my_bingethers', {
        templateUrl: '/static/jsframework/views/myBingethers.html',
        controller: 'myBingethersC',
        title: 'My Bingethers',
        css: 'static/app/css/myBingethers.css'
     } )
    .when( '/log_out', {
        templateUrl: '/static/jsframework/views/logOut.html',
        controller: 'logOutC',
        title: 'Take care!',
        css: 'static/app/css/logOut.css'
    })
    .when( '/', {
        templateUrl: '/static/jsframework/views/index.html',
        controller: 'indexC',
        title: 'Welcome',
        css: 'static/app/css/index.css'
    })
    .when( '/uh_oh', {
        templateUrl: '/static/jsframework/views/uhOh.html',
        controller: 'uhOhC',
        title: 'Oh no...',
        css: 'static/app/css/uhOh.css'
    })
    .otherwise({
        redirectTo: '/uh_oh'
    })
}]);

app.run( [ '$location', '$rootScope', function( $location, $rootScope ){
    $rootScope.$on( '$routeChangeSuccess', function( event, current, previous ){
        if ( current.$$route ){
            document.getElementById('pageTitle').innerHTML = current.$$route.title;
            document.getElementById('pageCSS').setAttribute('href', current.$$route.css);
        }

    } )
}
]);