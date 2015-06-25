app.controller('communityBRsC', function($http, $window){
    var self = this,
        allBRsURL = '/api/app/bingethers/',
        commentByPostBaseURL = '/api/app/comments/';
    self.brs = [];

    // API call for all active Bingers
    self.getCommunityBRs = function(){
        $http.get( allBRsURL )
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
    self.getCommunityBRs();
});

// Filter for getting a subset of a selection
app.filter( 'inputMod', function($window){
    return function( input, col ){
        // Exits out without filter if invalid inputs
        if( !(col+1) || !input){
            return input;
        };

        // Get current screen size
        var w = $window.innerWidth,
            // Calculates array transform
            transform = function(){
                // two window sizes based on Bootstrap
                // second 991 is just an efficient way to
                // calculate the MOD because MD+ will
                // sort out to 3
                var windows = [767, 991, 991];

                windows.push(w)
                windows.sort(function(a,b){
                    return a-b;
                });
// check mod calculation
                var s = windows.indexOf(w);
                return {'mod': s+1, 'offSet': col%(s+1)}
            };

        var t = transform(), // Generate the tranform
        output = []; // Empty array for output
        input = input.slice( t.offSet ); // Offset input array

        for ( var i = 0, l = input.length ; i<l ; i++ ){
            if ( i%t.mod === 0 ){
                output.push( input[i] );
            }
        }

        return output;
    }
});
