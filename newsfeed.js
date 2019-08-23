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
        date: ["Date", "8/15/2019"],
        location: ["Location", "Born This Way Foundation"],
        title: ["Title", "Lady Gaga\'s Born This Way Foundation Gearing Up For Second \'21 Days to Be Kind\' Challenge"],
        message: ["Message", "It\'s cool to be kind. That\'s the message from Lady Gaga\'s Born This Way Foundation, which is gearing up for its second 21 Days to Be Kind Challenge. Help us make kindness - to ourselves and to our communities - a habit by practicing an act of kindness each day from September 1st to September 21st! reads the pitch from the Foundation. We\'ll send you all the information you need to get started - including suggestions for how to be kind from our Co-Founder Lady Gaga + some of our amazing partners. Oh, and you\'ll also be entered to win a pair of tickets to an upcoming Lady Gaga show!"],
        typeOfEvent: ["Type of event", "Challenge"],
        collaborators: ["Collaborators", ""],
        ticketLocation: ["Where to purchase tickets", ""],
        image: ["ImageURL", "images/lady-gaga-news2.jpeg"]
    },
    {
        date: ["Date", "August 11, 2019"],
        location: ["Location", "FOX News"],
        title: ["Title", "Lady Gaga to fund 162 classrooms in Dayton, El Paso and Gilroy following mass shootings"],
        message: ["Message", "Lady Gaga will deliver comfort to three cities devastated recent mass shootings. The Bad Romance singer will provide funding for 162 classrooms in Dayton, Ohio; El Paso, Texas and Gilroy, California. My heart goes out to those who were taken from us too soon and to their families, loved ones, and communities who are left to grieve. Everyone has the right to laws that make them feel safe in their communities. In this moment, I want to channel my confusion, frustration, and fury into hope. Hope that we are there for each other and for ourselves, she wrote on Facebook on Friday. Gaga, 33, announced that she would donate to 162 classrooms through Donors Choose, an organization in which teachers can fundraise for classroom projects for their students." ],
        typeOfEvent: ["Type of event", ""],
        collaborators: ["Collaborators", ""],
        ticketLocation: ["Where to purchase tickets", ""],
        image: ["ImageURL", "images/lady-gaga-news4.jpg"]
},

    {
        date: [ "Date", "August 21, 2019" ],
        location: [ "Location", "Nashville, TN" ],
        title: [ "Title", "Lady GaGa is coming!" ],
        message: [ "Message", "Text of message" ],
        typeOfEvent: [ "Type of event", "Consert" ],
        collaborators: [ "Collaborators", "People of Tennessee" ],
        ticketLocation: [ "Where to purchase tickets", "Nashville, TN" ],
        image: [ "ImageURL", "images/lady-gaga-logo.png" ]
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
    itemPics.style = "height: 200px; margin: .9em";
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

function addArticleFeed( record ) {
    const newsArticle = document.createElement( 'article' );
    newsArticle.className = "newsfeed-main__article";

    const newsArticleIframe = document.createElement( 'iframe' );
    newsArticleIframe.src="//rss.bloople.net/?url=https%3A%2F%2Fwww.huffpost.com%2Ftopic%2Flady-gaga%2Ffeed&limit=10&showicon=true&type=html";
    newsArticle.appendChild( newsArticleIframe );

    newsFeed.appendChild( newsArticle );
}

addArticle( newsRecords[0] );
addArticle( newsRecords[1] );
addArticle( newsRecords[2] );
addArticle( newsRecords[3] );
addArticleFeed();




