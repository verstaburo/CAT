/* eslint-disable */
$(function () {

  var container = $('.park-technics'),
    content = $('.park-technics__content'),
    spinner = $('<div class="spinner"></div>'),
    loadBtn = $('.js-park-show-more');

  var loadProjects = function () {
    $.ajax({
      url: 'park-technics-ajax.html',
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
  };


  $('.js-park-show-more').click(function(e) {
    e.preventDefault();
    loadProjects();
  });

  $(window).scroll(function () {
    if (container.find('.spinner').length) {
      return;
    }

    var w = $(this),
        sT = w.scrollTop(),
        vH = w.height(),
        bottomBreakpoint = content.offset().top + content.outerHeight();

    if (sT + vH >= bottomBreakpoint) {
      loadProjects();
    }
  });
});
