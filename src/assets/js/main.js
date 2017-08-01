(function($){

	'use strict';

	/*------------------------------------------
	GLOBAL VARIABLES
	------------------------------------------*/

	/* Window Object and variables */
	var $window = $(window),
		$document = $(document),
		_windowH = $window.height(),
		_windowW = $window.width(),
		_windowST = $window.scrollTop();

	/* Global objects */
	var $html = $('html'),
		$body = $('body');

	/* Update global variables when window is resized */
	$window.on('load resize', function() {
		_windowH = $window.height();
		_windowW = $window.width();
		_windowST = $window.scrollTop();
	});

	/* Update scrollTop on window scroll */
	$window.on('scroll', function() {
		_windowST = $window.scrollTop();
	});

	/* Functions that needs to run when window is resized */
	$(window).on('resize', function() {

		headerHolder(); // Create header holder

		// mobileNavScrollbar(); // Enable Scroll For Mobile Nav
	});

	/********************************************
	----------- Initializing Functions
	********************************************/
	$(document).on('ready', function() {

		headerHolder(); // Create header holder

		stickyNav(); // Enable Sticky Nav

		blogpostsSlider(); // Blog Post Slider

		blogGrdiLayout(); // Blog Post Grid Layout

		headerSearchForm(); // Top Header Search Form

		sideheader(); // Sideheader Custom Scrollbar

		mobileNav(); // Mobile Nav Trigger

    mobileTopNav(); // Top Nav Trigger

		// mobileNavScrollbar(); // Enable Scroll For Mobile Nav

		blogTabs(); // Blog Tabs

		subscribeForm(); // Subscribe Form

		messageBox(); // Message Box Close Button

		imageSlider(); // Enable Image Slider

    productPreview(); // product preview

    enableAjaxLoadMore() // Enable Ajax

    qtyStepper();

    initTabs();

	});


	/********************************************
	----------- Defining Functions
	********************************************/

	function headerHolder() {
		var mainHeader = $('#main-header'),
			mainNav = $('.main-nav');

		if (_windowW <= 991 && !$('.header-holder').length) {

			$window.on('scroll', function() {
				if (_windowST >= mainHeader.offset().top) {
					mainHeader.addClass('sticky')
				} else {
					mainHeader.removeClass('sticky')
				};
			});
		};

	};

	function stickyNav() {
		var stickyNavOn = $('body.sticky-nav-on'),
			stickyNav = $('.sticky-nav.enable'),
			topNavWrapper = $('.top-nav-wrapper'),
			mainHeader = $('#main-header'),
			headerOffset = mainHeader.offset().top + mainHeader.outerHeight();

		if (stickyNavOn.length) {
			topNavWrapper.find('.nav-trigger').clone().insertBefore(stickyNav.find('.logo-container'));
			$('#main-header').find('.main-nav-items').clone().insertAfter(stickyNav.find('.logo-container'));
			topNavWrapper.find('.search-container').clone().insertAfter(stickyNav.find('.main-nav-items'));
		};

		$window.on('scroll', function() {
			if (_windowST >= headerOffset) {
				stickyNav.addClass('sticky-nav-showing')
			} else {
				stickyNav.removeClass('sticky-nav-showing')
			}
		});
	};

	function blogpostsSlider() {
    var el        = $('.blog-post-slider');
    var attrSpeed = el.data('speed');
    var attrNav   = el.data('show-nav');

		if (el.length) {
			el.imagesLoaded(function(){
				el.slick({
          arrows: attrNav,
          autoplaySpeed: attrSpeed,
          autoplay:false,
          mobileFirst: true
        });
			});
		};
	};

	function blogGrdiLayout() {

		var blogPostGrid = $('.contents-inner.grid-view');

		blogPostGrid.imagesLoaded(function() {
			blogPostGrid.find('.blog-post').not('.slick-slide').matchHeight();
		});
	};

  function productPreview() {
    var previewArea = $('.preview-area').find('.image-container'),
      thumbsArea = $('.thumbs-area').find('.image-container');

    previewArea.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: thumbsArea
    });
    thumbsArea.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: previewArea,
      dots: false,
      centerMode: false,
      focusOnSelect: true
    });
  };

	function headerSearchForm() {

		var el = $('.search-container'),
			trigger = el.find('.trigger');

		trigger.on('click', function(event) {
			event.preventDefault();
			$(this).parents('.search-container').toggleClass('form-is-showing');

			setTimeout(function (){
				$(this).siblings('form').find('input[type=search]').focus();
			}, 300);
		});
		$(document).on('click', function(e) {
			if (!el.is(e.target) && el.has(e.target).length == 0 && el.hasClass('form-is-showing')) {
				el.removeClass('form-is-showing');
			};
		});
	};

	function sideheader() {
		var sideheader = $('#sideheader'),
			navTrigger = $('.nav-trigger'),
			$body = $('body'),
			closeBtn = $('.sideheader-close-btn');
		if (sideheader.length) {
			sideheader.perfectScrollbar();

			navTrigger.on('click', function(event) {
				event.preventDefault();
				$body.addClass('sideheader-is-visible');
			});

			closeBtn.on('click', function(event) {
				event.preventDefault();
				$body.removeClass('sideheader-is-visible');
			});

			$(document).on('click', function(e) {
				if (!sideheader.is(e.target) &&
					sideheader.has(e.target).length == 0 &&
					!navTrigger.is(e.target) &&
					navTrigger.has(e.target).length == 0 ) {
					$body.removeClass('sideheader-is-visible');
				};
			});
		};
	};

	function mobileNav() {

		var trigger = $('.mobile-nav-trigger'),
			mainNavitems = $('.main-nav').find('.main-nav-items');

		trigger.on('click', function(event) {
			event.preventDefault();
			mainNavitems.slideToggle(300);
		});

		mainNavitems.find('a').on('click', function(event) {
			var subMenu = $(this).siblings('ul');

			if (subMenu.length) {
				event.preventDefault();
				event.stopPropagation();
				subMenu.slideToggle(300);
			};
		});
	};

  function mobileTopNav() {
    var trigger = $('.top-nav-trigger'),
      mainNavitems = $('.top-menu').find('.top-nav');

    trigger.on('click', function(event) {
      event.preventDefault();
      mainNavitems.slideToggle(300);
    });

    mainNavitems.find('a').on('click', function(event) {
      var subMenu = $(this).siblings('ul');

      if (subMenu.length) {
        event.preventDefault();
        event.stopPropagation();
        subMenu.slideToggle(300);
      };
    });
  }

	function mobileNavScrollbar() {

		var	mainNavitems = $('.main-nav').find('.main-nav-items');

		if (_windowW <= 991) {
			mainNavitems.perfectScrollbar();
		} else {
			mainNavitems.perfectScrollbar('destroy');
		};
	};

	function blogTabs() {

		var tabLinks = $('.blog-tabs').find('a');

		tabLinks.on('click', function(event) {
			var $this = $(this);
			event.preventDefault();
			$this.addClass('active')
			.siblings('a').removeClass('active');

			$($this.attr('href')).fadeIn(300).siblings('.tab-contents').fadeOut(300);
		});
	};

  function qtyStepper() {

    if (typeof $.fn.number != 'function') {
      return;
    }

    if ( $('input[type=number]').length ) {
      $('input[type=number]').number();
    };
  }

  function initTabs(){

    function Plugin(t){return this.each(function(){var e=jQuery(this),n=e.data("bs.tab");n||e.data("bs.tab",n=new Tab(this)),"string"==typeof t&&n[t]()})}function transitionEnd(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}var Tab=function(t){this.element=jQuery(t)};Tab.VERSION="3.3.5",Tab.TRANSITION_DURATION=600,Tab.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),n=t.data("target");if(n||(n=t.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*jQuery)/,"")),!t.parent("li").hasClass("active")){var a=e.find(".active:last a"),i=jQuery.Event("hide.bs.tab",{relatedTarget:t[0]}),r=jQuery.Event("show.bs.tab",{relatedTarget:a[0]});if(a.trigger(i),t.trigger(r),!r.isDefaultPrevented()&&!i.isDefaultPrevented()){var o=jQuery(n);this.activate(t.closest("li"),e),this.activate(o,o.parent(),function(){a.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:a[0]})})}}},Tab.prototype.activate=function(t,e,n){function a(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var i=e.find("> .active"),r=n&&jQuery.support.transition&&(i.length&&i.hasClass("fade")||!!e.find("> .fade").length);i.length&&r?i.one("bsTransitionEnd",a).emulateTransitionEnd(Tab.TRANSITION_DURATION):a(),i.removeClass("in")};var old=jQuery.fn.tab;jQuery.fn.tab=Plugin,jQuery.fn.tab.Constructor=Tab,jQuery.fn.tab.noConflict=function(){return jQuery.fn.tab=old,this};var clickHandler=function(t){t.preventDefault(),Plugin.call(jQuery(this),"show")};jQuery(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',clickHandler).on("click.bs.tab.data-api",'[data-toggle="pill"]',clickHandler),jQuery.fn.emulateTransitionEnd=function(t){var e=!1,n=this;jQuery(this).one("bsTransitionEnd",function(){e=!0});var a=function(){e||jQuery(n).trigger(jQuery.support.transition.end)};return setTimeout(a,t),this},jQuery(function(){jQuery.support.transition=transitionEnd(),jQuery.support.transition&&(jQuery.event.special.bsTransitionEnd={bindType:jQuery.support.transition.end,delegateType:jQuery.support.transition.end,handle:function(t){return jQuery(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})}),jQuery(".tab-nav").find("li").find("a").on("click",function(t){t.preventDefault(),t.stopPropagation(),jQuery(this).tab("show")});
  }


	function subscribeForm() {

		function loading() {
		  $('.subscribe-form-result').html('Submitting...').slideDown();
		};
		function formResult(data) {
		  $('.subscribe-form-result').html(data);
		  $('.subscribe-form .subscribe-email').val('');
		};
		function onSubmit() {
		  $('.subscribe-form').submit(function() {
		      var action = $(this).attr('action');
		      loading();
		      $.ajax({
		          url: action,
		          type: 'POST',
		          data: {
		          email: $(this).find('.subscribe-email').val()
		      },
		      success: function(data){
		          formResult(data);
		      },
		      error: function(data) {
		          formResult(data);
		      }
		  });
		  return false;
		});
		}onSubmit();
	};

	function messageBox() {

		var mb = $('.top-message'),
			closeBtn = mb.find('.close-btn');

		closeBtn.on('click', function(event) {
			event.preventDefault();
			$(this).closest('.top-message').slideUp(300);
		});
	};

	function imageSlider() {
		var el = $('.image-slider');

		if (el.length) {
			el.imagesLoaded(function(){
				el.slick();
			});
		};
	};

    // Enable AJAX Load More
  function enableAjaxLoadMore(){
    initAjaxLoadMore();
  }

  // Initializes Ajax Load More
  function initAjaxLoadMore(){

    // Blog Ajaxfy
    blogAjaxfy({
      button: '#blog-load-more',
      postWrapper: '.latest-post-container',
      postItem: '.article-single' // blog-post-wrapper
    });

    blogAjaxfy({
      button: '#blog-popular-load-more',
      postWrapper: '.popular-post-container',
      postItem: '.blog-post-wrapper'
    });

  }

  function blogAjaxfy(args){
    var ajaxButton = args.button,
      postWrapper = args.postWrapper,
      postItem    = args.postItem;

    $(ajaxButton).click(function(e){

      e.preventDefault();

      // Variables
      var element = $(this),
        target         = element.attr('href'),
        loadingTextOrg = element.html(),
        loadingText    = element.data('loading-text'),
        $postWrapper   = $(postWrapper);

      // Loading Text
      element.html(loadingText);

      // Run AJAX
      $.ajax({
        type: 'GET',
        url: target,
        success: function(data, textStatus, XMLHttpRequest) {

          // Store New Data
          var newPostItems = $(data).find(postWrapper + ' ' + postItem),
            nextPageUrl = $(data).find(ajaxButton).attr('href');

          // Update Load More Button Href
          if (nextPageUrl) element.attr('href', nextPageUrl);
          else element.parent().slideUp();

          // Add New Items
          $('.blog-post-slider').slick('unslick');
          newPostItems.imagesLoaded(function(){
            $postWrapper.append(newPostItems);
            $('.blog-post-slider').slick();
            blogGrdiLayout();
          });
          //blogpostsSlider();

        },
        complete: function() {
          element.html(loadingTextOrg).removeClass('spinner');
          $postWrapper.addClass('pagination-executed');

        },
        error: function(MLHttpRequest, textStatus, errorThrown){
          alert(errorThrown);
        }
      });

    });
  }

})(jQuery);
