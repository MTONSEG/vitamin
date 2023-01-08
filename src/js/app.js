import { isWebp, removeClass, addClass } from "./modules/functions.js";
// import * as dynamicAdaptive from './modules/dynamicAdapt.js';
import * as select from './modules/select.js';
import * as burger from './modules/menu.js';
// import * as forms from './components/forms.js';
// import * as cartPopup from './modules/cartPopup.js';
// import * as lazyMap from './modules/lazyMap.js';
import * as quantity from './modules/quantity.js';

isWebp();

//Изменение текста Autoship в карточке товара
// const autoshipText = document.querySelector('.body-product__autoship p');

// if (autoshipText) {
// 	let displayWidth = window.innerWidth;

// 	if (displayWidth < 992) {
// 		autoshipText.innerHTML = 'Deliver every';
// 	}
// }


const tabBtns = Array.from(document.querySelectorAll('.tab-btn'));

if (tabBtns) {
	const tabContents = Array.from(document.querySelectorAll('.tab-content'));
	let amountBtns = tabBtns.length;
	let firstElement = tabBtns[0];

	for (let btn of tabBtns) {
		btn.addEventListener('click', e => {
			let currentBtn = e.target.closest('.tab-btn');
			let tabId = currentBtn.getAttribute('data-tab');
			let currentTab = document.querySelector(tabId);
			let activeTab = currentBtn.classList.contains('_active');

			if (!activeTab) {
				for (let btn of tabBtns) {
					removeClass(btn, '_active');
				}

				for (let content of tabContents) {
					removeClass(content, '_active');
				}
			}
			
			addClass(currentBtn, '_active');
			addClass(currentTab, '_active');
			changeIndicator(currentBtn);
			e.preventDefault();
		})
	}

	// firstElement.click();
	// addClass(tabBtns[0], '_active');
	// addClass(tabContents[0], '_active');

	function changeIndicator(btn) {
		let indexBtn = tabBtns.indexOf(btn);
		document.querySelector('.tab-indicator').style.left = `calc(${indexBtn} * 100% / ${amountBtns})`;
	}
}
