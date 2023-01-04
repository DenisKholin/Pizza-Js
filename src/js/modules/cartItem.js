import { calculateTotalPrice, refreshCartCount } from "./total";

function createCartItem(src, size, weight, price, count, dataId, alt, pizzaName) {
	const cartItem = document.createElement('div');
	cartItem.classList.add('cart__item');
	cartItem.setAttribute('data-id', dataId);

	cartItem.innerHTML = `
		<div class="cart__item_info">
			<img src="${src}" alt="${alt}" class="cart__item_img">
			<div class="cart__item_text">
				<p class="cart__item_title">${pizzaName}</p>
				<p class="cart__item_description">
					<span class="modal__description_size">${size}</span>
					, традиционное тесто,
					<span class="modal__description_weight">${weight}</span>
					г
				</p>
			</div>
			<p class="cart__item_close">&times;</p>
		</div>
		<div class="cart__item_line"></div>
		<div class="cart__item_control">
			<p class="cart__item_price">${price} руб.</p>
			<div class="cart__item_panel">
				<button class="cart__item_minus cart__item_button" type="button">-</button>
				<p class="cart__item_count">${count}</p>
				<button class="cart__item_plus cart__item_button" type="button">+</button>
			</div>
		</div>
		<div class="cart__item_delete">
			<p class="cart__delete_text">Хотите удалить из корзины?</p>
			<div class="cart__delete">
				<button type="button" class="cart__delete_yes cart__delete_button">Да</button>
				<button type="button" class="cart__delete_no cart__delete_button">Нет</button>
			</div>
		</div>
	`

	document.querySelector('.cart__product').append(cartItem);

	const
		cartItemCount = cartItem.querySelector('.cart__item_count'),
		cartItemPrice = cartItem.querySelector('.cart__item_price'),
		priceOfOne = +cartItem.querySelector('.cart__item_price').innerHTML.slice(0, -5);

	cartItem.querySelector('.cart__item_plus').addEventListener('click', () => {
		cartItemCount.innerHTML++;
		+localStorage.countOfGoods++;
		refreshCartitem(cartItemPrice, priceOfOne, cartItemCount);
	})

	cartItem.querySelector('.cart__item_minus').addEventListener('click', () => {
		if (+cartItemCount.innerHTML <= 1) {
			deleteCartItem(cartItem, dataId, cartItemCount);
		} else {
			cartItemCount.innerHTML--;
			+localStorage.countOfGoods--;
			refreshCartitem(cartItemPrice, priceOfOne, cartItemCount);
		}
	})

	cartItem.querySelector('.cart__item_close').addEventListener('click', () => {
		deleteCartItem(cartItem, dataId, cartItemCount);
	})
}

function refreshCartitem(price, priceOfOne, count) {
	price.innerHTML = ((priceOfOne * count.innerHTML).toFixed(2)) + ' руб.';
	refreshCartCount()
	calculateTotalPrice();
}

function deleteCartItem(cartItem, dataId, currentCount) {
	let cartArray = JSON.parse(localStorage.idArray);
	toggleCartItemDelete(cartItem, 1, 2);

	cartItem.querySelector('.cart__delete_yes').addEventListener('click', () => {
		cartItem.remove();
		calculateTotalPrice();
		localStorage.countOfGoods = +localStorage.countOfGoods - +currentCount.innerHTML;
		refreshCartCount()
		cartArray.splice(cartArray.indexOf(dataId), 1);
		localStorage.setItem('idArray', JSON.stringify(cartArray));
	})

	cartItem.querySelector('.cart__delete_no').addEventListener('click', () => {
		toggleCartItemDelete(cartItem, 0, -2);
	})
}

function toggleCartItemDelete(cartItem, opacity, zIndex) {
	cartItem.querySelector('.cart__item_delete').style.opacity = opacity;
	cartItem.querySelector('.cart__item_delete').style.zIndex = zIndex;
}

export default createCartItem;