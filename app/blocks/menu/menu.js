import $ from 'jquery';

export default () => {
//eslint-disable-next-line
  $('.header__burger').click(function () {
    $('.menu').addClass('menu_active');
  });
  //eslint-disable-next-line
  $('.burger_close').click(function () {
    $('.menu').removeClass('menu_active');
  });
};
