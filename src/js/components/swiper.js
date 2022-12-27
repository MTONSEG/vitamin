import Swiper, { Navigation } from 'swiper';
import { toggleClass } from '../modules/functions.js';

const prodSlider = new Swiper('.slider-products', {
	slidesPerView: 1,
	spaceBetween: 10,
	breakpoints: {
		575: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 15
		},
		1220: {
			slidesPerView: 3,
			spaceBetween: 30,
		}
	},
});

const newsSlider = new Swiper('.news-slider', {
	modules: [Navigation],
	navigation: {
		nextEl: '.news__next',
		prevEl: '.news__prev',
	},
	slidesPerView: 1,
	spaceBetween: 15,
	breakpoints: {
		600: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
})

const imageSlider = new Swiper('.image-slider', {
	modules: [Navigation],
	navigation: {
		nextEl: '.image-slider__next',
		prevEl: '.image-slider__prev',
	},
})

//Show navigation image slider
const productsSliderBody = document.querySelectorAll('.slider-products__slide');

if (productsSliderBody) {
	for (let item of productsSliderBody) {
		let imageSliderBody = item.querySelector('.image-slider');
		let imageSliderNav = item.querySelector('.image-slider__nav');

		imageSliderBody.addEventListener('mouseenter', event => {
			toggleClass(imageSliderNav, '_active');
		})
		imageSliderBody.addEventListener('mouseleave', event => {
			toggleClass(imageSliderNav, '_active');
		})
	}
}