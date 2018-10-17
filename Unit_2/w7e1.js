if ("geolocation" in navigator) {

    var points = [];
    var totalDistance = 0;

    var wpId = navigator.geolocation.watchPosition(function (position) {
        points.push(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
        document.getElementById("position").innerHTML = "(" + position.coords.latitude + ", " + position.coords.longitude + ")";

        if (points.length >= 2) {
            totalDistance += google.maps.geometry.spherical.computeDistanceBetween(points[points.length - 2], points[points.length - 1]);
            document.getElementById("distance").innerHTML = "Distancia recorrida: " + totalDistance + " metros";
        }
    }, function (error) {
        alert('ERROR(' + error.code + '): ' + error.message);
    }, {
        enableHighAccuracy: true,
        timeout           : 30000
    });

}
else
    alert("La geolocalización no está disponible");