const benefitBtn = document.querySelectorAll('.benefits__btn .benefit');
const containerBenefit = document.querySelectorAll('.benefits__segway .container__benefit');

benefitBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabIb = currentBtn.getAttribute('data-segway');

        let currentTab = document.querySelector(tabIb);

        if (! currentBtn.classList.contains('active')) {
            benefitBtn.forEach(function(item) {
                item.classList.remove('active');
            })
    
            containerBenefit.forEach(function(item) {
                item.classList.remove('active');
            })
    
            currentTab.classList.add('active');
            currentBtn.classList.add('active');
        }
    })
});

document.querySelector('.benefits__btn .benefit').click()