nColumns = prompt ("Numero de columnas: ");
height = prompt ("Altura en pixel: ");
width = prompt ("Anchura en pixel: ");

document.write("<table border='0' cellspacing='2' bgcolor='black'>" +
    "<tr bgcolor='white' height='" + height + "'>");

while (nColumns > 0) {
    document.write("<td width='" + width + "'></td>");
    nColumns--;
}

document.write("</tr></table>");