function initButton() {
    const buttonSegway = document.querySelectorAll('.header .bottom__header .container .slider .slider__wrapper .segway');
    const segway = document.querySelectorAll('.section:nth-child(1) .title__segway .container .block__left');
    const segwayImg = document.querySelectorAll('.section:nth-child(1) .title__segway .container .block__right');

    if (window.matchMedia("(max-width: 2560px)").matches) {
        buttonSegway.forEach(item => {
            item.addEventListener('click', function() {
                let currentBtn = item;
                let tabId = currentBtn.getAttribute('data-tab');
                let tabImgId = currentBtn.getAttribute('data-img');

                let currentTab = document.querySelector(tabId);
                let currentImgTab = document.querySelector(tabImgId);

                if(! currentBtn.classList.contains('active')) {
                    buttonSegway.forEach(function(item) {
                        item.classList.remove('active')
                    })

                    segway.forEach(function(item) {
                        item.classList.remove('active')
                    })

                    segwayImg.forEach(function(item) {
                        item.classList.remove('active')
                    })

                    currentImgTab.classList.add('active')
                    currentBtn.classList.add('active')
                    currentTab.classList.add('active')
                }
            })
        })

        document.querySelector('.header .bottom__header .container .slider .slider__wrapper .segway').click();
        document.querySelector('.section:nth-child(1) .title__segway .container .block__right').click();
    }
}

initButton()
window.addEventListener('resize', initButton)