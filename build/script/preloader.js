window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader){
    setTimeout(() => {
      preloader.style.opacity = 0;
      document.body.classList.remove('no-scroll');
    },2000);
    setTimeout(() => {
      preloader.style.opacity = 0;
      document.body.classList.remove('no-scroll');
      preloader.style.display = 'none';
    },2500);
  }
});