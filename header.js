const navOpen = document.getElementById('nav-button-open');
const nav = document.getElementById('nav');
const navClose = document.getElementById('nav-button-close');
const body = document.getElementById('body');
navOpen.addEventListener('click', function () {
    nav.classList.add('open');
    body.classList.add('open');
});
navClose.addEventListener('click', function () {
    nav.classList.remove('open');
    body.classList.remove('open');
});