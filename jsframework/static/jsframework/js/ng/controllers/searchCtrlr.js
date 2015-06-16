app.controller('searchC', function($http, $q){
    var self = this,
        baseUrl = 'https://api-public.guidebox.com/v1.43/us/rKz5kRcTCXufMqGHHupHnNBtX6XfTNgI/';
    // debugging, deleteMe
    self.showTitle = "Pokemon";

    self.lastTitle = "";
    self.shows = [];

    self.searchGB = function(){
        if (!self.showTitle || self.showTitle === self.lastTitle){
            return
        };
        self.shows = [];

        self.lastTitle = self.showTitle;

        // Cleaning title for GuideBox API
        self.titleTE = self.showTitle.split(' ').join('%252520');




        // Search GuideBox API using the cleaned title
        $http.get( baseUrl + 'search/title/' + self.titleTE + '/fuzzy')
        .then( function( response ){
            console.log(1);
            return response.data.results;
        },
        function( response ){
            console.log( 'An error has occurred: ' );
            console.log( response.status );
            console.log( response.statusText );
            console.log( response.data.error );
        })

        .then( function( response ){
            // var promises =
            console.log(2);
            var tvShows = []
            return response.map(function( item, place, input ){


                return $http.get( baseUrl + 'show/' + item.id )
                .success(function( data ){
                    var response = {'data': data};
                    if ( response.data.type === "television" ){
                        tvShows.push(item);



                        var lastIndex = self.shows.length - 1;
                        tvShows[lastIndex]['overview'] = response.data.overview;

                        // first_aired can === false...
                        tvShows[lastIndex]['year'] = (parseInt(response.data.first_aired) || null);

                        return 1

                    };
                    return 0;
                })
                .then(function(response){
                    console.log(response)
                    tvShows.sort(function(a,b){
                            if (a.title.length < b.title.length) { return -1; }; return 1;
                        });
                    self.shows = tvShows;

                    var shows = tvShows.length;

                    self.searchStatement =
                    shows + ' Search Result' +
                    ( shows === 1 ? ' ' : 's ' )  +
                    'for ' + self.showTitle +
                    (self.shows.length ?  ':' : '.') ;

                    console.log(self.shows);
                })
                ;


            });
            // console.log(promises)

         })

        // console.log(self.shows);
    }

});