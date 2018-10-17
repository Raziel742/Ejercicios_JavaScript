function sumEveryOther(...args) {
    let total = 0;

    for (let arg of args)
        if (args.indexOf(arg) % 2 == 0)
            total += arg;

    return total;
}

document.write(sumEveryOther(1,2,3,4,5,6,7));