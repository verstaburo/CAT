import 'pagepiling.js';

const $ = window.$;
/*eslint-disable*/
export default () => {
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
    },
  });
}
