app.controller('bingeListC', function($http){
var self = this,
        url = '/api/app/users/';

    // API Call for personal binges
    self.searchGB = function(){
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
    }; //Closes self.searchGB

    // Calls API call
    self.searchGB()
});
