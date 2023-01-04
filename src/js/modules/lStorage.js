function lStorage() {
	// if (localStorage.length == 0) {
	localStorage.setItem('countOfGoods', 0);
	localStorage.setItem('idArray', JSON.stringify([]));
	// }

}

export default lStorage;