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
 * @name initPopups
 *
 * @description
 */
var initPopups = function initPopups() {

	$('[popup-js]').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'is-show',
		callbacks: {
			beforeOpen: function beforeOpen() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			close: function close() {}
		}
	});

	$('[popup-video-js]').magnificPopup({
		type: 'iframe',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'is-show',
		callbacks: {
			beforeOpen: function beforeOpen() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			close: function close() {}
		}
	});

	$('[popup-gallery-js]').magnificPopup({
		delegate: 'a',
		type: 'image',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		tLoading: 'Loading image #%curr%...',
		mainClass: 'is-show',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		callbacks: {
			beforeOpen: function beforeOpen() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			close: function close() {}
		}
	});
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
 * @name initSmoothScroll
 *
 * @description Smooth transition to anchors to the block.
 */
var initSmoothScroll = function initSmoothScroll() {
	var btnName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[anchor-js]";
	var animateSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;


	$(btnName).on("click", function (e) {
		var linkHref = $(e.currentTarget).attr('href'),
		    headerHeight = $(".header").outerHeight() || 0,
		    topHeightOffset = $(linkHref).offset().top - headerHeight;

		if (linkHref === '#jobApply') {
			var cardStickyMain = $('[jd-main-js]').outerHeight(true);

			$('body, html').animate({
				scrollTop: $(linkHref).offset().top - cardStickyMain
			}, animateSpeed);
		} else {
			$('body, html').animate({
				scrollTop: topHeightOffset
			}, animateSpeed);
		}
	});
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

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
			prevEl: '.reviews__btn--prev'
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
			}
		},
		navigation: {
			nextEl: '.jobs__btn--next',
			prevEl: '.jobs__btn--prev'
		}
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
				$("#sliderDetails").carousel({ interval: 7500 });
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

		if ($(window).width() > 1023 && searchFilter.length) {
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

	var applyJobDetails = function applyJobDetails() {
		$('[apply-here-js]').on('click', function (ev) {
			$(ev.currentTarget).addClass('disabled');
			$('[apply-node-js]').slideDown(400);
		});
	};

	var jobDetailsCard = function jobDetailsCard() {
		var _jdMainSection = $('[jd-main-js]');

		function _helperCheckOffset() {
			if ($('[jd-card-js]')[0].getBoundingClientRect().top + $('[jd-card-js]').outerHeight() - $('#header').outerHeight() <= 0) {
				_jdMainSection.addClass('is-sticky');
			} else {
				_jdMainSection.removeClass('is-sticky');
			}
		}

		if (_jdMainSection.length) {
			_helperCheckOffset();

			$(window).on('scroll', function (ev) {
				_helperCheckOffset();
			});
		}
	};

	var initDatePicker = function initDatePicker() {
		$.each($('.datepicker'), function (idx, val) {
			new Pikaday({
				field: $(val)[0],
				format: 'DD/MM/YYYY'
			});
		});
	};

	var addMoreWork = function addMoreWork() {
		var tmpl = function tmpl(idx) {
			return "\n\t\t\t<div class=\"login__more-wrapper\">\n\t\t\t\t<div class=\"login__more-close\">\n\t\t\t\t\t<a href=\"#\" class=\"\" close-more-js>\n\t\t\t\t\t\t<i class=\"icon-font icon-close\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"login__more\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Position, eg. HR Manager, Accountant, Sales...\" required=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Company Name\" required=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t\t\t<option value=\"0\" selected=\"selected\">Job Function</option>\n\t\t\t\t\t\t\t\t<option value=\"1\">Accounting, Finance</option>\n\t\t\t\t\t\t\t\t<option value=\"2\">Administrative</option>\n\t\t\t\t\t\t\t\t<option value=\"7\">Architecture, Design</option>\n\t\t\t\t\t\t\t\t<option value=\"4\">Consulting</option>\n\t\t\t\t\t\t\t\t<option value=\"6\">Customer Service, Support</option>\n\t\t\t\t\t\t\t\t<option value=\"23\">Doctor, Nursing, Medical Staff</option>\n\t\t\t\t\t\t\t\t<option value=\"8\">Driver, Delivery, Motorbike</option>\n\t\t\t\t\t\t\t\t<option value=\"9\">Education, Teaching, Childcare</option>\n\t\t\t\t\t\t\t\t<option value=\"10\">Engineering, Technical, HSE</option>\n\t\t\t\t\t\t\t\t<option value=\"13\">Food and Beverage</option>\n\t\t\t\t\t\t\t\t<option value=\"39\">General Workers</option>\n\t\t\t\t\t\t\t\t<option value=\"14\">Health, Beauty, Fitness</option>\n\t\t\t\t\t\t\t\t<option value=\"16\">HR, Training and Recruitment</option>\n\t\t\t\t\t\t\t\t<option value=\"15\">Hospitality, Hotel, Tourism</option>\n\t\t\t\t\t\t\t\t<option value=\"17\">IT Hardware, Software</option>\n\t\t\t\t\t\t\t\t<option value=\"18\">Legal, Risk and Compliance</option>\n\t\t\t\t\t\t\t\t<option value=\"19\">Logistics, Distribution, Fleet</option>\n\t\t\t\t\t\t\t\t<option value=\"20\">Management</option>\n\t\t\t\t\t\t\t\t<option value=\"21\">Manufacturing, Warehouse</option>\n\t\t\t\t\t\t\t\t<option value=\"22\">Marketing, Media, Creative</option>\n\t\t\t\t\t\t\t\t<option value=\"25\">PR, Communications</option>\n\t\t\t\t\t\t\t\t<option value=\"38\">Procurement, Supply Chain</option>\n\t\t\t\t\t\t\t\t<option value=\"24\">Project, Operations Management</option>\n\t\t\t\t\t\t\t\t<option value=\"26\">Quality Assurance</option>\n\t\t\t\t\t\t\t\t<option value=\"27\">Research and Development</option>\n\t\t\t\t\t\t\t\t<option value=\"30\">Sales, Business Development</option>\n\t\t\t\t\t\t\t\t<option value=\"31\">Science, Technology</option>\n\t\t\t\t\t\t\t\t<option value=\"32\">Skilled Trades , Construction</option>\n\t\t\t\t\t\t\t\t<option value=\"33\">Strategy, Planning</option>\n\t\t\t\t\t\t\t\t<option value=\"34\">Translation</option>\n\t\t\t\t\t\t\t\t<option value=\"35\">Voluntary work</option>\n\t\t\t\t\t\t\t\t<option value=\"36\">Writing, Editing</option>\n\t\t\t\t\t\t\t\t<option value=\"37\">Others</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t\t\t<option value=\"0\" selected=\"selected\">Experience Level</option>\n\t\t\t\t\t\t\t\t<option value=\"1\">Entry Level</option>\n\t\t\t\t\t\t\t\t<option value=\"2\">Experienced Non-Manager</option>\n\t\t\t\t\t\t\t\t<option value=\"3\">Manager</option>\n\t\t\t\t\t\t\t\t<option value=\"4\">Director and Above</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<div class=\"input-group input-group--date\">\n\t\t\t\t\t\t\t\t<input class=\"form-control datepicker\" type=\"text\" placeholder=\"From Date\" required=\"\"><i class=\"icon-font icon-calendar-1\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<div class=\"input-group input-group--date\">\n\t\t\t\t\t\t\t\t<input class=\"form-control datepicker\" type=\"text\" placeholder=\"To Date\" required=\"\"><i class=\"icon-font icon-calendar-1\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group mb-2\">\n\t\t\t\t\t\t<div class=\"custom-control custom-switch\">\n\t\t\t\t\t\t\t<input class=\"custom-control-input\" id=\"currentWorkChecked-" + idx + "\" type=\"checkbox\">\n\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"currentWorkChecked-" + idx + "\">I Currently Work Here</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"login__box-separate\"><span></span></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
		};

		var num = 0;

		$('[add-work-js]').on('click', function (ev) {
			$('#login__scroll').append(tmpl(num));
			num++;

			initDatePicker();

			$(ev.currentTarget).closest('.form-group').addClass('is-add');
		});

		$(document).on('click', '[close-more-js]', function (ev) {
			$(ev.currentTarget).closest('.login__more-wrapper').remove();

			if (!$('.login__more-wrapper').length) {
				$('[add-work-js]').closest('.form-group').removeClass('is-add');
			}
		});

		if ($(window).width() < 768) {
			$('#pills-work-experience').trigger('click');
		} else {
			$('#pills-upload-cv').trigger('click');
		}

		$(window).on('resize', function (ev) {
			if ($(window).width() < 768) {
				$('#pills-work-experience').trigger('click');
			} else {
				$('#pills-upload-cv').trigger('click');
			}
		});
	};

	var employers = function employers() {
		$('.benefits__pagination i').on('click', function (ev) {
			var elID = $(ev.currentTarget).attr('data-id');

			$('.benefits__pagination i').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');

			$('.benefits__box').removeClass('is-show');
			$('.benefits__box-' + elID).addClass('is-show');
		});

		$('[video-select-js]').on('change', function (ev) {
			var selectedVal = $(ev.currentTarget).find('option:selected').val();

			$('#' + selectedVal).trigger('click');
		});
	};

	var careerCB = function careerCB() {
		$('[career-floater-js]').on('click', function (ev) {
			$('.career-floater__info').fadeIn(350);

			setTimeout(function (ev) {
				$('.career-floater__info').fadeOut(350);
			}, 3500);
		});
	};

	var modals = function modals() {
		setTimeout(function (ev) {
			$('[home-modalAuto-js]').trigger('click');
		}, 2000);
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
		initSmoothScroll();
		initPopups();
		initSwiper();
		// ==========================================

		// callback
		headerSearch();
		mainFormFieldToggle();
		detailsCarouselToggle();
		popularCollapse();
		searchFilterToggle();
		searchSortToggle();
		stickyElements();
		applyJobDetails();
		jobDetailsCard();
		initDatePicker();
		addMoreWork();
		employers();
		careerCB();

		modals();
		// ==========================================
	};

	window.addEventListener('load', function (ev) {
		initNative();
	}, false);

	window.addEventListener('resize', function (ev) {
		if ($(window).width() > 1023 && $('html').hasClass('is-hideScroll')) {
			$('html, body').removeClass('is-hideScroll');
		}
	}, false);
})();