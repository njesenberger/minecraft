export default () => {
  setViewHeight();

  window.addEventListener('resize', () => {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(setViewHeight, 200);
  });

  function setViewHeight() {
    const vh = window.innerHeight / 100;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
};