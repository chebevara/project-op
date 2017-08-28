if ($('div').is('.right_bottom')) {
    $('.right_middle').css({'height': '50vh'});
} else {
    $('.right_middle').css({'height': '80vh'});
}

$(document).ready(function () {
    $('.show_table').on('click', function () {
        var window_height = $('body').height();
        var top_line_height = $('.top_line').height();
        var right_top_line = $('.right__top_line').height();
        var new_height = (window_height - top_line_height - right_top_line - 20) * 100 / window_height;
        if ($('.right_bottom').hasClass('show')) {
            $('.right_bottom').removeClass('show');
            $('.right_bottom').addClass('hide');
            $('.right_middle').css({'height': new_height + 'vh'});
        } else {
            $('.right_bottom').removeClass('hide');
            $('.right_bottom').addClass('show');
            $('.right_middle').css({'height': '50vh'});
        }

    });

    $('.btn_exchange').on('click', function () {
        if ($('.left_wrapper').hasClass('show')) {
            $('.left_wrapper').removeClass('show');
            $('.left_wrapper').addClass('hide');
            $('.right_wrapper').removeClass('col-xs-9');
            $('.right_wrapper').addClass('col-xs-12');
        } else {
            $('.left_wrapper').removeClass('hide');
            $('.left_wrapper').addClass('show col-xs-9');
            $('.right_wrapper').removeClass('col-xs-12');
            $('.right_wrapper').addClass('col-xs-9');
        }

    });
    $('.top_line_link').on('click', function () {
        $('.top_line_link').removeClass('active');
        $(this).addClass('active');
    });

    var window_height = $('body').height();
    var top_line_height = $('.top_line').height();
    var new_height = (window_height - top_line_height - 10) * 100 / window_height;
    $('.left_wrapper').css({'height': new_height + 'vh'});
    $('.right_wrapper').css({'height': new_height + 'vh'});


    var left_wrapper_width = $('.left_wrapper').innerWidth();
    $('.left_fixed').innerWidth(left_wrapper_width + 2);
    $(window).resize(function () {
        var left_wrapper_width = $('.left_wrapper').innerWidth();
        $('.left_fixed').innerWidth(left_wrapper_width + 2);
    });
    console.log(left_wrapper_width);

});