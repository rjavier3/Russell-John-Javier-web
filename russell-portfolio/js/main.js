let hamburger = document.querySelector('.toggle-icon');
let themeCheckbox = document.querySelector('.theme-checkbox');

//hamburger menu
hamburger.addEventListener('click', function(event) {
    document.querySelector('nav').classList.toggle('show-nav');
});

//theme switch
themeCheckbox.addEventListener('change', function(event){
    if(this.checked){
        document.documentElement.setAttribute('data-theme','dark');
    } else{
        document.documentElement.setAttribute('data-theme','light');
    }
});