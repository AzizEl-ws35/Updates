    //Add Elements in Realrate on click Realrate Btn

    jQuery("body").on("click",".rr__button *",function(){
        jQuery(".rr__offers_div > a, .rr__offers_div > span").each(function(){
            if($(this).find(".update__promo").length < 1 ){
                $(this).prepend('<span class="update__promo"><i class="icofont-ui-settings"></i></span>');
            }
        });
    });