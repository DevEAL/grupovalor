$(document).ready(function(){

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
            odoMeters.update(123456);
            odoJobs.update(2130);
            odoEnding.update(42);
        }
    });
})