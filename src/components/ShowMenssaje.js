import Toastify from 'toastify-js';

export function showMenssaje(messaje, type = 'success') {
  Toastify({
    text: messaje,
    duration: 1500,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'center', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === 'success' ? 'green' : 'red',
    },
    onClick() {}, // Callback after click
  }).showToast();
}
