import createCartItem from "./cartItem";
import { hideModal } from "./modal";
import { calculateTotalPrice, refreshCartCount } from "./total";

const logic = () => {
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
}

export default logic;