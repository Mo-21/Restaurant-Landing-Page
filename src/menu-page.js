import {createHeaderElement} from './navbar';
import { cards, footerCreation } from './main-cards';

const content = document.getElementById('content');
const contactContainer = document.createElement('div');


export function createContainerElementContact() {
    contactContainer.id = 'contactContainer';
    content.appendChild(contactContainer);
    createHeaderElement(contactContainer);
}