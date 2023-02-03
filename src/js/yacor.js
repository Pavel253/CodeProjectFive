function init() {
    if (window.matchMedia("(max-width: 4000px)").matches) {
        document.querySelectorAll('.header .top__header .list .list__item').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault()
        
                const href = this.getAttribute('href').substring(1);
        
                const scrollTarget = document.getElementById(href);
                
                const topOffset = 0;
                const elementPosition = scrollTarget.getBoundingClientRect().top
                const offsetPosition = elementPosition - topOffset;
        
                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            })
        })
    }
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.querySelectorAll('.header .header__phone .list .list__item').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault()
        
                const href = this.getAttribute('href').substring(1);
        
                const scrollTarget = document.getElementById(href);
                
                const topOffset = 0;
                const elementPosition = scrollTarget.getBoundingClientRect().top
                const offsetPosition = elementPosition - topOffset;
        
                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            })
        })
    }
}

init()
document.addEventListener('resize', init)