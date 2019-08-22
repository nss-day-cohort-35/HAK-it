/*
*/

var newsRecords = [
    {
        date: [ "Date", "August 21, 2019" ],
        location: [ "Location", "Nashville, TN" ],
        title: [ "Title", "Lady GaGa is coming!" ],
        message: [ "Message", "Text of message" ],
        typeOfEvent: [ "Type of event", "Consert" ],
        collaborators: [ "Collaborators", "People of Tennessee" ],
        ticketLocation: [ "Where to purchase tickets", "Nashville, TN" ],
        image: [ "ImageURL", "url" ]
    },
/*
    {
        date: ["Date", ""],
        location: ["Location", ""],
        title: ["Title", ""],
        message: ["Message", ""],
        typeOfEvent: ["Type of event", ""],
        collaborators: ["Collaborators", ""],
        ticketLocation: ["Where to purchase tickets", ""],
        image: ["ImageURL", ""]
    },
*/
]

const newsFeed = document.querySelector( ".newsfeed-main" );

console.log( Object.keys( newsRecords[0] ) );

function addArticle( record ) {
    const newsArticle = document.createElement( 'article' );
    newsArticle.className = "newsfeed-main__article";

    const newsArticleH4 = document.createElement( 'h4' );
    newsArticleH4.className = "newsfeed-main__article__h4";
    newsArticleH4.innerHTML = record.date[1] + ", " + record.location[1];
    newsArticle.appendChild( newsArticleH4 );

    const newsArticleSection = document.createElement( 'section' );
    newsArticleSection.className = "newsfeed-main__article__section";
    newsArticleSection.innerHTML = record.message[1];
    newsArticle.appendChild( newsArticleSection );
   
    newsFeed.appendChild( newsArticle );
}

for( var i = 0; i < 50; i++ ) {
    addArticle( newsRecords[0] );
}




