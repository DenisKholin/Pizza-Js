import createCartItem from "./cartItem";
import { addLocalStorageCartItem, changeLocalStorageCartItem } from "./lStorage";
import { hideModal } from "./modal";
import { calculateTotalPrice, refreshCartCount } from "./total";

const logic = () => {
	let cartArray = JSON.parse(localStorage.idArray);
	console.log(cartArray)
	document.querySelector('.modal').addEventListener('click', ev => {
		if (ev.target.classList.contains('modal__button') || ev.target.classList.contains('modal__button_price') || ev.target.classList.contains('modal__button_flare')) {
			console.log(cartArray)
			const
				currentSize = document.querySelector('.modal__description_size').innerHTML,
				currentWeight = document.querySelector('.modal__description_weight').innerHTML,
				currentSrc = document.querySelector('.modal__pizza_img').getAttribute('src'),
				currentAlt = document.querySelector('.modal__pizza_img').getAttribute('alt'),
				currentPrice = document.querySelector('.modal__button_price').innerHTML,
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
				localStorage.setItem('idArray', JSON.stringify(cartArray));

				createCartItem(currentSrc, currentSize, currentWeight, currentPrice, 1, dataId, currentAlt, currentTitle);

				addLocalStorageCartItem(currentTitle, currentSize, currentWeight, currentSrc, currentPrice, dataId, 1)

			} else {
				const currentItemCount = document.querySelector(`[data-id = ${dataId}] .cart__item_count`);

				if (currentItemCount) {

					currentItemCount.innerHTML++;
					changeLocalStorageCartItem(dataId, currentItemCount.innerHTML)
					document.querySelector(`[data-id = ${dataId}] .cart__item_price`).innerHTML = ((currentPrice * currentItemCount.innerHTML).toFixed(2)) + ' руб.';
				}
			}

			calculateTotalPrice();
			+localStorage.countOfGoods++;
			refreshCartCount();
			hideModal(document.querySelector('.modal'));
		}
	})
}

export default logic;