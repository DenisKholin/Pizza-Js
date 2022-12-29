/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function header() {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const slider = () => {
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

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ "./src/js/modules/header.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");



window.addEventListener('DOMContentLoaded', () => {

	(0,_modules_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
	(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();

	//********************************************************************/
	//SLIDER
	//********************************************************************/


	//********************************************************************/
	//CARDS+MODAL
	//********************************************************************/


	let
		cartCount = 0,
		priceArr = [],
		arrOfId = [];
	const
		cartArray = [];

	if (JSON.parse(localStorage.getItem('arrOfId')) && JSON.parse(localStorage.getItem('arrOfId')).length != 0) {
		arrOfId = JSON.parse(localStorage.getItem('arrOfId'));
	}

	class PizzaCard {
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
			this.addPizzaCard();
		}

		addPizzaCard() {
			const pizzaItem = document.createElement('div');
			pizzaItem.classList.add('pizza__item');
			pizzaItem.setAttribute('data-ingridient', this.dataIngridient);
			pizzaItem.setAttribute('data-id', this.id);

			pizzaItem.innerHTML = `
					<img src="${this.img}" alt="${this.alt}" data-serialNumber="${this.serialNumber}" class="pizza__item_img">
					<p class="pizza__item_name">${this.pizzaName}</p>
					<p class="pizza__item_ingridient">${this.ingridient}</p>
					<div class="pizza__item_control">
						<p class="pizza__item_price">от ${this.smallPrice} руб.</p>
						<button data-serialNumber="${this.serialNumber}" class="pizza__item_btn">Выбрать</button>
					</div>
				`;

			document.querySelector('.pizza__container').append(pizzaItem);
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


	const checkNotEmpty = (obj) => {
		const vals = Object.keys(obj).map(key => obj[key]);
		if (vals.some(el => el == "") || vals.some(el => el == null) || vals.some(el => el == undefined)) {
			return false;
		} else {
			return true;
		}
	}

	function createCartItem(src, size, weight, price, count, dataId, alt, pizzaName) {
		const cartItem = document.createElement('div');
		cartItem.classList.add('cart__item');
		cartItem.setAttribute('data-id', dataId);

		cartItem.innerHTML = `
			<div class="cart__item_info">
				<img src="${src}" alt="${alt}" class="cart__item_img">
				<div class="cart__item_text">
					<p class="cart__item_title">${pizzaName}</p>
					<p class="cart__item_description">
						<span class="modal__description_size">${size}</span>
						, традиционное тесто,
						<span class="modal__description_weight">${weight}</span>
						г
					</p>
				</div>
				<p class="cart__item_close">&times;</p>
			</div>
			<div class="cart__item_line"></div>
			<div class="cart__item_control">
				<p class="cart__item_price">${price} руб.</p>
				<div class="cart__item_panel">
					<button class="cart__item_minus cart__item_button" type="button">-</button>
					<p class="cart__item_count">${count}</p>
					<button class="cart__item_plus cart__item_button" type="button">+</button>
				</div>
			</div>
			<div class="cart__item_delete">
				<p class="cart__delete_text">Хотите удалить из корзины?</p>
				<div class="cart__delete">
					<button type="button" class="cart__delete_yes cart__delete_button">Да</button>
					<button type="button" class="cart__delete_no cart__delete_button">Нет</button>
				</div>
			</div>
		`

		document.querySelector('.cart__product').append(cartItem);

		const
			cartItemCount = cartItem.querySelector('.cart__item_count'),
			cartItemPrice = cartItem.querySelector('.cart__item_price'),
			priceOfOne = +cartItem.querySelector('.cart__item_price').innerHTML.slice(0, -5);

		cartItem.querySelector('.cart__item_plus').addEventListener('click', () => {
			cartItemCount.innerHTML++;

			cartCount++;
			updateLocalStorage(pizzaName, size, weight, cartItemCount.innerHTML, (priceOfOne * cartItemCount.innerHTML).toFixed(2), src, dataId, alt);
			refreshCartitem(cartItemPrice, priceOfOne, cartItemCount);


		})

		cartItem.querySelector('.cart__item_minus').addEventListener('click', () => {
			if (+cartItemCount.innerHTML <= 1) {
				deleteCartItem(cartItem, dataId, cartItemCount);
			} else {
				cartItemCount.innerHTML--;
				cartCount--;
				refreshCartitem(cartItemPrice, priceOfOne, cartItemCount);

				updateLocalStorage(pizzaName, size, weight, cartItemCount.innerHTML, (priceOfOne * cartItemCount.innerHTML).toFixed(2), src, dataId, alt);
			}
		})

		cartItem.querySelector('.cart__item_close').addEventListener('click', () => {
			deleteCartItem(cartItem, dataId, cartItemCount);
		})
	}

	function refreshCartitem(price, priceOfOne, count) {
		price.innerHTML = ((priceOfOne * count.innerHTML).toFixed(2)) + ' руб.';
		refreshCartCount()
		calculateTotalPrice();
	}

	function deleteCartItem(cartItem, dataId, currentCount) {
		toggleCartItemDelete(cartItem, 1, 2);

		cartItem.querySelector('.cart__delete_yes').addEventListener('click', () => {
			cartItem.remove();
			calculateTotalPrice();
			cartCount = cartCount - +currentCount.innerHTML;
			refreshCartCount()
			cartArray.splice(cartArray.indexOf(dataId), 1);
			localStorage.removeItem(`pizza-${dataId}`);
			localStorage.setItem('countOfCards', +cartCount + 1);
			localStorage.setItem('totalPrice', document.querySelector('.total-price').innerHTML)
			localStorage.setItem('arrOfId', JSON.stringify(cartArray));
		})
		cartItem.querySelector('.cart__delete_no').addEventListener('click', () => {
			toggleCartItemDelete(cartItem, 0, -2);
		})
	}

	function toggleCartItemDelete(cartItem, opacity, zIndex) {
		cartItem.querySelector('.cart__item_delete').style.opacity = opacity;
		cartItem.querySelector('.cart__item_delete').style.zIndex = zIndex;
	}


	function callCreateModal(clickTrigger, data) {
		document.querySelectorAll(clickTrigger).forEach(el => {
			el.addEventListener('click', ev => {

				data[ev.target.getAttribute('data-serialNumber')].createModal();

			})
		})
	}

	document.querySelector('.modal').addEventListener('click', ev => {
		if (ev.target.classList.contains('modal__button') || ev.target.classList.contains('modal__button_price') || ev.target.classList.contains('modal__button_flare')) {

			const
				currentSize = document.querySelector('.modal__description_size').innerHTML,
				currentWeight = document.querySelector('.modal__description_weight').innerHTML,
				currentSrc = document.querySelector('.modal__pizza_img').getAttribute('src'),
				currentAlt = document.querySelector('.modal__pizza_img').getAttribute('alt'),
				currentPrice = document.querySelector('.modal__button_price').innerHTML,
				serialNumber = ev.currentTarget.getAttribute('data-serialNumber'),
				currentTitle = document.querySelector('.modal__name').innerHTML;
			let
				dataId;

			document.querySelectorAll('.modal__radio').forEach(el => {
				if (el.checked) {
					dataId = el.getAttribute('id');
				}
			})

			if (!(cartArray.includes(dataId))) {

				cartArray.push(dataId);

				createCartItem(currentSrc, currentSize, currentWeight, currentPrice, 1, dataId, currentAlt, currentTitle);

				updateLocalStorage(currentTitle, currentSize, currentWeight, 1, currentPrice, currentSrc, dataId, currentAlt)

			} else {
				const currentItemCount = document.querySelector(`[data-id = ${dataId}] .cart__item_count`);

				if (currentItemCount) {

					currentItemCount.innerHTML++;
					document.querySelector(`[data-id = ${dataId}] .cart__item_price`).innerHTML = ((currentPrice * currentItemCount.innerHTML).toFixed(2)) + ' руб.';

					updateLocalStorage(currentTitle, currentSize, currentWeight, currentItemCount.innerHTML, (currentPrice * currentItemCount.innerHTML).toFixed(2), currentSrc, dataId, currentAlt)
				}
			}

			calculateTotalPrice();
			cartCount++;
			refreshCartCount();
			setTimeout(() => hideModal(document.querySelector('.modal')), 100)
		}
	})


	function calculateTotalPrice() {
		document.querySelectorAll('.cart__item_price').forEach(el => {
			el = +el.innerHTML.slice(0, -5);
			priceArr.push(el);
		})
		document.querySelectorAll('.total-price').forEach(el => {
			el.innerHTML = priceArr.reduce((sum, current) => sum + current, 0).toFixed(2) + ' руб.';
		})
		priceArr = [];
	}

	function refreshCartCount() {
		document.querySelectorAll('.cart-count').forEach(el => {
			el.innerHTML = cartCount;
		})
	}

	fetch('db.json')
		.then((response) => response.json())
		.then((data) => {

			const pizzaArray = [];
			let serialNumber = 0;

			data.pizza.forEach(elem => {

				const { pizzaName, img, alt, price, ingridient, dataIngridient, smallImg, bigImg, smallPrice, bigPrice, size, smallSize, bigSize, weight, smallWeight, bigWeight, id } = elem;

				if (checkNotEmpty(elem)) {
					pizzaArray.push(new PizzaCard(pizzaName, img, alt, price, ingridient, dataIngridient, smallImg, bigImg, smallPrice, bigPrice, size, smallSize, bigSize, weight, smallWeight, bigWeight, id, serialNumber))
				}

				++serialNumber;

			})
			return pizzaArray;
		})
		.then((data) => {
			callCreateModal('.pizza__item_btn', data);
			callCreateModal('.pizza__item_img', data);
			return data;
		})
		.then(() => {
			if (localStorage.getItem('totalPrice')) {

				cartCount = localStorage.getItem('countOfCards');
				countOfCartsInCard = JSON.parse(localStorage.getItem('arrOfId')).length;

				for (let i = 0; i < countOfCartsInCard; i++) {

					let json = JSON.parse(localStorage.getItem(`pizza-${JSON.parse(localStorage.getItem('arrOfId'))[i]}`));

					cartArray.push(json.dataId)
					createCartItem(json.src, json.size, json.weight, json.price, json.count, json.dataId, json.alt, json.name);
				}

				calculateTotalPrice();
				refreshCartCount();
			}
		});

	const
		cart = document.querySelector('.cart'),
		cartContainer = document.querySelector('.cart__container'),
		cartButton = document.querySelectorAll('.cart-button');

	cartButton.forEach(el => {
		el.addEventListener('click', () => {
			cart.classList.add('flexShow', 'fade');
			cart.classList.remove('hide');
			cart.style.height = '100vh';
			document.body.style.overflow = 'hidden';
			setTimeout(() => cartContainer.style.transform = 'translate(0rem)', 100);
		})
	})

	function callCartClose() {
		cartContainer.style.transform = 'translate(45rem)'
		cart.classList.add('hide');
		cart.classList.remove('flexShow', 'fade');
		document.body.style.overflow = '';
	}

	cart.addEventListener('click', ev => {
		if (ev.target.classList.contains('cart__close') || ev.target == cart) {
			callCartClose()
		}
	})

	document.addEventListener('keydown', (ev) => {
		if (ev.code == "Escape" && getComputedStyle(cart).display == 'flex') {
			callCartClose();
		}
	});

	function updateLocalStorage(pizzaName, size, weight, count, price, src, dataId, alt) {
		calculateTotalPrice();
		refreshCartCount();
		localStorage.setItem(`pizza-${dataId}`, JSON.stringify({
			name: pizzaName,
			size: size,
			weight: weight,
			count: count,
			price: price,
			src: src,
			dataId: dataId,
			alt: alt
		}));
		localStorage.setItem('countOfCards', +cartCount + 1);

		if (!arrOfId.includes(dataId)) {
			// arrOfId.push(dataId);
			localStorage.setItem('arrOfId', JSON.stringify(cartArray));
		}

		localStorage.setItem('totalPrice', document.querySelector('.total-price').innerHTML)
	}

	// document.querySelector('.cart__total_button').addEventListener('click', () => {
	// 	localStorage.clear();

	// 	if (document.querySelector('.cart-count').innerHTML != 0) {
	// 		document.querySelectorAll('.cart__item').forEach((el, index) => {

	// 		})

	// 		localStorage.setItem('totalPrice', document.querySelector('.total-price').innerHTML)

	// 	}
	// })


})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map