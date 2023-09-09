(function($) {

	'use strict';

	/*
	 * Status - Select2 With Templating
	 *
	 */
	$('select[name="orderStatus"]').select2({
		minimumResultsForSearch: -1,
		templateResult: formatOrderStatus,
		templateSelection: formatOrderStatus,
		theme: 'bootstrap'
	});

	function formatOrderStatus(status) {
	  	if (!status.element) {
	    	return status.text;
	  	}

	  	var className = $(status.element).attr("class");
	  	var $status = $(
	    	'<span class="ecommerce-status '+ className +'">'+ status.text +'</span>'
	  	);

	  	return $status;
	};

}(jQuery));
