$(function() {

    Services.getPages({}, function(pages) {
        initPages(pages);
    });


    function initPages(pages, $view) {
        $view = $view || $('.view');
        if($view.length === 0) {
            return;
        }

        var $swiperContainer = $('<div class="swiper-container"/>').appendTo($view);
        var $swiperWrapper = $('<div class="swiper-wrapper"/>').appendTo($swiperContainer);

        $.each(pages, function(index, page) {
            var $slide = $('<div class="swiper-slide"/>').appendTo($swiperWrapper);
            var $page = $('<div class="page"/>').appendTo($slide);

            $.each(page, function(i, p) {
                if(typeof p == 'string') {
                    $page.append($('<img class="lazy" />').attr('data-original', p));
                }
                else if(p && p.src && p.type) {
                    $page.append($('<img class="lazy" />').addClass(p.type).attr('data-original', p.src));
                }
            });
        });

        init($swiperContainer);
    }

    function init($element) {
        var _height = $element.height();

        $element.find('img.lazy').lazyload({
            container: $element[0],
            skip_invisible: false,
            threshold: _height
        });
        $element.find('.swiper-slide').eq(0).find('img.lazy').removeClass('lazy');

        $element.swiper({
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
    }

    var wechat = new WechatApi();
    wechat.init({
        img_url: location.origin + '/img/logo.png',
        link: location.href,
        title: '微网站',
        description: '做最美的微网站！',
        appid: ''
    });
});
