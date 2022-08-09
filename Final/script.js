// changing navigation style while scrolling
window.addEventListener("scroll",()=>{
   document.querySelector('nav').classList.toggle('window-scrolled',window.scrollY > 0);
})

// contact button circular text button
const textButtons = document.querySelectorAll('.contact_btn');
textButtons.forEach(textButton=>{
   // let text = textButton.querySelector('p');
   // console.log(text)
   // text.innerHTML = text.innerHTML.split('').map((character,index)=>
   // `<span style = "transform:rotate(${index*12}deg)">${character}</span>`).join();
   let text = textButton.querySelector('p')
   text.innerHTML = text.innerHTML.split('').map((character,index)=>
   `<span style="transform:rotate(${index*12}deg)"> ${character} </span>`).join('')
});

// CONTACT BUTTONS(circular text buttons)

//swiper js
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 20,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints:{
     599:{
      slidesPerView:2,
      spaceBetween:40,
     },
     1023:{
      slidesPerView:3,
      spaceBetween:60,
     }
   }
 });

