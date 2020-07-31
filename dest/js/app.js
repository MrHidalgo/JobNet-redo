"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

	var btn = document.querySelector("[hamburger-js]"),
	    hideScrollContainer = document.querySelectorAll("html, body"),
	    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
  */
	if (btn) {
		btn.addEventListener("click", function (ev) {
			var elem = ev.currentTarget;

			// elem.classList.toggle("is-active");
			mobileContainer.classList.toggle("is-open");

			hideScrollContainer.forEach(function (val, idx) {
				val.classList.toggle("is-hideScroll");
			});
		});

		$('[mobile-close-js]').on('click', function (ev) {
			mobileContainer.classList.add('is-animated');

			mobileContainer.classList.remove('is-open');

			hideScrollContainer.forEach(function (val, idx) {
				val.classList.remove("is-hideScroll");
			});

			setTimeout(function () {
				mobileContainer.classList.remove('is-animated');
			}, 350);
		});
	}
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @description Window on load.
 */
window.addEventListener('load', function (ev) {});

/**
 * @description Window on resize.
 */
window.addEventListener('resize', function (ev) {});

/**
 * @description Window on scroll.
 */
window.addEventListener('scroll', function (ev) {});

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * CALLBACK :: start
 * ============================================= */
	var headerSearch = function headerSearch() {
		$('.header__form input').on('focus', function (ev) {
			console.log('focus');
			$(ev.currentTarget).closest('.header__form').addClass('is-focus');
		});
		$('.header__form input').on('blur', function (ev) {
			console.log('blur');
			$(ev.currentTarget).closest('.header__form').removeClass('is-focus');
		});
	};

	var mainFormFieldToggle = function mainFormFieldToggle() {
		$('[main-more-js]').on('click', function (ev) {
			var _parentNode = $(ev.currentTarget).closest('.main__form');

			$(ev.currentTarget).toggleClass('is-active');

			_parentNode.find('.main__form-field-2, .main__form-field-3').slideToggle(400).css({
				'display': 'flex'
			});
		});
	};

	var detailsCarouselToggle = function detailsCarouselToggle() {
		function _helperCB() {
			if ($(window).width() < 768) {
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

		$(window).on('resize', function (ev) {
			_helperCB();
		});
	};

	var popularCollapse = function popularCollapse() {
		$('[popular-header-js]').on('click', function (ev) {
			if ($(window).width() < 1024) {
				if ($(ev.currentTarget).siblings('.tab-pane-content').is(':visible')) {
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

	var searchFilterToggle = function searchFilterToggle() {
		var filterNode = $('.search__filter');

		$('[search-filter-js]').on('click', function (ev) {
			if ($(window).width() < 1024) {
				filterNode.addClass('is-show');

				$('html, body').addClass('is-hideScroll');
			}
		});

		$('[search-filter-close-js]').on('click', function (ev) {
			if ($(window).width() < 1024) {
				filterNode.addClass('is-animated');
				filterNode.removeClass('is-show');

				$('html, body').removeClass('is-hideScroll');

				setTimeout(function () {
					filterNode.removeClass('is-animated');
				}, 350);
			}
		});
	};

	var searchSortToggle = function searchSortToggle() {
		var sortNode = $('[search-sort-node-js]');

		$('[search-sort-js]').on('click', function (ev) {
			if ($(window).width() < 1024) {
				sortNode.addClass('is-show');

				$('html, body').addClass('is-hideScroll');
			}
		});

		$('[search-sort-close-js]').on('click', function (ev) {
			if ($(window).width() < 1024) {
				sortNode.addClass('is-animated');
				sortNode.removeClass('is-show');

				$('html, body').removeClass('is-hideScroll');

				setTimeout(function () {
					sortNode.removeClass('is-animated');
				}, 350);
			}
		});
	};

	var stickyElements = function stickyElements() {
		var searchForm = $('.search__form'),
		    searchAction = $('.search__action'),
		    searchFilter = $('.search__filter');

		function isAnyPartOfElementInViewport(el) {
			var rect = el.getBoundingClientRect();
			var windowHeight = window.innerHeight || document.documentElement.clientHeight;
			var windowWidth = window.innerWidth || document.documentElement.clientWidth;
			var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
			var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

			return vertInView && horInView;
		}

		if ($(window).width() < 1024) {
			stickybits('.search__filter', {
				useStickyClasses: true,
				stickyBitStickyOffset: 95
			});

			if (isAnyPartOfElementInViewport(searchAction[0])) {
				searchFilter.css({
					'max-height': 'calc(100vh - ' + ($(window).height() - (searchAction[0].getBoundingClientRect().top + searchAction[0].getBoundingClientRect().height - (searchForm[0].getBoundingClientRect().height + 15))) + 'px)'
				});
			}

			$(window).on('scroll', function (ev) {
				if (searchFilter.hasClass('js-is-stuck')) {
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
	var initNative = function initNative() {
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

	window.addEventListener('load', function (ev) {
		initNative();
	}, false);

	window.addEventListener('resize', function (ev) {
		if ($(window).width() > 1023 && $('html').hasClass('is-hideScroll')) {
			$('html, body').removeClass('is-hideScroll');
			$('.search__filter, [search-sort-node-js]').removeClass('is-show');
			$('[mobile-block-js]').removeClass('is-open');
		}
	}, false);
})();