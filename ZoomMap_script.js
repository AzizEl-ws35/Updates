// initialization Maps variable


var initialize = function(__this, map_id) {

    //if (__this.html().length == 0) {

    var MapLat = parseFloat(__this.parents('.quick__body').find('.h__input.MapLantitude').val());
    var MapLng = parseFloat(__this.parents('.quick__body').find('.h__input.MapLongitude').val());
    var MapZoom = parseInt(__this.parents('.quick__body').find('.h__input.MapZoom').val());
    __this.parents('.quick__body').find('.h__input.MapZoom').attr('value',MapZoom);


    var myCenter = new google.maps.LatLng(MapLat, MapLng);
    var customMarker = "";
    var mapProp = {
        center: myCenter,
        zoom: MapZoom,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
    }

    var map = new google.maps.Map(document.getElementById("MapHotel_" + map_id), mapProp);

    if (customMarker != '') {
        var marker = new google.maps.Marker({
            position: myCenter,
            icon: customMarker
        });
    } else {
        marker = new google.maps.Marker({
            position: myCenter
        });
    }
    marker.setMap(map);
    //}
}

/**
 * Generate Map in click icon
 */

var map_id ;
var __this ;

jQuery("body").on("click", ".glob__map_button", function() {

    map_id = jQuery(this).data('map-id');
    __this = jQuery("#MapHotel_" + map_id);

    initialize(__this, map_id);

    // Map input fields when value empty
    jQuery(".t_hotel_hide .hotel__sub--details .hotel__sub_block.glob__quick_map .hotel__input .h__input").each(function() {
        if (jQuery(this, '.h__label').val().length != 0) {
            jQuery(this).parent().find(".h__label").addClass('rr__is_valid');
        }
    });

    rangeSlider();

});

//On click update button
jQuery("body").on('click', '.quick__body_map--update .quick__table_td .btn1', function() {
    initialize(__this, map_id);
});

//On change zoom range slider
jQuery("body").on("change", ".range-slider__range", function() {
    initialize(__this, map_id);
});

//Function switch values between zoom range slider 
var rangeSlider = function() {
    var slider = jQuery('.range-slider'),
        range = jQuery('.range-slider__range'),
        value = jQuery('.range-slider__value');

    slider.each(function() {

        value.each(function() {
            var value = jQuery(this).prev().attr('value');
            jQuery(this).html(value);
        });

        range.on('input', function() {
            jQuery(this).next(value).html(this.value);                
            //initialize(__this, map_id);
        });
    });
};
