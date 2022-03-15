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



// campaign section slide 
$('.campaign_cards').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// review section slide
$('.reviews').slick({
    slide: 'div', 
    infinite: true, 	 
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    arrows: true, 
    dots: true,
    autoplay: true, 
    autoplaySpeed: 10000, 
    pauseOnHover: true, 
    vertical: false, 
    prevArrow: "<button type='button' class='slick-prev'>Previous</button>", 
    nextArrow: "<button type='button' class='slick-next'>Next</button>", 
    dotsClass: "slick-dots", 
    draggable: true, 
    responsive: [ 
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
    ]

});



// mobile js 
