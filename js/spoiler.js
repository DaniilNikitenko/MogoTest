$(document).ready(function () {
	$(".spoiler-whatwedo__header").click(function (event) {
		if ($(".spoiler-whatwedo").hasClass("one")) {
			$(".spoiler-whatwedo__header").not($(this)).removeClass("active");
			$(".spoiler-whatwedo__text").not($(this).next()).slideUp("300");
		}
		$(this).toggleClass("active").next().slideToggle(300)
	});
});
