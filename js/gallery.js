const navEl = document.querySelector('.nav');
const hamburgerEl= document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle ("nav--open");
   hamburgerEl.classList.toggle("hamburger--open");   
});

navEl.addEventListener('click', () => {
    navEl.classList.remove ("nav--open");
    hamburgerEl.classList.remove("hamburger--open");    
});


const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
 this.classList.toggle('bi-moon-fill');  
  if (this.classList.toggle('bi-brightness-high-fill')) {
   body.style.background='white' ;
   body.style.color='black';
   body.style.transition='2s';
  }else{
body.style.background= 'black';
body.style.color='white';
body.style.transition='2s';
  }
});

const filterContainer = document.querySelector(".gallery-filter");
 galleryItems = document.querySelectorAll(".gallery-item");

 filterContainer.addEventListener("click", (event) =>{
    if (event.target.classList.contains("filter-item")){
        // deactivate existing activ 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active"); 
        const filterValue = event.target.getAttribute("data-filter");
      
    galleryItems.forEach((item) =>{
     if (item.classList.contains(filterValue) || filterValue === 'all') {
        item.classList.remove("hide");
        item.classList.add("show");
     } 
     else {
        item.classList.remove("show");
        item.classList.add("hide");  
     }   
       });    
    }
 });