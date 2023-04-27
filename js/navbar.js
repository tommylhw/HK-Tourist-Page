$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.navbar').css("background", "#ffffff");
			$('.navbar-text').css("color", "#000000");
		} else {
			$('.navbar').css("background", "rgba(0, 0, 0, 0)");
			$('.navbar-text').css("color", "#ffffff");
		}
	});

	$('.scroll-top').click(function () {
		$("html, body").animate({
			scrollTop: 0
			}, 300);
		return false;
	});

});