/* eslint-disable */
$(function () {
  var form = $('.js-order-service-form'),
      btn = form.find('.order__button'),
      spinner = $('<div class="spinner"></div>'),
      nameField = $('#orderName'),
      emailField = $('#orderEmail'),
      phoneField = $('#orderPhone'),
      serviceField = $('#orderService');

  form.submit(function (e) {
    e.preventDefault();

    // ПРОВЕНКА НА ЗАПОЛНЕНИЕ ПОЛЯ - ИМЯ
    if (nameField.val() === '') {
      nameField.addError('Это поле обязательно к заполнению');
    } else {
      nameField.removeError();
    }

    // ПРОВЕНКА ПОЛЯ - Е-МЕЙЛ
    if (!/^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/.test(emailField.val())) {
      emailField.addError('Введите корректный адрес электронной почты');
    } else {
      emailField.removeError();
    }

    // ПРОВЕНКА ПОЛЯ - ТЕЛЕФОН
    if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phoneField.val())) {
      phoneField.addError('Введите корректный номер телефона');
    } else {
      phoneField.removeError();
    }

    // ПРОВЕРКА ПОЛЯ - ВЫБЕРИТЕ УСЛУГУ
    if (serviceField.find('input').val() === '') {
      serviceField.addError('Выберите одну из услуг');
    } else {
      serviceField.removeError();
    }

    // если есть ошибки, то не отправляем запрос на сервер
    if (form.find('.has-error').length) {
      return false;
    }

    // AJAX запрос
    $.ajax({
      url: '/', // URL ДЛЯ ОБРАБОТКИ ФОРМЫ
      type: 'POST',
      send: form.serialize(),
      success: function () {
        setTimeout(function () { // ЭМУЛЯЦИЯ ЗАДЕРКИ ОТВЕТА СЕРВЕРА, НУЖНО БУДЕТ УБРАТЬ
          form.find('.spinner').remove();
          btn.prop('disabled', false);

          // ПЕРЕАДРЕСАЦИЯ
          window.location.href = 'order-service-success.html';
        }, 1000);
      },
      beforeSend: function () {
        spinner.insertBefore(btn);
        btn.prop('disabled', true);
      },
    });
  });
});
