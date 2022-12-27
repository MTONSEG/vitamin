//Импортирую ф-ии добавления класса
import { addClass, removeClass, toggleClass } from "../modules/functions.js";

//Меню учетной записи
const userMenu = document.querySelector('.user-menu');

if (userMenu) {
	const itemMenu = userMenu.querySelectorAll('.user-menu__item');
	const bodyMenu = userMenu.querySelectorAll('.user-menu__content');
	const navbar = userMenu.querySelector('.user-menu__navbar');
	const openBtn = userMenu.querySelector('.user-menu__open');
	const closeBtn = userMenu.querySelector('.user-menu__close');
	const body = document.querySelector('body');

	itemMenu.forEach(elem => {
		elem.addEventListener('click', e => {
			let currentLink = e.target.closest('.user-menu__item');
			let linkId = currentLink.getAttribute('data-link');
			let currentBody = document.querySelector(linkId);
			let activeItem = currentLink.querySelector('_active');

			if (!activeItem) {
				for (let item of itemMenu) {
					removeClass(item, '_active');
				}

				for (let item of bodyMenu) {
					removeClass(item, '_active');
				}
			}

			addClass(currentLink, '_active');
			addClass(currentBody, '_active');
			removeClass(navbar, '_active');
			removeClass(body, '_lock');
		})
	})

	if (closeBtn) {
		openBtn.addEventListener('click', e => {

			addClass(navbar, '_active');
			addClass(body, '_lock');
		})
		closeBtn.addEventListener('click', e => {
			removeClass(navbar, '_active');
			removeClass(body, '_lock');
		})
	}
}

