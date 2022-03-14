const navbar = document.querySelector('#nav');
const navbarHight = navbar.getBoundingClientRect().height;
const mainVisual = document.querySelector('#main_visual');
const mainVisualHeight = mainVisual.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHight) {
        navbar.classList.add('bright');
    }else {
        navbar.classList.remove('bright');
    }
})