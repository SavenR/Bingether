app.controller('bingeListC', function($http){
var self = this,
        url = '/api/app/users/';

    // API Call for personal binges
    self.searchGB = function(){
        $http.get( url )
        .then( function( response ){
            self.pbs = response.data;
            for ( var i=0; i<userPBs.length; i++ ){
                self.pbs.push( userPBs[i] )
                console.log( self.pbs )
            }
            // console.log(userPBs)
            // console.log(self.pbs)
            // self.pbs += userPBs
            // console.log(userPBs)
            // console.log(self.pbs)
            // self.pbs = userPBs;
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
    // self.searchGB()
});
