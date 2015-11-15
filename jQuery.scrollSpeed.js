// Custom scrolling speed with jQuery
(function($) {
    jQuery.scrollSpeed = function(step, speed, easing) {
        var option = easing || 'default',
            root = pageYOffset,
            scroll = false,
            view;
        $(window).on('wheel', function(e) {
            var deltaY = e.originalEvent.wheelDeltaY,
                view = $(window).height();
                if (!scroll){
                	scroll = true;
                	//scroll DOWN
                    if (deltaY < 0)
                    	root = (pageYOffset + step > $(document).height() - view) ? $(document).height() - view : pageYOffset + step;
                    //scroll UP
                    if (deltaY > 0)
                    	root = (pageYOffset - step < 0) ? 0 : pageYOffset - step;
                }else{
                	//On multiple scroll
                	//scroll DOWN
                    if (deltaY < 0)
                    	root = (root + step > $(document).height() - view) ? $(document).height() - view : root + step;
                    //scroll UP
                    if (deltaY > 0)
                    	root = (root - step < 0) ? 0 : root - step;
                }
                $('html, body').stop().animate({
                    scrollTop: root
                }, speed, option, function(){
                	scroll = false;
                });
            return false;
        });       
    };
    jQuery.easing.default = function (x,t,b,c,d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
    
})(jQuery);
