function largestNumber (array) {
    let max = null;

    array.forEach(function(a) {
        if (typeof a === "number") {
            if (max == null)
                max = a;
            if (a > max)
                max = a;
        }
    });

    return max;
}

function longestString (array) {
    let max = null;

    array.forEach(function(a) {
        if (typeof a === "string") {
            if (max == null)
                max = a;
            if (a.length > max.length)
                max = a;
        }
    });

    return max;
}

function evenNumbers (array) {
    return array.filter(a => {if (typeof a === "number") return a%2===0;});
}

function oddNumbers (array) {
    return array.filter(a => {if (typeof a === "number") return a%2!==0;});
}

function wordsThatContainsIs (array) {
    return array.filter(a => {if (typeof a === "string") return a.toLowerCase().includes("is");});
}

function areAllDivisibleByThree (array) {
    return array.every(a => {if (typeof a === "number") return a%3===0;});
}

function zipArrays (a1, a2) {
    if (a1.length === a2.length)
        return a1.map((a, i) => [a + ":" + a2[i]]);
    else
        return null;
}

function sortJoin (array) {
    return array.filter(a => typeof a === "number").sort().join(" < ");
}

function removeFirstWord (array) {
    let removing = true;

    array.forEach(function(a, i) {
        while (removing)
            if (typeof a === "string") {
                array.splice(i, 1);
                removing = false;
        }
    });
}

function newWordAtStart (array) {
    array.unshift("nueva");
}

function haveFun (array) {
    array.filter(function(a, i) {
        if (typeof a === "number")
            if (Math.floor((Math.random() * 2) + 1) === 1)
                array.splice(i, 1, Math.floor((Math.random() * 100) + 1));
    });
}

function sortingByFirstname (array) {
    let sorter = (a, b) => a.substr(1).localeCompare(b.substr(1));

    return array.sort(sorter);
}



v = ["adios", 1, 7, "venga", "saludos", 3, "arista", 2, 6];


let ln = largestNumber(v);
if (ln == null)
    document.write("No hay números en el array");
else
    document.write("El número más alto es " + ln);


document.write("<br><br>");
let lw = longestString(v);
if (lw == null)
    document.write("No hay palabras en el array");
else
    document.write("La palabra más larga es " + lw);


document.write("<br><br>");
document.write("Números pares: " + evenNumbers(v) +
    "<br>Números impares: " + oddNumbers(v));


document.write("<br><br>Las palabras que contienen 'is' son: " + wordsThatContainsIs(v));


document.write("<br><br>");
if (areAllDivisibleByThree(v))
    document.write("Todos los números son divisibles por 3");
else
    document.write("No todos los números son divisibles por 3");


document.write("<br><br>");
let za = zipArrays(v, [1,2,3,4,5,6,7,8,9]);
if (zipArrays != null)
    document.write("Arrays unidos por índice: " + za);
else
    document.write("No se pueden juntar los dos arrays ya que su tamaño es diferente");


document.write("<br><br>Números ordenador de menor a mayor: " + sortJoin(v));


removeFirstWord(v);
document.write("<br><br>Array sin la primera palabra: " + v);


newWordAtStart(v);
document.write("<br><br>Array con la nueva palabra: " + v);


haveFun(v);
document.write("<br><br>Array con algunos números cambiados: " + v);


names = ["Jose", "Juan", "Javier", "Jorge"];
document.write("<br><br>Nombres desordenados: " + names);
document.write("<br>Nombres ordenados: " + sortingByFirstname(names));