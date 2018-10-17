function squareAndSum(...numbers) {
    let total = 0;

    for (let number of numbers)
        total += number**2;

    return total;
}

document.write(squareAndSum(4, 3, 8));