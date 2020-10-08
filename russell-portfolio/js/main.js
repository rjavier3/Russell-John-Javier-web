let hamburger = document.querySelector('.toggle-icon');
//hamburger menu
hamburger.addEventListener('click', function(event) {
    document.querySelector('nav').classList.toggle('show-nav');
});