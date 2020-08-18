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

		if($(window).width() > 1023 && searchForm.length) {
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


	const applyJobDetails = () => {
		$('[apply-here-js]').on('click', (ev) => {
			$(ev.currentTarget).addClass('disabled');
			$('[apply-node-js]').slideDown(400);
		});
	};


	const jobDetailsCard = () => {
		const _jdMainSection = $('[jd-main-js]');

		function _helperCheckOffset() {
			if(($('[jd-card-js]')[0].getBoundingClientRect().top + $('[jd-card-js]').outerHeight() - $('#header').outerHeight()) <= 0) {
				_jdMainSection.addClass('is-sticky');
			} else {
				_jdMainSection.removeClass('is-sticky');
			}
		}

		if(_jdMainSection.length) {
			_helperCheckOffset();

			$(window).on('scroll', (ev) => {
				_helperCheckOffset();
			});
		}
	};


	const initDatePicker = () => {
		$.each($('.datepicker'), (idx, val) => {
			new Pikaday({
				field: $(val)[0],
				format: 'DD/MM/YYYY',
			});
		});
	};


	const addMoreWork = () => {
		const tmpl = (idx) => `
			<div class="login__more-wrapper">
				<div class="login__more-close">
					<a href="#" class="" close-more-js>
						<i class="icon-font icon-close"></i>
					</a>
				</div>
				<div class="login__more">
					<div class="form-group">
						<div class="input-group">
							<input class="form-control" type="text" placeholder="Position, eg. HR Manager, Accountant, Sales..." required="">
						</div>
					</div>
					<div class="form-group">
						<div class="input-group">
							<input class="form-control" type="text" placeholder="Company Name" required="">
						</div>
					</div>
					<div class="row">
						<div class="col">
							<select class="form-control">
								<option value="0" selected="selected">Job Function</option>
								<option value="1">Accounting, Finance</option>
								<option value="2">Administrative</option>
								<option value="7">Architecture, Design</option>
								<option value="4">Consulting</option>
								<option value="6">Customer Service, Support</option>
								<option value="23">Doctor, Nursing, Medical Staff</option>
								<option value="8">Driver, Delivery, Motorbike</option>
								<option value="9">Education, Teaching, Childcare</option>
								<option value="10">Engineering, Technical, HSE</option>
								<option value="13">Food and Beverage</option>
								<option value="39">General Workers</option>
								<option value="14">Health, Beauty, Fitness</option>
								<option value="16">HR, Training and Recruitment</option>
								<option value="15">Hospitality, Hotel, Tourism</option>
								<option value="17">IT Hardware, Software</option>
								<option value="18">Legal, Risk and Compliance</option>
								<option value="19">Logistics, Distribution, Fleet</option>
								<option value="20">Management</option>
								<option value="21">Manufacturing, Warehouse</option>
								<option value="22">Marketing, Media, Creative</option>
								<option value="25">PR, Communications</option>
								<option value="38">Procurement, Supply Chain</option>
								<option value="24">Project, Operations Management</option>
								<option value="26">Quality Assurance</option>
								<option value="27">Research and Development</option>
								<option value="30">Sales, Business Development</option>
								<option value="31">Science, Technology</option>
								<option value="32">Skilled Trades , Construction</option>
								<option value="33">Strategy, Planning</option>
								<option value="34">Translation</option>
								<option value="35">Voluntary work</option>
								<option value="36">Writing, Editing</option>
								<option value="37">Others</option>
							</select>
						</div>
						<div class="col">
							<select class="form-control">
								<option value="0" selected="selected">Experience Level</option>
								<option value="1">Entry Level</option>
								<option value="2">Experienced Non-Manager</option>
								<option value="3">Manager</option>
								<option value="4">Director and Above</option>
							</select>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="input-group input-group--date">
								<input class="form-control datepicker" type="text" placeholder="From Date" required=""><i class="icon-font icon-calendar-1"></i>
							</div>
						</div>
						<div class="col">
							<div class="input-group input-group--date">
								<input class="form-control datepicker" type="text" placeholder="To Date" required=""><i class="icon-font icon-calendar-1"></i>
							</div>
						</div>
					</div>
					<div class="form-group mb-2">
						<div class="custom-control custom-switch">
							<input class="custom-control-input" id="currentWorkChecked-${idx}" type="checkbox">
							<label class="custom-control-label" for="currentWorkChecked-${idx}">I Currently Work Here</label>
						</div>
					</div>
					<div class="form-group">
						<div class="login__box-separate"><span></span></div>
					</div>
				</div>
			</div>
		`;

		let num = 0;

		$('[add-work-js]').on('click', (ev) => {
			$('#login__scroll').append(tmpl(num));
			num++;

			initDatePicker();

			$(ev.currentTarget).closest('.form-group').addClass('is-add');
		});

		$(document).on('click', '[close-more-js]', (ev) => {
			$(ev.currentTarget).closest('.login__more-wrapper').remove();

			if(!$('.login__more-wrapper').length) {
				$('[add-work-js]').closest('.form-group').removeClass('is-add');
			}
		});

		if($(window).width() < 768) {
			$('#pills-work-experience').trigger('click');
		} else {
			$('#pills-upload-cv').trigger('click');
		}

		$(window).on('resize', (ev) => {
			if($(window).width() < 768) {
				$('#pills-work-experience').trigger('click');
			} else {
				$('#pills-upload-cv').trigger('click');
			}
		});
	};


	const employers = () => {
		$('.benefits__pagination i').on('click', (ev) => {
			const elID = $(ev.currentTarget).attr('data-id');

			$('.benefits__pagination i').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');

			$('.benefits__box').removeClass('is-show');
			$('.benefits__box-' + elID).addClass('is-show');
		});


		$('[video-select-js]').on('change', (ev) => {
			const selectedVal = $(ev.currentTarget).find('option:selected').val();

			$('#' + selectedVal).trigger('click');
		});
	};



	const modals = () => {
		setTimeout((ev) => {
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
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initHamburger();
		initSmoothScroll();
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

		modals();
		// ==========================================
	};

	window.addEventListener('load', (ev) => {
		initNative();
	}, false);

	window.addEventListener('resize', (ev) => {
		if($(window).width() > 1023 && $('html').hasClass('is-hideScroll')) {
			$('html, body').removeClass('is-hideScroll');
		}
	}, false);
})();
