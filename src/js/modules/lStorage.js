const lStorage = () => {
	// if (localStorage.length == 0) {
	localStorage.countOfGoods = 0;
	localStorage.idArray = JSON.stringify([]);
	localStorage.totalPrice = 0;
	// }

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
}

const deleteLocalStorageCartItem = (id, count, cartArray) => {
	localStorage.removeItem(id);
	localStorage.countOfGoods = +localStorage.countOfGoods - +count.innerHTML;
	localStorage.setItem('idArray', JSON.stringify(cartArray));
}

export {
	lStorage,
	addLocalStorageCartItem,
	changeLocalStorageCartItem,
	deleteLocalStorageCartItem
};
