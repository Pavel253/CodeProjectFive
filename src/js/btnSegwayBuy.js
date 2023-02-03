const btn = document.querySelectorAll('.section:nth-child(1) .title__segway .container .block__left .block__warranty .block__btn .btn:nth-child(2)')
const btnDelete = document.querySelector('.modal__segway .modal .back')
const modalSegwayOverlay = document.querySelector('.modal__segway')

const modalSegway = (img, title) => {
    return `
        <img id='imgDelete' src="${img}" alt="">
        <h2 id='hTwoDelete'>${title}</h2>
    `
}

btn.forEach(el => {
    el.addEventListener('click', () => {
		let img = document.querySelector('.block__right.active .img__delete ').getAttribute('src');
        let title = document.querySelector('.block__left.active .h.product__card-delete').textContent;

        modalSegwayOverlay.querySelector('.modal__segway-overlay .modal').insertAdjacentHTML('afterbegin', modalSegway(img, title))
    })
})

btnDelete.addEventListener('click', () => {
    const imgDelete = document.getElementById('imgDelete')
    const titleDelete = document.getElementById('hTwoDelete')

    titleDelete.parentNode.removeChild(titleDelete);
    imgDelete.parentNode.removeChild(imgDelete);

    
})