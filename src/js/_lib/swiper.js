

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
};
