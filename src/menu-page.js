import {createHeaderElement} from './navbar';
import { cards, footerCreation } from './main-cards';
import {createContainerElement} from "./initial-page-load";
import {createContainerElementContact} from './contact';
import image1 from './assets/vigie-burger.jpg';
import image2 from './assets/loco-moco.jpg';
import image3 from './assets/sicko-rice.jpg';

const content = document.getElementById('content');
const menuContainer = document.createElement('div');


export function createContainerElementMenu() {
    menuContainer.id = 'menuContainer';
    content.appendChild(menuContainer);
    createHeaderElement(menuContainer);

    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('row');
    cardsContainer.classList.add('justify-content-center');
    cardsContainer.classList.add('align-items-center');
    cardsContainer.classList.add('row-cols-1');
    cardsContainer.classList.add('g-4');
    menuContainer.appendChild(cardsContainer);

    //first card
    const col1 = document.createElement('div');
    col1.classList.add('col');
    col1.id = 'menu-col';
    cardsContainer.appendChild(col1);

    const card1 = document.createElement('div');
    card1.classList.add('card');
    card1.classList.add('h-100');
    col1.appendChild(card1);

    const img1 = document.createElement('img');
    img1.classList.add('card-img-top');
    img1.id ='menu-img';
    img1.setAttribute('src', image1);
    card1.appendChild(img1);

    const body1 = document.createElement('div');
    body1.classList.add('card-body');
    card1.appendChild(body1);

    const title1 = document.createElement('h2');
    title1.classList.add('card-title');
    title1.textContent = 'Vegetarian\'s Favorite';
    body1.appendChild(title1);

    const p1 = document.createElement('p');
    p1.classList.add('card-text');
    p1.textContent = 'Vegetarian Beef Burger with Watercress and Sumac';
    body1.appendChild(p1);
    //done

    //second card
    const col2 = document.createElement('div');
    col2.classList.add('col');
    col2.id = 'menu-col';
    cardsContainer.appendChild(col2);

    const card2 = document.createElement('div');
    card2.classList.add('card');
    card2.classList.add('h-100');
    col2.appendChild(card2);

    const img2 = document.createElement('img');
    img2.classList.add('card-img-top');
    img2.id ='menu-img';
    img2.setAttribute('src', image2);
    card2.appendChild(img2);

    const body2 = document.createElement('div');
    body2.classList.add('card-body');
    card2.appendChild(body2);

    const title2 = document.createElement('h2');
    title2.classList.add('card-title');
    title2.textContent = 'Chimichurri Chicken Burgers';
    body2.appendChild(title2);

    const p2 = document.createElement('p');
    p2.classList.add('card-text');
    p2.textContent = 'It is only about the Chimichurri sauce';
    body2.appendChild(p2);

    //third card
    const col3 = document.createElement('div');
    col3.classList.add('col');
    col3.id = 'menu-col';
    cardsContainer.appendChild(col3);

    const card3 = document.createElement('div');
    card3.classList.add('card');
    card3.classList.add('h-100');
    col3.appendChild(card3);

    const img3 = document.createElement('img');
    img3.classList.add('card-img-top');
    img3.id ='menu-img';
    img3.setAttribute('src', image3);
    card3.appendChild(img3);

    const body3 = document.createElement('div');
    body3.classList.add('card-body');
    card3.appendChild(body3);

    const title3 = document.createElement('h2');
    title3.classList.add('card-title');
    title3.textContent = 'Loco Moco';
    body3.appendChild(title3);

    const p3 = document.createElement('p');
    p3.classList.add('card-text');
    p3.textContent = 'Mexican-American Newest: Beef, Rice and Lasagna';
    body3.appendChild(p3);

    footerCreation(menuContainer);

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
        menuContainer.innerHTML = '';
        content.innerHTML = '';
        createContainerElement();
    } else if(sectionID === 'menu') {
        menuContainer.innerHTML = '';
        content.innerHTML = '';
        createContainerElementMenu();
    } else if(sectionID === 'contact') {
        menuContainer.innerHTML = '';
        content.innerHTML = '';
        createContainerElementContact();
    };
}