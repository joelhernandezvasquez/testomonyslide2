
const testimonyCard = document.querySelectorAll('.testimony-card');
const observer = new IntersectionObserver(entries =>{
  entries.forEach((entry) =>{
    entry.target.classList.toggle(".swiper-slide-active",entry.isIntersecting);
 
  
    if(entry.isIntersecting)
      observer.unobserve(entry.target);
 },
 {

  threshold:1,
 })
})

testimonyCard.forEach((card)=>{
  observer.observe(card);

})


let swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
 grabCursor: true,
  centeredSlides: true,
 slidesPerView: 'auto',
 coverflowEffect: {
   rotate: 10,
   stretch: 0,
   depth: 0,
   modifier: 1,
   slideShadows: false,
 },
 navigation: {
  nextEl: ".right_arrow",
  prevEl: ".left_arrow",
},
observeParents:true,
observer:true,
 // pagination: {
 //   el: '.swiper-pagination',
 // },
  loop:true,
});
  

