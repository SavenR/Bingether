
var app = angular.module( 'app', [ 'ngRoute' ] );

app.config( [ '$routeProvider', function( $routeProvider ){
    $routeProvider
    .when( '/search', {
        templateUrl: '/static/jsframework/views/search.html',
        title: 'Search Page',
        controller: 'searchC',
        controllerAs: 'pc',
        css: 'static/app/css/search.css'
     } )
    .when( '/binge_list', {
        templateUrl: '/static/jsframework/views/bingeList.html',
        controller: 'bingeListC',
        controllerAs: 'pc',
        title: 'Binges to Be',
        css: 'static/app/css/bingeList.css'
     } )
    .when( '/community', {
        templateUrl: '/static/jsframework/views/communityBRs.html',
        controller: 'communityBRsC',
        controllerAs: 'pc',
        title: 'Community Bingether Requests',
        css: 'static/app/css/communityBRs.css'
     } )
    .when( '/my_bingethers', {
        templateUrl: '/static/jsframework/views/myBingethers.html',
        controller: 'myBingethersC',
        controllerAs: 'pc',
        title: 'My Bingethers',
        css: 'static/app/css/myBingethers.css'
     } )
    .when( '/', {
        templateUrl: '/static/jsframework/views/index.html',
        controller: 'indexC',
        controllerAs: 'pc',
        title: 'Welcome',
        css: 'static/app/css/index.css'
    })
    .when( '/uh_oh', {
        templateUrl: '/static/jsframework/views/uhOh.html',
        controller: 'uhOhC',
        controllerAs: 'pc',
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
            document.getElementById( 'pageTitle' ).innerHTML = current.$$route.title;
            document.getElementById( 'pageCSS' ).setAttribute( 'href', current.$$route.css );
        }
    } )
}]);