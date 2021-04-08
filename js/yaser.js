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
  menFilter.style.background='#284b63';
  menFilter.style.color='white';
  womenProduct.style.display='none';
  womenFilter.style.background='white';
  womenFilter.style.color='black';
  kidsProduct.style.display='none';
  kidsFilter.style.background='white';
  kidsFilter.style.color='black';
  menFilter.removeEventListener('click',showMenProducts);
  menFilter.addEventListener('click',unactiveMenFilter);
  womenFilter.addEventListener('click',showWomenProducts);
  kidsFilter.addEventListener('click',showKidsProducts);

}
function unactiveMenFilter(event){
  event.preventDefault();
  menProduct.style.display='block';
  menFilter.style.background='white';
  menFilter.style.color='black';
  womenProduct.style.display='block';
  womenFilter.style.background='white';
  womenFilter.style.color='black';
  kidsProduct.style.display='block';
  kidsFilter.style.background='white';
  kidsFilter.style.color='black';
  menFilter.addEventListener('click',showMenProducts);
}

womenFilter.addEventListener('click',showWomenProducts);
function showWomenProducts(event){
  event.preventDefault();
  womenProduct.style.display='block';
  womenFilter.style.background='#284b63';
  womenFilter.style.color='white';
  menProduct.style.display='none';
  menFilter.style.background='white';
  menFilter.style.color='black';
  kidsProduct.style.display='none';
  kidsFilter.style.background='white';
  kidsFilter.style.color='black';
  womenFilter.removeEventListener('click',showWomenProducts);
  womenFilter.addEventListener('click',unactiveWomenFilter);
  menFilter.addEventListener('click',showMenProducts);
  kidsFilter.addEventListener('click',showKidsProducts);
}
function unactiveWomenFilter(event){
  event.preventDefault();
  womenProduct.style.display='block';
  womenFilter.style.background='white';
  womenFilter.style.color='black';
  menProduct.style.display='block';
  menFilter.style.background='white';
  menFilter.style.color='black';
  kidsProduct.style.display='block';
  kidsFilter.style.background='white';
  kidsFilter.style.color='black';
  womenFilter.addEventListener('click',showWomenProducts);
}
kidsFilter.addEventListener('click',showKidsProducts);
function showKidsProducts(event){
  event.preventDefault();
  kidsProduct.style.display='block';
  kidsFilter.style.background='#284b63';
  kidsFilter.style.color='white';
  womenProduct.style.display='none';
  womenFilter.style.background='white';
  womenFilter.style.color='black';
  menProduct.style.display='none';
  menFilter.style.background='white';
  menFilter.style.color='black';
  kidsFilter.removeEventListener('click',showKidsProducts);
  kidsFilter.addEventListener('click',unactiveKidsFilter);
  womenFilter.addEventListener('click',showWomenProducts);
  menFilter.addEventListener('click',showMenProducts);
}
function unactiveKidsFilter(event){
  event.preventDefault();
  kidsProduct.style.display='block';
  kidsFilter.style.background='white';
  kidsFilter.style.color='black';
  womenProduct.style.display='block';
  womenFilter.style.background='white';
  womenFilter.style.color='black';
  menProduct.style.display='block';
  menFilter.style.background='white';
  menFilter.style.color='black';
  kidsFilter.addEventListener('click',showKidsProducts);
}
