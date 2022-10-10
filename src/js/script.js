window.addEventListener('DOMContentLoaded', () => {

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

	class PizzaCard {
		constructor(pizzaName, img, alt, price, ingridient, dataIngridient, smallImg, bigImg, smallPrice, bigPrice, size, smallSize, bigSize, weight, smallWeight, bigWeight) {
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
			this.addPizzaCard();
		}

		addPizzaCard() {
			const pizzaItem = document.createElement('div');
			pizzaItem.classList.add('pizza__item');
			pizzaItem.setAttribute('data-ingridient', this.dataIngridient);
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
	}


	fetch('db.json')
		.then((response) => response.json())
		.then((data) => {
			data.pizza.forEach(elem => {
				const { pizzaName, img, alt, price, ingridient, dataIngridient } = elem;

				const checkNotEmpty = () => {
					const vals = Object.keys(elem).map(key => elem[key]);
					if (vals.some(el => el == "") || vals.some(el => el == null) || vals.some(el => el == undefined)) {
						return false;
					} else {
						return true;
					}
				}

				if (checkNotEmpty()) {
					new PizzaCard(pizzaName, img, alt, price, ingridient, dataIngridient);
				}

			})
		});
})