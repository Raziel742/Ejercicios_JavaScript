function potencia (b, p) {
    let total = b;
    while (p > 1) {
        total *= b;
        p--;
    }

    return total;
}

document.write("5 elevado a 9 vale " + potencia(5, 9));