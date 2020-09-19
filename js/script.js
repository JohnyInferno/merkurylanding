var bg_el = $('.all-you-need');
var cont_el =$('.all-you-need__content-container');
var fs_title =$('.mainscreen__title');
var tw_row = $('.advantages__row')
var tw_item1 = $('.adv-one');
var tw_item2 = $('.adv-two');
var tw_item3 = $('.adv-three');
var fr_img = $('.drag-n-drop__img-container');
var fr_text = $('.drag-n-drop__text-block');
var fiv_title = $('.template__title');
var fiv_subtitle = $('.template__subtitle');
var fiv_img = $('.template__img-block');
var six_item = $('.cards__item');

$(window).scroll(function(){
    if ( $(this).scrollTop() > bg_el.offset().top - 600) {
        bg_el.addClass('bg-anim');
        cont_el.addClass('appeared');
    }

    // if ( $(this).scrollTop() > fs_title.offset().top - 1000) {
    //     fs_title.addClass('appear-right')
    // }
    
    if ( $(this).scrollTop() > tw_row.offset().top - 700) {
        tw_item1.addClass('adv-one-appear');
        tw_item2.addClass('adv-two-appear');
        tw_item3.addClass('adv-three-appear');
    }

    if ( $(this).scrollTop() > fr_text.offset().top - 800) {
        fr_text.addClass('appear-right');
        fr_img.addClass('appear-left');
    }

    if ( $(this).scrollTop() > fiv_title.offset().top - 800) {
        fiv_title.addClass('def-appear');
        fiv_subtitle.addClass('def-appear-delay');
        fiv_img.addClass('def-appear-delaym');

    }

    if ( $(this).scrollTop() > six_item.offset().top - 700) {
        six_item.addClass('shaked');
        
    }
});

$('.contact-open').click(function(){
    $(".popup-contact-bg").fadeTo(200, 1);
    $('.popup-contact').fadeIn();
    
  })


  $('.popup-contact__close').click(function(){
    $('.popup-contact').fadeOut();
  })

$(".drag-n-drop__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: true,
    centerMode: true,
    dots: true,
})