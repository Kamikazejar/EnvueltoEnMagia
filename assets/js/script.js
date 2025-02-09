function ajustarNavbar() {
    const titulo = document.getElementById("titulo");
    const logo = document.getElementById("logomagia");

    if (window.innerWidth <= 768) {
        // En dispositivos móviles
        titulo.style.display = "none"; // Oculta el título
        logo.style.maxWidth = "200px"; // Tamaño del logo
    } else if (window.innerWidth <= 1024) {
        // En tablets (pantallas entre 768px y 1024px)
        titulo.style.display = "none"; // Oculta el título
        logo.style.maxWidth = "150px"; // Tamaño del logo
    } else {
        // En pantallas grandes
        titulo.style.display = "block"; // Muestra el título
        logo.style.maxWidth = "250px"; // Tamaño original del logo
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link"); // Selecciona todos los enlaces del navbar

    // Escucha los clics en cada enlace
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remueve la clase "active" de todos los enlaces
            navLinks.forEach(nav => nav.classList.remove("active"));
            // Agrega la clase "active" al enlace que fue clicado
            this.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Todas las secciones
    const navLinks = document.querySelectorAll(".nav-link"); // Enlaces del navbar
    const firstSection = document.querySelector("#Inicio"); // Inicio
    const lastSection = document.querySelector("#FAQs"); // Última sección (FAQs)

    function highlightNav() {
        let scrollY = window.scrollY; // Posición del scroll

        // 🔹 1. Si está al inicio de la página, activa "Inicio"
        if (scrollY === 0) {
            navLinks.forEach(link => link.classList.remove("active"));
            document.querySelector(`.nav-link[href="#Inicio"]`)?.classList.add("active");
            return; // Detiene la función para evitar sobreescribir
        }

        // 🔹 2. Si está al final de la página, activa "FAQs"
        if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 10) {
            navLinks.forEach(link => link.classList.remove("active"));
            document.querySelector(`.nav-link[href="#FAQs"]`)?.classList.add("active");
            return;
        }

        // 🔹 3. Detectar la sección actual
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Ajuste para detectar bien
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove("active"));
                document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", highlightNav); // Detecta el scroll
});
// Ejecuta la función al cargar la página
document.addEventListener("DOMContentLoaded", ajustarNavbar);

// Ejecuta la función cuando se redimensiona la ventana
window.addEventListener("resize", ajustarNavbar);
