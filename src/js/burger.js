const burger = document.querySelector('.header .top__header .container .burger');
const nav = document.querySelector('.header .top__header .container .list');
const body = document.body;
const listItem = document.querySelectorAll('.header .top__header .container .list .list__item');

burger.addEventListener('click', () => {
    body.classList.toggle('stop__scroll')
    burger.classList.toggle('in--visible')
    nav.classList.toggle('in--visible')
})

listItem.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop__scroll')
        burger.classList.remove('in--visible')
        nav.classList.remove('in--visible')
    })
})