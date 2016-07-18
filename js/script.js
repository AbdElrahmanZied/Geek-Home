/*global $, alert, console*/

$(function () {
    
    'use strict';

    $('header').height($(window).height());
    $(window).resize(function() {
    	$('header').height($(window).height());
        
        $('header .container').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('header .container').height()) / 2);
        });
    
    });
    
    //end resize   

    $('header .container').each(function () {
    $(this).css('paddingTop', ($(window).height() - $('header .container').height()) / 2);
    });
});
