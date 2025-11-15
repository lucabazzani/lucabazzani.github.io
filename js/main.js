// Espera a que todo el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  // =========================================================================
  // 1. INICIALIZACIÓN DE LIBRERÍAS
  // =========================================================================
  AOS.init({
    duration: 1500,
    once: true,
  });

  // --- Configuración centralizada de Typed.js ---
  const typedTarget = "#typed-text";

  // Opciones para la animación original
  const originalTypedOptions = {
    strings: ["> Soy Luca Bazzani.^1000", "> Desarrollador de Software.^1000"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    loop: true,
    smartBackspace: true,
    cursorChar: "|",
  };

  // Declaramos la variable que contendrá la instancia de Typed
  // Usamos 'let' para poder reasignarla
  let typedHeroInstance = new Typed(typedTarget, originalTypedOptions);

  // =========================================================================
  // 2. LÓGICA DE MODAL DE PROYECTOS (Sin cambios)
  // =========================================================================
  const proyectoModal = document.getElementById("modal-proyecto");
  const modalProyectoBody = document.getElementById("modal-proyecto-body");
  const closeProyectoModalBtn = document.getElementById("close-proyecto-modal");
  const projectCards = document.querySelectorAll(".project-card");

  const projectData = {
    1: {
      title: "Bolívar Connect",
      type: "Aplicación de Escritorio Standalone",
      details:
        'Desarrollada para ofrecer una solución robusta y centralizada, esta aplicación optimiza los procesos administrativos del club, reduciendo el trabajo manual y mejorando la precisión de los datos. La <span class="easter-egg-word" data-egg-text="There is no spoon.">gestión</span> de la interfaz, construida con JavaFX, fue diseñada para ser intuitiva y fácil de usar para personal no técnico.',
      tech: ["Java", "JavaFX", "MySQL"],
    },
    2: {
      title: "Inova Nexus",
      type: "App Móvil Nativa para Android",
      details:
        "Inova Nexus es una herramienta integral pensada por y para amantes de la literatura. Permite a los usuarios organizar sus lecturas, hacer seguimiento de su progreso de escritura y tomar notas. La arquitectura nativa en Kotlin asegura un rendimiento fluido y una experiencia de usuario óptima.",
      tech: ["Kotlin", "Android Nativo", "SQLite"],
    },
    3: {
      title: "Calcutron",
      type: "Herramienta de Cómputo para Escritorio",
      details:
        'Inspirada en la estética retro-futurista de "Tron", esta aplicación combina funcionalidad con un diseño único, proveyendo soluciones visuales para problemas de estadística, operaciones con matrices y cálculo de integrales.',
      tech: ["Java", "JavaFX"],
    },
  };

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.dataset.projectId;
      const data = projectData[projectId];

      modalProyectoBody.innerHTML = `
                <h3 class="modal__title">${data.title}</h3>
                <p><strong>Tipo:</strong> ${data.type}</p>
                <p>${data.details}</p>
                <div class="project-card__tech">
                    ${data.tech.map((t) => `<span>${t}</span>`).join("")}
                </div>
                <button href="#contacto" class="modal-cta-button" id="modal-contact-btn">Solicitar Proyecto Similar</button>
            `;

      proyectoModal.classList.add("active");

      const eggWord = modalProyectoBody.querySelector(".easter-egg-word");
      if (eggWord) {
        eggWord.addEventListener("click", triggerNoSpoonEasterEgg);
      }

      document
        .getElementById("modal-contact-btn")
        .addEventListener("click", () => {
          proyectoModal.classList.remove("active");
          document
            .getElementById("contacto")
            .scrollIntoView({ behavior: "smooth" });
        });
    });
  });

  closeProyectoModalBtn.addEventListener("click", () =>
    proyectoModal.classList.remove("active")
  );
  window.addEventListener("click", (e) => {
    if (e.target === proyectoModal) proyectoModal.classList.remove("active");
  });

  // =========================================================================
  // 3. LÓGICA DE LA SECCIÓN "SOBRE MÍ / EQUIPO" (Solución Definitiva y Final)
  // =========================================================================

  const viewToggle = document.getElementById("view-toggle");
  const aboutSection = document.getElementById("about");
  const aboutMeView = document.getElementById("about-me-view");
  const aboutTeamView = document.getElementById("about-team-view");

  viewToggle.addEventListener("change", () => {
    const isTeamView = viewToggle.checked;
    aboutSection.classList.toggle("team-view-active", isTeamView);
    if (isTeamView) {
      aboutMeView.classList.remove("active");
      aboutTeamView.classList.add("active");
    } else {
      aboutTeamView.classList.remove("active");
      aboutMeView.classList.add("active");
    }
  });

  // ==== LÓGICA DE ACORDEÓN FINAL Y ROBUSTA ====
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const accordion = button.closest(".faq-accordion");
      const wasActive = item.classList.contains("active");

      // Cerrar todos los items
      accordion.querySelectorAll(".faq-item").forEach((otherItem) => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq-answer").style.maxHeight = null;
      });

      // Abrir el item clickeado si no estaba ya abierto
      if (!wasActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // Lógica para el link "AlgoDev" en la nav
  const navEquipoLink = document.getElementById("nav-equipo-link");
  navEquipoLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (!viewToggle.checked) {
      viewToggle.click();
    }
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });

  // Inyectar botones de contacto del equipo
  const teamContactContainer = document.querySelector(".team-contact-links");
  const teamContacts = [
    { name: "WhatsApp", icon: "whatsapp", color: "25D366", link: "#" },
    { name: "Gmail", icon: "gmail", color: "D14836", link: "mailto:#" },
    { name: "GitHub", icon: "github", color: "181717", link: "#" },
  ];
  let contactHTML = "";
  teamContacts.forEach((contact) => {
    contactHTML += `
        <a href="${contact.link}" target="_blank">
            <img src="https://img.shields.io/badge/${contact.name}-${contact.color}?style=for-the-badge&logo=${contact.icon}&logoColor=white" alt="Contacto de AlgoDev por ${contact.name}"/>
        </a>
    `;
  });
  teamContactContainer.innerHTML = contactHTML;

  // =========================================================================
  // 4. LÓGICA DE EASTER EGGS (Refactorización masiva y final)
  // =========================================================================

  let easterEggActive = false; // Flag para evitar múltiples clics
  const rabbitBtn = document.getElementById("rabbit-btn");

  rabbitBtn.addEventListener("click", () => {
    if (easterEggActive) return;

    easterEggActive = true;
    const heroTitle = document.querySelector(".hero__title");

    // 1. Aplicar efectos visuales
    document.body.classList.add("glitch-active");
    heroTitle.classList.add("egg-active");

    // 2. Destruir animación existente y crear la del conejo
    typedHeroInstance.destroy();
    const rabbitTyped = new Typed(typedTarget, {
      strings: ["> Follow the white rabbit..."],
      typeSpeed: 50,
      loop: false,
      showCursor: true,
      cursorChar: "|",
      onComplete: (self) => {
        setTimeout(() => {
          // 3. Restaurar la normalidad visual
          document.body.classList.remove("glitch-active");
          heroTitle.classList.remove("egg-active");

          self.destroy(); // Destruir animación del conejo

          // 4. Restaurar la animación original
          typedHeroInstance = new Typed(typedTarget, originalTypedOptions);

          // 5. Scroll final al footer
          document
            .querySelector("footer")
            .scrollIntoView({ behavior: "smooth" });

          easterEggActive = false; // Liberar el flag
        }, 1500); // Pausa de 1.5s
      },
    });
  });

  // --- 4.2 "Un Fallo en la Matrix" (CORREGIDO PARA SER REPETIBLE) ---
  const techItems = document.querySelectorAll(".tech-item");

  function assignGlitchEasterEgg() {
    // Si ya existe un glitch-egg, lo quitamos antes de asignar uno nuevo
    const existingGlitch = document.querySelector(".glitch-egg");
    if (existingGlitch) {
      // Clonamos y reemplazamos el nodo para eliminar todos los listeners antiguos
      const newEl = existingGlitch.cloneNode(true);
      existingGlitch.parentNode.replaceChild(newEl, existingGlitch);
      newEl.classList.remove("glitch-egg");
    }

    if (techItems.length > 0) {
      const randomIndex = Math.floor(Math.random() * techItems.length);
      const glitchItem = techItems[randomIndex];

      glitchItem.classList.add("glitch-egg");

      // Creamos una función nombrada para poder eliminarla y re-añadirla
      const glitchClickHandler = () => {
        // El resto de la lógica del easter egg es el mismo
        triggerGlitchEasterEgg("I know Kung Fu...");
        // Una vez usado, se quita la clase para que el usuario no lo clickee
        // varias veces seguidas mientras la animación ocurre.
        glitchItem.classList.remove("glitch-egg");
      };

      glitchItem.addEventListener("click", glitchClickHandler);
    }
  }

  // Y la función genérica ahora tiene la responsabilidad de reasignar el easter egg al terminar
  function triggerGlitchEasterEgg(text) {
    if (easterEggActive) return;
    easterEggActive = true;

    document.body.classList.add("glitch-active");
    document.querySelector(".hero__title").classList.add("egg-active");

    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });

    typedHeroInstance.destroy();
    const eggTyped = new Typed("#typed-text", {
      strings: [`> ${text}`],
      typeSpeed: 50,
      loop: false,
      showCursor: true,
      cursorChar: "|",
      onComplete: (self) => {
        setTimeout(() => {
          document.body.classList.remove("glitch-active");
          document.querySelector(".hero__title").classList.remove("egg-active");
          self.destroy();
          typedHeroInstance = new Typed("#typed-text", originalTypedOptions);
          easterEggActive = false;
          // asignamos el easter egg a un nuevo ícono aleatorio.
          assignGlitchEasterEgg();
        }, 2500);
      },
    });
  }

  // Iniciar la asignación del primer easter egg al cargar la página
  assignGlitchEasterEgg();

  // --- 4.3 "There is no spoon" (Simplificado) ---
  function triggerNoSpoonEasterEgg() {
    // Cerramos la modal
    proyectoModal.classList.remove("active");

    // Esperamos a que se cierre y luego llamamos a la función genérica
    setTimeout(() => {
      triggerGlitchEasterEgg("There is no spoon...");
    }, 300); // Coincide con la duración de la transición del modal
  }
});
