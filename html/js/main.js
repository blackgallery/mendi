(function($) {
    'use strict';

    /*=======================================
         PRELOADER                     
    ======================================= */
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    /*=======================================
        collapse the navbar on scroll
    =======================================*/
    // jQuery to collapse the navbar on scroll
	$(window).on('scroll', function() {	
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

	
	/* =======================================
        single Page Nav
    =======================================*/
    // The actual plugin
    $('.single-page-nav').singlePageNav({
        offset: $('.single-page-nav').outerHeight(),
        filter: ':not(.external)',
        updateHash: true,
    });
	
	
    /*==========================================
         Skill BAR
    ============================================*/
    $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });

    /* =======================================
    		WOW ANIMATION
    ======================================= */
    var wow = new WOW({
        mobile: false
    });
    wow.init();



    /*=======================================
        Scroll Top
    =======================================*/
    $(".scrollup").on('click', function() {
        $('html,body').animate({
            'scrollTop': '0'
        }, 4000);
        return false;
    });

    /*=======================================
		Client Section  
	=======================================*/
    $("#client").owlCarousel({
        autoPlay: true, //Set AutoPlay to 3 seconds
        items: 6,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        dots: true,
        nav: true,
        navText: ["<i class='logo-nav-icon'></i>", "<i class='logo-nav-icon'></i>"]
    });

    /* =======================================
		Gallery Section : mixItUp jQuery 
	=======================================*/
    $('.project-list').mixItUp({
        animation: {
            effects: 'fade stagger(50ms)',
            reverseOut: true,
            staggerSequence: function(i) {
                return (2 * i) - (5 * ((i / 3) - ((1 / 3) * (i % 3))));
            }
        }
    });

    /* =======================================
        Pretty Photo
    =======================================*/
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
 

})(jQuery);