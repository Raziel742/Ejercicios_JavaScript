num_adivinar = prompt("Inserta el número a adivinar: ");

while ((num = prompt("Inserta número: ")) != num_adivinar)
    if (num_adivinar > num)
        alert("El número es mayor");
    else
        alert("El número es menor");

alert("GENIO");