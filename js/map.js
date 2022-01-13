const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let myMap = L.map('map').setView([-23.4862706, -46.8118481], 15);

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
let marker = L.marker([-23.4862706, -46.8118481], { icon: logoIcon }).addTo(
  myMap,
);

marker.bindPopup(
  'R. Martim Afonso de Souza, 91 - Parque Imperial, Barueri - SP, 06462-130',
);
marker.on('mouseover', function (e) {
  this.openPopup();
});
marker.on('mouseout', function (e) {
  this.closePopup();
});
