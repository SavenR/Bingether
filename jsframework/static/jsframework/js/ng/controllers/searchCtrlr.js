app.controller('searchC', function($http){
    var self = this,
        baseUrl = 'https://api-public.guidebox.com/v1.43/us/rKz5kRcTCXufMqGHHupHnNBtX6XfTNgI/';
    // debugging, deleteMe
    self.showTitle = "Pokemon";

    // self.battleCry= "WE'RE HERE!!!";
    self.lastTitle = "";

    self.searchGB = function(){
        if (!self.showTitle || self.showTitle === self.lastTitle){
            return
        };

        self.lastTitle = self.showTitle;
        self.titleTE = self.showTitle.split(' ').join('%252520');

        // Complete the AJAX request and store the return packet
        $http.get( baseUrl + 'search/title/' + self.titleTE + '/fuzzy'
        )
        .then( function( response ){
            self.shows = response.data.results.sort(function(a,b){
                if (a.title.length < b.title.length) { return -1; }; return 1;
            });

        },
        function( response ){
            console.log( 'An error has occurred: ' );
            console.log( response.status );
            console.log( response.statusText );
            console.log( response.data.error );
        })
        .then( function(){
            angular.forEach( self.shows, function( item, place ){
                $http.get( baseUrl + 'show/' + item.id )
                .then(function( response ){
                    // console.log( response.data );
                    // console.log( self.shows[place] );
                    self.shows[place]['overview'] = response.data.overview;
                    self.shows[place]['year'] = response.data.first_aired.substring(0, 4);
                })
                ;
            } )
         })
        ;
    }

});