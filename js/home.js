markers = [];
var blackIcon = L.icon({
    iconUrl: 'img/marker0.png',
    iconSize:     [35, 50], // size of the icon
    iconAnchor:   [22, 49], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -47] // point from which the popup should open relative to the iconAnchor
});
var alphaIcon = L.icon({
    iconUrl: 'img/marker1.png',
    iconSize:     [35, 50], // size of the icon
    iconAnchor:   [22, 49], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -47] // point from which the popup should open relative to the iconAnchor
});

var map = L.map('mapid0').setView([-25.2744, 133.7751], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

markers.push(L.marker([-33.8358020, 150.9865196], {icon: alphaIcon}).addTo(map)
.bindPopup('Ingleburn Rd')
.on('click', (event) => {
    window.location.href = 'details.html?k=0';
}));
markers.push(L.marker([-33.8540015, 151.0430135], {icon: alphaIcon}).addTo(map)
.bindPopup('Pope St')
.on('click', (event) => {
    window.location.href = 'details.html?k=1';
}));
markers.push(L.marker([-33.7932162, 151.1100844], {icon: alphaIcon}).addTo(map)
.bindPopup('Auburn Rd')
.on('click', (event) => {
    window.location.href = 'details.html?k=2';
}));