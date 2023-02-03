const dotSegway = document.querySelectorAll('.section:nth-child(7) .container .block__segway .block__position .buttom__line .dot');
const lineSegway = document.querySelectorAll('.section:nth-child(7) .container .block__segway .block__position .buttom__line .lines');
const spanSegway = document.querySelectorAll('.section:nth-child(7) .container .block__segway .block__position .buttom__line .span-h');

dotSegway.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentItem = item
        let tabIdLines = currentItem.getAttribute('data-lines')
        let tabIdSpan = currentItem.getAttribute('data-span')

        let currentLines = document.querySelector(tabIdLines)
        let currentSpan = document.querySelector(tabIdSpan)

        if ( ! currentItem.classList.contains('active')) {
            dotSegway.forEach(function(item) {
                item.classList.remove('active')
            })

            lineSegway.forEach(function(item) {
                item.classList.remove('active')
            })

            spanSegway.forEach(function(item) {
                item.classList.remove('active')
            })


            currentSpan.classList.add('active')
            currentItem.classList.add('active')
            currentLines.classList.add('active')
        }
    })
})



// let i = 0;

// for(i = 0; i < dotSegway.length; i++) {
//     dotSegway[i].addEventListener('click', function() {
//         if (this.classList.contains('active')) {
//             this.classList.remove('active')
//         } else {
//             for(i = 0; i < dotSegway.length; i++) {
//                 dotSegway[i].classList.remove('active')
//             }
//             this.classList.add('active')
//         }
//     })
// }