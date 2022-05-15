function view_menu() {
    var menu_width = $('.line_block.line_block-header nav ul').width();
    console.warn(menu_width);
    var menu_width_cur = 0;
    $('.line_block.line_block-header nav ul li').each(function(i) {
        menu_width_cur += $(this).width() + 2;
        //console.log(i);
        //console.log($(this).width());
        //console.log(menu_width_cur);
        if ($(this).hasClass('toggle')) return;
        if (menu_width_cur < menu_width) {
            if ($(this).hasClass('menu-item-vertical')) {
                $(this).removeClass('menu-item-vertical');
            }    
        } else {
            if (!$(this).hasClass('menu-item-vertical')) {
                $(this).addClass('menu-item-vertical');
            }
        }
    });    
}


$(window).resize(function(){
    view_menu();
});

$(document).ready(function(){
    
    view_menu();
    
    $('.carousel').carousel({
      interval: 10000
    })

    $('.phone_ico').click(function() {
        $('.phone_number').toggleClass('view');
    });
    
    $('.line_block.line_block-header nav li.toggle').click(function() {
        $(this).parent().toggleClass('visible-vertical-menu');
    });

});
