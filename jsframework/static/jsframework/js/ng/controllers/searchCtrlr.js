app.controller('searchC', function($http){
    var self = this;

    // self.battleCry= "WE'RE HERE!!!";
    self.lastTitle = "";

    self.searchGB = function(){
        if (!self.showTitle || self.showTitle === self.lastTitle){
            return
        };

        self.lastTitle = self.showTitle;
        self.titleTE = self.showTitle.split(' ').join('%252520');

        // Complete the AJAX request and store the return packet
        var guideBoxPromise = $http.get(
        'https://api-public.guidebox.com/v1.43/us/rKz5kRcTCXufMqGHHupHnNBtX6XfTNgI/search/title/' + self.titleTE + '/fuzzy'
        );

        // Use the success method to extract the data from the payload
        guideBoxPromise.success( function( data, status, headers, config ){
            self.shows = data;
            console.log(data);
        } );

        // Use the
        guideBoxPromise.error( function( data, status, headers, config ){
            console.log( 'status: ' );
            console.log( status );
            console.log( data.error );
        } );



    }

});