var array = [];
var r2=0, r3=0, r4=0, r5=0, r6=0, r7=0, r8=0, r9=0, r10=0, r11=0, r12=0;

for (i = 1; i <= 36000; i++) {
    d1 = Math.floor((Math.random() * 6) + 1);
    d2 = Math.floor((Math.random() * 6) + 1);
    array.push([d1, d2, d1 + d2]);

    switch (d1 + d2) {
        case 2: r2++; break;
        case 3: r3++; break;
        case 4: r4++; break;
        case 5: r5++; break;
        case 6: r6++; break;
        case 7: r7++; break;
        case 8: r8++; break;
        case 9: r9++; break;
        case 10: r10++; break;
        case 11: r11++; break;
        default: r12++;
    }
}

document.write("Nº de veces (2): " + r2 +
    "<br>Nº de veces (3): " + r3 +
    "<br>Nº de veces (4): " + r4 +
    "<br>Nº de veces (5): " + r5 +
    "<br>Nº de veces (6): " + r6 +
    "<br>Nº de veces (7): " + r7 +
    "<br>Nº de veces (8): " + r8 +
    "<br>Nº de veces (9): " + r9 +
    "<br>Nº de veces (10): " + r10 +
    "<br>Nº de veces (11): " + r11 +
    "<br>Nº de veces (12): " + r12 + "<br><br><br>");

document.write("<table cellpadding='5' border='1'>");

document.write("<tr><td><center>Dado 1</center></td>" +
    "<td><center>Dado 2</center>" +
    "</td><td><center>Suma</center></td></tr>");

for (i = 0; i < array.length; i++) {
    document.write("<tr>");

    for (j = 0; j <= 2; j++)
        document.write("<td><center>" + array[i][j] + "</center></td>");

    document.write("</tr>");
}

document.write("</table>");