export default function () {
  const { $ } = window;

  $.fn.addError = function (message = null) { // eslint-disable-line func-names, consistent-return
    if (!this.hasClass('input') || this.hasClass('has-error')) {
      return this;
    }

    this.addClass('has-error');

    $(`<div class="input-error-message">${message}</div>`)
      .hide()
      .insertAfter(this)
      .fadeIn(250);
  };

  $.fn.removeError = function () { // eslint-disable-line func-names, consistent-return
    if (!this.hasClass('has-error') || !this.hasClass('input')) {
      return this;
    }

    this
      .removeClass('has-error')
      .next('.input-error-message')
      .fadeOut(250, function () { // eslint-disable-line func-names
        $(this).remove();
      });
  };
}
