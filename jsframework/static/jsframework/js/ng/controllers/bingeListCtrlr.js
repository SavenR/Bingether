app.controller('bingeListC', function($http){
var self = this,
        pbURL = '/api/app/users/';

    // API Call for personal binges
    self.getPBs = function(){
        $http.get( pbURL )
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
    };

    self.getPBs();

    // +Bingether Form
    var postBingetherURL = '/api/app/brs/'

    self.BFormEntry = false;

    self.showBForm = function(BR){
        // console.log('yo');
        self.BShow = BR;
        self.BFormEntry = true;
        self.BFormTransition = true;
        // console.log(BR);
    };

    self.hideBForm = function(){
        self.BFormEntry = false;
    }

    self.addBingether = function(){
        // Prevents empty comments
        if ( !self.bNote || !self.bCity || !self.bState ){
            return
        };

        var bingether = {
                'cID': globalUser,
                'cUName': userName,
                'showID': self.BShow.showID,
                'showName': self.BShow.showName,
                'showYear': self.BShow.showYear,
                'showSummary': self.BShow.showSummary,
                'showImage': self.BShow.showImage,
                'active': true,
                'city': self.bCity,
                'state': self.bState,
                'notes': self.bNote
        };
        $http.post( postBingetherURL, bingether )
        .then(function(response){console.log(response);},function(response){console.log(response);});
        console.log(bingether);

        //Refreshes the page and resets the form
        self.getPBs();
        self.hideBForm();
        self.bNote = "";
        self.bCity = "";
        self.bState = "CA";
    }
});
