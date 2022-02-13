const closebtn = document.querySelector('.closebtn');
const toggleMenu =document.querySelector('.toggleMenu');
const menu = document.querySelector('.menu');

//.info.html
const previous_icon = document.getElementById('previous_icon')
const next_icon = document.getElementById('next_icon');
const infocard = document.querySelector('.infocard');

toggleMenu.addEventListener('click',() => {
    menu.classList.add('show')
});

closebtn.addEventListener('click',() => {
    menu.classList.remove('show')
});

next_icon.addEventListener('click', () => {
    infocard.scrollLeft += 240;
});


previous_icon.addEventListener('click', () => {
    infocard.scrollLeft -= 240;
});

