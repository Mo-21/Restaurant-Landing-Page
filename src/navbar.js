export function createHeaderElement(container) {
    const header = document.createElement('header');
    header.classList.add('heading');
    container.appendChild(header);

    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');
    navbar.classList.add('navbar-expand');
    header.appendChild(navbar);

    const brand = document.createElement('a');
    brand.getAttribute('href', './dist/index.html');
    brand.classList.add('navbar-brand');
    brand.textContent = "Monsho";
    navbar.appendChild(brand);

    const uList = document.createElement('ul');
    uList.classList.add('navbar-nav');
    uList.classList.add('mx-auto');
    const listItemsContent = 
       { 
        page1: {
            name: 'Home',
            path: 'index.html'
        }, 
        page2: {
            name: 'Menu',
            path: 'index.html'
        },
        page3: {
            name: 'Contact',
            path: 'index.html'
        }
    };
    
    const listItem1 = document.createElement('li');
    listItem1.classList.add('nav-item');
    const link1 = document.createElement('a');
    link1.classList.add('nav-link');
    link1.textContent = listItemsContent.page1.name;
    link1.setAttribute("href", "#");
    link1.id = "home";
    listItem1.appendChild(link1);
    uList.appendChild(listItem1);

    const listItem2 = document.createElement('li');
    listItem2.classList.add('nav-item');
    const link2 = document.createElement('a');
    link2.classList.add('nav-link');
    link2.textContent = listItemsContent.page2.name;
    link2.setAttribute("href", "#");
    link2.id = "menu";
    listItem2.appendChild(link2);
    uList.appendChild(listItem2);

    const listItem3 = document.createElement('li');
    listItem3.classList.add('nav-item');
    const link3 = document.createElement('a');
    link3.classList.add('nav-link');
    link3.textContent = listItemsContent.page3.name;
    link3.setAttribute("href", "#");
    link3.id = "contact";
    listItem3.appendChild(link3);
    uList.appendChild(listItem3);
    
    navbar.appendChild(uList);
  
}