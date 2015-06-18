var lOut = angular.module( 'lOut', [ 'ngRoute' ] );

lOut.config( [ '$routeProvider', function( $routeProvider, $locationProvider ){

    $locationProvider.html5Mode(true);

    $routeProvider
    .otherwise({
        redirectTo: '/logOut/'
    });
} ] );