const $ = window.$;

export default () => {
   /* eslint-disable */
  //  Открытие списка городов
  $('.left-toggler__item_show').click(function(e) {
    e.preventDefault();
    $('.main__cities').addClass('main__cities_active');
    $('.left-toggler').addClass('left-toggler_active');
  });
  //  Закрытие списка городов
  $('.left-toggler__item_hide').click(function(e) {
    e.preventDefault();
    $('.main__cities').removeClass('main__cities_active');
    $('.left-toggler').removeClass('left-toggler_active');
  });
  // Активация карты
  function mapActive() {
    $('.main-slide__map').addClass('main-slide__slide-bg_active');
  }
  // Деактивация карты
  function mapDisable() {
    $('.main-slide__map').removeClass('main-slide__slide-bg_active');
  }
  // Активация формы
  function formActive() {
    $('.main-slide__contact-form').removeClass('main-slide__contact-form_disabled');
  }
  // Деактивация формы
  function formDisable() {
    $('.main-slide__contact-form').addClass('main-slide__contact-form_disabled');
  }
  // Показать карту
  $('.contact-text__toggler_show').click(function(e) {
    e.preventDefault();
    mapActive();
    // Для декстопа
    if ($(window).width() > 1024) {
      formDisable();
      $('.contact-text').addClass('contact-text_active');
      $('.main__map .big-heading').css('opacity', '0');
      $('.map-controls').removeClass('disabled');
    } else {
      // Для мобильного
      $('.main-slide__contact-text').addClass('main-slide__contact-text_disabled');
      $('.toMap_main').show();
      $('.map-controls').removeClass('disabled');
    }
  });
  // Скрыть карту
  $('.contact-text__toggler_hide').click(function(e) {
    e.preventDefault();
    mapDisable();
    formActive();
    $('.contact-text').removeClass('contact-text_active');
    $('.main__map .big-heading').css('opacity', '1');
    $('.map-controls').addClass('disabled');
  });
  // Переход к форме
  $('.toForm').click(function (e) {
    e.preventDefault();
    formActive();
    $('.main-slide__contact-text').addClass('main-slide__contact-text_disabled');
    $('.map-controls').addClass('disabled');
  });
  // Закрытие карты
  $('.toMap').click(function (e) {
    e.preventDefault();
    mapDisable();
    formDisable();
    $('.main-slide__contact-text').removeClass('main-slide__contact-text_disabled');
    $('.toMap_main').hide();
    $('.map-controls').addClass('disabled');
  });
};
