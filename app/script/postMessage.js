document.addEventListener('DOMContentLoaded', () => {
  console.log('test task ok');
  let data = { password: 'ok' };

  const frame = document.querySelector('iframe');

  frame.onload = () => {
    frame.contentWindow.postMessage(data, '*');
  }
});

window.addEventListener("message", receiver, false);

function receiver(e) {
  console.log(e.data, '----------resp-----------!');
}