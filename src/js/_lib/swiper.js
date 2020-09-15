

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

	new Swiper('.reviewsSlider', {
    loop: true,
    effect: 'slide',
		speed: 750,
    autoplay: {
      delay: 10000,
			disableOnInteraction: false
    },
		spaceBetween: 10,
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
    }
  });

	new Swiper('.jobsSlider', {
    loop: false,
    effect: 'slide',
		speed: 750,
    autoplay: {
      delay: 10000,
			disableOnInteraction: false
    },
		slidesPerView: 3,
		spaceBetween: 10,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 10
			},
		},
    navigation: {
      nextEl: '.jobs__btn--next',
      prevEl: '.jobs__btn--prev',
    },
  });

	new Swiper('.mainBlogSlider', {
		loop: true,
		effect: 'slide',
		speed: 750,
		navigation: {
			nextEl: '.blog-main__btn--next',
			prevEl: '.blog-main__btn--prev',
		}
	});

	new Swiper('.dashboardJobsLast', {
		loop: true,
		effect: 'slide',
		speed: 750,
		spaceBetween: 11,
		slidesPerView: 'auto',
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		}
	});

	new Swiper('.dashboardHiringSlider', {
		loop: true,
		effect: 'slide',
		speed: 750,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		spaceBetween: 0,
		slidesPerView: 1,
		navigation: {
			nextEl: '.dashboard__hiring-btn--next',
			prevEl: '.dashboard__hiring-btn--prev',
		},
	});

	new Swiper('.mainSlider', {
		loop: true,
		effect: 'slide',
		speed: 750,
		autoplay: {
			delay: 7500,
			disableOnInteraction: false
		},
		spaceBetween: 0,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});

};
