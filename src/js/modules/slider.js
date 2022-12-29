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

export default slider;