$(function() {
    var $swiperContainer = $('.swiper-container');

    var _height = $swiperContainer.height();

    $swiperContainer.find('img.lazy').lazyload({
        container: $swiperContainer[0],
        skip_invisible: false,
        threshold: _height
    });
    $swiperContainer.find('.swiper-slide').eq(0).find('img.lazy').removeClass('lazy');

    $swiperContainer.swiper({
        pagination: '',
        loop: false,
        mode: 'vertical',
        grabCursor: false,
        paginationClickable: false,
        onSlideChangeStart: function(swiper) {
            var index = swiper.activeIndex;

            $(swiper.container).find('img.lazy').lazyload({
                container: swiper.container,
                skip_invisible: false,
                threshold: swiper.height
            });
        },
        onSlideChangeEnd: function(swiper) {
            var $slide = $(swiper.activeSlide());

            $slide.find('.page').addClass('loaded');
            $slide.find('img.lazy').removeClass('lazy');
        }
    });

    var wechat = new WechatApi();
    wechat.init({
        img_url: location.origin + '/img/logo.png',
        link: location.href,
        title: '微网站',
        description: '做最美的微网站！',
        appid: ''
    });
});
