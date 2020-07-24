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
	// const descriptionToggleText = () => {
	// 	$('[description-btn-js]').on('click', (ev) => {
	// 		const el = $(ev.currentTarget);
	//
	// 		el.toggleClass('is-active');
	// 		$('[description-more-js]').slideToggle(450);
	//
	// 		if(el.hasClass('is-active')) {
	// 			el.text(el.attr('data-less'));
	// 		} else {
	// 			el.text(el.attr('data-more'));
	// 		}
	// 	});
	// };
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
		// ==========================================

		// callback
		// descriptionToggleText();
		// ==========================================
	};

	window.addEventListener('load', function (ev) {
		initNative();
	}, false);
})();