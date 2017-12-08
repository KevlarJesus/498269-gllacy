var callbackBtn = document.querySelector('.map-button');

var popup = document.querySelector('.callback-form');

var close = document.querySelector('.modal-close');

callbackBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});
