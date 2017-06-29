/* eslint-disable */
$(function () {
  var container = $('.projects'),
      content = $('.js-projects-container'),
      spinner = $('<div class="spinner"></div>'),
      loadBtn = $('.js-projects-show-more');

  $('.js-projects-show-more').click(function(e) {
    e.preventDefault();

    $.ajax({
      url: 'projects-ajax.html',
      type: 'GET',
      success: function(data) {
        setTimeout(function () { // emulate server delay
          container.find('.spinner').remove();
          content.append(data);
          loadBtn.prop('disabled', false);
        }, 1000);
      },
      beforeSend: function() {
        spinner.insertBefore(loadBtn);
        loadBtn.prop('disabled', true);
      }
    });
  });

  $(window).on('scroll', function () {
    if (container.find('.spinner').length) {
      return;
    }

    var w = $(this),
        sT = w.scrollTop(),
        vH = w.height(),
        bottomBreakpoint = loadBtn.offset().top + loadBtn.outerHeight();

    if (sT + vH >= bottomBreakpoint) {
      loadBtn.trigger('click');
    }
  });
});
