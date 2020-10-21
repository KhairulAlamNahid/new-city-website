// fixed menu

$(window).scroll(function () {
    $scrollamount = $(window).scrollTop();
    if ($scrollamount > 0) {
        $(".menu").addClass("fixed");
    }else{
        $(".menu").removeClass("fixed");
    }
})


// banner part slider js

$('#banner_part').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-hand-o-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-hand-o-right next" aria-hidden="true"></i>',
    arrows: true,
    autoplay: true,
    fade: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
    },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
  ]
});


//about venobox js 
$('.venobox').venobox();


// coutner up js
$('.counter').counterUp({
    delay: 10,
    time: 1000,
});

// over form part js
$("nav .ctn_btn").click(function () {
    $("#over_form").slideDown();
})

$("#over_form .close").click(function () {
    $("#over_form").slideUp();
})
