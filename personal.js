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
/*
        List of immediate family members (for example: spouse, children, siblings, parents) - minimum 3 with images.
        For multiple spouses, show begin/end dates.
        */

        mother: [ "Mother", "Cynthia Louise" ],
        father: [ "Father", "Joseph Germanotta" ],
        siblings: [ "Sister", "Natali" ],
        children: [ "" ],
        spouses: [ "" ]

    }
]

const mainSection = document.querySelector( '.main-section__personal-data' );

console.log( Object.keys( artists[0] ) );

/*
Object.keys( artists[0] ).forEach(item => {
    if ( item.length != 0 ) {
        console.log( item, artists[0].item ); */
        /*
        const divElement = document.createElement( 'div' );
        divElement.innerHTML = artists[0].item[0] + ": " + artists[0].item[1];
        mainSection.appendChild( divElement );*/
/*    }
});
*/

/*
const itemName = document.createElement( 'div' );
itemName.innerHTML = artists[0].itemName[0] + ": " + artists[0].itemName[1];
mainSection.appendChild( itemName );
*/

const firstName = document.createElement( 'div' );
firstName.innerHTML = artists[0].firstName[0] + ": " + artists[0].firstName[1];
firstName.className="main-section__div";
mainSection.appendChild( firstName );

const middleName = document.createElement( 'div' );
middleName.innerHTML = artists[0].middleName[0] + ": " + artists[0].middleName[1];
middleName.className="main-section__div";
mainSection.appendChild( middleName );

const lastName = document.createElement( 'div' );
lastName.innerHTML = artists[0].lastName[0] + ": " + artists[0].lastName[1];
lastName.className="main-section__div";
mainSection.appendChild( lastName );

const publicName = document.createElement( 'div' );
publicName.innerHTML = artists[0].publicName[0] + ": " + artists[0].publicName[1];
publicName.className="main-section__div";
mainSection.appendChild( publicName );

const birthDate = document.createElement( 'div' );
birthDate.innerHTML = artists[0].birthDate[0] + ": " + artists[0].birthDate[1];
birthDate.className="main-section__div";
mainSection.appendChild( birthDate );
/*
const deathDate = document.createElement( 'div' );
deathDate.innerHTML = artists[0].deathDate[0] + ": " + artists[0].deathDate[1];
mainSection.appendChild( deathDate );
*/
const countryOfOrigin = document.createElement( 'div' );
countryOfOrigin.innerHTML = artists[0].countryOfOrigin[0] + ": " + artists[0].countryOfOrigin[1];
mainSection.appendChild( countryOfOrigin );

const countryOfCurrentResidence = document.createElement( 'div' );
countryOfCurrentResidence.innerHTML = artists[0].countryOfCurrentResidence[0] + ": " + artists[0].countryOfCurrentResidence[1];
countryOfCurrentResidence.className="main-section__div";
mainSection.appendChild( countryOfCurrentResidence );

const mother = document.createElement( 'div' );
mother.innerHTML = artists[0].mother[0] + ": " + artists[0].mother[1];
mother.className="main-section__div";
mainSection.appendChild( mother );

const father = document.createElement( 'div' );
father.innerHTML = artists[0].father[0] + ": " + artists[0].father[1];
father.className="main-section__div";
mainSection.appendChild( father );

const siblings = document.createElement( 'div' );
siblings.innerHTML = artists[0].siblings[0] + ": " + artists[0].siblings[1];
siblings.className="main-section__div";
mainSection.appendChild( siblings );
