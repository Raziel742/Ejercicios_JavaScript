function calculateSupply(age, amountPerDay) {
    const maxAge = 100;

    document.write("Podras comerte " + Math.round((maxAge - age) * 365 *amountPerDay) + " bolsas de tu snack favorito antes de tu muerte a los " + maxAge + " años<br>");
}

calculateSupply(23, 2);
calculateSupply(15, 30);
calculateSupply(40, 10.2);