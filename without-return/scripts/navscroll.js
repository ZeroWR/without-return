//ADD SCROLLED CLASS ON SCROLL
$(document).ready(function () {
	function checkScroll() {
		var startY = $('.navbar').height() * 2;

		if ($(window).scrollTop() > startY) {
			$('.navbar').addClass("scrolled");
		} else {
			$('.navbar').removeClass("scrolled");
		}
	}

	if ($('.navbar').length > 0) {
		$(window).on("scroll load resize", function () {
			checkScroll();
		});
	}

	//SCROLL TO ANCHOR

	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});


