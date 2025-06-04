document.addEventListener("DOMContentLoaded", function() {
    const sloganParagraph = document.querySelector(".slogan p");
    if (!sloganParagraph) return;
    
    // 1. Tomamos el texto original
    const originalText = sloganParagraph.textContent;
    // 2. Limpiamos el contenido
    sloganParagraph.innerHTML = "";
    
    // 3. Separamos en palabras (incluye signos de puntuación como parte de la "palabra")
    const words = originalText.split(/\s+/); 
    // Esto convertirá múltiples espacios en uno solo y dividirá en cada espacio
    
    words.forEach((word, index) => {
      // Creamos un contenedor para la palabra
      const wordSpan = document.createElement("span");
      wordSpan.classList.add("word");
      /* 
        display: inline-block -> La palabra se mantiene unida en la misma línea
        white-space: nowrap   -> No se rompe a la mitad
      */
      wordSpan.style.display = "inline-block";
      wordSpan.style.whiteSpace = "nowrap";
      // Añadimos un pequeño margen derecho para separar las palabras
      wordSpan.style.marginRight = "8px";
      
      // 4. Dentro de cada palabra, creamos un span por letra
      for (let char of word) {
        const letterSpan = document.createElement("span");
        letterSpan.textContent = char;
        letterSpan.style.display = "inline-block";
        letterSpan.style.transition = "transform 0.2s ease-out";
        // Agregamos cada letra al contenedor de la palabra
        wordSpan.appendChild(letterSpan);
      }
      
      // Añadimos la palabra completa al párrafo
      sloganParagraph.appendChild(wordSpan);
    });
  
    // 5. Evento mousemove para aplicar el efecto a cada letra
    document.addEventListener("mousemove", function(e) {
      // Obtenemos todas las letras (los spans dentro de .word)
      const letters = sloganParagraph.querySelectorAll(".word span");
      letters.forEach(letter => {
        const rect = letter.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Diferencia entre el centro de la letra y la posición del mouse
        const diffX = centerX - e.clientX;
        const diffY = centerY - e.clientY;
        const distance = Math.sqrt(diffX * diffX + diffY * diffY);
        
        // Umbral de distancia para el efecto
        const threshold = 100;
        let factor = 0;
        if (distance < threshold && distance !== 0) {
          factor = (threshold - distance) / threshold;
        }
        
        // Desplazamiento máximo (px)
        const maxOffset = 20;
        const offsetX = (diffX / distance) * factor * maxOffset || 0;
        const offsetY = (diffY / distance) * factor * maxOffset || 0;
        
        letter.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    });
  });
  