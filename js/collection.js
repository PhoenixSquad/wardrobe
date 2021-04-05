'use strict';
let cartCount = 0;
let addToCart = document.getElementsByClassName('addToCartBtn');
let cartNum = document.querySelector('body > header > div > nav > ul > li:nth-child(2) > a');
let productID = [];

// console.log(addToCart);
let list = [];
let storageList = [];

for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener('click', function (e) {
    productID.push(addToCart[i].firstChild.id);
    // console.log(productID);
    // if () {
    //   cartCount++;
    // }
    let quantity = 0;
    console.log(localStorage.length);
    if (localStorage.length === 0) {

      list.push({ productID: addToCart[i].firstChild.id, productName: addToCart[i].parentElement.parentElement.children[1].textContent, productNum: addToCart[i].parentElement.parentElement.children[2].children[0].textContent, productQuantity: quantity + 1 });
      localStorage.setItem('name', JSON.stringify((list)));
    }

    else {
      storageList = JSON.parse(localStorage.getItem('name'));
      list = storageList;
      let found = false;
      for (let j = 0; j < list.length; j++) {
        if (list[j].productID === e.target.id) {
          found = true;
          break;
        }
      }
      if (found) {
        storageList = JSON.parse(localStorage.getItem('name'));
        list = storageList;
        list[i].productQuantity++;


        localStorage.setItem('name', JSON.stringify((list)));
      }

      else {
        storageList = JSON.parse(localStorage.getItem('name'));
        list = storageList;
        list.push({ productID: addToCart[i].firstChild.id, productName: addToCart[i].parentElement.parentElement.children[1].textContent, productNum: addToCart[i].parentElement.parentElement.children[2].children[0].textContent, productQuantity: quantity + 1 });
        localStorage.setItem('name', JSON.stringify((list)));
      }
    }
    cartNum.textContent = `Cart (${cartCount})`;
  });

}



