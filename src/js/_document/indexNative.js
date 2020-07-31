/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const headerSearch = () => {
		$('.header__form input').on('focus', (ev) => {
			console.log('focus');
			$(ev.currentTarget).closest('.header__form').addClass('is-focus');
		});
		$('.header__form input').on('blur', (ev) => {
			console.log('blur');
			$(ev.currentTarget).closest('.header__form').removeClass('is-focus');
		});
	};


	const mainFormFieldToggle = () => {
		$('[main-more-js]').on('click', (ev) => {
			const _parentNode = $(ev.currentTarget).closest('.main__form');

			$(ev.currentTarget).toggleClass('is-active');

			_parentNode.find('.main__form-field-2, .main__form-field-3').slideToggle(400).css({
				'display': 'flex'
			});
		});
	};


	const detailsCarouselToggle = () => {
		function _helperCB() {
			if($(window).width() < 768) {
				$("#sliderDetails").carousel("pause");
				$("#sliderDetails .carousel-control").css("display", "none");
				$("#sliderDetails .carousel-indicators").css("display", "none");
			} else {
				$("#sliderDetails").carousel({
					interval: 7500
				});
				$("#sliderDetails .carousel-control").attr("style", "");
				$("#sliderDetails .carousel-indicators").attr("style", "none");
			}
		}

		_helperCB();

		$(window).on('resize', (ev) => {
			_helperCB();
		});
	};


	const popularCollapse = () => {
		$('[popular-header-js]').on('click', (ev) => {
			if($(window).width() < 1024) {
				if($(ev.currentTarget).siblings('.tab-pane-content').is(':visible')) {
					$(ev.currentTarget).removeClass('is-active');
					$(ev.currentTarget).siblings('.tab-pane-content').slideUp(400);
				} else {
					$('[popular-header-js]').removeClass('is-active');
					$('.tab-pane-content').slideUp(400);
					$(ev.currentTarget).addClass('is-active');
					$(ev.currentTarget).siblings('.tab-pane-content').slideDown(400);
				}
			}
		});
	};


	const searchFilterToggle = () => {
		const filterNode = $('.search__filter');

		$('[search-filter-js]').on('click', (ev) => {
			if($(window).width() < 1024) {
				filterNode.addClass('is-show');

				$('html, body').addClass('is-hideScroll');
			}
		});

		$('[search-filter-close-js]').on('click', (ev) => {
			if($(window).width() < 1024) {
				filterNode.addClass('is-animated');
				filterNode.removeClass('is-show');

				$('html, body').removeClass('is-hideScroll');

				setTimeout(() => {
					filterNode.removeClass('is-animated');
				}, 350);
			}
		});
	};


	const searchSortToggle = () => {
		const sortNode = $('[search-sort-node-js]');

		$('[search-sort-js]').on('click', (ev) => {
			if($(window).width() < 1024) {
				sortNode.addClass('is-show');

				$('html, body').addClass('is-hideScroll');
			}
		});

		$('[search-sort-close-js]').on('click', (ev) => {
			if($(window).width() < 1024) {
				sortNode.addClass('is-animated');
				sortNode.removeClass('is-show');

				$('html, body').removeClass('is-hideScroll');

				setTimeout(() => {
					sortNode.removeClass('is-animated');
				}, 350);
			}
		});
	};


	const stickyElements = () => {
		const searchForm = $('.search__form'),
			searchAction = $('.search__action'),
			searchFilter = $('.search__filter');

		function isAnyPartOfElementInViewport(el) {
			const rect = el.getBoundingClientRect();
			const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
			const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
			const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
			const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

			return (vertInView && horInView);
		}

		if($(window).width() > 1023) {
			stickybits('.search__filter', {
				useStickyClasses: true,
				stickyBitStickyOffset: 95
			});

			if(isAnyPartOfElementInViewport(searchAction[0])) {
				searchFilter.css({
					'max-height': 'calc(100vh - ' + ($(window).height() - (searchAction[0].getBoundingClientRect().top + searchAction[0].getBoundingClientRect().height - (searchForm[0].getBoundingClientRect().height + 15))) + 'px)'
				});
			}

			$(window).on('scroll', (ev) => {
				if(searchFilter.hasClass('js-is-stuck')) {
					searchFilter.css({
						'max-height': 'calc(100vh - ' + ($(window).height() - (searchAction[0].getBoundingClientRect().top + searchAction[0].getBoundingClientRect().height - (searchForm[0].getBoundingClientRect().height + 15))) + 'px)'
					});
				} else {
					searchFilter.css({
						'max-height': 'calc(100vh - 105px)'
					});
				}
			});
		}
	};
	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initHamburger();
		// ==========================================

		// callback
		headerSearch();
		mainFormFieldToggle();
		detailsCarouselToggle();
		popularCollapse();
		searchFilterToggle();
		searchSortToggle();
		stickyElements();
		// ==========================================
	};

	window.addEventListener('load', (ev) => {
		initNative();
	}, false);

	window.addEventListener('resize', (ev) => {
		if($(window).width() > 1023 && $('html').hasClass('is-hideScroll')) {
			$('html, body').removeClass('is-hideScroll');
			// $('.search__filter, [search-sort-node-js]').removeClass('is-show');
			// $('[mobile-block-js]').removeClass('is-open');
		}
	}, false);
})();
