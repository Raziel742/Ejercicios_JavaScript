function mostrarInfo(string) {
    let minusculas = false;
    let mayusculas = false;

    for (let i = 0; i < string.length; i++)
        if (string.charAt(i) === string.charAt(i).toLowerCase())
            minusculas = true;
        else if (string.charAt(i) === string.charAt(i).toUpperCase())
            mayusculas = true;

    if (minusculas && !mayusculas)
        document.write("Tiene solo minúsculas<br>");
    else if (minusculas && mayusculas)
        document.write("Tiene minúscula(s) y mayúscula(s)<br>");
    else if (!minusculas && mayusculas)
        document.write("Tiene solo mayúsculas<br>");
}

mostrarInfo("HOLA");
mostrarInfo("aDIOs");
mostrarInfo("no");