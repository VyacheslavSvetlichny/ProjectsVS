var $page = $('html, body');
$('a[href*="#"]').click(function() {
	if($(this).attr('href')!="#"){
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 170
		}, 400);
		$('.mobile-menu').removeClass('active');
		$('html').css("overflow-y","auto");
    return false;
	}	
});

document.addEventListener( 'wpcf7submit', function( event ) {
	setTimeout(function() {
    $('.wpcf7-response-output').slideToggle('');
  }, 8000);
}, false );


jQuery(document).on('ready', function() {
	
	jQuery('.block-courses .item').click(function(){ //скрытый текст и его появление
		jQuery('.block-services .hidden-courses').css('display','none');
		jQuery('.block-services .hidden-courses[data-id="'+jQuery(this).attr('data-id')+'"]').fadeIn();
			
	});
	
	jQuery('.block-select span').click(function(){ //скрытый текст и его появление
		if(jQuery(this).hasClass("active")){			
			jQuery(this).removeClass("active");		
		}else{			
			jQuery(this).addClass("active");			
		}		
		jQuery(this).siblings('ul').slideToggle("");
	});
	
	
	jQuery('.all-services').click(function(){ //скрытый текст и его появление
		if(jQuery(this).hasClass("active")){
			jQuery(this).text("Скрыть услуги");
			jQuery(this).removeClass("active");			
			jQuery(this).siblings('.items').find('.item').fadeIn("");
		}else{
			$page.animate({
				scrollTop: $('#services').offset().top-170
			}, 400);
			jQuery(this).text("Смотреть все услуги");
			jQuery(this).addClass("active");
			jQuery(this).siblings('.items').find('.item').css("display","");
		}			
	});
		
	$('.open-map').click(function (event) {		 
		$('.block-map').addClass('active');
    });

	$('.open-tab').click(function (event) {
		 if($(this).hasClass("active")){
			$(this).removeClass('active');
        	$(this).siblings('.hide-tab').slideToggle(); 
		 }
		 else{
			$(this).addClass('active');
        	$(this).siblings('.hide-tab').slideToggle(); 
		 }
    });
	
	$('.tab').click(function (event) {
		 if(!$(this).hasClass("active")){
			if($(this).hasClass("sert")){
				$('.tab.active').removeClass('active');
				$(this).addClass('active');				
				$(this).siblings('.content-prog').css('display','none'); 
        		$(this).siblings('.content-sert').slideToggle();  
			}else{
				$('.tab.active').removeClass('active');
				$(this).addClass('active');
				$(this).siblings('.content-sert').css('display','none'); 
        		$(this).siblings('.content-prog').slideToggle(); 
			}
		 }
    });

	jQuery(".block-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:true,
	});
	
	
	jQuery(".slider-otzov").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
		arrows:true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow:2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
	
	
	
});
		
		
jQuery('[data-fancybox]').fancybox({
	buttons : [ 
		'slideShow',
		'zoom',
		'fullScreen',
		'thumbs',
		'close'	  
	],
	keyboard: true,
	arrows: true,
	infobar: true,
	animationEffect: "zoom-in-out",
	animationDuration: 600,
	loop:true,
	transitionEffect:"slide",  
});
		

	
jQuery(document).ready(function(){		

	$('.burger').click(function (event) { 
		 if($('.mobile-menu').hasClass("active")){
			$('.mobile-menu').removeClass('active'); 
			$('html').css("overflow-y","auto");
		 }
		 else{
			$('.mobile-menu').addClass('active');
			$('html').css("overflow-y","hidden");
		 }
    });
	$('.close-mobile-menu').click(function (event) {
		$('.mobile-menu').removeClass('active');
		$('html').css("overflow-y","auto");
	});
	$('.close-shadow').click(function (event) {
		$('.mobile-menu').removeClass('active');
		$('html').css("overflow-y","auto");
	});

	
	
	$(function () {  //фиксированное меню
		$(window).scroll(function(event) {
			if($(this).scrollTop() > 30) {
			$("header").addClass("active");
		}
		else {
			$("header").removeClass("active");
		}
		}); 
	});
});