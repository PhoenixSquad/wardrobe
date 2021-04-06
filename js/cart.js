'use strict';
// 1- get elements then parse it.
// 2- create li elements inside cart and append it.
// 3- create text content inside li.
// 4- create remove button and append it to remove the element from local storage.

let cartEl = document.getElementById('itemList');
let purchases =JSON.parse(localStorage.getItem('name'));


let remBtn=[];


let tr1El=document.createElement('th');
cartEl.append(tr1El);
tr1El.textContent= 'Name';

let tr2El=document.createElement('th');
cartEl.append(tr2El);
tr2El.textContent= 'Price';
let tr3El=document.createElement('th');
cartEl.append(tr3El);
tr3El.textContent= 'Quantity';




for (let i=0; i<purchases.length; i++){
  let row = document.createElement('tr');
  cartEl.appendChild(row);
  let thEl = document.createElement('th');
  thEl.setAttribute('id',`li${i}`);
  row.appendChild(thEl);


  thEl.textContent = purchases[i].name ;

  let tdEl1= document.createElement('td');
  row.append(tdEl1);
  tdEl1.textContent= purchases[i].price;


  let tdEl2= document.createElement('td');
  row.append(tdEl2);
  tdEl2.textContent= purchases[i].quantity;


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

    }
    if (Number(purchases[i].quantity) ===0 || Number(purchases[i].quantity) <0 ){

      removeLocalStorage(i);
    }
    localStorage.setItem('name',JSON.stringify(purchases));
    location.reload();

  }



}

function removeLocalStorage(index){
  // let store = JSON.parse(localStorage.getItem("itemsArray")) || [];
  purchases.splice(index, 1);
  localStorage.setItem('name', JSON.stringify(purchases));
}
