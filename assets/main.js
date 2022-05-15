function view_menu() {
    
    var menu_width = $('#menu').width() - $('#info').width() - 60;
    //console.warn(menu_width);
    var menu_width_cur = 0;
    $('#menu li').each(function(i) {
        if ($(this).hasClass('toggle')) { 
            menu_width_cur += $(this).width();
            //console.log(menu_width_cur, 'menu_width_cur');
            return;
        }
        $(this).addClass('block');
        menu_width_cur += $(this).children().children().width() + 24 + 2;
        //console.log($(this).children().children().width(), menu_width_cur);
        $(this).removeClass('block');
        //console.log(i);
        
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

function scroll_header() {
    if ($(window).scrollTop() > 150 ) {
        $('nav').addClass('thin');
    } else {
        $('nav').removeClass('thin');
    }
    
}

$(window).resize(function(){
    view_menu();
});

$(window).scroll(function() {
    scroll_header();
});

$(document).ready(function(){
    
    view_menu();
    
    $('.carousel').carousel({
      interval: 10000
    })

    $('#menu li a').click(function(event) {
        var el = $(this).attr('href');
        $('#menu').removeClass('visible-vertical-menu');
        $('html, body').animate({ scrollTop: $(el).offset().top }, 1000, function() {
            
        });
        event.preventDefault();
    });


    $('.phone_ico').click(function() {
        $('.phones').toggleClass('view');
    });
    
    $('.line_block.line_block-header nav .toggle').click(function() {
        $('#menu').toggleClass('visible-vertical-menu');
    });

});
