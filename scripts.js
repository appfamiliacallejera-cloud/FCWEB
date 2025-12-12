/* scripts.js */
console.log("FCWEB cargada correctamente.");

/* --------------------------------------------------
   ELEMENTOS
-------------------------------------------------- */
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

// Botones menú PC y móvil
const menuBtnDesktop = document.getElementById("menuBtnDesktop");
const menuBtnMobile  = document.getElementById("menuBtnMobile");

/* --------------------------------------------------
   ABRIR SIDEBAR DESDE CUALQUIER BOTÓN
-------------------------------------------------- */
function openSidebar() {
    sidebar.classList.add("open");
}

menuBtnDesktop.addEventListener("click", openSidebar);
menuBtnMobile.addEventListener("click", openSidebar);

/* --------------------------------------------------
   CERRAR SIDEBAR
-------------------------------------------------- */
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});

/* --------------------------------------------------
   CERRAR AL HACER CLIC FUERA
-------------------------------------------------- */
document.addEventListener("click", (e) => {
    if (!sidebar.classList.contains("open")) return;

    if (sidebar.contains(e.target)) return;
    if (menuBtnDesktop.contains(e.target)) return;
    if (menuBtnMobile.contains(e.target)) return;

    sidebar.classList.remove("open");
});
