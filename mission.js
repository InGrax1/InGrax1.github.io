// ======== mission.js ========
document.addEventListener('DOMContentLoaded', () => {
  // 1) Llamamos a Splitting() para envolver cada carácter en <span class="char">
  console.log('mission.js → Llamando a Splitting()');
  Splitting();

  // 2) Obtenemos el nodo con clase .text--random
  const elementoMision = document.querySelector('.text--random');
  console.log('mission.js → elementoMision encontrado:', elementoMision);

  if (!elementoMision) {
    console.warn('mission.js → No se encontró ningún elemento con .text--random');
    return;
  }

  // 3) Para cada <span class="char">, asignamos un transform aleatorio inicial y dejamos opacidad 1
  //    Random en X e Y entre -100% y +100%
  const caracteres = elementoMision.querySelectorAll('.char');
  caracteres.forEach((char) => {
    // Generar valores aleatorios entre -100 y +100
    const randomX = Math.floor(Math.random() * 201) - 100; // [-100..100]
    const randomY = Math.floor(Math.random() * 201) - 100; // [-100..100]
    // Asignamos transform inline y opacidad 1
    char.style.transform = `translate(${randomX}%, ${randomY}%)`;
    char.style.opacity = '1';
  });

  // 4) Creamos un IntersectionObserver para disparar la animación cuando al menos el 50 % sea visible
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        console.log('mission.js → IntersectionObserver entry:', entry);
        // Si al menos 50 % del contenedor está en pantalla
        if (entry.intersectionRatio >= 0.5) {
          console.log('mission.js → >50% visible, agregando data-visible="true"');
          entry.target.setAttribute('data-visible', 'true');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(elementoMision);
});
