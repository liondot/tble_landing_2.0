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

// btn scroll 
const visualBtn = document.querySelector('.visual_btn');

visualBtn.addEventListener('click', () => {
    const scrollTo = document.querySelector('#contact')
    scrollTo.scrollIntoView({behavior: 'smooth'})
});

// floating_menu scrollY 
const ftMenu = document.querySelector('.floating_menu');
document.addEventListener('scroll', () => {
    if(window.scrollY > mainVisualHeight / 2 ) {
        ftMenu.classList.add('active');
    } else {
        ftMenu.classList.remove('active')
    }
})