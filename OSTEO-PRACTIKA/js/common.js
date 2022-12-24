$('.select').on('click', '.select__head', function () {
	if ($(this).hasClass('open')) {
		$(this).removeClass('open');
		$(this).next().fadeOut();
	} else {
		$('.select__head').removeClass('open');
		$('.select__list').fadeOut();
		$(this).addClass('open');
		$(this).next().fadeIn();
	}
});

$('.select').on('click', '.select__item', function () {
	$('.select__head').removeClass('open');
	$(this).parent().fadeOut();
	$(this).parent().prev().text($(this).text());
	$(this).parent().prev().prev().val($(this).attr('data-value'));
	$(this).parent().prev().prev().attr('data-price',$(this).attr('data-price'));
	updatePage();
});

$('.program-items').on('click', '.item', function () {
	let contentModal = $(this).children('.hide-content').html();
	$('#modalInfo .modal-body').html('');
	$('#modalInfo .modal-body').html(contentModal);
});

$(document).click(function (e) {
	if (!$(e.target).closest('.select').length) {
		$('.select__head').removeClass('open');
		$('.select__list').fadeOut();
	}
});

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
	
	$('.items-otzov').masonry({
		// options
		itemSelector: '.otzov-item',
		gutter: 30,
		isFitWidth: true,
	});
	
	$(document).on("click", "header .open-search", function() {
		$('#search').addClass('active');
	});
	
	$(document).on("click", "header .close-search", function() {
		$('#search').removeClass('active');
	});
	
	$(document).on("click", ".change-content .radio", function() {
		if($(this).hasClass("active")){			
		}
		else{
			$(".change-content .radio").removeClass('active'); 
			$(this).addClass('active');
			$('.tab-content').css("display","none");
			var attr = $(this).attr('data-content');
			$('.tab-content[data-content="'+attr+'"]').fadeIn();
		}
	 });
	
	$('.change-content .radio:first-of-type').click();
	
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
		 $(this).addClass('active');
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
		$('.burger').removeClass('active');
	});
	$('.close-shadow').click(function (event) {
		$('.mobile-menu').removeClass('active');
		$('html').css("overflow-y","auto");
		$('.burger').removeClass('active');
	});

	if($(this).scrollTop() > 30) {
		$("header").addClass("active");
	}
	
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