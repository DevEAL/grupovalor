$(document).ready(function(){
    $('.nav-toggle').click(function(){
        $('.nav-toggle').toggleClass('active');
        $('.sidebar').toggleClass('active');
    })

    $('#initial').click(function(){
        $(this).css('opacity','0');
        setTimeout(()=>{
            $('#initial').css('display','none');
            $('footer').attr('style','display:block;');
        },1500);
    });

    let cw = $('.proyects-cont .item').width();
    $('.proyects-cont .item').css({'height':cw+'px'});
    $(window).resize(function() {
        let cw = $('.proyects-cont .item').width();
        $('.proyects-cont .item').css({'height':cw+'px'});
    });

});

const date = new Date();
document.getElementById('dateCopy').innerHTML = date.getFullYear();