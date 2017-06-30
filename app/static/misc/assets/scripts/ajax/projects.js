/* eslint-disable */
$(function () {

  var container = $('.projects'),
    content = $('.js-projects-container'),
    spinner = $('<div class="spinner"></div>'),
    loadBtn = $('.js-projects-show-more');

  var loadProjects = function () {
    $.ajax({
      url: 'projects-ajax.html',
      type: 'GET',
      success: function(data) {
        setTimeout(function () { // emulate server delay
          container.find('.spinner').remove();
          content.append(data);
          loadBtn.prop('disabled', false);
          $('.popup').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: true,
            fixedContentPos: true,
            mainClass: 'mfp-fade', // class to remove default margin from left and right side
            image: {
              verticalFit: true,
              hozizontalFit: true,
            },
            removalDelay: 300,
          });
        }, 1000);
      },
      beforeSend: function() {
        spinner.insertBefore(loadBtn);
        loadBtn.prop('disabled', true);
      }
    });
  };


  $('.js-projects-show-more').click(function(e) {
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
