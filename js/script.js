$(document).ready(function () {

    /*Portfolio*/
    $('.button[filter="wD"]').click(function () {
        if ($(this).attr('val') === 'off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter="wD"]').show(300);
        }

    });

    $('.button[filter="uiD"]').click(function () {
        if ($(this).attr('val') === 'off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter="uiD"]').show(300);
        }
    });

    $('.button[filter="mockUps"]').click(function () {
        if ($(this).attr('val') === 'off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter="mockUps"]').show(300);
        }
    });

    $('.button[filter="all"]').click(function () {
        if ($(this).attr('val') === 'off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').show(300);
        }
    });

    /*Slider*/
    $('.multiple-items').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, 
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    /*Menu*/
    $('ul.menu a[href^="#"').click(function () {
        let target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        $('ul.menu a[href^="#"').css('color', '#212121');
        $(this).css('color', '#004bee');
        return false;
    })

    /*Button "to top"*/
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0)
            $('#toTop').fadeIn();
        else
            $('#toTop').fadeOut();
    });

    $('#toTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    })

    /*Pop-menu*/
    $('.menu-icon').click(function () {
        $('nav').slideToggle(500);
        $('ul.menu').css({
            'display': 'flex',
            'flex-direction': 'column'
        })
        if($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
            $(this).html('<i class="fas fa-times"></i>');
        } else {
            $(this).html('<i class="fas fa-bars"></i>');
        }
    });
});