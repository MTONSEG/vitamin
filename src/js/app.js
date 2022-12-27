import { isWebp } from "./modules/functions.js";
import * as dynamicAdaptive from './modules/dynamicAdapt.js';
import * as select from './modules/select.js';
import * as burger from './modules/burgerMenu.js';
import * as cartPopup from './modules/cartPopup.js';
import * as lazyMap from './modules/lazyMap.js';

isWebp();


// Форма колличества товаров
const quantityBody = document.querySelectorAll('.quantity');

if (quantityBody) {
	for (let elem of quantityBody) {
		let input = elem.querySelector('.quantity__input');

		elem.addEventListener('click', e => {
			let onClickMinus = e.target.closest('._minus');
			let onClickPlus = e.target.closest('._plus');

			if (onClickMinus) {
				input.value--;
			} else if (onClickPlus) {
				input.value++;
			}

			if (input.value <= 1) {
				input.value = 1;
			}
		})
	}
}