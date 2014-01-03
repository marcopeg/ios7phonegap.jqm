/**
 * ios7phonegap.jqm
 * v0.1.0
 */

;(function($) {
	
	
	
	$(document).on("pageinit", function( event ) {
		if (navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i)) {
			
			/**
			 * allow to inherit color from a custom setting
			 */
			var color = window.ios7statusbarColor || 'rgb(233,233,233)';
			
			/**
			 * create the custom style node 
			 */
			$('<style>').html(''
				+ '#ios7phonegap {width:100%;height:20px;position:fixed;z-index:100;background:' + color + '}'
				+ '.ios7phonegap .ui-page {margin-top: 20px}'
				+ '.ios7phonegap .ui-header {border-top-color:' + color + ' !important}'
			).appendTo($('head'));
			
			/**
			 * apply DOM transformations
			 */
			$("body").addClass("ios7phonegap").append('<div id="ios7phonegap"/>');
			
		}
	});
	
})(jQuery);