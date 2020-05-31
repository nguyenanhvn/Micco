jQuery(document).ready(function() {
	var width_device = jQuery(window).width();
	jQuery('.dotdotdot').dotdotdot();
	setTimeout(function(){
		jQuery('.dotdotdot').dotdotdot();
	}, 100);
    jQuery(window).resize(function(event) {
    	setTimeout(function(){    
    		jQuery('.dotdotdot').dotdotdot();
		}, 100);
    });

	var wow = new WOW(
	  	{
		    boxClass:     'wow',      // animated element css class (default is wow)
		    animateClass: 'animated', // animation css class (default is animated)
		    offset:       0,          // distance to the element when triggering the animation (default is 0)
		    mobile:       true,       // trigger animations on mobile devices (default is true)
		    live:         true,       // act on asynchronously loaded content (default is true)
		    callback:     function(box) {
		      // the callback is fired every time an animation is started
		      // the argument that is passed in is the DOM node being animated
		    },
		    scrollContainer: null // optional scroll container selector, otherwise use window
	  	}
	);
	wow.init();

	header();
	jQuery(window).scroll(function(){
		header();
	});

	jQuery(document).on('click', '.box__search', function(event) {
		event.preventDefault();
		jQuery(this).parent().find('.form__search').addClass('open');
	});

	jQuery(document).on('click', '.form__close', function(event) {
		event.preventDefault();
		jQuery(this).closest('.form__search').removeClass('open');
	});

	jQuery('.toggle-menu i').click(function(event) {
		event.stopPropagation();
		if(jQuery('#header-responsive-responsive .right').hasClass('active')){
			jQuery('#header-responsive-responsive .right').removeClass('active');
		} else {
			jQuery('#header-responsive-responsive .right').addClass('active');
		}

		if(jQuery('#menu-responsive').hasClass('active'))
			jQuery('#menu-responsive').removeClass('active');		
	});

	jQuery('#dark-shadow').click(function(event) {
		jQuery('#header-responsive .bottoms .menu').removeClass('active');
		jQuery(' #header-responsive .bottoms .menu-mobile').removeClass('active');
		jQuery(this).removeClass('active');
	});

    jQuery(document).on('click', '#header-responsive .bottoms .menu', function(event) {
    	event.preventDefault();
    	if(jQuery(this).hasClass('active')){
    		jQuery(this).removeClass('active');
    		jQuery(this).parent().find('.box-menu').removeClass('active');
    		jQuery(this).parent().find('.menu-mobile').removeClass('active');
    		jQuery('#dark-shadow').removeClass('active');
    		jQuery('body').removeClass('none-scroll');
    	} else {
    		jQuery(this).addClass('active');
    		jQuery(this).parent().find('.box-menu').addClass('active');
    		jQuery(this).parent().find('.menu-mobile').addClass('active');
    		jQuery('#header-responsive .bottoms .book, #header-responsive .bottoms .box-book').removeClass('active');
    		jQuery('#dark-shadow').addClass('active');
    		jQuery('body').addClass('none-scroll');
    	}
    });

	jQuery(document).on('click', '.box-menu .list-menu > .menu-item-has-children', function(event) {
		if(jQuery(this).hasClass('open')){
			jQuery(this).removeClass('open');
			jQuery(this).find('> ul').slideUp(300);
		}else{			
			jQuery(this).addClass('open');
			jQuery(this).find('> ul').slideDown(300);
		}
	});

	jQuery(document).on('click', '.menu-mobile .fr-menu > .menu-item-has-children', function(event) {
		if(jQuery(this).hasClass('open')){
			jQuery(this).removeClass('open');
			jQuery(this).find('> ul').slideUp(300);
		}else{			
			jQuery(this).addClass('open');
			jQuery(this).find('> ul').slideDown(300);
		}
	});

    jQuery(document).on('click', '.box-menu .list-menu > .menu-item-has-children ul', function(event) {
    	event.stopPropagation();
    });

    /*=================================================
        					Custom
	=====================================================*/
    jQuery(window).load(function() {   
        jQuery(".fr-loading").delay(1000).fadeOut("slow");
    });

    jQuery("[data-fancybox]").fancybox({});

    if(jQuery('.countnumber').length > 0){
	  	var a = 0;
	  	var oTop = jQuery('.countnumber').offset().top - window.innerHeight;

	  	if (a == 0 && jQuery(window).scrollTop() > (oTop + 120)) {	  		
	  
		  	jQuery({ countNum: jQuery('.countnumber > li:eq(0) .circle span').text()}).animate({
		    	countNum: jQuery('.countnumber > li:eq(0)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(0) .circle span').text(Math.floor(this.countNum));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(0) .circle span').text(this.countNum);
			    }
		  	});
			  
		  	jQuery({ countNum1: jQuery('.countnumber > li:eq(1) .circle span').text()}).animate({
		    	countNum1: jQuery('.countnumber > li:eq(1)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(1) .circle span').text(Math.floor(this.countNum1));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(1) .circle span').text(this.countNum1);
			    }
		  	});
			  
		  	jQuery({ countNum2: jQuery('.countnumber > li:eq(2) .circle span').text()}).animate({
		    	countNum2: jQuery('.countnumber > li:eq(2)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(2) .circle span').text(Math.floor(this.countNum2));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(2) .circle span').text(this.countNum2);
			    }
		  	});
			  
		  	jQuery({ countNum3: jQuery('.countnumber > li:eq(3) .circle span').text()}).animate({
		    	countNum3: jQuery('.countnumber > li:eq(3)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(3) .circle span').text(Math.floor(this.countNum3));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(3) .circle span').text(this.countNum3);
			    }
		  	});
			  
		  	jQuery({ countNum3: jQuery('.countnumber > li:eq(4) .circle span').text()}).animate({
		    	countNum3: jQuery('.countnumber > li:eq(4)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(4) .circle span').text(Math.floor(this.countNum3));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(4) .circle span').text(this.countNum3);
			    }
		  	});
	    	a = 1;
	  	}
		jQuery(window).scroll(function() {
		  	if (a == 0 && jQuery(window).scrollTop() > (oTop + 120)) {	  		
		  
		  	jQuery({ countNum: jQuery('.countnumber > li:eq(0) .circle span').text()}).animate({
		    	countNum: jQuery('.countnumber > li:eq(0)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(0) .circle span').text(Math.floor(this.countNum));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(0) .circle span').text(this.countNum);
			    }
		  	});
			  
		  	jQuery({ countNum1: jQuery('.countnumber > li:eq(1) .circle span').text()}).animate({
		    	countNum1: jQuery('.countnumber > li:eq(1)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(1) .circle span').text(Math.floor(this.countNum1));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(1) .circle span').text(this.countNum1);
			    }
		  	});
			  
		  	jQuery({ countNum2: jQuery('.countnumber > li:eq(2) .circle span').text()}).animate({
		    	countNum2: jQuery('.countnumber > li:eq(2)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(2) .circle span').text(Math.floor(this.countNum2));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(2) .circle span').text(this.countNum2);
			    }
		  	});
			  
		  	jQuery({ countNum3: jQuery('.countnumber > li:eq(3) .circle span').text()}).animate({
		    	countNum3: jQuery('.countnumber > li:eq(3)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(3) .circle span').text(Math.floor(this.countNum3));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(3) .circle span').text(this.countNum3);
			    }
		  	});
		    	a = 1;
		  	}
		});
	}

	jQuery('.scroll-to-top').click(function(event) {
		jQuery('html, body').animate({scrollTop: 0}, 1000);
	});

    jQuery(document).on('click', '.tabs li', function(event) {
    	event.preventDefault();
    	jQuery('.tabs li').removeClass('active');
    	jQuery(this).addClass('active');
    	jQuery('.tabs-content .child').css('display', 'none');
    	jQuery('.tabs-content .child:eq('+ jQuery(this).index() +')').css('display', 'table');
    });

    jQuery(document).on('click', '.nav-mobile .nav-tabs li a', function(event) {
    	event.preventDefault();
    	var value = jQuery(this).text();

    	jQuery(this).closest('.nav-mobile').find('span').text(value);
    });

	// Tooltip
	jQuery('[data-toggle="tooltip"]').tooltip(); 

	if(jQuery('.banner__slider').length > 0){
		var slide = jQuery('.banner__slider');
		slide.owlCarousel({
		    loop:true,
		    margin:0,
		    autoplayTimeout:5000,
		    nav: false,
		    rewind: true,
		    items:1,
		    dots: true,
	        lazyLoad:true,
			autoplayHoverPause:true,
        	mouseDrag: true,
		    touchDrag: true,
		  	autoplaySpeed: 700,
		  	navSpeed: 700,
		  	dotsSpeed: 700,
		  	dragEndSpeed: 700,
	        autoplay: true,
			responsive:{
				0:{
					mouseDrag: false,
				    touchDrag: false,
				},
		        767:{
		        }
		    },
		});

	  	// add animate.css class(es) to the elements to be animated
	  	function setAnimation ( _elem, _InOut ) {
		    // Store all animationend event name in a string.
		    // cf animate.css documentation
		    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		    _elem.each ( function () {
		      var jQueryelem = jQuery(this);
		      var jQueryanimationType = 'animated ' + jQueryelem.data( 'animation-' + _InOut );

		      jQueryelem.addClass(jQueryanimationType).one(animationEndEvent, function () {
		        jQueryelem.removeClass(jQueryanimationType); // remove animate.css Class at the end of the animations
		      });
		    });
	  	}

		// Fired before current slide change
	  	slide.on('change.owl.carousel', function(event) {
	      	var jQuerycurrentItem = jQuery('.owl-item', slide).eq(event.item.index);
	      	var jQueryelemsToanim = jQuerycurrentItem.find("[data-animation-out]");
	      	setAnimation (jQueryelemsToanim, 'out');
	  	});

		// Fired after current slide has been changed
	  	var round = 0;
	  	slide.on('changed.owl.carousel', function(event) {
	      	var jQuerycurrentItem = jQuery('.owl-item', slide).eq(event.item.index);
	      	var jQueryelemsToanim = jQuerycurrentItem.find("[data-animation-in]");	    
	      	setAnimation (jQueryelemsToanim, 'in');
	  	})
	  
	  	slide.on('translated.owl.carousel', function(event) {	    
	      	if (event.item.index == (event.page.count - 1))  {
		        if (round < 1) {
		          	round++
		        } else {
		          	slide.trigger('stop.owl.autoplay');
		          	var owlData = slide.data('owl.carousel');
		          	owlData.settings.autoplay = false; //don't know if both are necessary
		          	owlData.options.autoplay = false;
		          	slide.trigger('refresh.owl.carousel');
		        }
	      	}
	  	});
	}

	if(jQuery('.news__slider').length > 0){
		jQuery('.news__slider').owlCarousel({
	        loop: true,
	        dots: false,
	        margin: 0,
	        items:1,
	        nav: true,
			mouseDrag: false,
		    touchDrag: false,
		  	autoplaySpeed: 1500,
		  	navSpeed: 1500,
		  	dotsSpeed: 1500,
	        autoplay: true,
		  	dragEndSpeed: 1500,
	        navText: ['<div class="tw-prev"></div>','<div class="tw-next"></div>'],
	    }); 	
	}

	if(jQuery('.countnumber-mobile').length > 0){
		jQuery('.countnumber-mobile').owlCarousel({
	        loop: false,
	        dots: false,
	        margin: 0,
	        items:1,
	        nav: true,
			mouseDrag: false,
		    touchDrag: false,
		  	autoplaySpeed: 1500,
		  	navSpeed: 1500,
		  	dotsSpeed: 1500,
	        autoplay: true,
		  	dragEndSpeed: 1500,
	        navText: ['<div class="fr-prev"></div>','<div class="fr-next"></div>'],	   
			responsive:{
				0:{
		        	items: 1,
					mouseDrag: true,
				    touchDrag: true,
				    loop: true,
				},
		        767:{
		        	items: 1,
		        	loop: false,
		        },
		    },         
	    }); 	
	}

	if(jQuery('.slider-partner').length > 0){
		jQuery('.slider-partner').owlCarousel({
	        loop: true,
	        margin: 45,
	        items: 6,
	        nav: true,
			mouseDrag: false,
		    touchDrag: false,
		  	autoplaySpeed: 3000,
		  	navSpeed: 1500,
		  	dotsSpeed: 1500,
	        autoplay: true,
	        dots: false,
		  	dragEndSpeed: 1500,
	        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],	  
			responsive:{
				0:{
		        	items: 2,
					mouseDrag: true,
				    touchDrag: true,
				},
		        450:{
		        	items: 4,
					mouseDrag: true,
				    touchDrag: true,
		        },
		        767:{
		        	items: 4,
		        },
		        1200:{
		        	items: 6,
		        }
		    },    
	    }); 	
	}


    if (jQuery(".slider-book").length > 0) {
        setupMagazineScroll();
    }
});

function header(){
	var x = 0;
	if(jQuery(this).scrollTop() > 100)
    {  	
	    jQuery('#header').addClass('active');
	    x = jQuery(window).height() - 61;
    }
    else
    {
      	jQuery('#header').removeClass('active');
	    x = jQuery(window).height() - 91;
    }      
	// jQuery('#header-responsive .box-menu .menu-top').height(x - 360);
}


function setupMagazineScroll() {
    // set up magazine scrolling
    var timer = undefined
      , item = $('.slider-book');
    function getTotalSlideItems() {
        var maxToShow = 5;
        var totalSlideItems = item.parents(".container").width() / 240;
        return (totalSlideItems > maxToShow) ? maxToShow : Math.floor(totalSlideItems);
    }
    function resetSlider() {
        clearTimeout(timer);
        timer = setTimeout(displaySlider, 150)
    }
    function displaySlider() {
        var totalSlideItems = getTotalSlideItems();
        // if this already exists, unslick it
        try {
            item.slick("unslick");
        } catch (err) {}
        item.slick({
            dots: false,
            infinite: false,
            speed: 300,
            swipe: true,
            slidesToShow: totalSlideItems,
            slidesToScroll: 1,
            variableWidth: true,
            appendArrows: $(".nav--magazines"),
            prevArrow: '<div class="slick-previous prev_btn slick-arrow"><i class="fa fa-angle-left"></i></div>',
            nextArrow: '<div lass="slick-next next_btn slick-arrow"><i class="fa fa-angle-right"></i></div>',
        });
    }
    $(window).resize(resetSlider);
    displaySlider();
}