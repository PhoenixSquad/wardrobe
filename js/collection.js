'use strict';

let addToCart = document.getElementsByClassName('addToCartBtn');
console.log(addToCart);
let cartNum = document.querySelector('body > header > div > nav > ul > li:nth-child(3) > a');
let list = [];
let products = [];
let grid = document.getElementsByClassName('grid-item');
console.log(grid.length);
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
JSON.parse(localStorage.getItem('name')).map(data => {
  no = no + data.quantity
  ;
});
cartNum.textContent = `Cart (${no})`;

for (let i = 0; i < addToCart.length; i++) {
  products.push({ productName: addToCart[i].parentElement.parentElement.children[1].textContent });
}
console.log(products);





const searchBar = document.getElementById('searchBar');
let upperContent = document.getElementsByClassName('upperContent');

console.log();
searchBar.addEventListener('keyup', search);
function search() {
  let input = searchBar.value;
  input = input.toLowerCase();
  console.log(input);

  for (let i = 0; i < grid.length; i++) {

    if (!grid[i].children[1].textContent.toLowerCase().includes(input)) {
      grid[i].style.display = 'none';
      grid[i].parentElement.parentElement.children[0].style.display = 'none';
    }
    else {
      grid[i].style.display = 'block';
    }
  }
}
