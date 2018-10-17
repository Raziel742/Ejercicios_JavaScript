function helloWorld(languageCode) {
    if (languageCode.toLowerCase() == "es")
        document.write("Hola Mundo<br>");
    else if (languageCode.toLowerCase() == "de")
        document.write("Hallow Welt<br>");
    else
        document.write("Hellow World<br>");
}

helloWorld("es");
helloWorld("de");
helloWorld("en");