const productsBtn = document.querySelectorAll('.btn__cart.product__card-delete');
const cartProductsList = document.querySelector('.content__cart .content__cart-list');
const cart = document.querySelector('.img__cart');
const cartQuantity = cart.querySelector('.header .top__header .container .menu__header .img__cart .cart__quantity');
const fullPrice = document.querySelector('.header .top__header .container .content__cart .cart__content-bottom .cart__content-fullprice .fullprice');
let price = 0;

const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
	return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
	return price -= currentPrice;
};

const printQuantity = () => {
	let productsListLength = cartProductsList.querySelector('.simplebar-content').children.length;
	cartQuantity.textContent = productsListLength;
	productsListLength > 0 ? cart.classList.add('active') : cart.classList.remove('active');
};

const printFullPrice = () => {
	fullPrice.textContent = `${normalPrice(price)}.99 $`;
};

const generateCartProduct = (img, title, price, id) => {
	return `
    <li class="content__cart-item">
            <article class="cart__content-product cart__product" data-id="${id}">
				<img src="${img}" class="cart__product-img">
				<div class="cart__product-text">
				<h3>${title}</h3>
				<span class="cart-product__price">${normalPrice(price)}.99 $</span>
				</div>
				<button class="cart__content-delete" aria-label="Удалить товар"> 
				</button>
            </article>
        </li>       
	`;
};

const deleteProducts = (productParent) => {
	let id = productParent.querySelector('.header .top__header .container .content__cart .content__cart-list .content__cart-item .cart__product').dataset.id;
	document.querySelector(`.product__container .product[data-id="${id}"]`).querySelector('.btn__cart').disabled = false;
	
	let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.header .top__header .container .content__cart .content__cart-list .content__cart-item .cart__content-product .cart__product-text .cart-product__price').textContent));
	minusFullPrice(currentPrice);
	printFullPrice();
	productParent.remove();

	printQuantity();
};

productsBtn.forEach(el => {
	el.closest('.product__container .product').setAttribute('data-id', randomId());

	el.addEventListener('click', (e) => {
		let self = e.currentTarget;
		let parent = self.closest('.product__container .product');
		let id = parent.dataset.id;
		let img = parent.querySelector('.img__segway-one.product__card-delete').getAttribute('src');
		let title = parent.querySelector('.h.product__card-delete').textContent;
		// let priceString = priceWithoutSpaces(parent.querySelector('.product-price__current').textContent);
		let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.p.product__card-delete').textContent));

		plusFullPrice(priceNumber);

		printFullPrice();

        cartProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id))
        printQuantity();

		
		self.disabled = true;
	});
});

cartProductsList.addEventListener('click', (e) => {
	if (e.target.classList.contains('cart__content-delete')) {
		deleteProducts(e.target.closest('.header .top__header .container .content__cart .content__cart-list .content__cart-item'));
	}
});


