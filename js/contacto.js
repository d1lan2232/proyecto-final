function mostrarMensajeE() {
    alert('Guardado exitoso');
}

function mostrarMensajeR() {
    alert('No se ha logrado registrar');
}

function cambiarColor(elemento) {
    elemento.style.color = "greem";
}

function restaurarColor(elemento) {
    elemento.style.color = "white"; 
}

function cambiarEstilo(elemento) {
    elemento.style.backgroundColor = "#3498db";
}

function restaurarEstilo(elemento) {
    elemento.style.backgroundColor = "#FFF8DC"; 
}

function enviarFormulario() {
    alert('Formulario enviado correctamente');
}

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in');
});

// Cambiar entre modos claro y oscuro al hacer clic en el botón
function cambiarTema() {
    document.body.classList.toggle('dark-mode');
}
