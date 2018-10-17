function onlyUniques(...args) {
    let a = [];

    for (let arg of args) {
        if (!(arg in a))
            a.push(arg);
    }

    return a;
}

document.write(onlyUniques(1,1,2,3,3,3));