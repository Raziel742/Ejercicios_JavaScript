var tfWelcome = document.getElementById("tfWelcome");

if (getCookie("username") == null)
    createCookie("username", prompt("Introduce tu nombre:"), 5);

if (getCookie("bgcolor") == null)
    createCookie("bgcolor", prompt("Introduce color de fondo:"));

if (getCookie("textcolor") == null)
    createCookie("textcolor", prompt("Introduce color de texto:"));

if (getCookie("textsize") == null)
    createCookie("textsize", prompt("Introduce tamaño de texto:"));

tfWelcome.innerHTML = "Bienvenido de vuelta " + getCookie("username");
document.body.style.backgroundColor = getCookie("bgcolor");
tfWelcome.style.color = getCookie("textcolor");
tfWelcome.style.fontSize = getCookie("textsize");


function createCookie(key, value, minutesToExpire = null) {
    if (minutesToExpire == null)
        document.cookie = key + "=" + value + "; path=/";
    else {
        let date = new Date();
        date.setTime(date.getTime() + minutesToExpire * 60 * 1000);
        document.cookie = key + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
    }
}

function deleteCookie(key) {
    document.cookie = key + "=; expires=" + new Date(0).toUTCString() + "; path=/";
}

function deleteAllCookies() {
    var cookies = decodeURIComponent(document.cookie).split(";");

    for (i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        deleteCookie(cookie.substr(0, cookie.indexOf("=")));
    }
}

function getCookie(key) {
    var cookies = decodeURIComponent(document.cookie).split(";");

    for (i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.substr(0, cookie.indexOf("=")) === key)
            return cookie.substr(cookie.indexOf("=") + 1);
    }

    return null;
}