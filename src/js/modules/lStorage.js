import createCartItem from "./cartItem";

const initLocalStorage = () => {
	if (localStorage.length == 0) {
		localStorage.countOfGoods = 0;
		localStorage.idArray = JSON.stringify([]);
		localStorage.totalPrice = '0.00 руб.';
	}

	emptyCart();
}

const addLocalStorageCartItem = (title, size, weight, src, price, id, count) => {
	localStorage[id] = JSON.stringify({
		title,
		size,
		weight,
		src,
		priceOfOne: price,
		price,
		count
	})
}

const changeLocalStorageCartItem = (id, count) => {
	const obj = JSON.parse(localStorage[id]);
	obj.count = count;
	obj.price = (obj.priceOfOne * +obj.count).toFixed(2);
	localStorage[id] = JSON.stringify(obj);
	emptyCart();
}

const deleteLocalStorageCartItem = (id, count, cartArray) => {
	localStorage.removeItem(id);
	localStorage.countOfGoods = +localStorage.countOfGoods - +count.innerHTML;
	localStorage.idArray = JSON.stringify(cartArray);
	emptyCart();
}

const renderFromLocalStorage = () => {
	const arr = JSON.parse(localStorage.idArray);
	arr.forEach(el => {
		const obj = JSON.parse(localStorage[el]);
		createCartItem(obj.src, obj.size, obj.weight, obj.price, obj.count, el, obj.title, obj.title)
	})
}

const emptyCart = () => {
	if (localStorage.countOfGoods == 0) {
		document.querySelector('.cart__product').innerHTML = `
			<div class="cart__empty">
				<img src="src/img/cart/empty-cart.svg" alt="Пустая корзина" class="cart__empty_img">
				<p class="cart__empty_title">УПС!</p>
				<p class="cart__empty_text">Ваша корзина пуста, откройте «Меню»
				и выберите понравившийся товар.</p>
			</div>
		`
	}
}



export {
	initLocalStorage,
	addLocalStorageCartItem,
	changeLocalStorageCartItem,
	deleteLocalStorageCartItem,
	renderFromLocalStorage
};
