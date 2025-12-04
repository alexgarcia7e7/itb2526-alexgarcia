// Animación de entrada para cada tarjeta
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 200 * i);
  });
});

// Fondo animado degradado para destacados
const destacados = document.querySelectorAll(".project-card.destacado");
destacados.forEach(card => {
  card.style.animation = "gradMove 6s ease infinite alternate";
});

// Keyframes dinámicos
const style = document.createElement("style");
style.textContent = `
@keyframes gradMove {
  0% { background-position: left top; }
  100% { background-position: right bottom; }
}
`;
document.head.appendChild(style);
