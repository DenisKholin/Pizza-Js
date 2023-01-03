import Header from "./modules/header";
import Slider from "./modules/slider";
import pizzaCard from "./modules/pizzaCard";
import createCartItem from "./modules/cartItem";
import Modal, { hideModal, callCreateModal } from "./modules/modal";
import cart from "./modules/cart";
import { calculateTotalPrice, refreshCartCount } from "./modules/total";

window.addEventListener('DOMContentLoaded', () => {

	Header();
	Slider();
	cart();

	let
		cartCount = 0,
		priceArr = [],
		arrOfId = [];
	const
		cartArray = [];

	const checkNotEmpty = (obj) => {
		const vals = Object.keys(obj).map(key => obj[key]);
		if (vals.some(el => el == "") || vals.some(el => el == null) || vals.some(el => el == undefined)) {
			return false;
		} else {
			return true;
		}
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

	fetch('db.json')
		.then((response) => response.json())
		.then((data) => {

			const pizzaArray = [];
			let serialNumber = 0;

			data.pizza.forEach(elem => {

				const { pizzaName, img, alt, price, ingridient, dataIngridient, smallImg, bigImg, smallPrice, bigPrice, size, smallSize, bigSize, weight, smallWeight, bigWeight, id } = elem;

				if (checkNotEmpty(elem)) {

					pizzaCard(dataIngridient, id, img, alt, serialNumber, pizzaName, smallPrice, ingridient);

					pizzaArray.push(new Modal(pizzaName, img, alt, price, ingridient, dataIngridient, smallImg, bigImg, smallPrice, bigPrice, size, smallSize, bigSize, weight, smallWeight, bigWeight, id, serialNumber))
				}

				++serialNumber;

			})

			return pizzaArray;

		})
		.then((data) => {
			callCreateModal('.pizza__item_btn', data);
			callCreateModal('.pizza__item_img', data);
		});



})