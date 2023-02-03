function init() {
    if (window.matchMedia("(max-width: 992px)").matches) {
        const images = document.querySelectorAll('.header .bottom__header .slider .slider__wrapper .segway');
        const sliderLineSegway = document.querySelector('.header .slider__wrapper');
        let count = 0;
        let width;
    
        function init() {
            width = document.querySelector('.header .slider').offsetWidth;
            sliderLineSegway.style.width =  width * images.length / 6 + 'px';
            images.forEach(item => {
                item.style.width = width  + 'px';
            })
            rollSlider() 
        }
    
        init()
        window.addEventListener('resize', init);
    
        document.querySelector('.header .arrow__slider .button__right').addEventListener('click', function() {
            count ++;
            if (count >= images.length - 5) {
                count = 0
            }
            rollSlider() 
        })
    
        document.querySelector('header .arrow__slider .button__left').addEventListener('click', function() {
            count--;
            if (count < 0 ) {
                count = images.length - 6
            }
            rollSlider() 
        })
    
        function rollSlider() {
            sliderLineSegway.style.transform = 'translate(-' + count * width / 6 + 'px)'  
        }    
    }
    if (window.matchMedia("(max-width: 420px)").matches) {
        const images = document.querySelectorAll('.header .bottom__header .slider .slider__wrapper .segway');
        const sliderLineSegway = document.querySelector('.header .slider__wrapper');
        let count = 0;
        let width;
    
        function init() {
            width = document.querySelector('.header .slider').offsetWidth;
            sliderLineSegway.style.width =  width * images.length / 4 + 'px';
            images.forEach(item => {
                item.style.width = width  + 'px';
            })
            rollSlider() 
        }
    
        init()
        window.addEventListener('resize', init);
    
        document.querySelector('.header .arrow__slider .button__right').addEventListener('click', function() {
            count ++;
            if (count >= images.length - 4) {
                count = 0
            }
            rollSlider() 
        })
    
        document.querySelector('header .arrow__slider .button__left').addEventListener('click', function() {
            count--;
            if (count < 0 ) {
                count = images.length - 5
            }
            rollSlider() 
        })
    
        function rollSlider() {
            sliderLineSegway.style.transform = 'translate(-' + count * width / 4 + 'px)'  
        }    
    }
}

init()
window.addEventListener('resize', init)