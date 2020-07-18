//for hamburger menu
const clickButton = document.querySelector('.toggle-icon');
clickButton.addEventListener('click', (event) => {
    document.querySelector('nav').classList.toggle('show-nav');
});