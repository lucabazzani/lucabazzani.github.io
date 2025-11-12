// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {

    // Inicializa la librería AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Duración de la animación en ms
        once: true, // La animación solo ocurre una vez
    });

    // Configuración de Typed.js para el efecto máquina de escribir
    const options = {
        strings: [
            "> Soy Luca Bazzani.",
            "> Desarrollador de Software."
        ],
        typeSpeed: 80,  // Velocidad de escritura
        backSpeed: 25,  // Velocidad de borrado
        backDelay: 1500, // Pausa antes de borrar
        loop: true      // Repetir la animación
    };

    const typed = new Typed('#typed-text', options);

});