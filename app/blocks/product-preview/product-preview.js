const $ = window.$;
// Открытие описания при клике на "характеристики" (mobile)
export default () => {
  /*eslint-disable*/
  $('.product-preview__mobile').each(function () {
    $(this).click(function (e) {
       e.preventDefault();
       $(this).parents('.product-preview').find('.product-preview__description').toggleClass('product-preview__description_active');
     });
  });
};
