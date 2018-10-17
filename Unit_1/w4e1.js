function greaterNum(a, b) {
    let max = a;
    if (b > a)
        max = b;

    document.write("The greater number of " + a + " and " + b + " is " + max + "<br>");
}

for (i = 0; i < 2; i++)
    greaterNum(prompt("First number: "), prompt("Second number: "));