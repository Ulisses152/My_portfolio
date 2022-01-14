const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let myMap = L.map('map').setView([-23.5113, -46.8768], 10);

L.tileLayer(tilesProvider, {
  maxZoom: 18,
}).addTo(myMap);

var logoIcon = L.icon({
  iconUrl: 'marker.svg',
  iconSize: [50, 80], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [10, -76], // point from which the popup should open relative to the iconAnchor
});
let marker = L.marker([-23.5113, -46.8768], { icon: logoIcon }).addTo(myMap);

marker.bindPopup('Barueri - SP');
marker.on('mouseover', function (e) {
  this.openPopup();
});
marker.on('mouseout', function (e) {
  this.closePopup();
});
