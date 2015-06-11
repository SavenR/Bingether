console.log('mainController.js')
app.controller('mainController', function($http){
    var mc = this,
        pages = [
            [ 'COMMUNITY', '/community' ],
            [ 'MY BINGETHERS', '/my_bingethers' ],
            [ 'PERSONAL BINGES', '/binge_list' ],
            [ 'SEARCH', '/search' ],
            [ 'LOG OUT', '/log_out' ]
        ];

});

// {% verbatim %}
//     {{if dying}}Still alive.{{/if}}
// {% endverbatim %}