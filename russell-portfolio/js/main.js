let hamburger = document.querySelector('.toggle-icon');
let logo = document.querySelector('.logo');

//hamburger menu
hamburger.addEventListener('click', function(event) {
    document.querySelector('nav').classList.toggle('show-nav');
});