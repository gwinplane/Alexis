// $( '.team__positions__item' ).on({
//     'mouseover': function() {
//         $('.team__caption').slideDown();
//     },
//     'mouseout': function() {
//         $('.team__caption').slideUp();
//     }
// });

$('.js-block-item').click(function() {
	$('.js-block').siblings('.js-block').removeClass("active-box").slideUp();
    $('.js-block.' + $(this).attr("id")).addClass("active-box").toggle();
})