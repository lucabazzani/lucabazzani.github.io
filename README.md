# MATRIX BENTO PORTFOLIO // v3.0

### Matrix Bento Portfolio por Luca Bazzani

![Licencia](https://img.shields.io/badge/Status-Stable-00ff41?style=for-the-badge&logo=matrix&logoColor=0d0d0d)
![Tech](https://img.shields.io/badge/Engine-Vanilla_JS_/_CSS3-white?style=for-the-badge)

Este proyecto representa una evolución visual desde el concepto de "fan-site" hacia un **Bento Grid System** de alta fidelidad. Es una interfaz inmersiva que combina la estética ciber-minimalista de "The Matrix" con un enfoque de arquitectura de software profesional.

---

## Arquitectura del Layout (Bento Grid)

El portfolio está construido sobre un sistema de grilla asimétrica de 6 módulos (6x6 CSS Grid en escritorio) que se adapta dinámicamente a un stack vertical en dispositivos móviles.

### **Desglose de Módulos (Células):**

1.  **IDENTIDAD DEL DEV**: Módulo principal de biografía técnica con integración de `Typed.js`.
2.  **PROTOCOLO DE SKILLS**: Visualización de "Arsenal Tecnológico" mediante barras de estado en ASCII.
3.  **MONITOR DEL SISTEMA**: Reloj en tiempo real (RTC) y simulación de latencia de red (Ping) activa.
4.  **MÓDULO DESTACADO**: Terminal de inspección de proyecto destacado con etiquetas de metadatos.
5.  **FORMAS DE CONTACTO**: Hub de comunicación estable para enlaces sociales y contacto.
6.  **RADAR EXPERIMENTAL**: Módulo abstracto decorativo renderizado en Canvas JS de 60fps.

---

## Características Técnicas Sobresalientes

### **1. Matrix-Rain Engine V3.0**

A diferencia de los scripts de lluvia estándar, este portfolio utiliza un **Motor Multi-Instancia**. Centraliza el renderizado de múltiples celdas Bento en un único hilo de ejecución mediante `requestAnimationFrame`, optimizando drásticamente el uso de CPU/GPU del navegador.

### **2. Cyber-Minimalism UI**

- **Glassmorphism 2.0**: Capas de transparencia profunda con `backdrop-filter` para emular una interfaz de comandos de alta gama.
- **Mobile-First Adaptability**: Re-estructuración completa del flujo visual para garantizar que los datos críticos sean legibles en pantallas táctiles verticales.
- **No-Scroll Identity**: En escritorio, la página actúa como una "single-pane app" (SPA visual), permitiendo navegar toda tu carrera sin desplazamientos.

### **3. Interconectividad CSS-JS**

Los motores de dibujo del Canvas obtienen los parámetros de color directamente de las **variables de raíz de CSS** (`:root`), permitiendo cambios globales de tema con una sola línea de código.

---

## Tecnologías Utilizadas

- **Estructura:** HTML5 Semántico + CSS3 (Flexbox/Grid).
- **Lógica:** JavaScript ES6+ (Multi-Canvas Handling).
- **Librerías:**
  - `AOS.js` (Revelado de componentes al cargar).
  - `Typed.js` (Efectos de comandos de terminal).
  - `FontAwesome` (Iconografía de protocolos).

---

## Despliegue Directo

Para correr este proyecto localmente:

1. Clonar el repositorio.
2. Abrir `index.html` con Live Server.

Para editar tu información:

- **Biografía:** Busca el `Bloque 1` en `index.html`.
- **Skills:** Modifica las barras ASCII en el `Bloque 2`.
- **Contacto:** Actualiza las URLs en el `Bloque 5`.

---

**Luca Bazzani // 2026**
