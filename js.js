/**
 * Created by Clement pro on 01/03/2018.
 */

/*fixation navbar*/

$(document).ready(function() {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 800) {
            $('#navbar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 801) {
            $('#navbar').removeClass('navbar-fixed');
        }
    });
});