jQuery(document).ready(function () {

	jQuery('.header-carousel').owlCarousel({
		items : 1
	})


	jQuery('.tstimonial-carousel').owlCarousel({
		items : 1,
		dots: false,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		dotData: true,
		thumbs: true,
		thumbsPrerendered: true,
		startPosition: 2
	})
	
	

	// scroll to top
	jQuery(".scrolltop").click(function(){
		jQuery("html, body").animate({"scrollTop" : "0"},1000);
		return false;
	});
	
	
	// show menu @media 670px
	jQuery(".main-menu .menu-bar").click(function(){
		jQuery(".main-menu > ul").slideToggle(500);
		return false;
	});	

	
	// Responsive video
	jQuery("#myVideo").fitVids();
	
	

	jQuery(window).on("resize , scroll", function (){

		var topDistance = jQuery(window).scrollTop();	
		var screenWidth = jQuery(window).width();


		// scroll to top
		if(topDistance > 200){
			jQuery(".scrolltop").fadeIn(1000);
		}
		else{
			jQuery(".scrolltop").fadeOut(1000);
		}
				
		

		// Fixed header
		if(topDistance > 100 && screenWidth > 529){
			jQuery(".fixed-header").fadeIn(100);
		}
		else{
			jQuery(".fixed-header").fadeOut(500);
		}

	
	});


});



// Load more on click

jQuery(function () {
    jQuery(".portfolios div").slice(0, 12).show();
    jQuery("#loadMore").on('click', function (e) {
        e.preventDefault();
        jQuery(".portfolios div:hidden").slice(0, 6).slideDown();

    });
});





// Source from start bootstrap
//jQuery for page scrolling navigation feature - requires jQuery Easing plugin
jQuery(function() {
    jQuery('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        jQuery('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});







