document.write("<table cellpadding='5' border='1'>");

document.write("<tr>" +
    "<td>Nombre de la ventana</td>" +
    "<td>" + window.name + "</td>" +
    "</tr>");

document.write("<tr>" +
    "<td>URL</td>" +
    "<td>" + window.location + "</td>" +
    "</tr>");

document.write("<tr>" +
    "<td>Navegador</td>" +
    "<td>" + window.navigator + "</td>" +
    "</tr>");

document.write("<tr>" +
    "<td>Orientación</td>" +
    "<td>" + window.orientation + "</td>" +
    "</tr>");

document.write("</table>");