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
});
