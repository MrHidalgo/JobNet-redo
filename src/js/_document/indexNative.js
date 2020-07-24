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
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		// ==========================================

		// callback
		// descriptionToggleText();
		// ==========================================
	};

	window.addEventListener('load', (ev) => {
		initNative();
	}, false);
})();
