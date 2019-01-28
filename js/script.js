// $( '.team__positions__item' ).on({
//     'mouseover': function() {
//         $('.team__caption').slideDown();
//     },
//     'mouseout': function() {
//         $('.team__caption').slideUp();
//     }
// });

$(function(){
	$('.burger__trigger, .header__wrap__nav__list').click(function(){
		$('.header__wrap__nav__list').toggleClass('header__wrap__nav__list_opened');
	})
	$(document).click(function(event){
		if ($(event.target).closest('.burger__trigger').length) return;
		$('.header__wrap__nav__list').removeClass('header__wrap__nav__list_opened');
		event.spopPropagation();
	})

})

$('.js-block').first().addClass("active-box").slideDown();

$('.js-block-item').click(function() {
	$('.js-block').siblings('.js-block').removeClass("active-box").slideUp();
    $('.js-block.' + $(this).attr("id")).addClass("active-box").toggle();
})

/*$(document).ready(function(){
  $('.test__click').slick({
    setting-name: setting-value
  });
});*/

$('.test__click').slick({
	dots: true,
	arrows: false,
});