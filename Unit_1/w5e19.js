pixels = prompt("Introduzca el ancho de la casilla: ");

document.write("<table border='0' cellspacing='2'>");

for (i = 1; i <= 8; i++) {
    document.write("<tr height='" + pixels + "'>");
    for (j = 1; j <= 8; j++)
        if ((i + j) % 2 == 0)
            document.write("<td bgcolor='black' width='" + pixels + "'/>");
        else
            document.write("<td bgcolor='white' width='" + pixels + "'/>");
    document.write("</tr>");
}

document.write("</table>");