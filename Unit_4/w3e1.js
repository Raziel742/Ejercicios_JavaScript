function isValid(inputId, reg_exp) {
    document.getElementById(inputId).addEventListener("keyup", function(e) {
        e.target.style.border = (reg_exp.test(e.target.value.trim())) ? "2px solid green" : "2px solid red";
    });
}

isValid("tfNombre", /^[A-Z][a-z]+([\s-][A-Z][a-z]+)*$/);
isValid("tfApellidos", /^[A-Z][a-z]+([\s-][A-Z][a-z]+)+$/);
isValid("tfDni", /^\d{8}[A-Z]$/);
isValid("tfTelefono", /^\d{9}$/);
isValid("tfEmail", /^[a-zA-Z0-9_.]+@[a-z0-9]+\.[a-z]+$/);
isValid("tfNombreUsuario", /^(?=.*\d)(?=.*[.,:;¡!¿?])[a-zA-Z0-9.,:;¡!¿?]{8,}$/);