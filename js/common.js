$(function() {

    // Masonry

    var menuTabs = $('.masonry-container');

    for (var i = 0; i < menuTabs.length; i++) {
        $(menuTabs[i]).masonry({
            itemSelector: '.item-masonry',
            columnWidth: '.sizer',
            // percentPosition: true,
            gutter: 30
        }).resize();
    }

    // Tabs

    $('#menu-tabs li').click(function(){
        var thisClass = this.className.slice(0,2);

        $('div.t1').hide();
        $('div.t2').hide();
        $('div.t3').hide();
        $('div.t4').hide();
        $('div.t5').hide();
        $('div.' + thisClass).fadeIn(500);
        $('#menu-tabs li').removeClass('active');

        $(this).addClass('active');

        return false;
    });
    $('li.t1').click();


    // Scroll up the page

    $(window).scroll(function(){
        if ($(this).scrollTop() > 150) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    $('.scroll-up').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });


    // Sticky header

    if (window.screen.width >= 768) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1) {
                $('header').addClass("sticky");
            } else {
                $('header').removeClass("sticky");
            }
        });
    }


    // Mobile-menu accordion

    $('.accordion-menu').click(function (e) {
        e.preventDefault();
        var currentOption = $(this);

        var parentLi = currentOption.parent();

        parentLi.children('.accordion-menu-list').slideToggle(300);
        if (currentOption.hasClass('active-color')) {
            currentOption.removeClass('active-color');
        } else {
            currentOption.addClass('active-color');
        }

    });

});



