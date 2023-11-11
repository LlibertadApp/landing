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

    //Navbar blur on show
    $(document).ready(function(){
        $(".navbar-toggler").on("click", function() {
            if($(".navbar-toggler").attr('class').includes('collapsed')) {
                drawBackdropBlur(false);
            } else {
                drawBackdropBlur(true);
            }
        });
    })

    //Hide navbar menu on item click
    $(document).ready(function(){
        let navItems = $(".nav-item");

        navItems.click(function(e){
            $(".navbar-collapse").removeClass('collapsed');
            $(".navbar-collapse").removeClass('show');
            drawBackdropBlur(false);
        })
    })

    const drawBackdropBlur = (draw) => {
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            if(draw) {
                $("#backdrop-blur-overlay").addClass('backdrop-blur')
                $('html, body').css({
                    overflow: 'hidden'
                });
            } else {
                $("#backdrop-blur-overlay").removeClass('backdrop-blur')
                $('html, body').css({
                    overflow: 'scroll'
                });    
            }
        }
        
    }






