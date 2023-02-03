function initReviews() {
    if (window.matchMedia("(max-width: 4000px)").matches) {
        let offset = 0;
        let sliderLine = document.querySelector('.section:nth-child(17) .slider__reviews');
    
        document.querySelector('.section:nth-child(17) .section__arrow .arrow__next').addEventListener('click', function() {
            offset -= 840;
            if (offset < 0) {
                offset = 2520;
            }
            sliderLine.style.left = -offset + 'px';
        })
    
        document.querySelector('.section:nth-child(17) .section__arrow .arrow__prev').addEventListener('click', function() {
            offset += 840;
            if (offset > 2520) {
                offset = 0;
            }
            sliderLine.style.left = -offset + 'px';
        })
    }
    if (window.matchMedia("(max-width: 1400px)").matches) {
        let offset = 0;
        let sliderLine = document.querySelector('.section:nth-child(17) .slider__reviews');
    
        document.querySelector('.section:nth-child(17) .section__arrow .arrow__next').addEventListener('click', function() {
            offset -= 780;
            if (offset < 0) {
                offset = 2340;
            }
            sliderLine.style.left = -offset + 'px';
        })
    
        document.querySelector('.section:nth-child(17) .section__arrow .arrow__prev').addEventListener('click', function() {
            offset += 780;
            if (offset > 2340) {
                offset = 0;
            }
            sliderLine.style.left = -offset + 'px';
        })
    }
    if (window.matchMedia("(max-width: 1200px)").matches) {
        let offset = 0;
        let sliderLine = document.querySelector('.section:nth-child(17) .slider__reviews');
    
        document.querySelector('.section:nth-child(17) .section__arrow .arrow__next').addEventListener('click', function() {
            offset -= 680;
            if (offset < 0) {
                offset = 3400;
            }
            sliderLine.style.left = -offset + 'px';
        })
    
        document.querySelector('.section:nth-child(17) .section__arrow .arrow__prev').addEventListener('click', function() {
            offset += 680;
            if (offset > 3400) {
                offset = 0;
            }
            sliderLine.style.left = -offset + 'px';
        })
    }
    if (window.matchMedia("(max-width: 992px)").matches) {
        let offset = 0;
        let sliderLine = document.querySelector('.section:nth-child(17) .slider__reviews');
    
        document.querySelector('.section:nth-child(17) .section__arrow .arrow__next').addEventListener('click', function() {
            offset -= 510;
            if (offset < 0) {
                offset = 2550;
            }
            sliderLine.style.left = -offset + 'px';
        })
    
        document.querySelector('.section:nth-child(17) .section__arrow .arrow__prev').addEventListener('click', function() {
            offset += 510;
            if (offset > 2550) {
                offset = 0;
            }
            sliderLine.style.left = -offset + 'px';
        })
    }
    if (window.matchMedia("(max-width: 768px)").matches) {
        let offset = 0;
        let sliderLine = document.querySelector('.section:nth-child(17) .slider__reviews');
    
        document.querySelector('.section:nth-child(17) .section__arrow .arrow__next').addEventListener('click', function() {
            offset -= 380;
            if (offset < 0) {
                offset = 1900;
            }
            sliderLine.style.left = -offset + 'px';
        })
    
        document.querySelector('.section:nth-child(17) .section__arrow .arrow__prev').addEventListener('click', function() {
            offset += 380;
            if (offset > 1900) {
                offset = 0;
            }
            sliderLine.style.left = -offset + 'px';
        })
    }
    if (window.matchMedia("(max-width: 576px)").matches) {
        let offset = 0;
        let sliderLine = document.querySelector('.section:nth-child(17) .slider__reviews');
    
        document.querySelector('.section:nth-child(17) .section__arrow .arrow__next').addEventListener('click', function() {
            offset -= 380;
            if (offset < 0) {
                offset = 1900;
            }
            sliderLine.style.left = -offset + 'px';
        })
    
        document.querySelector('.section:nth-child(17) .section__arrow .arrow__prev').addEventListener('click', function() {
            offset += 380;
            if (offset > 1900) {
                offset = 0;
            }
            sliderLine.style.left = -offset + 'px';
        })
    }
}

initReviews()
window.addEventListener('resize', initReviews)