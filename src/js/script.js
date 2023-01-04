import Header from "./modules/header";
import Slider from "./modules/slider";
import cart from "./modules/cart";
import render from "./modules/render";
import logic from "./modules/logic";

window.addEventListener('DOMContentLoaded', () => {

	console.log(render());
	Header();
	Slider();
	cart();
	logic()

})