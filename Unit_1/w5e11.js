nColumns = prompt ("Numero de columnas: ");
height = prompt ("Altura en pixel: ");
width = prompt ("Anchura en pixel: ");

document.write("<table border='0' cellspacing='2' bgcolor='black'>" +
    "<tr bgcolor='white' height='" + height + "'>");

for (i = 1; i <= nColumns; i++)
    document.write("<td width='" + width + "'></td>");

document.write("</tr></table>");