/*
jQuery Hover3d
*/
(function($) {
	if ($.isFunction($.fn['hover3d'])) {

		$(function() {
			$('.hover-effect-3d').each(function() {
				var $this = $(this);

				$this.hover3d({
					selector: ".thumb-info"
				});
			});
		});

	}
}).apply(this, [jQuery]);

/*
* Title Border
*/
if($('[data-title-border]').get(0)) {

	var $pageHeaderTitleBorder = $('<span class="page-header-title-border"></span>'),
		$pageHeaderTitle = $('[data-title-border]'),
		$window = $(window);

	$pageHeaderTitle.before($pageHeaderTitleBorder);

	var setPageHeaderTitleBorderWidth = function() {
		$pageHeaderTitleBorder.width($pageHeaderTitle.width());
	}

	$window.afterResize(function(){
		setPageHeaderTitleBorderWidth();
	});

	setPageHeaderTitleBorderWidth();

	$pageHeaderTitleBorder.addClass('visible');
}

/*
* Footer Reveal
*/
(function($) {
	var $footerReveal = {
		$wrapper: $('.footer-reveal'),
		init: function() {
			var self = this;

			self.build();
			self.events();
		},
		build: function() {
			var self = this, 
				footer_height = self.$wrapper.outerHeight(true),
				window_height = ( $(window).height() - $('.header-body').height() );

			if( footer_height > window_height ) {
				$('#footer').removeClass('footer-reveal');
				$('body').css('margin-bottom', 0);
			} else {
				$('#footer').addClass('footer-reveal');
				$('body').css('margin-bottom', footer_height);
			}

		},
		events: function() {
			var self = this,
				$window = $(window);

			$window.on('load', function(){
				$window.afterResize(function(){
					self.build();
				});
			});
		}
	}

	if( $('.footer-reveal').get(0) ) {
		$footerReveal.init();
	}
})(jQuery);