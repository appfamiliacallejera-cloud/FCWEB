/* scripts.js */
console.log("FCWEB cargada correctamente.");

/* --------------------------------------------------
   ELEMENTOS
-------------------------------------------------- */
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

/* --------------------------------------------------
   ABRIR SIDEBAR
-------------------------------------------------- */
menuBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
});

/* --------------------------------------------------
   CERRAR SIDEBAR (botón ✕)
-------------------------------------------------- */
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});

/* --------------------------------------------------
   CERRAR AL HACER CLIC FUERA DEL MENÚ
-------------------------------------------------- */
document.addEventListener("click", (e) => {
    // Si el menú NO está abierto → ignorar
    if (!sidebar.classList.contains("open")) return;

    // Si se hace clic dentro del sidebar → no cerrar
    if (sidebar.contains(e.target) || menuBtn.contains(e.target)) return;

    // Si se clicó fuera → cerrar
    sidebar.classList.remove("open");
});


