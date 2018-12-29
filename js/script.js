$( '#team__positions__item-found' ).on({
    'mouseover': function() {
        $('#team__caption').slideDown();
    },
    'mouseout': function() {
        $('#team__caption').slideUp();
    }
});