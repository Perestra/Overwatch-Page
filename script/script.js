const mainNav = document.querySelector('.full_nav')
const header = document.querySelector('.header')
const body = document.querySelector('body')


// Active mode for Left menu mobile
function addMenuMainNav() {
    mainNav.classList.add('active'); //Add an 'Active' class to open the menu
    validateActive()
}
function RemoveMenuMainNav() {
    mainNav.classList.remove('active'); //Remove an 'Active' class to open the menu
    validateActive()
}


// Active mode for right menu mobile
function addMenuHeader() {
    header.classList.add('active'); //Add an 'Active' class to open the menu
    validateActive()
}
function removeMenuHeader() {
    header.classList.remove('active'); //Remove an 'Active' class to open the menu
    validateActive()
}


function validateActive() {

    const headerClasse = header.classList.contains('active');
    const mainNavClasse = mainNav.classList.contains('active');
    
    function bodyActive(){
        if(headerClasse == true || mainNavClasse == true) {
            body.classList.add('lock-scroll');
        } else if(headerClasse == false && mainNavClasse == false) {
            body.classList.remove('lock-scroll');
        } else body.classList.remove('lock-scroll');
    }   

    bodyActive()
}







