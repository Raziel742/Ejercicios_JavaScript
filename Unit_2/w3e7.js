function esPalindromo(string) {
    return (string === string.split("").reverse().join(""));
}

if (esPalindromo("dabalearrozalazorraelabad"))
    document.write("Es palíndromo");
else
    document.write("No es palíndromo");