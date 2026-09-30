const menuBtn=document.querySelector('.menu-btn');
const navbar=document.querySelector('.navbar');
menuBtn.addEventListener('click',()=>navbar.classList.toggle('open'));
document.querySelectorAll('.navbar nav a').forEach(a=>{
  a.addEventListener('click',()=>navbar.classList.remove('open'));
});
