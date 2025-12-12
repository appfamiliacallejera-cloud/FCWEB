// scripts.js
console.log("FCWEB cargada correctamente.");

// Elementos
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const menuBtnDesktop = document.getElementById("menuBtnDesktop");
const menuBtnMobile = document.getElementById("menuBtnMobile");

// Safety: si no existen los elementos, no lanzar errores
function safeAddEvent(el, ev, fn) {
  if (!el) return;
  el.addEventListener(ev, fn);
}

// Abrir sidebar
function openSidebar() {
  if (!sidebar) return;
  sidebar.classList.add("open");
}

// Cerrar sidebar
function closeSidebar() {
  if (!sidebar) return;
  sidebar.classList.remove("open");
}

// Listeners para botones (si existen)
safeAddEvent(menuBtnDesktop, "click", openSidebar);
safeAddEvent(menuBtnMobile,  "click", openSidebar);
safeAddEvent(closeBtn,       "click", closeSidebar);

// Cerrar al hacer clic en un enlace dentro del sidebar
if (sidebar) {
  sidebar.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      closeSidebar();
    });
  });
}

// Cerrar al hacer clic fuera del sidebar
document.addEventListener("click", (e) => {
  if (!sidebar || !sidebar.classList.contains("open")) return;

  // Si clic dentro del sidebar, no cerrar
  if (sidebar.contains(e.target)) return;

  // Si clic en cualquiera de los dos botones, no cerrar
  if ((menuBtnDesktop && menuBtnDesktop.contains(e.target)) ||
      (menuBtnMobile  && menuBtnMobile.contains(e.target))) return;

  // clic fuera -> cerrar
  closeSidebar();
});

// Soporte teclado: Escape cierra el sidebar
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSidebar();
});
