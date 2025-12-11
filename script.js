// Small script to add subtle floating effect to the logo
(() => {
  const logo = document.querySelector('.logo');
  if (!logo) return;
  let t = 0;
  function float() {
    t += 0.03;
    const y = Math.sin(t) * 6;
    logo.style.transform = `translateY(${y}px)`;
    requestAnimationFrame(float);
  }
  requestAnimationFrame(float);
})();
