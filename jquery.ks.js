"use strict";
(function ($) {

	$.fn.ks = function (options) {
		options = options || {};
		options.onRealign = options.onRealign || function(){};
		options.target = $(options.target || '.ks-target');
		options.spacing = parseInt(options.spacing, 10) || 0;
		var context = $(this);

		$(options.target).addClass('__ks_target_selector');
		var fill = function () {
			var width = parseInt(options.targetWidth) || $(options.target).width();
			$(options.target).children().remove();
			var children = $(context).children();
			for (var i = 0; i < children.length; ) {
				var row = $('<div class="ks-row"></div>');
				var w = -options.spacing;
				for (var j = 0; (w <= width) && (i < children.length); j++, i++) {
					var item = $(children[i]).clone();
					item.css({
						width: $(item).data('width') + 'px',
						height: $(item).data('height') + 'px'
					});

					if (/MSIE\s8/.test(navigator.userAgent)) {
						var selfWidth = item.width(), selfHeight = item.height();
						item.find('img').css({
							marginTop: "-" + (selfHeight / 2) + "px",
							marginLeft: "-" + (selfWidth / 2) + "px"
						});
					}
					row.append(item);
					w += parseInt(item.data('width'), 10);
					w += options.spacing;
				}
				if (w > width) {
					var numItems = $(row).children().length;
					var overflow = w - width;
					var pOverflow = overflow / width * 100;
					var cut = pOverflow / numItems;
					if (cut > 0) {
						$(row).children().each(function () {
							var iWidth = parseInt($(this).data('width'), 10);
							var initialWidth = iWidth / width * 100;
							var holdSpace = iWidth / w * 100;
							$(this).css({
								width: (initialWidth - (pOverflow / 100 * holdSpace)) + '%'
							});
							if (/MSIE\s8/.test(navigator.userAgent)) {
								var selfWidth = $(this).width(), selfHeight = $(this).height();
								$(this).find('img').css({
									marginTop: "-" + (selfHeight / 2) + "px",
									marginLeft: "-" + (selfWidth / 2) + "px"
								});
							}
						});
					}
				}
				options.target.append(row);
			}
			options.onRealign();
		};
		if (!options.targetWidth) {
			$(window).resize(fill).trigger('resize');
		} else {
			fill();
		}
	};

})(jQuery);