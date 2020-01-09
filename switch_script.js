/***
    Dashboard-dev Page
***/
    // Switch between Rating and Xtease and maps
    jQuery("body").on("click", ".glob__rating_button, .glob__xt_button, .glob__map_button", function() {

        var hide = jQuery(this).parent().closest('td').find(".t_hotel_hide");    
        // console.log(hide);    
        var data = jQuery(this).attr("data-block");
        var allBtns = jQuery(".glob__rating_button, .glob__xt_button, .glob__map_button");
        var SiblingsBtns = jQuery(this).parent().siblings().children(".glob__rating_button, .glob__xt_button, .glob__map_button");   

        if(jQuery(this).hasClass('isActive')){
            hide.slideUp('slow',function(){
                jQuery("." + data).hide();                
            });
            jQuery(this).removeClass('isActive');
        }else{
            if(SiblingsBtns.hasClass('isActive')){
                SiblingsBtns.removeClass('isActive');
                jQuery(this).addClass('isActive');
                jQuery("." + data).fadeIn('slow').siblings('.hotel__sub_block').hide();
            }else{
                allBtns.removeClass('isActive');
                jQuery('.t_hotel_hide').hide();
                jQuery(this).addClass('isActive');
                jQuery("." + data).fadeIn('slow').siblings('.hotel__sub_block').hide();;
                hide.slideDown('slow');                
            }
        }
    });




    