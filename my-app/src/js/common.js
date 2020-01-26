document.createElement('aside');
document.createElement('header');
document.createElement('figcaption');
document.createElement('footer');
document.createElement('section');
document.createElement('figure');
document.createElement('article');
document.createElement('time');
jQuery(document).ready(function(){

    var e = document.getElementById("myRange");
    noUiSlider.create(e, {
        start: 25e4,
        connect: [!0, !1],
        range: {
            min: [1e5, 5e3],
            "25%": [25e4, 5e3],
            "50%": [5e5, 1e4],
            "75%": [1e6, 5e4],
            max: 5e6
        },
        format: wNumb({
            decimals: 0,
            thousand: " ",
            prefix: "$"
        }),
        pips: {
            mode: "range",
            density: 100,
            format: wNumb({
                decimals: 0,
                prefix: "$",
                thousand: ",",
                prefix: "$"
            })
        }
    });
    e.noUiSlider.on("update", function(e, n) {

        var result = parseInt(e[n].replace(/\D/g, ""),10);
        jQuery('.result').html('$' + result.toLocaleString());
        var month = result * 0.005;
        month = Math.floor(month);
        jQuery('.price-month span').html('$' + month.toLocaleString());
        var year = month * 12;
        jQuery('.price-year span').html('$' + year.toLocaleString());
    });
	
	jQuery('.select2').each(function(){
        jQuery(this).select2();
    });
	
	
	
    jQuery(document).on('touchend', function(){
		jQuery(".select2-search, .select2-focusser").remove();
	})
	

    jQuery('.modal-open').on('click', function(e){
        e.preventDefault();
        jQuery('.modal-window-wrap').addClass('open');
    });
	
	 jQuery('.modal-close').on('click', function(e){
        e.preventDefault();
        jQuery('.modal-window-wrap').removeClass('open');
    });

    jQuery('.form-container__label input').on('keyup',function(){
        var $this = jQuery(this),
            val = $this.val(),
            placeholder = jQuery(this).closest('.form-container__label').find('.placeholder');
        if(val.length >= 1){
            placeholder.addClass('placeholder-top');
        }else {
            placeholder.removeClass('placeholder-top');
        }
    });
	
	if(jQuery('.form-container__label input').focus(function(){
		jQuery(this).closest('.form-container__label').find('.placeholder').addClass('placeholder-top');
	}));


    jQuery('#wpcf7-f2624-o2 .wpcf7-form-control-wrap input').on('keyup',function(){
        var $this = jQuery(this),
            val = $this.val();

        if(val.length >= 1){
            jQuery(this).closest('#wpcf7-f2624-o2').find('.contact-recaptcha').show(500);
        }
    });
    jQuery('#wpcf7-f2624-o1 .wpcf7-form-control-wrap input').on('keyup',function(){
        var $this = jQuery(this),
            val = $this.val();

        if(val.length >= 1){
            jQuery(this).closest('#wpcf7-f2624-o1').find('.contact-recaptcha').show(500);
        }
    });
    jQuery('#wpcf7-f2624-o3 .wpcf7-form-control-wrap input').on('keyup',function(){
        var $this = jQuery(this),
            val = $this.val();

        if(val.length >= 1){
            jQuery(this).closest('#wpcf7-f2624-o3').find('.contact-recaptcha').show(500);
        }
    });

	jQuery( ".low-r-icon" ).mouseenter(function() {
		jQuery('.low-r').attr("class", "low-r active");
	  }).mouseleave(function() {
	   jQuery('.low-r').attr("class", "low-r");
    });
	jQuery( ".transparent-icon" ).mouseenter(function() {
		jQuery('.transparent-plane').attr("class", "transparent-plane active");
	  }).mouseleave(function() {
	   jQuery('.transparent-plane').attr("class", "transparent-plane");
    });
	jQuery( ".customer-icon" ).mouseenter(function() {
		jQuery('.customer-plane').attr("class", "customer-plane active");
	  }).mouseleave(function() {
	   jQuery('.customer-plane').attr("class", "customer-plane");
    });
	jQuery( ".payment-icon" ).mouseenter(function() {
		jQuery('.payment-plane').attr("class", "payment-plane active");
	  }).mouseleave(function() {
	   jQuery('.payment-plane').attr("class", "payment-plane");
    });
	jQuery( ".industry-icon" ).mouseenter(function() {
		jQuery('.industry-plane').attr("class", "industry-plane active");
	  }).mouseleave(function() {
	   jQuery('.industry-plane').attr("class", "industry-plane");
    });
	jQuery( ".point-icon" ).mouseenter(function() {
		jQuery('path[plane-attr="point"]').css("fill", "#E32328");
	  }).mouseleave(function() {
	   jQuery('path[plane-attr="point"]').css("fill", "#172A39");
    });

});
