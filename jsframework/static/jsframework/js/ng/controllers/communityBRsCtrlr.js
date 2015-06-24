app.controller('communityBRsC', function($http){
var self = this,
    url = '/api/app/bingethers/';

    // API call for all active Bingers
    self.getCommunityBRs = function(){
        $http.get( url )
        .then( function( response ){
            self.pbs = response.data;
            response.data.forEach(function(){});
        },
        // Error behavior
        function( response ){
            console.log( 'An error has occurred: ' );
            console.log( response.status );
            console.log( response.statusText );
            console.log( response.data.error );
        });
    };

    self.getCommunityBRs()
});
