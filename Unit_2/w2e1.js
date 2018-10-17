document.write(Math.floor(Math.random() * 2));

document.write("<br>" + (Math.floor(Math.random() * 101) + 100));

var min = parseInt(prompt("Introduce el primer número posible: "));
var max = parseInt(prompt("Introduce el último número posible: "));

document.write("<br>" + (Math.floor(Math.random() * (max-min+1) + min)));