function initAnchors($block) {
    
    $block.find('.js-anchors').each(function() {
        var $anchors_wrapper = $(this);
        var $anchor = $anchors_wrapper.find('.js-anchor');
        var $anchor_object = $('.js-anchor-object');

        $anchor.each(function () {
            // при клике скроллим до нужного блока
            $(this).on('click', function (e) {
                e.preventDefault();

                if($(window).innerWidth() >= 992) {
                    $('body,html').animate({ scrollTop: $anchor_object.filter('[data-anchor-object="' + $(this).attr('data-anchor') + '"]').offset().top }, 1000);
                }else {
                    $('body,html').animate({ scrollTop: $anchor_object.filter('[data-anchor-object="' + $(this).attr('data-anchor') + '"]').offset().top - $('.js-mobile-menu-hidden-block').innerHeight() }, 1000);
                }
            });
        });
    });
    
}


initAnchors($(document));