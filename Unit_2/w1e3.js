var seconds = 60;

function chronometer() {
    document.write((seconds--) + "<br>");
    if (seconds >= 0)
        setTimeout(chronometer, 1000);
}

setTimeout(chronometer(), 1000);