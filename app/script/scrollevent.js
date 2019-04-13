window.addEventListener('load', () => {
  const windowHeight = window.innerHeight;
  const blockItems = document.querySelectorAll('.block-item');
  let blockOffset;
  if (blockItems[0]) {
    document.addEventListener('scroll', () => {
      for (const block of blockItems) {
        blockOffset = block.getBoundingClientRect().top;
        if (blockOffset < windowHeight - 200 && blockOffset > 0) {
          block.classList.add('show');
        } else {
          block.classList.remove('remove');
        }
      }
    });

  }
});