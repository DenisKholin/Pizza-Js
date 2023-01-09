const localStorageCartItem = (title, size, weight, src, price, id, count) => {
	localStorage[id] = JSON.stringify({
		title,
		size,
		weight,
		src,
		price,
		count
	})
}

export default localStorageCartItem;