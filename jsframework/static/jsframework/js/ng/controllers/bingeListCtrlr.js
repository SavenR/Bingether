app.controller('bingeListC', function($http){
var self = this,
        baseUrl = '/api/app/users/';
    // debugging, deleteMe

    self.pbs = [
    {
        "user": 5,
        "showID": 10984,
        "showName": "Robotech",
        "showYear": 1985,
        "showSummary": "Robotech is the critically acclaimed animated series about mankind's first contact with warring alien races, and the use of alien technology to defend Earth. The series was broken into three chapters, The Macross Saga, The Robotech Masters, and The New Generation. Released in 1985, Robotech was the first anime (Japanese animation) series that many fans had seen, and is often accredited as the cause of the anime fandom that continues to grow today in the United States.",
        "showImage": "http://static-api.guidebox.com/thumbnails_medium/10984-1180427466-304x171.jpg",
        "active": true
    },
    {
        "user": 5,
        "showID": 15335,
        "showName": "Attack on Titan",
        "showYear": 2013,
        "showSummary": "Several hundred years ago, humans were nearly exterminated by the Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings, and worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by building a city protected by extremely high walls, even taller than the largest of Titans. Flash forward to the present and the city has not seen a Titan in over a hundred years, until one day, a Colossal Titan appears out of thin air and destroys part of the city wall. As teenage boy, Eren Jaeger, and his foster sister, Mikasa Ackerman, witness the destruction of their town and death of their mother at the hands of the Titans, Eren vows to kill every single Titan and take revenge for all of mankind.",
        "showImage": "http://static-api.guidebox.com/thumbnails_medium/15335-878778501-304x171.jpg",
        "active": true
    },
        {
        "user": 9,
        "showID": 18782,
        "showName": "Sailor Moon",
        "showYear": 1992,
        "showSummary": "Usagi Tsukino is an ordinary teenage girl who discovers that she is \"Sailor Moon\", the pretty soldier of love and justice. Guided by her guardian cat Luna, Usagi must find the moon princess and protect Earth from the Dark Kingdom. Joining Usagi are her new Sailor Senshi friends and the mysterious Tuxedo Mask.",
        "showImage": "http://static-api.guidebox.com/thumbs03_14/thumbnails_medium/18782-8567215488-304x171.jpg",
        "active": true
    },
    {
        "user": 9,
        "showID": 19196,
        "showName": "Sailor Moon Crystal",
        "showYear": 2014,
        "showSummary": "Tsukino Usagi is a little clumsy and a crybaby, but she is also one spirited eighth grader. One day she meets Luna, a black cat with a crescent moon mark on her forehead, and transforms into the pretty sailor-suited guardian of love and justice, Sailor Moon. As a chosen guardian of justice, Usagi apparently has a mission to protect a princess, and to find her fellow Guardians and the Legendary Silver Crystal. Meanwhile, Queen Beryl of the Dark Kingdom sends her subordinates to the town where Usagi lives. They cause strange events to occur there, all in an effort to acquire the tremendously powerful Silver Crystal. Can Sailor Moon and the other Guardians successfully find the Legendary Silver Crystal, and protect the princess?",
        "showImage": "http://static-api.guidebox.com/041014/thumbnails_medium/19196-2935113576-304x171.jpg",
        "active": true
    }
];
    self.tempShow = 'http://www.gif.tv/tv.png'

    self.searchGB = function(){
        console.log('yo');
    //     // Blocks accidental blank/duplicate searches
    //     if (!self.showTitle || self.showTitle === self.lastTitle){
    //         return
    //     };

    //     self.shows = [];
    //     self.lastTitle = self.showTitle;
    //     self.searchStatement = 'Searching...';

    //     // Cleaning title for GuideBox API
    //     self.titleTE = self.showTitle.split(' ').join('%252520');

    //     // Search GuideBox API using the cleaned title
    //     $http.get( baseUrl + 'search/title/' + self.titleTE + '/fuzzy')
    //     .then( function( response ){

    //         // Iterating through found shows
    //         response.data.results.map(function( item, place, input ){

    //             // Accesses additional show information from GuideBox
    //             $http.get( baseUrl + 'show/' + item.id )
    //             .then(function( response ){

    //                 // Checks if item is a television show
    //                 if ( response.data.type === "television" ){

    //                     // Adds television show to view
    //                     self.shows.push(item);

    //                     // Adds additional information to display
    //                     var lastIndex = self.shows.length - 1;
    //                     self.shows[lastIndex]['overview'] = response.data.overview;
    //                     // (first_aired can === false... )
    //                     self.shows[lastIndex]['year'] = (parseInt(response.data.first_aired) || null);

    //                     // Sorts shows based on title length
    //                     self.shows.sort(function(a,b){
    //                         if (a.title.length < b.title.length) { return -1; }
    //                         return 1;
    //                     });

    //                     // Generates search Statement
    //                     self.searchStatement =
    //                         (lastIndex+1) + ' Search Result' +
    //                         ( (lastIndex+1) === 1 ? ' ' : 's ' )  +
    //                         'for ' + self.showTitle + ':';
    //                 };
    //             });
    //         });

    //         // Displays 0 results message
    //         if ( !self.shows[0] ) {
    //             self.searchStatement = '0 Seach Results for ' + self.showTitle + '.';
    //         }
    //     },

    //     // Error behavior
    //     function( response ){
    //         console.log( 'An error has occurred: ' );
    //         console.log( response.status );
    //         console.log( response.statusText );
    //         console.log( response.data.error );
    //     });
    // }; //Closes self.searchGB

    // self.addToList = function( elem ){
    //     console.log( elem );
    // }

    // self.createBR = function( elem ){
    //     console.log( elem );
    }
    self.searchGB()
});