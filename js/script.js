jQuery(document).ready(function() {
	var width_device = jQuery(window).width();
	jQuery('.dotdotdot').dotdotdot();
	caculationHeight();
	setTimeout(function(){
		jQuery('.dotdotdot').dotdotdot();
	}, 100);
    jQuery(window).resize(function(event) {
		caculationHeight();
    	setTimeout(function(){    
			caculationHeight();
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
	activeMenu();
	jQuery(window).scroll(function(){
		header();
		activeMenu();
	});
	
	if(jQuery('.content-tabs_box').length > 0){
		jQuery('.content-tabs_box').mCustomScrollbar({
			axis: "x",
			horizontalScroll: true,
			advanced:{
				autoExpandHorizontalScroll:true
			}
		});		
	}
	
	if(jQuery('.short__info__scroll').length > 0){
		jQuery('.short__info__scroll').mCustomScrollbar({
			axis: "y",
			theme:"dark"
			// horizontalScroll: true,
			// advanced:{
			// 	autoExpandHorizontalScroll:true
			// }
		});		
	}

	// Search
	// jQuery(document).on('click', '.box__search', function(event) {
	// 	event.preventDefault();
	// 	jQuery(this).parent().find('.form__search').addClass('open');
	// });

	// jQuery(document).on('click', '.form__close', function(event) {
	// 	event.preventDefault();
	// 	jQuery(this).closest('.form__search').removeClass('open');
	// });

	// Menu
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

	if(jQuery(window).width() > 992){	
		jQuery(".content-subsidiaries .box__left img").sticky({ 
			topSpacing: 101,
			bottomSpacing: jQuery('#footer').innerHeight() + 101,
			getWidthFrom: '50'
		});
		jQuery(".content-leaders .box__sidebar__sticky").sticky({ 
			topSpacing: 81,
			bottomSpacing: jQuery('#footer').innerHeight() + jQuery('.content-achievements').innerHeight() + 400,
			getWidthFrom: '50'
		});
	};

	jQuery(window).resize(function(event) {
		jQuery(".content-subsidiaries .box__left img").sticky('update');
		jQuery(".content-leaders .box__sidebar__sticky").sticky('update');

		if(jQuery(window).width() > 992){	
			jQuery(".content-subsidiaries .box__left img").sticky({ 
				topSpacing: 101,
				bottomSpacing: jQuery('#footer').innerHeight() + 101,
				getWidthFrom: '50'
			});

			jQuery(".content-leaders .box__sidebar__sticky").sticky({ 
				topSpacing: 81,
				bottomSpacing: jQuery('#footer').innerHeight() + jQuery('.content-achievements').innerHeight() + 400,
				getWidthFrom: '50'
			});
		} else {
	    	jQuery(".content-subsidiaries .box__left img").unstick();
	    	jQuery(".content-leaders .box__sidebar__sticky").unstick();
		}
	});	

	jQuery(document).on('click', '.box__sidebar__sticky .box__sidebar__menu li', function(event) {
		event.preventDefault();
		/* Act on the event */
		jQuery('.box__sidebar__sticky .box__sidebar__menu li').removeClass('current_page_item');
		jQuery(this).addClass('current_page_item');

		var index = jQuery(this).index();

		var offset = jQuery('section.content-leaders .content_box .box__editor .item:eq('+index+')').offset().top - 60;
        jQuery('html, body').animate({scrollTop: offset}, 1000);
	});

    jQuery(document).on('click', '.menu__close', function(event) {
    	event.preventDefault();
    	window.history.back();
    });

    // Hover Menu
    jQuery(document).on('mouseover', '.content-menus .menu__parent li', function(event) {
    	event.preventDefault();
    	var index = jQuery(this).index();

    	jQuery('.content-menus .menu__parent > li').removeClass('active');
    	jQuery(this).addClass('active');

    	jQuery('.content-menus .menu__child > li').removeClass('active');
    	jQuery('.content-menus .menu__child > li:eq(' + index + ')').addClass('active');

    	jQuery('.content-menus .box__bgs .item').removeClass('active');
    	jQuery('.content-menus .box__bgs .item:eq(' + index + ')').addClass('active');
    });

    // Slice Pra Listing    
    jQuery(".content-pralisting .items .item").slice(0, 4).show();
	jQuery(document).on('click', '.content-pralisting .box__pralisting__more', function(event) {
		event.preventDefault();
        jQuery(".content-pralisting .items .item:hidden").slice(0, 4).slideDown();
        if (jQuery(".content-pralisting .items .item:hidden").length == 0) {
            jQuery(this).fadeOut('slow');
        }
        jQuery('html,body').animate({
            scrollTop: jQuery(this).offset().top - 150
        }, 1500);
    });


    // Slice News
    jQuery(".content__news.content__news__style1 .item").slice(0, 8).show();
	jQuery(document).on('click', '.content__news.content__news__style1 .box__news__more', function(event) {
		event.preventDefault();
        jQuery(".content__news.content__news__style1 .item:hidden").slice(0, 4).slideDown();
        if (jQuery(".content__news.content__news__style1 .item:hidden").length == 0) {
            jQuery(this).fadeOut('slow');
        }
        jQuery('html,body').animate({
            scrollTop: jQuery(this).offset().top - 150
        }, 1500);
    });

    jQuery(".content__news.content__news__style2 .item").slice(0, 5).show();
	jQuery(document).on('click', '.content__news.content__news__style2 .box__news__more', function(event) {
		event.preventDefault();
        jQuery(".content__news.content__news__style2 .item:hidden").slice(0, 3).slideDown();
        if (jQuery(".content__news.content__news__style2 .item:hidden").length == 0) {
            jQuery(this).fadeOut('slow');
        }
        jQuery('html,body').animate({
            scrollTop: jQuery(this).offset().top - 90
        }, 1500);
    });

    jQuery(".content__news.content__news__style3 .item").slice(0, 12).show();
	jQuery(document).on('click', '.content__news.content__news__style3 .box__news__more', function(event) {
		event.preventDefault();
        jQuery(".content__news.content__news__style3 .item:hidden").slice(0, 3).slideDown();
        if (jQuery(".content__news.content__news__style3 .item:hidden").length == 0) {
            jQuery(this).fadeOut('slow');
        }
        jQuery('html,body').animate({
            scrollTop: jQuery(this).offset().top - 90
        }, 1500);
    });

    jQuery(".content__news.content__news__media .items__col__2 .item").slice(0, 3).show();
	jQuery(document).on('click', '.content__news.content__news__media .items__col__2 .box__news__more', function(event) {
		event.preventDefault();
        jQuery(".content__news.content__news__media .items__col__2 .item:hidden").slice(0, 2).slideDown();
        if (jQuery(".content__news.content__news__media .items__col__2 .item:hidden").length == 0) {
            jQuery(this).fadeOut('slow');
        }
        jQuery('html,body').animate({
            scrollTop: jQuery(this).offset().top - 150
        }, 1500);
    });

    jQuery("[data-fancybox]").fancybox({});

    if(jQuery('.countnumber').length > 0){
	  	var a = 0;
	  	var oTop = jQuery('.countnumber').offset().top - window.innerHeight;

	  	if (a == 0 && jQuery(window).scrollTop() > (oTop + 120)) {	  		
	  
		  	jQuery({ countNum: jQuery('.countnumber > li:eq(0) .circle span').text()}).animate({
		    	countNum: jQuery('.countnumber > li:eq(0)').attr('data-count')
		  	} , {
			    duration: 2000,
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
			    duration: 2000,
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
			    duration: 2000,
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
			    duration: 2000,
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
			    duration: 2000,
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
			    duration: 2000,
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
			    duration: 2000,
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
			    duration: 2000,
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
			    duration: 2000,
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
		    nav: true,
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
	        navText: ['<div class="tw-prev"></div>','<div class="tw-next"></div>'],
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

	if(jQuery('.pramore__slider__desktop').length > 0){
		jQuery('.pramore__slider__desktop').owlCarousel({
	        loop: true,
	        dots: false,
	        margin: 10,
	        items:1,
	        nav: true,
			mouseDrag: false,
		    touchDrag: false,
		  	autoplaySpeed: 1500,
		  	navSpeed: 1500,
		  	dotsSpeed: 1500,
	        autoplay: true,
		  	dragEndSpeed: 1500,
	        navText: ['<div class="tw-prev"><i class="fa fa-angle-left"></i></div>','<div class="tw-next"><i class="fa fa-angle-right"></i></div>'],
		    onInitialized: setOwlStageHeight,
		    onResized: setOwlStageHeight,
		    onTranslated: setOwlStageHeight,  
			responsive:{
				0:{
		        	onInitialized: setOwlStageHeight,
				    onResized: setOwlStageHeight,
				    onTranslated: setOwlStageHeight,  
				},
		        450:{
		        	onInitialized: setOwlStageHeight,
				    onResized: setOwlStageHeight,
				    onTranslated: setOwlStageHeight,  
		        },
		        767:{
		        	onInitialized: setOwlStageHeight,
				    onResized: setOwlStageHeight,
				    onTranslated: setOwlStageHeight,  
		        },
		        1200:{
		        	onInitialized: setOwlStageHeight,
				    onResized: setOwlStageHeight,
				    onTranslated: setOwlStageHeight,  
		        }
		    },    
	    }); 
	    function setOwlStageHeight(event) {
		    var maxHeight = 0;
		    jQuery('.pramore__slider__desktop .owl-item').each(function () { // LOOP THROUGH ACTIVE ITEMS
		        var thisHeight = parseInt( jQuery(this).height() );
		        maxHeight=(maxHeight>=thisHeight?maxHeight:thisHeight);
		    });
		    jQuery('.pramore__slider__desktop .owl-item').css('height', maxHeight);
		}		
	}

	if(jQuery('.pramore__slider__mobile').length > 0){
		jQuery('.pramore__slider__mobile').owlCarousel({
	        loop: true,
	        dots: false,
	        margin: 10,
	        items:1,
	        nav: true,
			mouseDrag: false,
		    touchDrag: false,
		  	autoplaySpeed: 1500,
		  	navSpeed: 1500,
		  	dotsSpeed: 1500,
	        autoplay: true,
		  	dragEndSpeed: 1500,
	        navText: ['<div class="tw-prev"><i class="fa fa-angle-left"></i></div>','<div class="tw-next"><i class="fa fa-angle-right"></i></div>'],
		    onInitialized: setOwlStageHeight,
		    onResized: setOwlStageHeight,
		    onTranslated: setOwlStageHeight,  
			responsive:{
				0:{
		        	onInitialized: setOwlStageHeight,
				    onResized: setOwlStageHeight,
				    onTranslated: setOwlStageHeight,  
				},
		        450:{
		        	onInitialized: setOwlStageHeight,
				    onResized: setOwlStageHeight,
				    onTranslated: setOwlStageHeight,  
		        },
		        767:{
		        	onInitialized: setOwlStageHeight,
				    onResized: setOwlStageHeight,
				    onTranslated: setOwlStageHeight,  
		        },
		        1200:{
		        	onInitialized: setOwlStageHeight,
				    onResized: setOwlStageHeight,
				    onTranslated: setOwlStageHeight,  
		        }
		    },    
	    }); 
	    function setOwlStageHeight(event) {
		    var maxHeight = 0;
		    jQuery('.pramore__slider__mobile .owl-item').each(function () { // LOOP THROUGH ACTIVE ITEMS
		        var thisHeight = parseInt( jQuery(this).height() );
		        maxHeight=(maxHeight>=thisHeight?maxHeight:thisHeight);
		    });
		    jQuery('.pramore__slider__mobile .owl-item').css('height', maxHeight);
		}		
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

	if(jQuery('.short__slider').length > 0){
		jQuery('.short__slider').owlCarousel({
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
	        navText: ['<div class="tw__prev"><i class="fa fa-angle-left"></i></div>','<div class="tw__next"><i class="fa fa-angle-right"></i></div>'],
	    }); 	
	}

	if(jQuery('.gallery__slider').length > 0){
		jQuery('.gallery__slider').owlCarousel({
	        loop: true,
	        dots: false,
	        margin: 15,
	        nav: true,
	        items: 3,
			mouseDrag: true,
		    touchDrag: true,
		  	autoplaySpeed: 1500,
		  	navSpeed: 1500,
		  	dotsSpeed: 1500,
	        autoplay: true,
	        // center: true,
		  	dragEndSpeed: 1500,
		  	// autoWidth:true,
	        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],  
			responsive:{
				0:{
		        	items: 1,
					mouseDrag: true,
				    touchDrag: true,
				},
		        767:{
		        	items: 2,
		        },
		        1200:{
		        	items: 3,
		        }
		    },  
	    }); 	
	}

	if(jQuery('.tab__scroll__slider .tab__slider').length > 0){
		jQuery('.tab__scroll__slider .tab__slider').owlCarousel({
	        loop: false,
	        dots: false,
	        margin: 0,
	        nav: true,
			mouseDrag: false,
		    touchDrag: false,
		  	navSpeed: 1500,
		  	dotsSpeed: 1500,
		  	dragEndSpeed: 1500,
	        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
		        	items: 2,
				},
		        450:{
		        	items: 4,
		        },
		        767:{
		        	items: 6,
		        },
		        1200:{
		        	items: 9,
		        }
		    },    
	    }); 	
	    jQuery('.tab__scroll__slider .tab__slider .owl-item.active:eq(0) .item').addClass('active');

	    jQuery(document).on('click', '.tab__scroll__slider .tab__slider .item', function() {
	    	jQuery('.tab__scroll__slider .tab__slider .item').removeClass('active');
	    	jQuery(this).addClass('active');
	    });
	}

	if(jQuery('.slider__achievements').length > 0){
		jQuery('.slider__achievements').owlCarousel({
	        loop: true,
	        dots: false,
	        margin: 11,
	        nav: true,
			mouseDrag: true,
		    touchDrag: true,
		  	autoplaySpeed: 1500,
		  	navSpeed: 1500,
		  	dotsSpeed: 1500,
	        autoplay: true,
		  	dragEndSpeed: 1500,
	        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],  
			responsive:{
				0:{
		        	items: 2,
					mouseDrag: true,
				    touchDrag: true,
				},
		        450:{
		        	items: 3,
					mouseDrag: true,
				    touchDrag: true,
		        },
		        767:{
		        	items: 4,
		        },
		        1200:{
		        	items: 5,
		        }
		    },    
	    }); 	
	}

	if(jQuery('.content-grid2-slider.style__1 .sliders__grid2').length > 0){
		jQuery('.content-grid2-slider.style__1 .sliders__grid2').owlCarousel({
	        loop: false,
	        dots: false,
	        margin: 30,
	        autoWidth:true,
	        nav: true,
			mouseDrag: false,
		    touchDrag: false,
		  	autoplaySpeed: 5000,
		  	navSpeed: 1500,
		  	dotsSpeed: 1500,
	        autoplay: true,
		  	dragEndSpeed: 1500,
		  	autoHeight: false,
	        navText: ['<div class="tw-prev"></div>','<div class="tw-next"></div>'],
		    onInitialized: setOwlStageHeight,
		    onResized: setOwlStageHeight,
		    onTranslated: setOwlStageHeight
	    }); 
	    function setOwlStageHeight(event) {
		    var maxHeight = 0;
		    jQuery('.content-grid2-slider.style__1 .sliders__grid2 .owl-item.active').each(function () { // LOOP THROUGH ACTIVE ITEMS
		        var thisHeight = parseInt( jQuery(this).height() );
		        maxHeight=(maxHeight>=thisHeight?maxHeight:thisHeight);
		    });
		    jQuery('.content-grid2-slider.style__1 .sliders__grid2 .owl-item .item__caption').css('height', (maxHeight - 225) );
		}	
	}

	if(jQuery('.content-grid2-slider.style__2 .sliders__grid2').length > 0){
		jQuery('.content-grid2-slider.style__2 .sliders__grid2').owlCarousel({
	        loop: false,
	        dots: false,
	        margin: 30,
	        autoWidth:true,
	        nav: true,
			mouseDrag: false,
		    touchDrag: false,
		  	autoplaySpeed: 5000,
		  	navSpeed: 1500,
		  	dotsSpeed: 1500,
	        autoplay: true,
		  	dragEndSpeed: 1500,
		  	rtl: true,
		  	autoHeight: false,
	        navText: ['<div class="tw-prev"></div>','<div class="tw-next"></div>'],
		    onInitialized: setOwlStageHeight,
		    onResized: setOwlStageHeight,
		    onTranslated: setOwlStageHeight
	    }); 
	    function setOwlStageHeight(event) {
		    var maxHeight = 0;
		    jQuery('.content-grid2-slider.style__2 .sliders__grid2 .owl-item.active').each(function () { // LOOP THROUGH ACTIVE ITEMS
		        var thisHeight = parseInt( jQuery(this).height() );
		        maxHeight=(maxHeight>=thisHeight?maxHeight:thisHeight);
		    });
		    jQuery('.content-grid2-slider.style__2 .sliders__grid2 .owl-item .item__caption').css('height', (maxHeight - 225) );
		}	
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

// Magazine
    if (jQuery(".slider-book").length > 0) {
        setupMagazineScroll();
    }

    jQuery('.content-news-style2 .item__left').slick({
	  	asNavFor: '.content-news-style2 .item__right, .content-news-style2 .item__information',
		prevArrow: '<div class="tw__prev"><i class="fa fa-angle-left"></i></div>',
	    nextArrow: '<div class="tw__next"><i class="fa fa-angle-right"></i></div>',
		speed: 1000,
		// centerMode: true,
		infinite: true,
	    autoplay: false,
	    slidesToShow: 1,
	    initialSlide: 1,
	  	arrows: false,
	  	responsive: [
	    {
	      breakpoint: 450,
	      settings: {
	  		arrows: true,
	      }
	    }
	    ]
	});
	jQuery('.content-news-style2 .item__right').slick({
	  	asNavFor: '.content-news-style2 .item__left, .content-news-style2 .item__information',
		prevArrow: '<div class="tw__prev"><i class="fa fa-angle-left"></i></div>',
	    nextArrow: '<div class="tw__next"><i class="fa fa-angle-right"></i></div>',
	    fade: true,
	    swipe: false,
	    autoplay: false,
		autoplaySpeed: 5000,
		speed: 1000,
	    initialSlide: 1,
	});
	jQuery('.content-news-style2 .item__information').slick({
	  	asNavFor: '.content-news-style2 .item__left, .content-news-style2 .item__right',
	    fade: true,
		// cssEase: 'linear',
	    swipe: false,
	    autoplay: false,
		autoplaySpeed: 5000,
		speed: 1000,
		arrows: false,
	    initialSlide: 1,
	});

// Timeline slider
    jQuery('.slider__timeline').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var count = jQuery('.slider__timeline .item').length;
		jQuery('.box__timeline__progress .timeline__progress__cursor').css('transform','translateX(calc((100% / '+ count +') * '+nextSlide+')');
    });
	jQuery('.slider__years').slick({
	  	dots: false,
	  	infinite: false,
    	slidesToShow: 1,
    	speed: 500,
    	fade: true,
    	swipe: false,
		cssEase: 'linear',
		asNavFor: '.slider__timeline, .slider__paragraph',
	});
	jQuery('.slider__paragraph').slick({
	  	dots: false,
	  	infinite: false,
    	slidesToShow: 1,
    	speed: 900,
    	fade: true, 	
    	swipe: false,
		asNavFor: '.slider__timeline, .slider__years',
	});
	jQuery('.slider__timeline').slick({
	  	asNavFor: '.slider__years, .slider__paragraph',
	  	dots: false,
	  	infinite: false,
	  	speed: 300,
	  	centerMode: true,
    	slidesToShow: 5,
    	prevArrow: jQuery('.timeline__nav__prev'),
	    nextArrow: jQuery('.timeline__nav__next'),
	  	responsive: [
	    {
	      breakpoint: 1320,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
	});

	jQuery(document).on('click', '.slider__timeline .item', function(event) {
		event.preventDefault();
	   	jQuery('.slider__timeline').slick('slickGoTo', jQuery(this).index());
	});


	// Cache selectors
	var lastId,
	    topMenu = jQuery(".content__information__tabs ul"),
	    topMenuHeight = 60,
	    // All list items
	    menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
		    var item = jQuery(jQuery(this).attr("href"));
		    if (item.length) { return item; }
	    });

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = jQuery(this).attr("href"),
	      offsetTop = href === "#" ? 0 : jQuery(href).offset().top-130+1;
	  jQuery('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 300);
	  e.preventDefault();
	});

	// Bind to scroll
	jQuery(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = jQuery(this).scrollTop()+130;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if (jQuery(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href='#"+id+"']").parent().addClass("active");
	   }                   
	});
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
      , item = jQuery('.slider-book');
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
            appendArrows: jQuery(".nav--magazines"),
            prevArrow: '<div class="slick-previous prev_btn slick-arrow"><i class="fa fa-angle-left"></i></div>',
            nextArrow: '<div lass="slick-next next_btn slick-arrow"><i class="fa fa-angle-right"></i></div>',
        });
    }
    jQuery(window).resize(resetSlider);
    displaySlider();
}

function caculationHeight() {
	var heightNews = 0;

	jQuery('.box__social .item').height('auto');
	for (var i = 0; i < jQuery('.box__social .item').length; i++) {
		if (jQuery('.box__social .item:eq(' + i + ')').height() > heightNews){
			heightNews = jQuery('.box__social .item:eq(' + i + ')').height();
		}		
	}
	jQuery('.box__social .item').height(heightNews);	
	jQuery('.box__social .item__main').height(heightNews);	
}

function activeMenu() {
	var Scroll = jQuery(window).scrollTop() + 1;
	var current = 0;
	for (var i = 0; i < jQuery('section.content-leaders .content_box .box__editor .item').length; i++) {
		if (Scroll >= jQuery('section.content-leaders .content_box .box__editor .item:eq('+i+')').offset().top - 60){
			if (current < jQuery('section.content-leaders .content_box .box__editor .item:eq('+i+')').offset().top - 60) {
				current = jQuery('section.content-leaders .content_box .box__editor .item:eq('+i+')').offset().top - 60;
				jQuery('section.content-leaders .content_box .box__sidebar .box__sidebar__menu li').removeClass('current_page_item');
				jQuery('section.content-leaders .content_box .box__sidebar .box__sidebar__menu li:eq('+i+')').addClass('current_page_item');
			}		
		}
	}
}