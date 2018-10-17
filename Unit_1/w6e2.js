function addOnlyNums(...args) {
    let total = 0;

    for (let arg of args)
        if (typeof(arg) == "number")
            total += arg;

    return total;
}

document.write(addOnlyNums(1, 2, "NO", 4, "SI", 6));