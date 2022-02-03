const closebtn = document.querySelector('.closebtn');
const toggleMenu =document.querySelector('.toggleMenu');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click',() => {
    menu.classList.add('show')
});

closebtn.addEventListener('click',() => {
    menu.classList.remove('show')
});