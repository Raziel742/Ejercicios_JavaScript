function showCanvas() {
    document.write("<table style='border-collapse: collapse'>");

    for (i = 1; i <= 40; i++) {
        document.write("<tr height=10>");
        for (j = 1; j <=40 ; j++)
            document.write("<td width=8 style='border: 1px solid black'></td>")

        document.write("</tr>");
    }

    document.write("</table>");

    document.write("<br><button onclick='celdas.forEach(a => a.style.backgroundColor = \"white\")'>LIMPIAR</button>");

    var celdas = document.querySelectorAll("td");

    celdas.forEach(a => a.addEventListener("mousemove", function(e) {
        if (e.ctrlKey)
            a.style.backgroundColor = "red";
        else if (e.shiftKey)
            a.style.backgroundColor = "blue";
    }));

    celdas.forEach(a => a.addEventListener("click", function() {
        a.parentNode.childNodes.forEach(a => a.style.backgroundColor = "white");
    }));
}