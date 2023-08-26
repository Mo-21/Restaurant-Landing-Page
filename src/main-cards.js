export function cards(_main) {
    //container row
    const cards = document.createElement('div');
    cards.classList.add('row');
    cards.classList.add('cards');
    _main.appendChild(cards);

    //first column
    const tab1 = document.createElement('div');
    tab1.classList.add('col');
    tab1.textContent = "Address";
    tab1.id = ('cards-col');
    const row1 = document.createElement('div');
    row1.classList.add('row');
    tab1.appendChild(row1);
    const col1 = document.createElement('div');
    col1.classList.add('col');
    col1.classList.add('first-col');
    row1.appendChild(col1);
    col1.innerHTML = "498 Sanchez St<br>San Francisco, CA 94114<br>United States";

    const tab2 = document.createElement('div');
    tab2.classList.add('col');
    tab2.textContent = "Working Hours";
    tab2.id = ('cards-col');
    const row2 = document.createElement('div');
    row2.classList.add('row');
    tab2.appendChild(row2);
    const col2 = document.createElement('div');
    col2.classList.add('col');
    col2.classList.add('first-col');
    row2.appendChild(col2);
    col2.innerHTML = "Mon - Fri: 8AM - 10PM<br>Sat - Sun: 12PM - 10PM";

    const tab3 = document.createElement('div');
    tab3.classList.add('col');
    tab3.textContent = "Order Online";
    tab3.id = ('cards-col');
    const row3 = document.createElement('div');
    row3.classList.add('row');
    tab3.appendChild(row3);
    const col3 = document.createElement('div');
    col3.classList.add('col');
    col3.classList.add('first-col');
    row3.appendChild(col3);
    col3.innerHTML = "Contact us at:<br>+999 933 9322";

    cards.appendChild(tab1);
    cards.appendChild(tab2);
    cards.appendChild(tab3);
}

export function footerCreation() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    container.appendChild(footer);

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('container');
    footer.appendChild(footerContainer);

    const footerContent = document.createElement('p');
    footerContent.innerHTML = "&copy Mo-21. All Rights Reserved.";
    footerContainer.appendChild(footerContent);
}
