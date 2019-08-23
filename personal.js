/*
*/

var artists = [
    {
        firstName: [ "First Name", "Stefani" ],
        middleName: [ "Middle Name", "Joanne Angelina" ],
        lastName: [ "Last Name", "Germanotta" ],
        publicName: [ "Public Name", "Lady Gaga" ],
        birthDate: [ "Birth Date", "March 28, 1986" ],
        deathDate: [ "Death Date", "" ],
        countryOfOrigin: [ "Country of Origin", "U.S." ],
        countryOfCurrentResidence: [ "Country of Current Residence", "U.S." ],
        mother: [ "Mother", "Cynthia Louise" ],
        father: [ "Father", "Joseph Germanotta" ],
        siblings: [ "Sister", "Natali" ],
        children: [ "" ],
        spouses: [ "" ]
    }
]

const main = document.querySelector( '.main-personal-data' );
const mainSection = document.querySelector( '.main__section' );
const mainFamily = document.querySelector( '.main__family');

console.log( Object.keys( artists[0] ) );

function addRecord ( item1,item2 ) {
    const item = document.createElement( 'div' );
    item.innerHTML = item1 + ": " + item2;
    item.className="main__section-div tight-shadow-change";
    mainSection.appendChild( item );
}

function addPics( item1, item2, imgFileName, imgAlt ) {
    const item = document.createElement( 'div' );
    item.className="main__family-div tight-shadow-change";
    const item_text = document.createElement( 'div' );
    /*item_text.innerHTML = artists[0].item[0] + ": " + artists[0].item[1];
*/    item_text.innerHTML = item1 + ": " + item2;
    item_text.style = "text-align: justify-all";
    item.appendChild( item_text );

    const itemPics = document.createElement( 'img' );
    itemPics.src = imgFileName;
    itemPics.alt = imgAlt;
    itemPics.style = "height: 100px; margin: .9em";
    itemPics.className = "main__family-img";
    item.appendChild( itemPics );
    mainFamily.appendChild( item );
}


addRecord( artists[0].firstName[0], artists[0].firstName[1] );
addRecord( artists[0].middleName[0], artists[0].middleName[1] );
addRecord( artists[0].lastName[0], artists[0].lastName[1] );
addRecord( artists[0].publicName[0], artists[0].publicName[1] );
addRecord( artists[0].birthDate[0], artists[0].birthDate[1] );
addRecord( artists[0].countryOfOrigin[0], artists[0].countryOfOrigin[1] );
addRecord( artists[0].countryOfCurrentResidence[0], artists[0].countryOfCurrentResidence[1] );



addPics( artists[0].mother[0], artists[0].mother[1], "images/ladyGagaMother.jpeg","Lady Gaga mother pics" );
addPics( artists[0].father[0], artists[0].father[1], "images/ladyGagaFather.jpeg","Lady Gaga father pics" );
addPics( artists[0].siblings[0], artists[0].siblings[1], "images/ladyGagaSister.jpeg","Lady Gaga sister pics" );

