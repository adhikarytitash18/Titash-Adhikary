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
