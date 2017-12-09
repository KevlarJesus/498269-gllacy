var callbackBtn = document.querySelector('.map-button');

var popup = document.querySelector('.callback-form');

var close = popup.querySelector('.modal-close');

var wrapperBlack = document.querySelector('.wrapper-black');

var form = popup.querySelector('form');
var modalText = popup.querySelector('[name=textarea]');
var modalEmail = popup.querySelector('[name=email]');

callbackBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  modalName.focus();
  wrapperBlack.classList.add('wrapper-show');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});

form.addEventListener('submit', function (evt) {
  if (!modalText.value || !modalEmail.value) {
  evt.preventDefault();
  alert('Необходимо указать почту и написать вопрос');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
    };
  };
});
