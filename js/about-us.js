$(document).ready(function(){
    $('.owl-historia').owlCarousel({
        loop:false,
        margin:0,
        stagePadding:0,
        nav:true,
        responsive:{
            300:{
                items:1,
            }
        }
    });

    $('.owl-logos-one').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        stagePadding:0,
        dots:false,
        nav:true,
        responsive:{
            300:{
                items:1,
            }
        }
    });

    $('.owl-logos-two').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        stagePadding:0,
        dots:false,
        nav:true,
        responsive:{
            300:{
                items:1,
            }
        }
    });

    const meters = document.querySelector('.odoMeters'),
          jobs = document.querySelector('.odoJobs'),
          ending = document.querySelector('.odoEnding');

    const odoMeters = new Odometer({
        el: meters,
        animation:'count',
        duration:2000
    });

    const odoJobs = new Odometer({
        el: jobs,
        animation:'count',
        duration:2500
    });

    const odoEnding = new Odometer({
        el: ending,
        animation:'count',
        duration:3000
    });

    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var content = $(".indices").offset();
        content = content.top -700;

        if(windowHeight >= content ){
            odoMeters.update(1000000);
            odoJobs.update(100);
            odoEnding.update(60);
        }
    });
    
});