const Header = () => {
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

export default Header;