/**

 * @file
 * Bluez Slider Javascript.
 *
 */
(function ($) {
  Drupal.behaviors.opencharity = {
    attach: function (context, settings) {

      function responsive() {
        if($(window).width() < 768) {
          $('.block-bean__section, .block-views__section, .region-footer').attr('style', '');
          $('.block-bean__section, .block-views__services-block').css('height', $(window).height());
          $('.block-views__section, .region-footer').css('min-height', $(window).height());
        } else {
          $('.block-bean__section, .block-views__section, .region-footer').attr('style', '');
          $('.block-bean__section, .block-views__section, .region-footer').css('min-height', $(window).height());
        }

        // if($(window).width() < 768) {
        //   $('.block-bean__section, .block-views__section, .region-footer').css('width', $(window).width());
        // }
      }

      responsive();

      $(".geeklabel .section__down").click(function() {
        $('html, body').animate({
          scrollTop: $('#block-bean-design').offset().top
        }, 500);
      });

      $(".region-home-content .section__down").click(function() {
        if($(this).parent().attr('id') == 'block-views-map-block') {
          var element = $(this).parent().parent().next().children().attr('id');
        } else {
          var element = $(this).parent().next().attr('id');
        }
        
        $('html, body').animate({
          scrollTop: $('#'+element).offset().top
        }, 500);
      });

      $( window ).resize(function() {
        responsive();
      });

    }
  };
})(jQuery);
