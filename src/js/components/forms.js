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

			e.preventDefault();
		})
	})
}


// Аккордеон
const accordion = document.querySelector('.accordion');

if (accordion) {
	const headersAccordion = accordion.querySelectorAll('.accordion-header');
	const bodiesAccordion = accordion.querySelectorAll('.accordion-body')

	for (let elem of headersAccordion) {
		elem.addEventListener('click', () => {

			console.log(elem)
			let content = elem.nextElementSibling;
			let icon = elem.querySelector('.item-order__icon');

			console.log(content.scrollHeight);

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


//Input File
const inputFile = document.querySelector('.form__input-file');

if (inputFile) {
	const inputText = document.querySelector('.form__input-text');

	inputFile.addEventListener('change', e => {
		let files = inputFile.files;

		console.log(files);

		if (files.length > 1) {
			inputText.innerHTML = `${files.length} files`;
		} else {
			inputText.innerHTML = files[0].name;
		}
	})
}

// Оформление заказа, аккордеон
const totalHeader = document.querySelector('.total__header');
const totalBody = document.querySelector('.total__body');

if (totalHeader) {
	totalHeader.addEventListener('click', e => {
		let scrollHeightBody = totalBody.scrollHeight;
		let iconArrow = totalHeader.querySelector('.item-order__icon');

		if (totalBody.style.maxHeight) {
			totalBody.style.maxHeight = null;
			removeClass(iconArrow, '_active');
		} else {
			totalBody.style.maxHeight = scrollHeightBody + 'px';
			addClass(iconArrow, '_active');
		}
	})
}

//Изменение текста Autoship в карточке товара

const autoshipText = document.querySelector('.body-product__autoship p');

if (autoshipText) {
	let displayWidth = window.innerWidth;

	if (displayWidth < 992) {
		autoshipText.innerHTML = 'Deliver every';
	}
}