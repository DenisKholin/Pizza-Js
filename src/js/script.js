import Header from "./modules/header";
import Slider from "./modules/slider";
import PizzaCard from "./modules/pizza-cart";
import createCartItem from "./modules/cart-item";

window.addEventListener('DOMContentLoaded', () => {

	Header();
	Slider();

	let
		cartCount = 0,
		priceArr = [],
		arrOfId = [];
	const
		cartArray = [];

	if (JSON.parse(localStorage.getItem('arrOfId')) && JSON.parse(localStorage.getItem('arrOfId')).length != 0) {
		arrOfId = JSON.parse(localStorage.getItem('arrOfId'));
	}


	function hideModal(modalSelector) {
		modalSelector.classList.remove('flexShow', 'fade');
		modalSelector.classList.add('hide');
		document.body.style.overflow = '';
	}


	const checkNotEmpty = (obj) => {
		const vals = Object.keys(obj).map(key => obj[key]);
		if (vals.some(el => el == "") || vals.some(el => el == null) || vals.some(el => el == undefined)) {
			return false;
		} else {
			return true;
		}
	}


	function callCreateModal(clickTrigger, data) {
		document.querySelectorAll(clickTrigger).forEach(el => {
			el.addEventListener('click', ev => {

				data[ev.target.getAttribute('data-serialNumber')].createModal();

			})
		})
	}

	document.querySelector('.modal').addEventListener('click', ev => {
		if (ev.target.classList.contains('modal__button') || ev.target.classList.contains('modal__button_price') || ev.target.classList.contains('modal__button_flare')) {

			const
				currentSize = document.querySelector('.modal__description_size').innerHTML,
				currentWeight = document.querySelector('.modal__description_weight').innerHTML,
				currentSrc = document.querySelector('.modal__pizza_img').getAttribute('src'),
				currentAlt = document.querySelector('.modal__pizza_img').getAttribute('alt'),
				currentPrice = document.querySelector('.modal__button_price').innerHTML,
				serialNumber = ev.currentTarget.getAttribute('data-serialNumber'),
				currentTitle = document.querySelector('.modal__name').innerHTML;
			let
				dataId;

			document.querySelectorAll('.modal__radio').forEach(el => {
				if (el.checked) {
					dataId = el.getAttribute('id');
				}
			})

			if (!(cartArray.includes(dataId))) {

				cartArray.push(dataId);

				createCartItem(currentSrc, currentSize, currentWeight, currentPrice, 1, dataId, currentAlt, currentTitle);

			} else {
				const currentItemCount = document.querySelector(`[data-id = ${dataId}] .cart__item_count`);

				if (currentItemCount) {

					currentItemCount.innerHTML++;
					document.querySelector(`[data-id = ${dataId}] .cart__item_price`).innerHTML = ((currentPrice * currentItemCount.innerHTML).toFixed(2)) + ' руб.';
				}
			}

			calculateTotalPrice();
			cartCount++;
			refreshCartCount();
			setTimeout(() => hideModal(document.querySelector('.modal')), 100)
		}
	})


	function calculateTotalPrice() {
		document.querySelectorAll('.cart__item_price').forEach(el => {
			el = +el.innerHTML.slice(0, -5);
			priceArr.push(el);
		})
		document.querySelectorAll('.total-price').forEach(el => {
			el.innerHTML = priceArr.reduce((sum, current) => sum + current, 0).toFixed(2) + ' руб.';
		})
		priceArr = [];
	}

	function refreshCartCount() {
		document.querySelectorAll('.cart-count').forEach(el => {
			el.innerHTML = cartCount;
		})
	}

	fetch('db.json')
		.then((response) => response.json())
		.then((data) => {

			const pizzaArray = [];
			let serialNumber = 0;

			data.pizza.forEach(elem => {

				const { pizzaName, img, alt, price, ingridient, dataIngridient, smallImg, bigImg, smallPrice, bigPrice, size, smallSize, bigSize, weight, smallWeight, bigWeight, id } = elem;

				if (checkNotEmpty(elem)) {
					pizzaArray.push(new PizzaCard(pizzaName, img, alt, price, ingridient, dataIngridient, smallImg, bigImg, smallPrice, bigPrice, size, smallSize, bigSize, weight, smallWeight, bigWeight, id, serialNumber))
				}

				++serialNumber;

			})
			return pizzaArray;
		})
		.then((data) => {
			callCreateModal('.pizza__item_btn', data);
			callCreateModal('.pizza__item_img', data);
			return data;
		});


	const
		cart = document.querySelector('.cart'),
		cartContainer = document.querySelector('.cart__container'),
		cartButton = document.querySelectorAll('.cart-button');

	cartButton.forEach(el => {
		el.addEventListener('click', () => {
			cart.classList.add('flexShow', 'fade');
			cart.classList.remove('hide');
			cart.style.height = '100vh';
			document.body.style.overflow = 'hidden';
			setTimeout(() => cartContainer.style.transform = 'translate(0rem)', 100);
		})
	})

	function callCartClose() {
		cartContainer.style.transform = 'translate(45rem)'
		cart.classList.add('hide');
		cart.classList.remove('flexShow', 'fade');
		document.body.style.overflow = '';
	}

	cart.addEventListener('click', ev => {
		if (ev.target.classList.contains('cart__close') || ev.target == cart) {
			callCartClose()
		}
	})

	document.addEventListener('keydown', (ev) => {
		if (ev.code == "Escape" && getComputedStyle(cart).display == 'flex') {
			callCartClose();
		}
	});

})