app.controller('myBingethersC', function($http){
var self = this,
        url = '/api/app/usrbrs/';

    // API Call for users active bingethers
    self.getUsrsActBRs = function(){
        $http.get( url )
        .then( function( response ){
            self.pbs = response.data;

        },
        // Error behavior
        function( response ){
            console.log( 'An error has occurred: ' );
            console.log( response.status );
            console.log( response.statusText );
            console.log( response.data.error );
        });
    };

    // Calls API call
    self.getUsrsActBRs()
});
