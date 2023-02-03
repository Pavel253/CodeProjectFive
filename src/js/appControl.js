const appGrid = document.querySelectorAll('.grid__contetn .grid')
const appSpan = document.querySelectorAll('.grid__contetn .title')

appGrid.forEach(item => {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('app-control');
        let currentTab = document.querySelector(tabId);

        if (! currentBtn.classList.contains('active')) {
            appGrid.forEach(function(item) {
                item.classList.remove('active');
            })

            appSpan.forEach(function(item) {
                item.classList.remove('active');
            })

            currentBtn.classList.add('active')
            currentTab.classList.add('active')
        }
        
    })
})