window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }
  var mapOptions = {
    center: [17.385044, 78.486671],
    zoom: 10
 }