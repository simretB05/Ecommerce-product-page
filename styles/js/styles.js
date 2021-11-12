
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
let mainPop = document.querySelector('.shoping-cart__main-cont')
let empty = document.querySelector('.shoping-cart__empty')






let integer = 0;

/************adding to carts******/




let products = [];

let Item = function (discription, price, count) {
    this.discription = discription
    this.price = price
    this.count = count


};
/***********add to  cart ****************/
function addItemToCart(discription, price, count) {
    for (let i in products) {
        if (products[i].discription === discription) {
            products[i].count++;
            return;
        }
    }
    var item = new Item(discription, price, count);

    products.push(item);
}


add.addEventListener("click", () => {
    if (integer += 1) {
        int.textContent = integer;
        empty.classList.add('hide')
    } else {
        if (integer <= 0) {
            int.textContent = 0
            console.log("int is 0");
            empty.classList.add('hide')
        }
    }

    // console.log("int is 0");
    // empty.classList.add('hide')



    mainPop.classList.add("show-popup")

    addItemToCart("discription", "$125.00", 1)
    console.log(products)
});

/***********remove from cart  ****************/

function removeItemFromCart(discription, price, count) {
    for (var i in products) {
        if (products[i].discription === discription) {
            products[i].count--;// cart[i].count = cart[i].count -1
            if (products[i].count === 0) {
                products.splice(i, 1);
                return false

            }
        }
    }
}
console.log(products)
remove.addEventListener("click", () => {

    if (integer <= 0) {
        int.textContent === 0
    } else {
        integer -= 1
        int.textContent = integer
        console.log("int is 0");
        empty.classList.add('hide')

    }


    removeItemFromCart("discription")
    console.log(products)

});



cartBtn.addEventListener('click', () => {
    intCart.classList.toggle('show');
    popup.classList.toggle('show')
    // integer += 1;
    // intCart.textContent = integer;
});



// function removeItemFromCartAll(discription, price, count) {//removing all item name
//     for (var i in products) {
//         if (products[i].discription === discription) {
//             products.splice(i, 1);

//         }
//     }


// }

const trashBtn = document.querySelector(".shoping-cart__delete")

trashBtn.addEventListener('click', () => {
    removeItemFromCartAll("discription", "$125.00", 1)
    console.log(products)
    mainPop.classList.remove("show-popup")
    empty.classList.add("show-up")
    int.textContent = 0



});

function clearCart() {
    mainPop.classList.remove("show-popup")
    empty.classList.add("show-up")
    int.textContent = 0
    products = [];
    console.log(products)
}


let cartItem = document.querySelector('.cart');






















// // const addbtn = (count) => {
// //     for (var i in cart) {
// //         if (cart[i].count === count) {
// //             cart[i].count++;
// //             return;
// //         }
// //     }
// //     var item = new Item(count);
// //     cart.push(item);
// //     console.log(cart)
// // };

// function removeItemFromCart(price, count) {
//     for (var i in cart) {
//         if (cart[i].text === text) {
//             cart[i].count--;// cart[i].count = cart[i].count -1
//             if (cart[i].count === 0) {
//                 cart.splice(i, 1);
//                 mainPop.classList.add('hide')
//                 empty.classList.add('show-up')
//             }

//             break;
//         }
//     }

// }
// add.addEventListener("click", () => {

// });
// // addItemToCart("winter", 125.00, 1)
// // // addItemToCart("Autumn Limited Edition...ple", 125.00, 1)
// // // addItemToCart("spring Limited Edition...ple", 125.00, 1)
// // // addItemToCart("fall", 125.00, 1)
// // addItemToCart("winter", 125.00, 1)



// // console.log(cart[0].count);

// // removeItemFromCart("winter")

// // console.log(cart[0].count);