import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination])

const swiper = new Swiper('.swiper', {

    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});