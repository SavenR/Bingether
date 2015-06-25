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

    self.getUsrsActBRs();

    //debugging
    self.yo = function(a){console.log( a + ' yo' );};

    // +COMMENT Form
    var postCommentURL = '/api/app/cmts/'

    self.commentFormEntry = false;

    self.showCommentForm = function(BR){
        self.commentedShow = BR;
        self.commentFormEntry = true;
        self.commentFormTransition = true;
    };

    self.hideCommentForm = function(){
        self.commentFormEntry = false;
    }

    self.addComment = function(){
        // Prevents empty comments
        if ( !self.newComment ){
            return
        };

        var comment = {
                'cID': globalUser,
                'cUName': userName,
                'BID': self.commentedShow.id,
                'active': true,
                'comment': self.newComment
        };
        $http.post( postCommentURL, comment )
        .then(function(response){console.log(response);},function(response){console.log(response);});

        //Refreshes the page and resets the form
        self.getUsrsActBRs();
        self.hideCommentForm();
        self.newComment = "";
    }

});
