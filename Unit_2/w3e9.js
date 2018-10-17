function mostrarTabla(string) {
    document.write("<table border='1' cellspacing='0' cellpadding='5'>");

    for (let i = 0; i < string.length; i++) {
        document.write("<tr height='20'>");
        for (let j = 0; j < string.length; j++)
            if (i === 0 || i === string.length - 1 || j === 0 || j === string.length - 1)
                document.write("<td width='20'><center>" + string.charAt(Math.abs(i - j)) + "</center></td>");
            else
                document.write("<td width='20'/>");

        document.write("</tr>");
    }

    document.write("</table>");
}

mostrarTabla("ADIOS");