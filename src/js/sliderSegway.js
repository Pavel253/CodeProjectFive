function sliderInit() {
    if (1) {
        let sliderSegway = document.querySelector('.section:nth-child(16) .container__segway .slider:nth-child(1) .slider__line');
        let offsetSegway = 0;
        
        document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__next').addEventListener('click', function() {
            offsetSegway -= 300
            if (offsetSegway < 0) {
                offsetSegway = 2400
            } 
            sliderSegway.style.left = -offsetSegway + 'px'
        })

        document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__prev').addEventListener('click', function() {
            offsetSegway += 300
            if (offsetSegway > 2400) {
                offsetSegway = 0
            } 
            sliderSegway.style.left = -offsetSegway + 'px'
        }) 
    }
    if (window.matchMedia("(max-width: 1400px)").matches) {
        let sliderSegway = document.querySelector('.section:nth-child(16) .container__segway .slider:nth-child(1) .slider__line');
        let offsetSegway = 0;
        
        document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__next').addEventListener('click', function() {
            offsetSegway -= 225
            if (offsetSegway < 0) {
                offsetSegway = 2025 
            } 
            sliderSegway.style.left = -offsetSegway + 'px'
        })

        document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__prev').addEventListener('click', function() {
            offsetSegway += 225
            if (offsetSegway > 2025) {
                offsetSegway = 0
            } 
            sliderSegway.style.left = -offsetSegway + 'px'
        }) 
    }
    if (window.matchMedia("(max-width: 1200px)").matches) {
        let sliderSegway = document.querySelector('.section:nth-child(16) .container__segway .slider:nth-child(1) .slider__line');
        let offsetSegway = 0;
        
        document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__next').addEventListener('click', function() {
            offsetSegway -= 200
            if (offsetSegway < 0) {
                offsetSegway = 1800 
            } 
            sliderSegway.style.left = -offsetSegway + 'px'
        })

        document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__prev').addEventListener('click', function() {
            offsetSegway += 200
            if (offsetSegway > 1800) {
                offsetSegway = 0
            } 
            sliderSegway.style.left = -offsetSegway + 'px'
        }) 
    }
    if (window.matchMedia("(max-width: 1200px)").matches) {
        let sliderSegway = document.querySelector('.section:nth-child(16) .container__segway .slider:nth-child(1) .slider__line');
        let offsetSegway = 0;
        
        document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__next').addEventListener('click', function() {
            offsetSegway -= 200
            if (offsetSegway < 0) {
                offsetSegway = 1800 
            } 
            sliderSegway.style.left = -offsetSegway + 'px'
        })

        document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__prev').addEventListener('click', function() {
            offsetSegway += 200
            if (offsetSegway > 1800) {
                offsetSegway = 0
            } 
            sliderSegway.style.left = -offsetSegway + 'px'
        }) 
    }
}


sliderInit()
window.addEventListener('resize', sliderInit)