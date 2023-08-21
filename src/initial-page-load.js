const container = document.getElementById('container');

const landingPage = (function() {
    
    function createNavbar() {
        const navbar = document.createElement('nav');
        navbar.classList.add = 'navbar';
        container.appendChild(navbar);
        _createNavbarElements(navbar)
    };

    function _createNavbarElements(navbar) {
        const uList = document.createElement('ul');
        const listItemsNumber = 3;
        const listItemsContent = [
            'Home', 'Menu', 'Contact'
        ];
        for(let i=0; i<listItemsNumber && i<listItemsContent.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = listItemsContent[i];
            listItem.classList.add = 'navbar-item';
            uList.appendChild(listItem);
        }
        navbar.appendChild(uList);
    };

    function _frontImage() {
        const img = document.createElement('img');
        img.setAttribute('src', './assets/restaurant-front');
        img.setAttribute('alt', 'restaurant-front');
        container.appendChild(img);
    }

    return {
        createNavbar: createNavbar,
    }
})();

export default landingPage.createNavbar;