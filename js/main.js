/**
 * CORE ARCHITECTURE V2.0 - BY LUCA BAZZANI
 * Senior-level logic for terminal-interface, view transitions and easter eggs.
 */

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------------------------------------------------
  // 1. SYSTEM INITIALIZATION (Libraries)
  // -------------------------------------------------------------------------

  // Animate On Scroll (AOS) - Configuración para entrada técnica
  AOS.init({
    duration: 800, // Entradas más rápidas y precisas
    easing: "ease-out-quad",
    once: true,
  });

  // TYPED.JS CONFIG - Estética de comandos de consola
  const typedTarget = "#typed-text";
  const baseOptions = {
    strings: [
      "> Iniciando",
      "> Luca Bazzani",
      "> Software Dev",
      "> Innovative",
      "> TodoNerds",
      "> Let's Connect",
    ],
    typeSpeed: 30,
    backSpeed: 15,
    backDelay: 2000,
    loop: true,
    cursorChar: "▮", // Cursor tipo bloque (más senior/vintage)
  };

  let heroTyped = new Typed(typedTarget, baseOptions);

  // -------------------------------------------------------------------------
  // 2. PROJECT ENGINE (Modal System)
  // -------------------------------------------------------------------------

  const projectData = {
    1: {
      title: "BOLÍVAR CONNECT",
      type: "Desktop App / System Core",
      details:
        "Software de gestión administrativa diseñado con JavaFX para optimizar la digitalización institucional. Enfoque en eficiencia de procesos y persistencia de datos segura.",
      tech: ["Java", "JavaFX", "MySQL"],
      egg: "No_Spoon",
    },
    2: {
      title: "INOVA NEXUS",
      type: "Mobile OS Application",
      details:
        "Plataforma móvil nativa orientada a la gestión literaria. Implementada bajo estándares Clean Architecture en Kotlin para garantizar máxima escalabilidad.",
      tech: ["Kotlin", "SQLite", "Firebase"],
      egg: "Kung_Fu",
    },
    3: {
      title: "CALCUTRON",
      type: "Scientific Computing Tool",
      details:
        "Calculadora de análisis numérico inspirada en sistemas retro-futuristas. Procesamiento avanzado de matrices y modelos estadísticos.",
      tech: ["Java", "VLC Libraries"],
      egg: "Follow_The_Rabbit",
    },
  };

  const modal = {
    el: document.getElementById("modal-proyecto"),
    body: document.getElementById("modal-proyecto-body"),
    closeBtn: document.getElementById("close-proyecto-modal"),

    open(id) {
      const data = projectData[id];
      if (!data) return;

      this.body.innerHTML = `
                <h3 class="accent">// ${data.title}</h3>
                <p class="project-type">${data.type}</p>
                <p class="project-desc">${data.details}</p>
                <div class="modal-tech-grid">
                    ${data.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
                </div>
                <div class="modal-footer">
                    <button class="cta-primary" id="modal-cta-close">FINALIZAR CONEXIÓN</button>
                </div>
            `;
      this.el.classList.add("active");

      // Re-asignar eventos a los nuevos botones inyectados
      document.getElementById("modal-cta-close").onclick = () => this.close();
    },
    close() {
      this.el.classList.remove("active");
    },
  };

  // Eventos de Proyectos
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => modal.open(card.dataset.projectId));
  });

  modal.closeBtn.onclick = () => modal.close();
  window.onclick = (e) => {
    if (e.target === modal.el) modal.close();
  };

  // -------------------------------------------------------------------------
  // 3. UI VIEW TOGGLE (System Overrides)
  // -------------------------------------------------------------------------

  const viewToggle = document.getElementById("view-toggle");
  const aboutSection = document.getElementById("about");
  const views = {
    personal: document.getElementById("about-me-view"),
    team: document.getElementById("about-team-view"),
  };

  viewToggle.addEventListener("change", (e) => {
    const isTeam = e.target.checked;
    aboutSection.classList.toggle("team-view-active", isTeam);

    if (isTeam) {
      views.personal.classList.remove("active");
      views.team.classList.add("active");
    } else {
      views.team.classList.remove("active");
      views.personal.classList.add("active");
    }
  });

  // ACORDEÓN SEMÁNTICO (Mejorado para <details>)
  // Permite que solo un item esté abierto a la vez en modo "Senior UX"
  const accordionDetails = document.querySelectorAll(".accordion-item");
  accordionDetails.forEach((target) => {
    target.addEventListener("toggle", (e) => {
      if (target.open) {
        accordionDetails.forEach((el) => {
          if (el !== target) el.open = false;
        });
      }
    });
  });

  // -------------------------------------------------------------------------
  // 4. INTERFERENCE ENGINE (Easter Eggs)
  // -------------------------------------------------------------------------

  let interferenceActive = false;

  function triggerSystemInterference(msg, callback = null) {
    if (interferenceActive) return;
    interferenceActive = true;

    document.body.classList.add("glitch-active");
    heroTyped.destroy();

    new Typed(typedTarget, {
      strings: [`> ${msg}`],
      typeSpeed: 20,
      showCursor: false,
      onComplete: (self) => {
        setTimeout(() => {
          document.body.classList.remove("glitch-active");
          self.destroy();
          heroTyped = new Typed(typedTarget, baseOptions);
          interferenceActive = false;
          if (callback) callback();
        }, 2000);
      },
    });
  }

  // Conejo Blanco Trigger
  const rabbitBtn = document.getElementById("rabbit-btn");
  rabbitBtn.onclick = () => {
    triggerSystemInterference("FOLLOW THE WHITE RABBIT...", () => {
      document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
    });
  };

  // Glitch aleatorio en Tech-Stack
  const techItems = document.querySelectorAll(".tech-item");
  if (techItems.length) {
    const luckyItem = techItems[Math.floor(Math.random() * techItems.length)];
    luckyItem.addEventListener("click", () =>
      triggerSystemInterference("FATAL ERROR: KUNG_FU_INSTALLED"),
    );
  }

  // -------------------------------------------------------------------------
  // 5. SYSTEM CONSOLE LOG (Toque final del Desarrollador Senior)
  // -------------------------------------------------------------------------
  console.log(
    "%c // BAZZANI SYSTEM // %c Proyectos estables. ",
    "background: #00ff41; color: #0d0d0d; font-weight: bold; padding: 2px 5px; border-radius: 2px;",
    "color: #00ff41;",
  );
});

// --- LÓGICA DEL MONITOR DE SISTEMA (BLOQUE 3) ---

// 1. Reloj en tiempo real
function updateClock() {
  const timeDisplay = document.getElementById("current-time");
  if (!timeDisplay) return;

  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  timeDisplay.textContent = `${h}:${m}:${s}`;
}

// 2. Simulación de Latencia (Ping)
function updatePing() {
  const pingDisplay = document.getElementById("random-ping");
  if (!pingDisplay) return;

  const randomPing = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
  pingDisplay.textContent = `${randomPing}ms`;
}

// Iniciar intervalos
setInterval(updateClock, 1000);
setInterval(updatePing, 3000);
updateClock(); // Llamada inicial para evitar delay

// --- LÓGICA DEL RADAR (BLOQUE 6) ---
function initRadar() {
  const canvas = document.getElementById("radar-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = 200;
  canvas.height = 200;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  function drawRadarGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(0, 255, 65, 0.1)";
    ctx.lineWidth = 1;

    // Círculos concéntricos
    for (let i = 1; i <= 4; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (canvas.width / 2) * (i / 4), 0, Math.PI * 2);
      ctx.stroke();
    }

    // Cruces de eje
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, canvas.height);
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.stroke();
  }

  setInterval(drawRadarGrid, 100);
}
initRadar();
