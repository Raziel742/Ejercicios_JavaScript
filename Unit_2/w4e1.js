document.write("<table cellpadding='5' border='1'>");

document.write("<tr>" +
    "<td>Nombre de aplicación</td>" +
    "<td>" + navigator.appName +"</td>" +
    "</tr>");

document.write("<tr>" +
    "<td>Versión de aplicación</td>" +
    "<td>" + navigator.appVersion +"</td>" +
    "</tr>");

document.write("<tr>" +
    "<td>Idioma</td>" +
    "<td>" + navigator.language +"</td>" +
    "</tr>");

document.write("<tr>" +
    "<td>Plataforma</td>" +
    "<td>" + navigator.platform +"</td>" +
    "</tr>");

document.write("<tr>" +
    "<td>Producto</td>" +
    "<td>" + navigator.product +"</td>" +
    "</tr>");

document.write("</table>");