const pizzaCard = (dataIngridient, id, img, alt, serialNumber, pizzaName, smallPrice, ingridient) => {

	const pizzaItem = document.createElement('div');
	pizzaItem.classList.add('pizza__item');
	pizzaItem.setAttribute('data-ingridient', dataIngridient);
	pizzaItem.setAttribute('data-id', id);

	pizzaItem.innerHTML = `
				<img src="${img}" alt="${alt}" data-serialNumber="${serialNumber}" class="pizza__item_img">
				<p class="pizza__item_name">${pizzaName}</p>
				<p class="pizza__item_ingridient">${ingridient}</p>
				<div class="pizza__item_control">
					<p class="pizza__item_price">от ${smallPrice} руб.</p>
					<button data-serialNumber="${serialNumber}" class="pizza__item_btn">Выбрать</button>
				</div>
			`;

	document.querySelector('.pizza__container').append(pizzaItem);
}

export default pizzaCard;