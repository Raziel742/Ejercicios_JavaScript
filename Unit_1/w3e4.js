function celsiusToFahrenheit(celsius) {
    document.write(celsius + "ºC son " + (celsius*1.8 + 32) + "ºF<br>");
}

function farenheitToCelsius(farenheit) {
    document.write(farenheit + "ºF son " + ((farenheit-32)/1.8) + "ºC<br>");
}

celsiusToFahrenheit(32);
farenheitToCelsius(95);