function calculateTotalPrice() {
	let priceArr = [];
	document.querySelectorAll('.cart__item_price').forEach(el => {
		el = +el.innerHTML.slice(0, -5);
		priceArr.push(el);
	})
	document.querySelectorAll('.total-price').forEach(el => {
		localStorage.totalPrice = priceArr.reduce((sum, current) => sum + current, 0).toFixed(2) + ' руб.';
		el.innerHTML = localStorage.totalPrice;
	})
	priceArr = [];
}

function refreshCartCount() {
	document.querySelectorAll('.cart-count').forEach(el => {
		el.innerHTML = +localStorage.countOfGoods;
	})
}

export {
	calculateTotalPrice,
	refreshCartCount
}