var mapOptions = {
    center: [50.0689,19.9547],
    zoom: 10
 }
 var map = new L.map('map', mapOptions);

 var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
 
 map.addLayer(layer);