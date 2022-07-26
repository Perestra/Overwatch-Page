const mainNav = document.querySelector('.full_nav')
const header = document.querySelector('.header')
const body = document.querySelector('body')



// Active mode for left menu mobile
function addMenuMainNav() {
    header.classList.remove('active');
    
    mainNav.classList.add('active'); //Add an 'Active' class to open the menu
    window.scrollTo({top:0})
    body.classList.add('lock-scroll');
}
function RemoveMenuMainNav() {
    mainNav.classList.remove('active'); //Remove an 'Active' class to open the menu
    body.classList.remove('lock-scroll');
}

// Active mode for right menu mobile
function addMenuHeader() {
    mainNav.classList.remove('active');
    
    header.classList.add('active'); //Add an 'Active' class to open the menu
    window.scrollTo({top:0})
    body.classList.add('lock-scroll');
}
function removeMenuHeader() {
    header.classList.remove('active'); //Remove an 'Active' class to open the menu
    body.classList.remove('lock-scroll');
}  
    







