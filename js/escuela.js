function cambiarColor(elemento) {
    elemento.style.color = "greem";
}

function restaurarColor(elemento) {
    elemento.style.color = "black"; 
}

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in');
});

// Cambiar entre modos claro y oscuro al hacer clic en el botón
function cambiarTema() {
    document.body.classList.toggle('dark-mode');
}
