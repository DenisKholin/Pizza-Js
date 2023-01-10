import Header from "./modules/header";
import Slider from "./modules/slider";
import cart from "./modules/cart";
import render from "./modules/render";
import logic from "./modules/logic";
import { lStorage } from "./modules/lStorage";
import { calculateTotalPrice, refreshCartCount } from "./modules/total";

window.addEventListener('DOMContentLoaded', () => {

	lStorage();
	render();
	Header();
	Slider();
	cart();
	logic();
	// calculateTotalPrice();
	refreshCartCount();

})