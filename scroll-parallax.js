// scroll-footer.js

function scrollFooter(scrollY, footerHeight) {
    console.log(scrollY);
    console.log(footerHeight);

    if (scrollY >= footerHeight) {
        $('footer').css('bottom', '0px');
    } else {
        $('footer').css('bottom', '-' + footerHeight + 'px');
    }
}

$(window).on('load', function() {
    var windowHeight   = $(window).height(),
        footerHeight   = $('footer').height(),
        heightDocument = windowHeight + $('.wrapper-parallax').height() + footerHeight - 20;

    // Ajusta la altura de contenedores
    $('#scroll-animate, #scroll-animate-main').css('height', heightDocument + 'px');

    // Ajusta header y contenido
    $('header').css({ 'height': windowHeight + 'px', 'line-height': windowHeight + 'px' });
    $('.wrapper-parallax').css('margin-top', windowHeight + 'px');

    scrollFooter(window.scrollY, footerHeight);

    $(window).on('scroll', function() {
        var scroll = window.scrollY;

        $('#scroll-animate-main').css('top', '-' + scroll + 'px');
        $('header').css('background-position-y', 50 - (scroll * 100 / heightDocument) + '%');

        scrollFooter(scroll, footerHeight);
    });
});