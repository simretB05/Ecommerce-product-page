
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

/************adding next and previous ******/
const totalImages = sliderImages.length;
let index = 0;
prev.addEventListener('click', (e) => {
    // console.log(e)
    nextImage('next');

});
next.addEventListener('click', (e) => {
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



popupClose.addEventListener('click', (e) => {
    console.log(e)
    header.classList.add('overlay')
    popupClose.classList.remove("popup-close")
    overlayPopup.classList.remove("overlay-show")
    document.querySelector(".overlay").remove(".active")

    reload();
});

/************open and close btn ******/

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


/************adding to carts******/


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
            // empty.classList.remove("show-up")
            return;
        }
    }
    let item = new Item(discription, price, count);

    products.push(item);
}


add.addEventListener("click", (e) => {
    if (integer < 0) {        // empty.classList.add('hide')

        int.textContent = 0
        removeItemFromCart("discription")
        empty.classList.add("show-up")
        removeItemFromCart("discription", 125.00, 1)

        savecart()



    }
    else {
        if
            (integer += 1) {
            int.textContent = integer
            mainPop.classList.add("show-popup")
            empty.classList.add("hide")
            addItemToCart("discription", 125.00, 1)


            savecart()

        }

    }




    console.log(e)
});

/***********remove from cart  ****************/

function removeItemFromCart(discription, price, count) {

    for (var i in products) {
        if (products[i].count === 0) {
            products[i].discription === discription
            products.splice(i, 1);
            return false
        }
        else {
            if (products[i].discription === discription) {
                products[i].count--;// cart[i].count = cart[i].count -1


            }
        }
    }
}



remove.addEventListener("click", (e) => {
    e.preventDefault();
    // if (integer === 0) {
    //     int.textContent = 0
    if (integer < 1) {
        int.textContent = 0
        mainPop.classList.remove("show-popup");
        empty.classList.remove("hide");
        removeItemFromCart("discription", 125.00, 1)

        console.log(products)
        savecart()

        return false

    } else {

        if (integer -= 1) {
            int.textContent = integer
            removeItemFromCart()
            // mainPop.classList.remove("show-popup");
            empty.classList.add("hide");
            removeItemFromCart("discription", 125.00, 0)
            console.log(products)
            console.log(e);

            savecart()
            console.log(totalCart())


        }

    }


});

function clearCart() {
    mainPop.classList.remove("show-popup")
    empty.classList.add("show-up")
    int.textContent = 0
    products = [];
    console.log(products)
}

function removeItemFromCartAll(discription) {//removing all item name
    for (var i in products) {
        if (products[i].discription === discription) {
            products.splice(i, 1);
            return false;

        }
    }
}

const trashBtn = document.querySelector(".shoping-cart__delete")

trashBtn.addEventListener('click', () => {
    empty.classList.add("show-up")

    mainPop.classList.remove("show-popup")

    removeItemFromCartAll("discription")
    int.textContent = 0
    reload();
    console.log(products)
});

cartBtn.addEventListener('click', () => {
    intCart.classList.toggle('show');
    popup.classList.toggle('show')
    if
        (integer > 1) {
        int.textContent = integer
        mainPop.classList.add("show-popup");


    } else {
        if (integer < 1) {
            int.textContent === 0
            mainPop.classList.remove("show-popup");
            // empty.classList.add("show-up")
        }

    }
});


/***********save to local storage ****************/



// var a = ["A", "B", "C"]
// var b = a.slice();

// b.push("D");
// console.log(a);
// console.log(b);

// var a = { age: 22, name: "simret" }

// var b = a;
// b.name = "brendan";
// console.log(a)
// console.log(b)



function countCart() {//-> return total count
    var totalCount = 0;
    for (var i in products) {
        totalCount += products[i].count;
    }
    return totalCount;
}

function totalCart() {// -> return total cost
    var totalCost = 0;
    for (var i in products) {
        totalCost += products[i].price

    }
    return totalCost;

}


function ListCart() {// array of items
    let cartCopy = [];
    for (let i in products) {
        let itemx = products[i];

        let itemxCopy = {};
        for (let p in itemx) {
            itemxCopy[p] = itemx[p];


        }
        cartCopy.push(itemxCopy);
        console.log(cartCopy)
        console.log(itemxCopy)

    }
    return cartCopy;

}

function savecart() {
    localStorage.setItem("shoppingCart", JSON.stringify(products));
    totalCart()

}
function loadCart() {
    savecart()
    cart = JSON.parse(localStorage.getItem("shopingCart"));



}



let cartItem = document.querySelector('.cart');

function displayCart() {
    loadCart()
    let arrays = ListCart()
    let outputCount = "";
    let outputPrice = "";
    let outputTotal = "";
    for (var i in arrays) {
        outputCount = arrays[i].count
        outputPrice = arrays[i].price
        outputTotal = arrays[i].price * arrays[i].count
        document.querySelector(".shoping-cart__number").textContent = outputCount;
        document.querySelector(".shoping-cart__price").textContent = outputPrice;
        document.querySelector(".shoping-cart__span").textContent = outputTotal
        document.querySelector(".navbar__text").textContent = outputCount

    }
    console.log(arrays)

}

cartItem.addEventListener("click", () => {

    displayCart()
    popupText.classList.add("show-popuptext")

    console.log()


})

































































































// var array = ListCart();
// console.log("-------------------");
// console.log(array);
// console.log(products)

// let localCart;
// if (localStorage.getItem("localCart") === null) {
//     localCart = [];
// } else {
//     localCart = JSON.parse(localStorage.getItem('localCart'));
// }
// localCart.push(products);
// localStorage.setItem("localCart", JSON.stringify(localCart));
// console.log(localCart);
// setItem("shopingCart", JSON.stringify(products));

// let productNumbers =[];
//  localStorage.getItem('shopingCart');

// if (productNumbers) {
//     localStorage.setItem('shopingcart', productNumbers + 1);
//     document.querySelector('.navbar__text').textContent = productNumbers + 1;

// } else {
//     localStorage.setItem('cartNumbers', 1);
//     document.querySelector('navbar__text').textContent = 1;
// }







// let localCart;
// if (localStorage.getItem("localCart") === null) {
//     localCart = [];
// } else {
//     localCart = JSON.parse(localStorage.getItem('localCart'));
// }
// localCart.forEach(function (products) {

//     let output = "";

//     output = document.querySelector('.navbar__text').textContent
//     output = localCart.count
// let cartArray = loadCart();
// let output = "";
// for (var i in cartArray) {
//     output = document.querySelector('.navbar__text').textContent
//     output = cartArray[i].count

// }
// }





// const productImages = document.querySelectorAll(".thumbnails__item img"); // selecting all image thumbs
// const productImageSlide = document.querySelector(".slider__list-img"); // seclecting image slider element
// const green = document.querySelector(".green")
// let activeImageSlide = 0; // default slider image

// productImages.forEach((item, i) => { // loopinh through each image thumb
//     item.addEventListener('click', () => { // adding click event to each image thumbnail
//         productImages[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
//         item.classList.add('active'); // adding active class to the current or clicked image thumb
//         green.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
//         activeImageSlide = i; // updating the image slider variable to track current thumb
//         console.log("hey")
//         productImageSlide.classList.add("green")
//     })
// })
// toggle size buttons
// thumbnails.forEach(item => {
//     item.addEventListener('click', (event) => {

//         if (header.classList.toggle('overlay-large')) {
//             slider.classList.toggle('glider-change')
//             // overlayPopup.classList.add("overlay-show")
//             toggleScroll();
//             console.log("u")

//         } else {
//             document.querySelector('.overlay-popup').style.display = "none";
//             reload();
//         }

//     });

// });












