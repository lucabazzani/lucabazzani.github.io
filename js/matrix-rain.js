/**
 * MATRIX RAIN ENGINE V2.0 (High Performance Edition)
 * Optimización basada en requestAnimationFrame y sincronización con CSS Variables.
 */

(function () {
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas.getContext("2d");

  let fontSize = 14; // Un poco más grande para mejor legibilidad en pantallas retina
  let columns = 0;
  let drops = [];
  let letters =
    "ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789$+-*/=%\"\'#&_(),.;:?!\\|{}[]".split(
      "",
    );

  // Control de FPS para mantener la estética "cine" de Matrix (entre 20 y 30 fps)
  const fps = 24;
  let lastTime = 0;

  /**
   * Inicializa o reinicia las columnas del canvas sin perder totalmente el progreso
   */
  function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);

    // Si redimensionamos, mantenemos los drops actuales y rellenamos solo si faltan
    let newDrops = [];
    for (let i = 0; i < columns; i++) {
      newDrops[i] = drops[i] || Math.floor(Math.random() * -canvas.height);
    }
    drops = newDrops;
  }

  /**
   * Obtiene el color dinámico del tema desde CSS para mantener la coherencia
   */
  function getActiveThemeColor() {
    const body = document.body;
    // Si el título está en estado "Easter Egg", usamos el color de acento de error (Naranja/Rojo)
    if (body.classList.contains("glitch-active")) return "#ff3131";

    // Por defecto, obtenemos la variable del color Matrix configurada en el :root de CSS
    return (
      getComputedStyle(document.documentElement)
        .getPropertyValue("--c-matrix")
        .trim() || "#00ff41"
    );
  }

  function draw(currentTime) {
    // Calculamos el tiempo transcurrido desde el último frame
    const deltaTime = currentTime - lastTime;

    // Solo dibujamos si ha pasado el tiempo suficiente según nuestros FPS objetivo
    if (deltaTime > 1000 / fps) {
      lastTime = currentTime;

      // Efecto rastro (Fade): Usamos un color oscuro con poca opacidad
      // El color de fondo debe coincidir con --c-matrix-bg del CSS
      ctx.fillStyle = "rgba(13, 13, 13, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px var(--f-mono)`;
      ctx.fillStyle = getActiveThemeColor();

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];

        // Dibujamos el caracter. Usamos x = i * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Si la gota llega al final o por azar después de tocar el borde inferior
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    // Solicitamos el siguiente frame al navegador
    requestAnimationFrame(draw);
  }

  // --- EJECUCIÓN ---

  // Configuración inicial
  setupCanvas();

  // Lanzamos la animación usando el estándar del navegador
  requestAnimationFrame(draw);

  // Escucha inteligente de resize (sin resetear toda la animación)
  window.addEventListener("resize", () => {
    // Podríamos añadir un pequeño debounce aquí, pero setupCanvas es ligero
    setupCanvas();
  });
})();
