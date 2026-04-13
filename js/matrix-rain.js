/**
 * MATRIX BENTO-ENGINE V3.0 (Multi-Instance Edition)
 * Optimizado para renderizar múltiples lienzos en una grilla dinámica.
 */

(function () {
  const fontSize = 14;
  const fps = 24;
  let lastTime = 0;
  let letters =
    "ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789$+-*/=%\"\'#&_(),.;:?!\\|{}[]".split(
      "",
    );

  // Almacenaremos la configuración de cada celda aquí
  let engines = [];

  /**
   * Inicializa cada canvas encontrado en la grilla bento
   */
  function setupEngines() {
    engines = []; // Reset
    const canvases = document.querySelectorAll(".matrix-canvas");

    canvases.forEach((canvas) => {
      const parent = canvas.parentElement;

      // Ajustamos el canvas al tamaño real de su celda bento
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;

      const columns = Math.floor(canvas.width / fontSize);
      const drops = [];

      for (let i = 0; i < columns; i++) {
        // Inicialización aleatoria para que no todas las lluvias empiecen igual
        drops[i] = Math.floor(Math.random() * (canvas.height / fontSize));
      }

      engines.push({
        canvas,
        ctx: canvas.getContext("2d"),
        drops,
        columns,
      });
    });
  }

  /**
   * Obtiene el color desde el CSS (sincronizado con tus variables)
   */
  function getActiveThemeColor() {
    return (
      getComputedStyle(document.documentElement)
        .getPropertyValue("--c-matrix")
        .trim() || "#00ff41"
    );
  }

  /**
   * Ciclo de dibujo único para todas las celdas
   */
  function animate(currentTime) {
    const deltaTime = currentTime - lastTime;

    if (deltaTime > 1000 / fps) {
      lastTime = currentTime;
      const themeColor = getActiveThemeColor();

      // Iteramos por cada motor (cada celda bento)
      engines.forEach((engine) => {
        const { ctx, canvas, drops, columns } = engine;

        // Efecto rastro (Fade)
        ctx.fillStyle = "rgba(13, 13, 13, 0.15)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px var(--f-mono)`;
        ctx.fillStyle = themeColor;

        for (let i = 0; i < drops.length; i++) {
          const text = letters[Math.floor(Math.random() * letters.length)];

          // x = posición de columna, y = posición de la gota
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          // Reset de la gota si llega al final
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }

          drops[i]++;
        }
      });
    }

    requestAnimationFrame(animate);
  }

  // --- CONTROL DE EJECUCIÓN ---

  // Inicializamos todos los canvas al cargar
  setupEngines();

  // Iniciamos el loop de animación
  requestAnimationFrame(animate);

  // Escucha inteligente para reajustar los tamaños al cambiar la ventana
  window.addEventListener("resize", () => {
    setupEngines();
  });
})();
