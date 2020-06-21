$(function () {
	$('.offices-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.header-btn').on('click', function () {
		$(this).toggleClass('active');
	});
	$('.header-btn').on('click', function () {
		$('.menu,.header-nav__social-menu').slideToggle();
	});
	
	new WOW().init();

	var mixer = mixitup('.filter-content');
});