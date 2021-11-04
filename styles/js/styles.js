
const header = document.querySelector(".header")
const navbar = document.querySelector(".navbar");
const navbarBtn = document.querySelector(".navbar__btn");
const openMenu = document.querySelector(".navbar__btn-open")
const closeMenu = document.querySelector(".navbar__btn-close");
const navbarList = document.querySelector(".navbar__list");
const navbarlog = document.querySelector(".navbar__logo");
const thumbnails = document.querySelectorAll(".thumbnails__item");
const slider = document.querySelector(".glider")
const sliderClose = document.querySelector(".glider__close")
const overlayPopup = document.querySelector(".overlay-popup")
const popupClose = document.querySelector(".glider__close")
const popupText = document.querySelector(".navbar__text")
const sliderImages = document.querySelector(".slider").children;
const prev = document.querySelector(".hero__prev-btn");
const next = document.querySelector(".hero__next-btn");
const totalImages = sliderImages.length;
let index = 0;


prev.addEventListener('click', (e) => {
    // console.log(e)
    e.preventDefault();
    nextImage('prev');
});
next.addEventListener('click', (e) => {
    // console.log(e)
    e.preventDefault();
    nextImage('next');
});

function nextImage(direction) {
    console.log(direction);
    if (direction == 'next') {
        index++;
        if (index == totalImages) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalImages - 1;

        } else {
            index--;
        }
    }
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].classList.remove('show');

    }
    sliderImages[index].classList.add('show');
}



// thumbnails.forEach(item => {
//     item.addEventListener('click', event => {

//         if (header.classList.toggle('overlay-large')) {
//             slider.classList.toggle('glider-change')
//             // overlayPopup.classList.add("overlay-show")
//             toggleScroll();

//         } else {
//             document.querySelector('.overlay-popup').style.display = "none";
//             reload();
//         }

//     });

// });

// popupClose.addEventListener('click', (e) => {
//     console.log(e)
//     header.classList.add('overlay')
//     popupClose.classList.remove("popup-close")
//     overlayPopup.classList.remove("overlay-show")
//     document.querySelector(".overlay").remove(".active")

//     reload();
// });

openMenu.addEventListener('click', (e) => {
    console.log(e)
    navbarList.classList.toggle('navbar__move-in');
    openMenu.classList.toggle('hide')
    closeMenu.classList.toggle('show')
    navbarlog.classList.toggle('hide');
    header.classList.toggle('overlay');


    toggleScroll();


});

closeMenu.addEventListener('click', (e) => {
    console.log(e)
    closeMenu.classList.toggle('show')
    navbarList.classList.add('navbar__move-out');
    header.classList.toggle('overlay');
    navbarlog.classList.toggle('hide');
    openMenu.classList.toggle('hide')



    reload();


});

const toggleScroll = () => {
    document.body.classList.toggle('hide-scroll');

}

const reload = () => {
    window.location.reload();
}

let navbarText = document.querySelector(".navbar__text")
const popup = document.querySelector('.shoping-cart')
let add = document.querySelector(".counter__btn-plus");
let remove = document.querySelector(".counter__btn-minus");
let int = document.querySelector(".counter__text")
let intCart = document.querySelector('.navbar__text')
let cartBtn = document.querySelector('.navbar__shop-cart-icon')
let integer = 0;

/************adding to carts******/

