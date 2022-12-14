export default class Modal {

	constructor(pizzaName, img, alt, price, ingridient, dataIngridient, smallImg, bigImg, smallPrice, bigPrice, size, smallSize, bigSize, weight, smallWeight, bigWeight, id, serialNumber) {
		this.pizzaName = pizzaName;
		this.img = img;
		this.alt = alt;
		this.price = price;
		this.ingridient = ingridient;
		this.dataIngridient = dataIngridient;
		this.smallImg = smallImg;
		this.bigImg = bigImg;
		this.smallPrice = smallPrice;
		this.bigPrice = bigPrice;
		this.size = size;
		this.smallSize = smallSize;
		this.bigSize = bigSize;
		this.weight = weight;
		this.smallWeight = smallWeight;
		this.bigWeight = bigWeight;
		this.id = id;
		this.serialNumber = serialNumber;
	}

	createModal() {
		const
			modal = document.querySelector('.modal'),
			modalContent = document.createElement('div'),
			modalDialog = document.querySelector('.modal__dialog');

		modalContent.classList.add('modal__content');
		modalContent.setAttribute('data-id', `${this.id}`);

		modal.classList.remove('hide');
		modal.classList.add('flexShow', 'fade');

		modalDialog.innerHTML = '';
		modalDialog.append(modalContent);

		document.body.style.overflow = 'hidden';

		modalContent.innerHTML = `
				<div class="modal__close">&times;</div>
				<div class="modal__pizza">
					<img src="${this.img}" alt="${this.alt}" class="modal__pizza_img">
				</div>
				<div class="modal__info">
					<div class="modal__info_content">
						<p class="modal__name">${this.pizzaName}</p>
						<p class="modal__description">
							<span class="modal__description_size">${this.size}</span> 
							, традиционное тесто, 
							<span class="modal__description_weight">${this.weight}</span> 
							г
						</p>
						<p class="modal__ingridient">${this.ingridient}</p>
						<div class="modal__switch">
							<input type="radio" name="size${this.id}" id="small${this.id}" class="modal__radio modal__radio_small" value="small">
							<label for="small${this.id}" class="modal__label">Маленькая</label>

							<input type="radio" name="size${this.id}" id="medium${this.id}" class="modal__radio modal__radio_medium" value="medium" checked>
							<label for="medium${this.id}" class="modal__label">Средняя</label>

							<input type="radio" name="size${this.id}" id="big${this.id}" class="modal__radio modal__radio_big" value="big">
							<label for="big${this.id}" class="modal__label">Большая</label>
						</div>
					</div>
					<button class="modal__button" type="button" data-serialNumber="${this.serialNumber}">
					Добавить в корзину за 
					<span class="modal__button_price">${this.price}</span> 
					руб.
					<span class="modal__button_flare"></span>
					</button>
				</div>
			`;

		const modalPizzaImg = modalContent.querySelector('.modal__pizza_img');

		document.addEventListener('keydown', (ev) => {
			if (ev.code == "Escape" && getComputedStyle(modal).display == 'flex') {
				hideModal(modal);
			}
		});

		modal.addEventListener('click', (ev) => {
			if (ev.target.classList.contains('modal__close') || ev.target == modal) {
				hideModal(modal);
			}

			this.switchPizza('modal__radio_small', this.smallImg, 0.8, modalPizzaImg, this.smallSize, this.smallWeight, this.smallPrice, ev)

			this.switchPizza('modal__radio_medium', this.img, 1, modalPizzaImg, this.size, this.weight, this.price, ev)

			this.switchPizza('modal__radio_big', this.bigImg, 1.2, modalPizzaImg, this.bigSize, this.bigWeight, this.bigPrice, ev)

		})

	}

	switchPizza(radioSelector, pizzaImg, scaleValue, modalPizzaImg, size, weight, price, ev) {
		if (ev.target.classList.contains(radioSelector)) {
			modalPizzaImg.setAttribute('src', pizzaImg);
			modalPizzaImg.style.transform = `scale(${scaleValue})`;
			document.querySelector('.modal__description_size').innerHTML = size;
			document.querySelector('.modal__description_weight').innerHTML = weight;
			document.querySelector('.modal__button_price').innerHTML = price;
		}
	}

}

function hideModal(modalSelector) {
	modalSelector.classList.remove('flexShow', 'fade');
	modalSelector.classList.add('hide');
	document.body.style.overflow = '';
}

function callCreateModal(clickTrigger, data) {
	document.querySelectorAll(clickTrigger).forEach(el => {
		el.addEventListener('click', ev => {

			data[ev.target.getAttribute('data-serialNumber')].createModal();

		})
	})
}

export {
	hideModal,
	callCreateModal
}