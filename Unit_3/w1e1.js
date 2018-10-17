function max (a, b, c, d) {
    let maximo = arguments[0];

    for (i = 1; i < arguments.length; i++)
        if (arguments[i] > maximo)
            maximo = arguments[i];

    return maximo;
}

document.write(max(1,4,7,2));