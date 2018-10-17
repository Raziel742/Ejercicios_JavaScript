function chronometer() {
    document.write(new Date().toTimeString().split(' ')[0] + "<br>");
    setTimeout(chronometer, 1000);
}

setTimeout(chronometer);