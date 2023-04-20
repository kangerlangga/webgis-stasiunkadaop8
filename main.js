var redIcon = L.icon({
    iconUrl: 'img/red-gps.png',

    iconSize:     [25, 39], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [12, 39], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const staAktif = L.layerGroup();
const staAktif_sgu = L.marker([-7.265092553364495, 112.75267476589924]).bindPopup('Stasiun Surabaya Gubeng').addTo(staAktif);
const staAktif_sb = L.marker([-7.242777128225611, 112.74146416405131]).bindPopup('Stasiun Surabaya Kota').addTo(staAktif);
const staAktif_sdt = L.marker([-7.235799796923445, 112.75539890822806]).bindPopup('Stasiun Sidotopo').addTo(staAktif);
const staAktif_bet = L.marker([-7.220914674200734, 112.74390060822789]).bindPopup('Stasiun Benteng').addTo(staAktif);
const staAktif_wo = L.marker([-7.3016458724196305, 112.73905780822912]).bindPopup('Stasiun Wonokromo').addTo(staAktif);
const staAktif_wr = L.marker([-7.3016458724196305, 112.73905780822912]).bindPopup('Stasiun Waru').addTo(staAktif);
const staAktif_gdg = L.marker([-7.388879756721036, 112.7285036389134]).bindPopup('Stasiun Gedangan').addTo(staAktif);
const staAktif_sda = L.marker([-7.456644754278918, 112.71291556774986]).bindPopup('Stasiun Sidoarjo').addTo(staAktif);

const staNonaktif = L.layerGroup();
const staNonaktif_gng = L.marker([-7.584716676572663, 112.72460973591234], {icon: redIcon}).bindPopup('Ex Stasiun Gununggangsir(GNG)').addTo(staNonaktif);

// const mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
// const mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

// const streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

//Open Street Maps
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

//Define Maps
const map = L.map('mapSta', {
    center: [-7.265986283133091, 112.75254668124076],
    zoom: 12,
    layers: [osm, staAktif]
});

//Google Street
googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

//Hybrid
googleHybrid = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

//Google Satelite
googleSat = L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

//Terrain
googleTerrain = L.tileLayer('http://{s}.google.com/vt?lyrs=p&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

const baseLayers = {
    'Open Street Map': osm,
    'Google Street': googleStreets,
    'Google Hybrid': googleHybrid,
    'Google Satelite': googleSat,
    'Google Terrain': googleTerrain
};

const overlays = {
    'Stasiun Aktif': staAktif,
    'Stasiun Nonaktif': staNonaktif,
};

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);