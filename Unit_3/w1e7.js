function fact (n) {
    let total = n;

    while (n > 1) {
        n--;
        total *= n;
    }

    return total;
}

document.write("<table cellpadding='5' border='1'>");

for (i = 1; i <= 10; i++)
    document.write("<tr height='20'>" +
        "<td width='20'><center>" + i + "</center></td>" +
        "<td width='20'><center>" + fact(i) + "</center></td>" +
        "</tr>");

document.write("</table>");