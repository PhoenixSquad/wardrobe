'use strict';

let addToCart = document.getElementsByClassName('addToCartBtn');
let cartNum = document.querySelector('body > header > div > nav > ul > li:nth-child(2) > a');
let list = [];

for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener('click', function (e) {
    let item = {
      id: addToCart[i].firstChild.id,
      name: addToCart[i].parentElement.parentElement.children[1].textContent,
      price: addToCart[i].parentElement.parentElement.children[2].children[0].textContent,
      quantity: 1,
    };
    console.log(localStorage.length);
    if (localStorage.length === 0) {

      list.push(item);
      localStorage.setItem('name', JSON.stringify((list)));
      window.location.reload();
    }

    else {

      const storageList = JSON.parse(localStorage.getItem('name'));
      storageList.map(data => {
        if (item.id === data.id) {
          item.quantity = data.quantity + 1;
        }
        else {
          list.push(data);
        }
        console.log(data);

      });
      list.push(item);
      localStorage.setItem('name', JSON.stringify(list));
      window.location.reload();
    }
  });

}
let no = 0;
JSON.parse(localStorage.getItem('name')).map(data=>{
  no = no+data.quantity
  ;	});
cartNum.textContent = `Cart (${no})`;



