'use strict';

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  slides[slideIndex-1].style.display = 'block';
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
// let myNav = document.getElementsByClassName('navBar');
// console.log(myNav);
// window.onscroll = function () { 
  
//   if (document.body.scrollTop >= 10 ) {
//     myNav[0].classList.add('nav-colored');
//     myNav[0].classList.remove('nav-transparent');
//   }
//   else {
//     myNav[0].classList.add('nav-transparent');
//     myNav[0].classList.remove('nav-colored');
//   }
// };
