import { main } from '@popperjs/core';
import slider from './assets/restaurant-front.jpg';
import { cards, footerCreation } from './main-cards';
import {createHeaderElement} from './navbar';
import {createContainerElementContact} from './contact';

const content = document.getElementById('content');
const container = document.createElement('div');

export function createContainerElement() {
    container.id = 'container';
    content.appendChild(container);
    createHeaderElement(container);
    createMainElement()
}
function createMainElement() {
    const _main = document.createElement('main');
    _main.classList.add('main-para');
    _main.classList.add('text-center');
    container.appendChild(_main);
    _frontImage(_main)
}

function _frontImage(_main) {
    const img = new Image();
    img.src = slider;
    img.alt = 'restaurant-image';
    img.classList.add('img-fluid');
    _main.appendChild(img);
    slideDiv(_main);
}
function slideDiv(_main){
    const slide = document.createElement('div');
    slide.classList.add('row');
    slide.classList.add('first-row');
    slide.classList.add('justify-content-center');
    slide.classList.add('align-items-center');
    _main.appendChild(slide);
    
    const tab1 = document.createElement('div');
    tab1.classList.add('col');
    
    tab1.textContent = "American Style";
    const tab2 = document.createElement('div');
    tab2.classList.add('col');
    tab2.textContent = "Varied Menu";
    const tab3 = document.createElement('div');
    tab3.classList.add('col');
    tab3.textContent = "Free Delivery";
    slide.appendChild(tab1);
    slide.appendChild(tab2);
    slide.appendChild(tab3);
    cards(_main);
    footerCreation(container);

    //listening to the navbar links
    const linksListener = document.querySelectorAll('a');
    linksListener.forEach(link => link.addEventListener('click', (event) => {

    const targetID = event.target.id;
    console.log(targetID);

    if(targetID === 'home') {
        loadSection(targetID);
    } else if(targetID === 'menu') {
        loadSection(targetID);
    } else if(targetID === 'contact') {
        loadSection(targetID);
    };
}));
}



export function loadSection(sectionID) {
    if(sectionID === 'home') {
        container.innerHTML = '';
        content.innerHTML = '';
        createContainerElement();
    } else if(sectionID === 'menu') {
        container.innerHTML = '';
        content.innerHTML = '';
        createContainerElementContact();
    } else if(sectionID === 'contact') {
        container.innerHTML = '';
        content.innerHTML = '';
        createContainerElementContact();
    };
}