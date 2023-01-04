//Импортирую ф-ии добавления класса
import { addClass, removeClass} from "../modules/functions.js";

//Меню учетной записи
const profile = document.querySelector('.profile');

if (profile) {
	const itemLink = profile.querySelectorAll('.profile__link');
	const itemBody = profile.querySelectorAll('.profile__content');
	const body = document.querySelector('body');

	console.log(itemBody);

	itemLink.forEach(elem => {
		elem.addEventListener('click', e => {
			let currentLink = e.target.closest('.profile__link');
			let linkId = currentLink.getAttribute('data-link');
			let currentBody = document.querySelector(linkId);
			let activeItem = currentLink.querySelector('_active');

			console.log(currentLink)

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

