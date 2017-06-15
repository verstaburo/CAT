import $ from 'jquery';

export default () => { //eslint-disable-next-line
  $('.burger').click(function () {
    $(this).toggleClass('burger_active');
    $('.menu').toggleClass('menu_active');
  });
};
