// ======== vision.js ========
document.addEventListener('DOMContentLoaded', () => {
  console.log('vision.js → Llamando a Splitting()');
  Splitting();

  const elementoVision = document.querySelector('.text--swapsies');
  console.log('vision.js → elementoVision encontrado:', elementoVision);
  if (!elementoVision) {
    console.warn('vision.js → No se encontró ningún elemento con .text--swapsies');
    return;
  }

  // Ahora usamos threshold: 0.5 (50 %) para que el usuario tenga
  // que hacer scroll hasta que la mitad de la sección "Visión" esté visible.
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      console.log('vision.js → IntersectionObserver entry:', entry);
      // En lugar de entry.isIntersecting directo, comprobamos que al menos 0.5 esté visible
      if (entry.intersectionRatio >= 0.5) {
        console.log('vision.js → >50% visible, agregando data-visible="true"');
        entry.target.setAttribute('data-visible', 'true');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(elementoVision);
});
