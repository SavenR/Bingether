app.controller('indexC', function($http){
var self = this,
        popShowsUrl = 'https://api-public.guidebox.com/v1.43/us/rKz5kRcTCXufMqGHHupHnNBtX6XfTNgI/shows/all/0/100/all/all',
        showDetailsUrl = 'https://api-public.guidebox.com/v1.43/us/rKz5kRcTCXufMqGHHupHnNBtX6XfTNgI/show/'
        postUrl = 'http://127.0.0.1:8000/api/app/pbu/';

    // API Call for personal binges
    self.getTopShows = function(){
        $http.get( popShowsUrl )
        .then( function( response ){
            self.topShows = response.data.results;
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
    self.getTopShows()
    self.addPBs = function( elem ){
        $http.get( showDetailsUrl + elem.id )
        .then( function( response ){
            $http.post( postUrl, {
                'user': globalUser,
                'showID': elem.id,
                'showName': elem.title,
                'showYear': (parseInt(response.data.first_aired) || null),
                'showSummary': response.data.overview,
                'showImage': elem.artwork_304x171,
                'active': true
            } )
            .then(function(){},function( response ){ console.log( response ); })

        },
        function( response ){
            console.log( 'fail:' );
            console.log( response );
        });

    }

    self.createBR = function( elem ){
        console.log( elem );
    }
});
