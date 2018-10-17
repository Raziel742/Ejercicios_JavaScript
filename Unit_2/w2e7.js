document.write("<table border='1' cellspacing='2'>" +
    "<tr><td>x</td><td>sen(x)</td></tr>");

for (let i = 0; i <= 10; i++)
    document.write("<tr><td>" + i + "</td><td>" + Math.sin(i) + "</td></tr>");

document.write("</table>");