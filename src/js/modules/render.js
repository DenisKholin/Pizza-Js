import Modal, { callCreateModal } from "./modal";
import pizzaCard from "./pizzaCard";
import service from "./service";

const checkNotEmpty = (obj) => {
	const vals = Object.keys(obj).map(key => obj[key]);
	if (vals.some(el => el == "") || vals.some(el => el == null) || vals.some(el => el == undefined)) {
		return false;
	} else {
		return true;
	}
}

const render = () => {
	service()
		.then((data) => {

			const pizzaArray = [];
			let serialNumber = 0;

			data.pizza.forEach(elem => {

				const { pizzaName, img, alt, price, ingridient, dataIngridient, smallImg, bigImg, smallPrice, bigPrice, size, smallSize, bigSize, weight, smallWeight, bigWeight, id } = elem;

				if (checkNotEmpty(elem)) {

					pizzaCard(dataIngridient, id, img, alt, serialNumber, pizzaName, smallPrice, ingridient);

					pizzaArray.push(new Modal(pizzaName, img, alt, price, ingridient, dataIngridient, smallImg, bigImg, smallPrice, bigPrice, size, smallSize, bigSize, weight, smallWeight, bigWeight, id, serialNumber))
				}

				++serialNumber;

			})

			return pizzaArray;

		})
		.then((data) => {
			callCreateModal('.pizza__item_btn', data);
			callCreateModal('.pizza__item_img', data);
			return data;
		});

}

export default render;