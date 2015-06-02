app.controller('mainController', function($http){
    var mc = this;

    // template API connection to /slugs
    $http.get('/slugs')
    .then(function(data){
        console.log('connected to api')
        console.log(data);
    })

});

{% verbatim %}
    {{if dying}}Still alive.{{/if}}
{% endverbatim %}