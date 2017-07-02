import 'pagepiling.js';

const $ = window.$;
/*eslint-disable*/
export default () => {

  var w = $(window);

  function loadSlides() {
    if (!document.getElementById('pagepiling')) {
      return;
    }

    $('html, body').css('overflow-y', 'hidden');
    $('.main-slide').css('position', 'absolute');

    $('#pagepiling').pagepiling({
      anchors: ['main', 'services', 'park-technics', 'contacts'],
      navigation: false,
      afterLoad: function(anchorLink, index) {
        $('.pagination__number').html('0' + index);
        for (var i = 0; i < index; i++) {
          $('.pagination__dot').eq(i).addClass('pagination__dot_active');
        }
        for (; i < $('.pagination__dot').length; i++) {
          $('.pagination__dot').eq(i).removeClass('pagination__dot_active');
        }
        setTimeout(function () {
          $('.main-slide').find('.main-slide__slide-bg').removeClass('fade');
          $('.main-slide.active').find('.main-slide__slide-bg').addClass('fade');
        }, 500);
      },
    });
  }

  if (w.width() < 1024) {
    $('.main-slide__contact-form').addClass('main-slide__contact-form_disabled');
  }

  if (w.width() > 1024) {
    setTimeout(function () {
      $('.main-slide.active').find('.main-slide__slide-bg').addClass('fade');
    }, 400);
  }

  function init() {
    // при ресайзе вешаем статическую переменную на функцию
    init.sliderInitialized = init.sliderInitialized || false

    if (w.width() > 1024 && !init.sliderInitialized) {
      loadSlides();
      $('.main-slide__contact-form').removeClass('main-slide__contact-form_disabled');
      return init.sliderInitialized = true;
    }

    if (w.width() <= 1024 && init.sliderInitialized) {
      init.sliderInitialized = false;
      location.reload(true);
    }
  }

  init();
  w.resize(function () {
    init();
  });
};
