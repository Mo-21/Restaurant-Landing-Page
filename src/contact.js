import {createHeaderElement} from './navbar';
import { cards, footerCreation } from './main-cards';
import {createContainerElement} from "./initial-page-load";

const content = document.getElementById('content');
const contactContainer = document.createElement('div');


export function createContainerElementContact() {
    contactContainer.id = 'contactContainer';
    createHeaderElement(contactContainer);
    content.appendChild(contactContainer);

    
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