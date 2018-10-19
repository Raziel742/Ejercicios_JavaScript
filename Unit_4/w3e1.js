function isValid(input, reg_exp) {
    input.style.border = (reg_exp.test(input.value.trim())) ? "2px solid green" : "2px solid red";
}

document.getElementById("tfNombre").addEventListener("keyup", function(e) {
    isValid(e.target, /^[A-Z][a-z]+([\s-][A-Z][a-z]+)*$/);
});

document.getElementById("tfApellidos").addEventListener("keyup", function(e) {
    isValid(e.target, /^[A-Z][a-z]+([\s-][A-Z][a-z]+)+$/);
});

document.getElementById("tfDni").addEventListener("keyup", function(e) {
    isValid(e.target, /^\d{8}[A-Z]$/);
});

document.getElementById("tfTelefono").addEventListener("keyup", function(e) {
    isValid(e.target, /^\d{9}$/);
});

document.getElementById("tfEmail").addEventListener("keyup", function(e) {
    isValid(e.target, /^[a-zA-Z0-9_.]+@[a-z0-9]+\.[a-z]+$/);
});

document.getElementById("tfNombreUsuario").addEventListener("keyup", function(e) {
    isValid(e.target, /^(?=.*\d)(?=.*[.,:;¡!¿?])[a-zA-Z0-9.,:;¡!¿?]{8,}$/);
});