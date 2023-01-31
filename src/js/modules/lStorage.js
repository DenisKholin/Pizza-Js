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
	emptyCart();
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
	const cartEmpty = document.querySelector('.cart__empty')
	localStorage.countOfGoods == 0 ? cartEmpty.style.display = 'flex' : cartEmpty.style.display = 'none'
}



export {
	initLocalStorage,
	addLocalStorageCartItem,
	changeLocalStorageCartItem,
	deleteLocalStorageCartItem,
	renderFromLocalStorage
};
