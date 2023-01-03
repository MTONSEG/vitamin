import {toggleClass, addClass, removeClass} from "./functions.js";

const iconBurger = document.querySelector('.burger');
const menuBurger = document.querySelector('.menu');
const body = document.querySelector('body'); 

if (iconBurger) {
	iconBurger.addEventListener('click', event => {
		toggleClass(iconBurger, '_active');
		toggleClass(menuBurger, '_active');
		toggleClass(body, '_lock');
	})
}
// Подменю
const catalogsMenu = document.querySelectorAll('.catalog');

if (catalogsMenu) {
	const submenus = document.querySelectorAll('.submenu');

	for (let item of catalogsMenu) {

		item.addEventListener('click', e => {
			let currentBtn = e.target.closest('.catalog');
			let btnId = currentBtn.getAttribute('data-src')
			let currentList = document.querySelector(btnId);

			addClass(currentList, '_active');
		})

	}

	for (let menu of submenus) {
		let submenuCloseBtn = menu.querySelector('.submenu__back');

		submenuCloseBtn.addEventListener('click', e => {
			removeClass(menu, '_active');
		})
	}
}


// Корзина
const cartOpen = document.querySelector('.cart-link');
const cartClose = document.querySelector('.cart__close');
const cartWrapper = document.querySelector('.cart-wrapper');
const cartBody = document.querySelector('.cart');

if (cartOpen) {
	cartOpen.addEventListener('click', e => {
		addClass(cartBody, '_active');
		addClass(cartWrapper, '_active');
		addClass(body, '_lock');
	})
	cartClose.addEventListener('click', e => {
		removeClass(cartBody, '_active');
		removeClass(cartWrapper, '_active');
		removeClass(body, '_lock');
	})
}
