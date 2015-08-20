$( document ).on( "pageinit", ".page", function() {
    //Splash
    $(function () {
        setTimeout(hideSplash, 3000);
    });
    function hideSplash() {
        var url = $('div.page.ui-page-active').attr('data-url');
        if (url == 'splash'){
            $.mobile.changePage("#login", "fade");
            $('img.logo').animate({
                opacity: 1, top: "15px"}, 1000, function () {
                    $('form.login').animate({
                    opacity: 1, top: "15px"}, 1000,function(){
                        $("img.logo , form.login").css('opacity' , '1 !important');
                    })
                }
            );
        }
    };


    $(function () {
        $('[data-role="panel"]').panel().enhanceWithin();
    });

    //forgot password
    $('a.forget').click(function () {
        $('legend.forget').slideDown(400);
    });

    //slider!
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: true
    });


});
