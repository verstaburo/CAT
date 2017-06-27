const $ = window.$;

export default () => { // eslint-disable-next-line
  $('.left-toggler__item_show').click(function(e) {
    e.preventDefault();
    $('.main__cities').addClass('main__cities_active');
    $('.left-toggler').addClass('left-toggler_active');
  });
  // eslint-disable-next-line
  $('.left-toggler__item_hide').click(function(e) {
    e.preventDefault();
    $('.main__cities').removeClass('main__cities_active');
    $('.left-toggler').removeClass('left-toggler_active');
  });
  // eslint-disable-next-line
  $('.contact-text__toggler_show').click(function(e) {
    e.preventDefault();
    if ($(window).width() > 1024) {
      $('.main-slide__map').addClass('main-slide__slide-bg_active');
      $('.main-slide__contact-form').addClass('main-slide__contact-form_disabled');
      $('.contact-text').addClass('contact-text_active');
      $('.main__map .big-heading').css('opacity', '0');
    } else {
      $('.main-slide__map').addClass('main-slide__slide-bg_active');
      $('.main-slide__contact-text').addClass('main-slide__contact-text_disabled');
      $('.toMap_main').show();
    }
  });
  // eslint-disable-next-line
  $('.contact-text__toggler_hide').click(function(e) {
    e.preventDefault();
    $('.main-slide__map').removeClass('main-slide__slide-bg_active');
    $('.main-slide__contact-form').removeClass('main-slide__contact-form_disabled');
    $('.contact-text').removeClass('contact-text_active');
    $('.main__map .big-heading').css('opacity', '0');
  });
  // eslint-disable-next-line
  $('.toForm').click(function (e) {
    e.preventDefault();
    $('.main-slide__contact-text').addClass('main-slide__contact-text_disabled');
    $('.main-slide__contact-form').removeClass('main-slide__contact-form_disabled');
  });
  // eslint-disable-next-line
  $('.toMap').click(function (e) {
    e.preventDefault();
    $('.main-slide__map').removeClass('main-slide__slide-bg_active');
    $('.main-slide__contact-text').removeClass('main-slide__contact-text_disabled');
    $('.main-slide__contact-form').addClass('main-slide__contact-form_disabled');
    $('.toMap_main').hide();
  });
};
