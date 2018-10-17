function invierteCadena(string) {
    return string.split("").reverse().join("");
}

function inviertePalabras(array) {
    return array.reverse();
}

function encuentraPalabraMasLarga(array) {
    let max = array[0].length;
    for (let i = 1; i < array.length; i++)
        if (array[i].length > max)
            max = array[i].length;

    return max;
}

function filtraPalabrasMasLargas(array, long) {
    let cont = 0;
    for (let i = 0; i < array.length; i++)
        if (array[i].length > long)
            cont++;

    return cont;
}

function cadenaBienFormada(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}

document.write(invierteCadena("hola"));
document.write("<br>" + inviertePalabras(["si", "o", "k"]));
document.write("<br>" + encuentraPalabraMasLarga(["como", "lo", "ves"]));
document.write("<br>" + filtraPalabrasMasLargas(["como", "lo", "ves"], 3));
document.write("<br>" + cadenaBienFormada("hoLA"));