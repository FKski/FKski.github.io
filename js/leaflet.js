var mapOptions = {
    center: [17.385044, 78.486671],
    zoom: 10
 }
 var map = new L.map('map', mapOptions);
 var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/17/50.06914/19.95470.png');
 map.addLayer(layer);