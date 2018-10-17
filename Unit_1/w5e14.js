nColumns = prompt ("Numero de columnas: ");
height = prompt ("Altura en pixel: ");
width = prompt ("Anchura en pixel: ");
i = 1;

document.write("<table border='0' cellspacing='2' bgcolor='black'>" +
    "<tr bgcolor='white' height='" + height + "'>");

while (nColumns > 0) {
    if (i%2 == 1)
        document.write("<td bgcolor='black' width='" + width + "'></td>");
    else
        document.write("<td bgcolor='white' width='" + width + "'></td>");

    nColumns--;
    i++;
}

document.write("</tr></table>");