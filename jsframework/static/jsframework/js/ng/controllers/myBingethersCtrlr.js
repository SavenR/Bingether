app.controller('myBingethersC', function($http){
    var self = this,
        personalBRsurl = '/api/app/usrbrs/',
        commentByPostBaseURL = '/api/app/comments/';
    self.brs = [];

    // API Call for users active bingethers
    self.getUsrsActBRs = function(){
        $http.get( personalBRsurl )
        .then( function( response ){
            self.brs = response.data;
            response.data.forEach(function( e, i ){
                $http.get( commentByPostBaseURL + e.id + '/').then(
                    function( response ){
                        self.brs[i].comments = response.data.reverse();
                    })
            });
        },
        // Error behavior
        function( response ){
            console.log( 'An error has occurred: ' );
            console.log( response.status );
            console.log( response.statusText );
            console.log( response.data.error );
        });
    };
    self.getUsrsActBRs()
});
