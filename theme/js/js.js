(function ($) {

  $(window).load(function () {
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: false,
      prevText: "",
      nextText: ""
    });
  });

  $(window).load(function () {
    var $btn = $('.btn-menu');

    $btn.on('click touch', function (e) {
      e.preventDefault();

      $('body').toggleClass('mobile-active');
    })
  })

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

})(jQuery);

