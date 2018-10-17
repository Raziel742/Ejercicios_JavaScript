// Crea un formulario típico de registro para tu web. Debe contener al menos campos para introducir
// nombre, apellidos, DNI, Teléfono, email y nombre de usuario. Todos los campos son obligatorios,
// y debes validar el mayor número posible de ellos haciendo uso de expresiones regulares.
// El nombre de usuario debe estar formado por al menos 8 caracteres, entre los cuales debe aparecer
// obligatoriamente algún número y algún signo de puntuación.
//
// Conforme sale el foco de cada input, deberás validar el contenido de éste y mostrar información
// al usuario que le indique si está correcto o no.

var lInfoNombre = document.getElementById("infoNombre");
var lInfoApellidos = document.getElementById("infoApellidos");
var lInfoDni = document.getElementById("infoDni");
var lInfoTelefono = document.getElementById("infoTelefono");
var lInfoEmail = document.getElementById("infoEmail");
var lInfoNombreUsuario = document.getElementById("infoNombreUsuario");

document.getElementById("tfEmail").addEventListener("keyup", function(e) {
    if (/\S+@\S+\.\S+/.test(e.target.value)) {
        lInfoEmail.innerHTML = "Válido";
        lInfoEmail.style.color = "green";
    }
    else {
        lInfoEmail.innerHTML = "Erróneo";
        lInfoEmail.style.color = "red";
    }
})