num_adivinar = prompt("Inserta el número a adivinar: ");
num = null;

do {
    if (num != null)
        if (num_adivinar > num)
            alert("El número es mayor");
        else
            alert("El número es menor");

    num = prompt("Inserta número: ");
} while (num != num_adivinar);

alert("GENIO");