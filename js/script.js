const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const menu_nav = document.querySelector('.menu-nav');
btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
    menu_nav.classList.toggle('menu-nav__active');
})