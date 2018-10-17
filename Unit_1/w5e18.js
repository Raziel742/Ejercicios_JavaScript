nRows = prompt ("Introduce número de filas: ");
nColumns = prompt ("Introduce número de columnas: ");
height = prompt ("Introduce altura en píxeles: ");
width = prompt ("Introduce anchura en píxeles: ");

document.write("<table border='0' cellspacing='2' bgcolor='black'>");

for (i = 1; i <= nRows; i++) {
    document.write("<tr bgcolor='white' height='" + height + "'>");
    for (j = 1; j <= nColumns; j++)
        document.write("<td width='" + width + "'/>");
    document.write("</tr>");
}

document.write("</table>");