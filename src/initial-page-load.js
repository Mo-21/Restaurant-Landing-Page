import { main } from '@popperjs/core';
import slider from './assets/restaurant-front.jpg';
import { cards, footerCreation } from './main-cards';

const container = document.getElementById('container');

const landingPage = (function() {
    
    function createHeaderElement() {
        const header = document.createElement('header');
        header.classList.add('heading');
        container.appendChild(header);
        _createNavbar(header);
    }

    function _createNavbar(header) {
        const navbar = document.createElement('nav');
        navbar.classList.add('navbar');
        navbar.classList.add('navbar-expand');
        header.appendChild(navbar);
        _createBrand(navbar)
    };

    function _createBrand(navbar) {
        const brand = document.createElement('a');
        brand.getAttribute('href', './dist/index.html');
        brand.classList.add('navbar-brand');
        brand.textContent = "Monsho";
        navbar.appendChild(brand);
        _createNavbarElements(navbar);
    }

    function _createNavbarElements(navbar) {
        const uList = document.createElement('ul');
        uList.classList.add('navbar-nav');
        uList.classList.add('mx-auto');
        const listItemsNumber = 3;
        const listItemsContent = [
            'Home', 'Menu', 'Contact'
        ];
        for(let i=0; i<listItemsNumber && i<listItemsContent.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = listItemsContent[i];
            listItem.classList.add('nav-item');
            uList.appendChild(listItem);
        }
        navbar.appendChild(uList);
        createMainElement();
    };

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

        cards(_main)
        footerCreation()
    }

    return {
        createHeaderElement: createHeaderElement
    }
})();

export default landingPage.createHeaderElement;
    