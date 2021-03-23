$(document).ready(function ()
{
    'use strict';

    //nice scroll
    $("#about_us , #basket ,#bill , #food_menu ,#home , #meal , #menu , #not_found ,#order , #ready_order ,#restourants , #table_reserve ,#waiter , #waiting ").niceScroll({
        cursorminheight: 32
    });



    $('.open').click(function(){
        $('.sidebar_container').slideDown();
    });
    $('.close').click(function(){
        $('.sidebar_container').slideUp();
    });


    // show confirmation
    $('.order_button').click(function(){
        $('.confirmation_container').fadeIn();
    });
    $('.ok').click(function(){
        $('.confirmation_container').fadeOut();     
        $('.additions_container').fadeOut();
    });

    

    // order page add to basket
    
    $('.add_to_order').click(function(){
        $('.additions_container').fadeIn();
        $(this).css('background','linear-gradient(#1492E6,#0A6AAB)');
        $('.add_to_order .two').css('display','block');
        $('.add_to_order .one').css('display','none');

        $('.ok').click(function(){
            $('.confirmation_container').fadeOut();
        });
    });


    $('.add_to_basket').click(function(){
        $('.confirmation_container2').fadeIn();

        $('.ok2').click(function(){
            $('.add_to_basket').css('background','linear-gradient(#1492E6,#0A6AAB)');
            $('.add_to_basket .two').css('display','block');
            $('.add_to_basket .one').css('display','none');

            $('.confirmation_container2').fadeOut();
            });
    });

    


    $('.done').click(function(){
        $('.confirmation_container').fadeIn();
    });

});  