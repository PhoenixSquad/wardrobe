'use strict';
const menFilter=document.getElementById('menFilter');
const womenFilter=document.getElementById('womenFilter');
const kidsFilter=document.getElementById('kidsFilter');

const menProduct=document.getElementById('menProduct');
const womenProduct=document.getElementById('womenProduct');
const kidsProduct=document.getElementById('kidsProduct');

menFilter.addEventListener('click',showMenProducts);
function showMenProducts(event){
  event.preventDefault();
  menProduct.style.display='block';
  menFilter.style.background='#284b6396';
  menFilter.style.padding='15px';
  womenProduct.style.display='none';
  womenProduct.style.padding='0px';
  womenFilter.style.background='white';
  kidsProduct.style.display='none';
  kidsFilter.style.background='white';
  kidsFilter.style.padding='0px';
}
womenFilter.addEventListener('click',showWomenProducts);
function showWomenProducts(event){
  event.preventDefault();
  womenProduct.style.display='block';
  womenFilter.style.background='#284b6396';
  womenFilter.style.padding='15px';
  menProduct.style.display='none';
  menFilter.style.background='white';
  menFilter.style.padding='0px';
  kidsProduct.style.display='none';
  kidsFilter.style.background='white';
  kidsFilter.style.padding='0px';
}
kidsFilter.addEventListener('click',showKidsProducts);
function showKidsProducts(event){
  event.preventDefault();
  kidsProduct.style.display='block';
  kidsFilter.style.background='#284b6396';
  kidsFilter.style.padding='15px';
  womenProduct.style.display='none';
  womenProduct.style.padding='0px';
  womenFilter.style.background='white';
  menProduct.style.display='none';
  menProduct.style.padding='0px';
  menFilter.style.background='white';
}

