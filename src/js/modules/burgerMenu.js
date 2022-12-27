import { addClass,removeClass} from "./functions.js";

const iconBurger = document.querySelector('.burger__icon');
const menuBurger = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.burger-menu__close-btn');
const body = document.querySelector('body');

if (iconBurger) {
	iconBurger.addEventListener('click', event => {
		addClass(iconBurger, '_active');
		addClass(menuBurger, '_active');
		addClass(body, '_lock');
	})
}

if (closeBtn) {
	closeBtn.addEventListener('click', event => {
		removeClass(iconBurger, '_active');
		removeClass(menuBurger, '_active');
		removeClass(body, '_lock');
	})
}
