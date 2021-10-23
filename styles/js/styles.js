let products = [

    {
        description: "Autumn Limited Edition...",
        price: '$250.00',
        intCart: 0

    }]

const header = document.querySelector(".header")
const navbar = document.querySelector(".navbar");
const navbarMenu = document.querySelector(".navbar__menu");
const openMenu = document.querySelector(".navbar__menu-open")
const closeMenu = document.querySelector(".navbar__menu-close");
const navbarList = document.querySelector(".navbar__list");
const navbarlog = document.querySelector(".navbar__logo");
const thumbnails = document.querySelector(".thumbnails__item");
const slider = document.querySelector(".slider")
const sliderClose = document.querySelector(".slider__close")
const overlayPopup = document.querySelector(".overlay-popup")
const popupClose = document.querySelector(".slider__close")
thumbnails.addEventListener('click', (e) => {
    console.log(e);
    header.classList.toggle('overlay');
    slider.classList.toggle('slider-change')
    sliderClose.classList.toggle('yy')
    overlayPopup.classList.toggle("overlay-show")


});
popupClose.addEventListener('click', (e) => {
    popupClose.classList.toggle('.hide')
    console.log(e)
});

navbarMenu.addEventListener('click', (e) => {
    console.log(e)
    navbarList.classList.toggle('navbar__move-in');
    openMenu.classList.toggle('hide');
    closeMenu.classList.toggle('show');
    navbarlog.classList.toggle('hide');
    header.classList.toggle('overlay');


    toggleScroll();


});

const toggleScroll = () => {
    document.body.classList.toggle('hide-scroll');
}



let navbarText = document.querySelector(".navbar__text")
const popup = document.querySelector('.shoping-cart')
let add = document.querySelector(".counter__btn-plus");
let remove = document.querySelector(".counter__btn-minus");
let int = document.querySelector(".counter__text")
let intCart = document.querySelector('.navbar__text')
let cartBtn = document.querySelector('.navbar__shop-cart-icon')
let integer = 0;



add.addEventListener("click", () => {
    integer += 1;
    int.textContent = integer;
    console.log("added to cart");
    cartNumbers();
    navbarText.classList.toggle(".yy")


});
remove.addEventListener("click", () => {
    integer -= 1
    int.textContent = integer;
    console.log("removed from cart");

    removeNumbers()
});

cartBtn.addEventListener('click', () => {
    intCart.classList.toggle('show');
    popup.classList.toggle('popup')
    integer += 1;
    intCart.textContent = integer;
});

let cart = document.querySelector('.cart');



cart.addEventListener('click', () => {
    console.log("added to cart");


});
function cartNumbers() {

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.navbar__text').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('navbar__text').textContent = 1;
    }

}
function onLoadcartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector(".navbar__text").textContent = productNumbers;
    }
}

function removeNumbers() {

    let removeItems = localStorage.getItem('removeNumbers');
    removeItems = parseInt(removeItems);

    if (removeItems) {
        localStorage.setItem('removeNumbers', removeItems - 1);
        document.querySelector('.navbar__text').textContent = removeItems - 1;

    } else {
        localStorage.setItem('removeNumbers', 1);
        document.querySelector('navbar__text').textContent = 0;
    }
}

onLoadcartNumbers()