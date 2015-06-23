app.controller('searchC', function($http, $q){
    var self = this,
        baseUrl = 'https://api-public.guidebox.com/v1.43/us/rKz5kRcTCXufMqGHHupHnNBtX6XfTNgI/',
        // // //Post debugging
        // postUrl = 'http://127.0.0.1:8000/api/app/users/',
        // postUrl2 = 'http://127.0.0.1:8000/api/app/pbu/'
        ;
    // debugging, deleteMe
    self.showTitle = "Robo";

    self.lastTitle = "";
    self.shows = [];

    self.searchGB = function(){
        // Blocks accidental blank/duplicate searches
        if (!self.showTitle || self.showTitle === self.lastTitle){
            return
        };

        self.shows = [];
        self.lastTitle = self.showTitle;
        self.searchStatement = 'Searching...';

        // Cleaning title for GuideBox API
        self.titleTE = self.showTitle.split(' ').join('%252520');

        // Search GuideBox API using the cleaned title
        $http.get( baseUrl + 'search/title/' + self.titleTE + '/fuzzy')
        .then( function( response ){

            // Iterating through found shows
            response.data.results.map(function( item, place, input ){

                // Accesses additional show information from GuideBox
                $http.get( baseUrl + 'show/' + item.id )
                .then(function( response ){

                    // Checks if item is a television show
                    if ( response.data.type === "television" ){

                        // Adds television show to view
                        self.shows.push(item);

                        // Adds additional information to display
                        var lastIndex = self.shows.length - 1;
                        self.shows[lastIndex]['overview'] = response.data.overview;
                        // (first_aired can === false... )
                        self.shows[lastIndex]['year'] = (parseInt(response.data.first_aired) || null);

                        // Sorts shows based on title length
                        self.shows.sort(function(a,b){
                            if (a.title.length < b.title.length) { return -1; }
                            return 1;
                        });

                        // Generates search Statement
                        self.searchStatement =
                            (lastIndex+1) + ' Search Result' +
                            ( (lastIndex+1) === 1 ? ' ' : 's ' )  +
                            'for ' + self.showTitle + ':';
                    };
                });
            });

            // Displays 0 results message
            if ( !self.shows[0] ) {
                self.searchStatement = '0 Seach Results for ' + self.showTitle + '.';
            }
        },

        // Error behavior
        function( response ){
            console.log( 'An error has occurred: ' );
            console.log( response.status );
            console.log( response.statusText );
            console.log( response.data.error );
        });
    }; //Closes self.searchGB

    self.addToList = function( elem ){
        var pb = {
            "showID": elem.id,
            "showName": elem.title,
            "showYear": elem.year,
            "showSummary": elem.overview,
            "showImage": elem.artwork_304x171,
            "active": true
            }
            // // // DB POST debugging
            //,
        //     pb2 = {
        //                 'user': 9,
        //                 'showID': elem.id,
        //                 'showName': elem.title,
        //                 'showYear': elem.year,
        //                 'showSummary': elem.overview,
        //                 'showImage': elem.artwork_304x171,
        //                 'active': true
        //     }
        ;
        // $http.post( postUrl, pb2 )
        // .then(function(response){console.log(response);},function(response){console.log(response);})
        // // console.log( pb );
        userPBs.push(pb);
    }

    self.createBR = function( elem ){
        console.log( elem );
    }
});