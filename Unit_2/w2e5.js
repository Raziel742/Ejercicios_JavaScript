var a = parseInt(prompt("Introduce el coeficiente de grado 2: "));
var b = parseInt(prompt("Introduce el coeficiente de grado 1: "));
var c = parseInt(prompt("Introduce el número: "));

var x1 = parseInt((-b + Math.sqrt(b**2 - 4*a*c)) / (2*a));
var x2 = parseInt((-b - Math.sqrt(b**2 - 4*a*c)) / (2*a));

document.write("Las posibles soluciones son " + x1 + " y " + x2);