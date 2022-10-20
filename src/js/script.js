window.addEventListener('DOMContentLoaded', () => {

	//********************************************************************/
	//HEADER
	//********************************************************************/

	const headerTop = document.querySelector('.header__top');

	window.addEventListener('scroll', () => {
		if (scrollY > 80) {
			headerTop.style.marginTop = '-12rem';
			setTimeout(() => headerTop.style.transition = '1s', 0)
		} else {
			headerTop.style.marginTop = '0px';
			setTimeout(() => headerTop.style.transition = '1s', 0)
		}
	})

	//********************************************************************/
	//SLIDER
	//********************************************************************/

	const
		slides = document.querySelectorAll('.slider__item'),
		prevSlide = document.querySelector('.slider__prev'),
		nextSlide = document.querySelector('.slider__next');
	let sliderIndex = 0;

	function hideSlides() {
		slides.forEach(el => {
			el.classList.add('hide');
			el.classList.remove('show', 'fade');
		})
	}

	function showSlide(i = sliderIndex) {
		slides[i].classList.add('show', 'fade');
		slides[i].classList.remove('hide');
	}

	function switchActiveSlide() {
		hideSlides();
		showSlide(sliderIndex);
	}

	nextSlide.addEventListener('click', () => {
		sliderIndex++;
		if (sliderIndex == (slides.length)) {
			sliderIndex = 0;
		}
		switchActiveSlide()
	})

	prevSlide.addEventListener('click', () => {
		sliderIndex--;
		if (sliderIndex == -1) {
			sliderIndex = slides.length - 1;
		}
		switchActiveSlide()
	})

	hideSlides();
	showSlide();

	//********************************************************************/
	//CARDS+MODAL
	//********************************************************************/

	class PizzaCard {
		constructor(pizzaName, img, alt, price, ingridient, dataIngridient, smallImg, bigImg, smallPrice, bigPrice, size, smallSize, bigSize, weight, smallWeight, bigWeight, id) {
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
			this.addPizzaCard();
			this.createModal();
		}

		addPizzaCard() {
			const pizzaItem = document.createElement('div');
			pizzaItem.classList.add('pizza__item');
			pizzaItem.setAttribute('data-ingridient', this.dataIngridient);
			pizzaItem.setAttribute('id', this.id);

			pizzaItem.innerHTML = `
					<img src="${this.img}" alt="${this.alt}" class="pizza__item_img">
					<p class="pizza__item_name">${this.pizzaName}</p>
					<p class="pizza__item_ingridient">${this.ingridient}</p>
					<div class="pizza__item_control">
						<p class="pizza__item_price">от ${this.price} руб.</p>
						<button class="pizza__item_btn">Выбрать</button>
					</div>
				`;

			document.querySelector('.pizza__container').append(pizzaItem);
		}

		createModal() {
			const modalContent = document.createElement('div');
			modalContent.classList.add('modal__content');
			modalContent.setAttribute('id', `modal${this.id}`);

			modalContent.innerHTML = `
				<div class="modal__close">&times;</div>
				<div class="modal__pizza">
					<img src="${this.img}" alt="${this.alt}" class="modal__pizza_img">
				</div>
				<div class="modal__info">
					<div class="modal__info_content">
						<p class="modal__name">${this.pizzaName}</p>
						<p class="modal__description">${this.size}, традиционное тесто, ${this.weight}</p>
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
					<button class="modal__button">Добавить в корзину за ${this.price} руб.</button>
				</div>
			`;

			document.querySelector('.modal__dialog').append(modalContent);


			const modal = document.querySelector('.modal');

			document.querySelectorAll('.pizza__item_btn').forEach(el => {
				el.addEventListener('click', (ev) => {

					modal.style.display = 'flex';

					document.querySelectorAll('.modal__content').forEach(el => {
						el.classList.remove('show');
						el.classList.add('hide');
					})

					document.getElementById(`modal${ev.target.parentNode.parentNode.getAttribute('id')}`).classList.remove('hide');
					document.getElementById(`modal${ev.target.parentNode.parentNode.getAttribute('id')}`).classList.add('show');
					document.body.style.overflow = 'hidden';
				})
			})

			document.querySelectorAll('.modal__close').forEach(el => {
				el.addEventListener('click', () => {
					modal.style.display = 'none';
					document.body.style.overflow = '';
				})
			})

			document.addEventListener('keydown', (ev) => {
				if (ev.code == "Escape" && getComputedStyle(modal).display == 'flex') {
					modal.style.display = 'none';
					document.body.style.overflow = '';
				}
			});
		}
	}

	const checkNotEmpty = (obj) => {
		const vals = Object.keys(obj).map(key => obj[key]);
		if (vals.some(el => el == "") || vals.some(el => el == null) || vals.some(el => el == undefined)) {
			return false;
		} else {
			return true;
		}
	}

	fetch('db.json')
		.then((response) => response.json())
		.then((data) => {
			data.pizza.forEach(elem => {

				const { pizzaName, img, alt, price, ingridient, dataIngridient, smallImg, bigImg, smallPrice, bigPrice, size, smallSize, bigSize, weight, smallWeight, bigWeight, id } = elem;

				if (checkNotEmpty(elem)) {
					new PizzaCard(pizzaName, img, alt, price, ingridient, dataIngridient, smallImg, bigImg, smallPrice, bigPrice, size, smallSize, bigSize, weight, smallWeight, bigWeight, id)
				}

			})
		});
})