function initMobileMenu($block) {
    let $hamburger = $block.find('.js-hamburger');
    let $mobile_menu = $block.find('.js-mobile-menu');
    let $mobile_menu_hidden_block = $mobile_menu.find('.js-mobile-menu-hidden-block');
    let $mobile_menu_links = $mobile_menu_hidden_block.find('.js-link');

    $hamburger.on('click touched', function(e) {
        e.preventDefault();

        // открываем/закрываем меню
        if($hamburger.hasClass('is-active')) {
            $hamburger.removeClass('is-active');
            $mobile_menu_hidden_block.slideUp(350);
        }else {
            $hamburger.addClass('is-active');
            $mobile_menu_hidden_block.slideDown(350);
        }
    });

    // закрываем меню при клике на ссылку
    $mobile_menu_links.each(function() {
        $(this).on('click touched', function(e) {
            e.preventDefault();

            $hamburger.removeClass('is-active');
            $mobile_menu_hidden_block.slideUp(350);
        });
    });
}

initMobileMenu($('.js-header'));

