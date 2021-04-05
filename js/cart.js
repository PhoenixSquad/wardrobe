'use strict';
// 1- get elements then parse it.
// 2- create li elements inside cart and append it.
// 3- create text content inside li.
// 4- create remove button and append it to remove the element from local storage.

let cartEl = document.getElementById('itemList');
let purchases =JSON.parse(localStorage.getItem('name'));


let remBtn=[];

for (let i=0; i<purchases.length; i++){
  let row = document.createElement('tr');
  cartEl.appendChild(row);
  let thEl = document.createElement('th');
  thEl.setAttribute('id',`li${i}`);
  row.appendChild(thEl);
  // let selEl = document.createElement('select');
  // row.appendChild(selEl);
  // let optEl1 = document.createElement('option');
  // selEl.appendChild(optEl1);
  // optEl1.textContent = purchases[i].quantity;
  // let optEl2 = document.createElement('option');
  // selEl.appendChild(optEl2);
  // optEl2.textContent = purchases[i].quantity-1;
  // let optEl3 = document.createElement('option');
  // selEl.appendChild(optEl3);
  // optEl3.textContent = purchases[i].quantity+1;
  thEl.textContent = purchases[i].name + ` price: ${purchases[i].price}  x ${purchases[i].quantity}`;
  remBtn = document.createElement('button');
  row.appendChild(remBtn);
  remBtn.setAttribute('id',`removeBtn${i}`);
  remBtn.textContent = 'Remove Item';
  remBtn.addEventListener('click', remFun);
}


let totEl = document.getElementById('total');
let total = 0 ; 
for (let i=0; i<purchases.length; i++){
  total = total + Number((purchases[i].price).split(/[ ,]+/)[1])*purchases[i].quantity;
}
let buttonEl = document.getElementById('submitBtn');
buttonEl.addEventListener('click',submitFun);
function submitFun(){
  totEl.textContent = `Total: $${total}`;
}


console.log(remBtn);

function remFun(event){
  for (let i=0; i<purchases.length; i++){
    if (event.target.id === `removeBtn${i}`){
      purchases[i].quantity = purchases[i].quantity-1;
      if (purchases[i].quantity < 0){
        purchases[i].quantity = 0;
        break;
      }
      localStorage.setItem('name',JSON.stringify(purchases));
    }
  }
}
