//Импортирую ф-ии добавления класса
import { addClass, removeClass, toggleClass } from "../modules/functions.js";

//Меню учетной записи
const profile = document.querySelector('.profile');

if (profile) {
	const itemLink = profile.querySelectorAll('.profile__link');
	const itemBody = profile.querySelectorAll('.profile__content');
	const body = document.querySelector('body');

	itemLink.forEach(elem => {
		elem.addEventListener('click', e => {
			let currentLink = e.target.closest('.profile__link');
			let linkId = currentLink.getAttribute('data-link');
			let currentBody = document.querySelector(linkId);
			let activeItem = currentLink.querySelector('_active');

			if (!activeItem) {
				for (let item of itemLink) {
					removeClass(item, '_active');
				}

				for (let item of itemBody) {
					removeClass(item, '_active');
				}
			}

			addClass(currentLink, '_active');
			addClass(currentBody, '_active');
			removeClass(body, '_lock');
		})
	})
}

// const accordion = document.querySelectorAll('.item-order');

// if (accordion) {
// 	for (let elem of accordion) {
// 		let accordionBtn = elem.querySelector('.accordion-header');
// 		let accordionBody = elem.querySelector('.accordion-body');
// 		let bodyHeight = accordionBody.scrollHeight + 'px';

// 		accordionBtn.addEventListener('click', e => {

// 			if (accordionBody.style.maxHeight) {
// 				accordionBody.style.maxHeight = 0;
// 			} else {
// 				accordionBody.style.maxHeight = 0;
// 				accordionBody.style.maxHeight = bodyHeight;
// 			}

// 		})
// 	}
// }


// Аккордеон
const accordion = document.querySelector('.accordion');

if (accordion) {
	const headersAccordion = accordion.querySelectorAll('.accordion-header');
	const bodiesAccordion = accordion.querySelectorAll('.accordion-body')

	for (let elem of headersAccordion) {
		elem.addEventListener('click', () => {

			let content = elem.nextElementSibling;
			let icon = elem.querySelector('.item-order__icon');

			if (content.style.maxHeight) {
				for (let elem of bodiesAccordion) {
					elem.style.maxHeight = null;
					removeClass(icon, '_active');
				}
			} else {
				for (let elem of bodiesAccordion) {
					elem.style.maxHeight = null;
					removeClass(icon, '_active');

					content.style.maxHeight = content.scrollHeight + 'px';
					addClass(icon, '_active');
				}
			}
		})
	}
}
