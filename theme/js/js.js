(function ($) {


    $(window).load(function () {
        var $btn = $('.btn-menu');

        $btn.on('click touch', function (e) {
            e.preventDefault();

            $('body').toggleClass('mobile-active');
        })
    });

    $(window).load(function () {
        $('.slick-slider .slides').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
        });
    });

    $(window).load(function () {
        var $elms = $('.el-with-animation');
        var animationEnd = [];

        $(window).on('resize scroll', checkScroll);

        checkScroll();

        function checkScroll() {
            if (animationEnd.length === $elms.length) return;

            for (var i = 0; i < $elms.length; i++) {
                var $currentEl = $elms.eq(i);

                if (!$currentEl.hasClass('animated') && $(window).height() + $(window).scrollTop() > $currentEl.offset().top + $currentEl.height() / 2 + 50) {
                    animate($currentEl);
                }
            }
        }

        function animate(el) {
            el.addClass('animated');
            animationEnd.push(1);
        }
    });

    $(window).load(function () {
        $('.slider-nav-wrap').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 100,
            itemMargin: 5,
            directionNav: false,
            direction: "vertical",
            asNavFor: '.slider-wrap'
        });

        $('.slider-wrap').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            directionNav: false,
            direction: "vertical",
            sync: ".slider-nav-wrap"
        });
    });

})(jQuery);

