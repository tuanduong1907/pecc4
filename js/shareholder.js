var heightMenu = 120;

$('.wrapMenuShareholder .btnScroll').on('click', function() {
    $('.wrapMenuShareholder .btnScroll').removeClass('active');

    $(this).addClass('active');

    var elementScroll = $(this).attr('data-scroll');

    if($(elementScroll).length) {
        var positionElement = $(elementScroll)[0].offsetTop - heightMenu + 1;
    
        $('html, body').animate({
            scrollTop: positionElement
        }, 1000);
    }
});

// fix menu doc
function activeMenuDoc() {
    var heightFixed = 335;

    if($('body').scrollTop() >= heightFixed) $('body').addClass('fixMenuDoc');
    else $('body').removeClass('fixMenuDoc');

    $('.wrapMenuShareholder .btnScroll').each(function() {
        var elementScroll = $(this).attr('data-scroll');

        if($(elementScroll).length) {
            var positionTop =  $(elementScroll)[0].offsetTop - heightMenu;

            var positionBottom =  $(elementScroll)[0].offsetTop + $(elementScroll).outerHeight() - heightMenu;
    
            if($('body').scrollTop() > positionTop && $('body').scrollTop() < positionBottom) $(this).addClass('active');
            else $(this).removeClass('active');
        }
    });
}
// end fix menu doc

$('.btnDropDownYear').on('click', function() {
    $(this).toggleClass('active');
    $(this).find('.listYear').slideToggle();
});

$('body, html').on('click', function(e){
    var target = $(e.target);
    if(
        e.type == "focusin" ||
        target.closest(this.element).length ||
        target.closest(this.container).length ||
        target.closest('.btnDropDownYear').length
    ) return;

    if($('.btnDropDownYear').hasClass('active')){
        $('.btnDropDownYear').removeClass('active');
        $('.btnDropDownYear').find('.listYear').slideUp();
    }
});

$(window).load(function() {
    activeMenuDoc();
});

$(window).scroll(function() {
    activeMenuDoc();
});