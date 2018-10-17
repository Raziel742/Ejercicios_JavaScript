function calculateAge(bYear, cYear) {
    document.write("Tienes " + (cYear - bYear - 1) + " o " + (cYear - bYear) + " años<br>");
}

calculateAge(1995, 2018);
calculateAge(1997, 2018);
calculateAge(1991, 2018);

calculateAge(1990, new Date().getFullYear());