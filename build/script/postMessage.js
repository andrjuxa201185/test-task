document.addEventListener('DOMContentLoaded', () => {
  let data = { password: 'ok' };

  const frame = document.querySelector('iframe');

  frame.onload = () => {
    frame.contentWindow.postMessage(data, '*');
  }
});

window.addEventListener("message", receiver, false);

function receiver(e) {
  console.log(e.data, e, '----------resp-----------!');
}