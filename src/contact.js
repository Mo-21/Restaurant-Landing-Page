import {createHeaderElement} from './navbar';
import { cards, footerCreation } from './main-cards';
import {createContainerElement} from "./initial-page-load";

const content = document.getElementById('content');
const contactContainer = document.createElement('div');


export function createContainerElementContact() {
    contactContainer.id = 'contactContainer';
    createHeaderElement(contactContainer);
    content.appendChild(contactContainer);

    contactPageCards();
    cards(contactContainer);
    footerCreation(contactContainer);
    
    //listening to the navbar links
    const linksListener = document.querySelectorAll('a');
    linksListener.forEach(link => link.addEventListener('click', (event) => {

    const targetID = event.target.id;
    console.log(targetID);

    if(targetID === 'home') {
        targetID === '';
        loadSection(targetID);
    } else if(targetID === 'menu') {
        targetID === '';
        loadSection(targetID);
    } else if(targetID === 'contact') {
        targetID === '';
        loadSection(targetID);
    };
}));
}


function contactPageCards() {
    const rowContainer = document.createElement('div');
    rowContainer.id ='rowContainer';
    rowContainer.classList.add('container');
    contactContainer.appendChild(rowContainer);

    const contactRow1 = document.createElement('div');
    contactRow1.classList.add('row');
    contactRow1.id = 'contactRow1';
    rowContainer.appendChild(contactRow1);

    const contactRow2 = document.createElement('div');
    contactRow2.classList.add('row');
    contactRow2.classList.add('position-relative');
    contactRow2.classList.add('justify-content-center');
    contactRow2.classList.add('align-items-center');
    contactRow2.id = 'contactRow2';
    rowContainer.appendChild(contactRow2);

    const card1 = document.createElement('div');
    const card2 = document.createElement('div');

    card1.id = 'card1';
    card2.id = 'card2';
    contactRow1.appendChild(card1);
    contactRow2.appendChild(card2);

    card1.classList.add('col');

    card2.classList.add('col');
    card2.classList.add('position-absolute');

    card1.innerHTML = 'We\'re delighted that you\'re interested in reaching out to us at Monsho. Whether you have questions, feedback, or want to make a reservation, our team is here to assist you. Here\'s how you can get in touch:<br><br>Facebook: @MonshoRestaurant<br>Instagram: @monsho.restaurant<br>Twitter: @MonshoDining<br><br>Reservation Information:<br><br>You can book a table through our website, phone, or email.<br><br>';
    card2.textContent = 'Monsho Restaurant';
}

function loadSection(sectionID) {
    if(sectionID === 'home') {
        contactContainer.innerHTML = '';
        content.innerHTML = '';
        createContainerElement();
    } else if(sectionID === 'menu') {
        contactContainer.innerHTML = '';
        content.innerHTML = '';
        createContainerElementContact();
    } else if(sectionID === 'contact') {
        contactContainer.innerHTML = '';
        content.innerHTML = '';
        createContainerElementContact();
    };
}