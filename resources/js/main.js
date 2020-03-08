// MOBILE MENU 

function openNav() {
    document.getElementById("myNav").style.width="100%";
}
function closeNav() {
    document.getElementById("myNav").style.width="0%"
}


function scrollFunction() {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? mybutton.style.display = "block" : mybutton.style.display = "none"
}

function topFunction() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
};
$(document).ready(function() {
    
    //STICKY MENU
    
    $(".js--for-sticky").waypoint(function(direction){
       if (direction == "down"){
           $("nav").addClass("sticky");
       } else {
           $("nav").removeClass("sticky");
       }
    });
    
    // ACTIVE LINK
    $("nav ul li a").click(function(){
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });
    
    $("nav .logo").click(function(){
        $("nav ul li a").removeClass("active");
        $("nav ul li:first-child a").addClass("active");
    });
    
    (new WOW).init(), $(".num").counterUp({
        delay: 10,
        time: 1500
    }), $(".acc-title").click(function() {
        $(this).closest(".acc-item").siblings().removeClass("active").find(".acc-content").slideUp(400), $(this).closest(".acc-item").toggleClass("active").find(".acc-content").slideToggle(400)
    }), $("#single-slider").owlCarousel({
        autoplay: !0,
        dots: !1,
        loop: !0,
        margin: 10,
        nav: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }), $("#single-slider2").owlCarousel({
        autoplay: !0,
        dots: !1,
        loop: !0,
        margin: 10,
        nav: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }),$(".snake").snakeify({
        speed: 200
    })
        
}), mybutton = document.getElementById("myBtn"), window.onscroll = function() {
    scrollFunction()
};