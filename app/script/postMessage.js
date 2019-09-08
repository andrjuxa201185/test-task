document.addEventListener('DOMContentLoaded', () => {
  let data = { password: 'ok' };

  const frame = document.querySelector('iframe');

  frame.onload = () => {
    frame.contentWindow.postMessage(data, '*');
  }
  console.log('bouncy ok');
});