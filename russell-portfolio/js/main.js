//for hamburger menu
const clickButton = document.querySelector('.toggle-icon');
clickButton.addEventListener('click', (event) => {
    document.querySelector('nav').classList.toggle('show-nav');
});


import Darkmode from 'darkmode-js';

new Darkmode().showWidget();