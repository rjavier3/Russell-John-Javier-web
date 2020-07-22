let hamburger = document.querySelector('.toggle-icon');
let logo = document.querySelector('.logo');

//hamburger menu
hamburger.addEventListener('click', function(event) {
    document.querySelector('nav').classList.toggle('show-nav');
});

//dark / light mode
logo.addEventListener('click', function(event){
    if(document.documentElement.attributes('data-theme') === 'dark'){
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else{
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});