import Header from "./modules/header";
import Slider from "./modules/slider";
import cart from "./modules/cart";
import render from "./modules/render";
import logic from "./modules/logic";
import { initLocalStorage } from "./modules/lStorage";
import { calculateTotalPrice, refreshCartCount } from "./modules/total";

window.addEventListener('DOMContentLoaded', () => {

	initLocalStorage();
	render();
	Header();
	Slider();
	cart();
	logic();
	refreshCartCount();

})