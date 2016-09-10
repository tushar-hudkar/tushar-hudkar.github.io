$(window).resize(function() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.anim').height($(window).height());
}else{
    $('.anim').height($(window).height());
}
});
$(window).trigger('resize');
