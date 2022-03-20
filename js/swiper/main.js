'use strick';
//Make navbar transparent when it is on the top
const header = document.querySelector('#header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  
    if (window.pageYOffset  > headerHeight * 5 ) {
        header.classList.add('header--dark');
    } else{
        header.classList.remove('header--dark');
    }
});


