'use strick';

const navbar = document.querySelector('#nav');
const navbarHight = navbar.getBoundingClientRect().height;
const mainVisual = document.querySelector('#main_visual');
const mainVisualHeight = mainVisual.getBoundingClientRect().height;

const navIqr = document.querySelector('.iqr');


document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHight) {
        navbar.classList.add('bright');
        navIqr.classList.add('active')
    }else {
        navbar.classList.remove('bright');
        navIqr.classList.remove('active')
    }
})

// btn scroll 
const visualBtn = document.querySelector('.visual_btn');

visualBtn.addEventListener('click', () => {
    const scrollTo = document.querySelector('#contact')
    scrollTo.scrollIntoView({behavior: 'smooth'})
});

// 모바일 .iqr btn 클릭시 스크롤 적용 
const iqrBtn = document.querySelector ('.iqr')

iqrBtn.addEventListener('click', () => {
    const goto = document.querySelector('#contact')
    goto.scrollIntoView({behavior : 'smooth'})
})


// floating_menu scrollY 
const ftMenu = document.querySelector('.floating_menu');
document.addEventListener('scroll', () => {
    if(window.scrollY > mainVisualHeight / 2 ) {
        ftMenu.classList.add('active');
    } else {
        ftMenu.classList.remove('active')
    }
})


// scrollintoview 
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'})
}


// navar scroll intoview 
// const navPm = document.querySelector('.nav_btn:first-child')
// const navPt = document.querySelector('.nav_btn:nth-child(2)')
// const navCn = document.querySelector('.nav_btn:nth-child(3)')
// const navOd= document.querySelector('.nav_btn:nth-child(4)')
// const navRv = document.querySelector('.nav_btn:nth-child(5)')
// const navPn = document.querySelector('.nav_btn:last-child')


// navPm.addEventListener('click', () => {
//     const gotoUp = document.querySelector('#promotion');
//     gotoUp.scrollIntoView({behavior: 'smooth'})
// });

// 모바일 버전 

// 메인 카톡상담 전화상담 
const mainVisualBf = document.querySelector('#main_visual:before');



// // 광고주 대상 프로모션 section promotion 
var swiperSt = ["방문형", "배송형"];
const prSwiper = new Swiper(".pr_swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".pr-pagination.swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (swiperSt[index]) + "</span>";
        },
    },
    navigation: {
        nextEl: "pr-button.swiper-button-next",
        prevEl: "pr-button.swiper-button-prev",
    },
    breakpoints: {

        500: {
            slidesPerView: 2,
            spaceBetween: 1,
        },
    },


});






// campaign section slide 
$('.campaign_cards').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    slidesToShow: 3,
    slidesToScroll: 3,
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




//  고객 데이터 폼 영역 
(function () {
    function validEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }

    function validateHuman(honeypot) {
        if (honeypot) {
            console.log("Robot Detected!");
            return true;
        } else {
            console.log("Welcome Human!");
        }
    }

    function getFormData(form) {
        var elements = form.elements;

        var fields = Object.keys(elements).filter(function (k) {
            return (elements[k].name !== "honeypot");
        }).map(function (k) {
            if (elements[k].name !== undefined) {
                return elements[k].name;
            } else if (elements[k].length > 0) {
                return elements[k].item(0).name;
            }
        }).filter(function (item, pos, self) {
            return self.indexOf(item) == pos && item;
        });

        var formData = {};
        fields.forEach(function (name) {
            var element = elements[name];
            formData[name] = element.value;
            if (element.length) {
                var data = [];
                for (var i = 0; i < element.length; i++) {
                    var item = element.item(i);
                    if (item.checked || item.selected) {
                        data.push(item.value);
                    }
                }
                formData[name] = data.join(', ');
            }
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "sheet"; // default sheet name
        formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

        console.log(formData);
        return formData;
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        var form = event.target;
        var data = getFormData(form);
        if (data.email && !validEmail(data.email)) {
            var invalidEmail = form.querySelector(".email-invalid");
            if (invalidEmail) {
                invalidEmail.style.display = "block";
                return false;
            }
        } else {
            disableAllButtons(form);
            var url = form.action;
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function () {
                console.log(xhr.status, xhr.statusText);
                console.log(xhr.responseText);
                var formElements = form.querySelector(".form-elements")
                if (formElements) {
                    formElements.style.display = "none"; // hide form
                }
                var thankYouMessage = form.querySelector(".thankyou_message");
                if (thankYouMessage) {
                    thankYouMessage.style.display = "block";
                }
                return;
            };

            var encoded = Object.keys(data).map(function (k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
            }).join('&');
            xhr.send(encoded);
        }
    }

    function loaded() {
        console.log("Contact form submission handler loaded successfully.");
        var forms = document.querySelectorAll("form.gform");
        for (var i = 0; i < forms.length; i++) {
            forms[i].addEventListener("submit", handleFormSubmit, false);
        }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);

    function disableAllButtons(form) {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }
})();


