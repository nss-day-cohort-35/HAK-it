/*
*/

var newsRecords = [
    {
        date: ["Date", "December 10, 2018"],
        location: ["Location", "Las Vegas"],
        title: ["Title", "GRAMMY Award-winning Superstar Lady Gaga Adds Five Additional Jazz and Piano Shows to 2019 Schedule"],
        message: ["Message", "Six-time GRAMMY Award-winner, Golden Globe Award-winner and Academy Award-nominated superstar entertainer Lady Gaga will add five additional LADY GAGA JAZZ & PIANO shows to her 2019 performance schedule at Park Theater. Presented in partnership by MGM Resorts International and Live Nation, the JAZZ & PIANO shows will feature stripped-down versions of her hits as well as music from the Great American Songbook. Lady Gaga previously announced four exclusive JAZZ & PIANO evenings as part of her Las Vegas residency, and due to overwhelming demand, she has decided to make them a permanent element of her Las Vegas performance schedule."],
	    typeOfEvent: ["Type of event", "Show, Concert"],
        collaborators: ["Collaborators", ""],
        ticketLocation: ["Where to purchase tickets", "Ticketmaster outlets", "Ticketmaster.com", "GagaVegas.com" ],
        image: ["ImageURL", "images/lady-gaga-logo.png"]
    },
    {
        date: [ "Date", "August 21, 2019" ],
        location: [ "Location", "Nashville, TN" ],
        title: [ "Title", "Lady GaGa is coming!" ],
        message: [ "Message", "Text of message" ],
        typeOfEvent: [ "Type of event", "Consert" ],
        collaborators: [ "Collaborators", "People of Tennessee" ],
        ticketLocation: [ "Where to purchase tickets", "Nashville, TN" ],
        image: [ "ImageURL", "url" ]
    }

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

/* adding new element to article section */
function addArticleElement( article, item, element, element_class ) {
    const articleElement = document.createElement( element );
    articleElement.className = element_class;
    articleElement.innerHTML = item;
    article.appendChild( articleElement );
}

/* adding new image to article section */
function addArticleImage( article, item, element, element_class ) {
    const divElement = document.createElement( 'div' );
    divElement.className="newsfeed-main__article__div";

    const itemPics = document.createElement( element );
    itemPics.src = item;
    itemPics.alt = "News related image";
    itemPics.style = "width: 100px; margin: .9em";
    itemPics.className = element_class;

    divElement.appendChild( itemPics );

    article.appendChild( divElement );
}

/* adding article section to DOM */
function addArticle( record ) {
    const newsArticle = document.createElement( 'article' );
    newsArticle.className = "newsfeed-main__article";

    addArticleElement( newsArticle, record.date[1] + ", " + record.location[1], 'h4', 'newsfeed-main__article__h4' );
    addArticleElement( newsArticle, record.title[1], 'h3', 'newsfeed-main__article__h4' );
    addArticleElement( newsArticle, record.message[1], 'section', 'newsfeed-main__article__section' );
    addArticleElement( newsArticle, record.typeOfEvent[0] + ": " + record.typeOfEvent[1], 'div', 'newsfeed-main__article__div' );
    /*addArticleElement( newsArticle, record.collaborators[1], 'div', 'newsfeed-main__article__div' );*/
    addArticleElement( newsArticle, record.ticketLocation[0] + ": " + record.ticketLocation[1], 'div', 'newsfeed-main__article__div' );

    addArticleImage( newsArticle, record.image[1], 'img', 'newsfeed-main__article__img' );

    newsFeed.appendChild( newsArticle );
}


for( var i = 0; i < 5; i++ ) {
    addArticle( newsRecords[0] );
}




