import { isWebp } from "./modules/functions.js";
import * as dynamicAdaptive from './modules/dynamicAdapt.js';
// import * as select from './modules/select.js';
// import * as burger from './modules/burgerMenu.js';
// import * as cartPopup from './modules/cartPopup.js';
// import * as lazyMap from './modules/lazyMap.js';
import Swiper from 'swiper';

isWebp();

const chooseSlider = new Swiper('.slider-choose', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1220: {
			slidesPerView: 2,
			spaceBetween: 15
		},
		1440: {
			slidesPerView: 2,
			spaceBetween: 33
		} 
	}
})

const commentsSlider = new Swiper('.slider-comments', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	breakpoints: {
		1221: {
			slidesPerView: 3,
			spaceBetween: 32
		}
	}
})
