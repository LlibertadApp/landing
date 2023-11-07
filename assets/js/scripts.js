    //===== Prealoder
    window.onload = function () {
        window.setTimeout(fadeout, 3000);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }

    /* Back To Top Button */
    $(document).ready(function(){
    	$(window).scroll(function () {
    		if ($(this).scrollTop() > 50) {
    			$('#back-to-top').fadeIn();
    		} else {
    			$('#back-to-top').fadeOut();
    		}
    	});
    	// scroll body to 0px on click
    	$('#back-to-top').click(function () {
    		$('body,html').animate({
    			scrollTop: 0
    		}, 400);
    		return false;
    	});
    });

    //Hero Scroll
     $(document).ready(function(){
        $(window).scroll(function(){
            $('#scrollbg').css("opacity", 1- $(window).scrollTop() / 650)
        })
    })

    //Hero Scroll
     $(document).ready(function(){
        $(window).scroll(function(){
            $('#scrollbg2').css("opacity", 1- $(window).scrollTop() / 2050)
        })
    })






