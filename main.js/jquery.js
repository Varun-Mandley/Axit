/* top button */
$(document).ready(function () {
    $(window).scroll(function () { 
    //  var top = $(this).scrollTop();  
      if(scrollY >= 3144){
        $('.wrap-12 .top').fadeIn();
      }
      else{
        $('.wrap-12 .top').fadeOut();
      }
    });
    $('.wrap-12 .top').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop:0})   
    }); 
});


/* mob button */
$(document).ready(function () {
    $('.wrap-1 button').click(function () { 
        $(this).toggleClass('active');
        $('.wrap-1 nav').slideToggle();
        
    });
    $('.wrap-1 button').focusout(function () { 
        $(this).removeClass('active');
        $('.wrap-1 nav').slideUp();
        
    });
    $('.wrap-1 button').keydown(function (e) { 
        if(e.which == 27) {
        $('.wrap-1 nav').slideUp();
        $(this).removeClass('active');
        }

    });

    
});


/* tabs change */
$(document).ready(function () {
    $('.tab ul li a').click(function (e) { 
        e.preventDefault();
        $('.tab ul li a').removeClass('active');
        $(this).addClass('active');
        var t=$(this).parents().index()+1;
        $('.content > div').fadeOut(0);
        $('.content > div:nth-child(' + t + ')').fadeIn();
    });
});


/* navbar position */
$('.wrap-1 ul a').on("click", function (e) {
    e.preventDefault();
    var href = $(this).attr("href");
    var pos = $(href).offset().top;
    $('html , body').animate({ scrollTop: pos - 70 })
});