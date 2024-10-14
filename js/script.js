const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

// Alternar el menú hamburguesa cuando se hace clic
mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Cerrar el menú hamburguesa al seleccionar un enlace
navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("open");
  }
});

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function changeSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1; // Va al último slide si está en el primero
  } else if (currentSlide >= slides.length) {
    currentSlide = 0; // Va al primero si está en el último
  }

  showSlide(currentSlide);
}

// Inicializa el carrusel mostrando el primer slide
showSlide(currentSlide);
