function combineAllArrays(...arrays) {
    let total = [];

    for (let array of arrays)
        total.push(array);

    return total;
}

document.write(combineAllArrays([1,3,2], [3,1,2], [2,3,1]));