function lanzamiento () {
    return Math.floor((Math.random() * 6) + 1);
}

var v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0, v6 = 0;

for (i = 1; i <= 6000; i++)
    switch (lanzamiento()) {
        case 1:
            v1++;
            break;
        case 2:
            v2++;
            break;
        case 3:
            v3++;
            break;
        case 4:
            v4++;
            break;
        case 5:
            v5++;
            break;
        default:
            v6++;
    }

document.write("Nº de veces (1): " + v1 +
    "<br>Nº de veces (2): " + v2 +
    "<br>Nº de veces (3): " + v3 +
    "<br>Nº de veces (4): " + v4 +
    "<br>Nº de veces (5): " + v5 +
    "<br>Nº de veces (6): " + v6);