function initMap() {

    if ("geolocation" in navigator) {

        var points = [], map, geocoder = new google.maps.Geocoder, marker, infoWindow = new google.maps.InfoWindow, polyline;

        navigator.geolocation.watchPosition(function (position) {
            var pos = {lat: position.coords.latitude, lng: position.coords.longitude};
            points.push(pos);

            if (map == null)
                map = new google.maps.Map (document.getElementById("map"), {center: pos, zoom: 17});

            if (marker != null)
                marker.setMap(null);
            marker = new google.maps.Marker({position: pos, map: map, animation: google.maps.Animation.DROP});

            if (points.length >= 2)
                polyline = new google.maps.Polyline({
                    map: map,
                    path: [{lat: points[points.length - 2].lat, lng: points[points.length - 2].lng},
                        {lat: points[points.length - 1].lat, lng: points[points.length - 1].lng}],
                    strokeColor: "#FF8800",
                    strokeOpacity: 1,
                    strokeWeight: 2
                });

            geocoder.geocode({"location": pos}, function(results, status) {

                if (status === "OK")
                    marker.addListener("click", function() {
                        infoWindow.close();

                        if (results[0])
                            infoWindow.setContent(results[0].formatted_address);
                        else
                            infoWindow.setContent("No se han encontrado direcciones cercanas");

                        infoWindow.open(map, marker);
                    });
                else
                    alert("El geocodificador ha fallado debido a: " + status);
            });
        }, function (error) {
            alert('ERROR(' + error.code + '): ' + error.message);
        }, {
            enableHighAccuracy: true,
            timeout           : 30000
        });

    }
    else
        alert("La geolocalización no está disponible");
}