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
const staAktif_tln = L.marker([-7.465493234774154, 112.65107782357315]).bindPopup('Stasiun Tulangan').addTo(staAktif);
const staAktif_spj = L.marker([-7.34680129234404, 112.69767105055908]).bindPopup('Stasiun Sepanjang').addTo(staAktif);
const staAktif_bh = L.marker([-7.387750876751292, 112.61964379288901]).bindPopup('Stasiun Boharan').addTo(staAktif);
const staAktif_krn = L.marker([-7.409717154661771, 112.58593212172478]).bindPopup('Stasiun Krian').addTo(staAktif);
const staAktif_kdn = L.marker([-7.4368256279741205, 112.55266280823135]).bindPopup('Stasiun Kedinding').addTo(staAktif);
const staAktif_trk = L.marker([-7.4589384891988955, 112.51876826590234]).bindPopup('Stasiun Tarik').addTo(staAktif);
const staAktif_mr = L.marker([-7.472136600278112, 112.43408780823175]).bindPopup('Stasiun Mojokerto').addTo(staAktif);
const staAktif_tga = L.marker([-7.506650465461253, 112.70814880823227]).bindPopup('Stasiun Tanggulangin').addTo(staAktif);
const staAktif_pr = L.marker([-7.538126634108086, 112.70166926590365]).bindPopup('Stasiun Porong').addTo(staAktif);
const staAktif_bg = L.marker([-7.598621588450213, 112.77835072357527]).bindPopup('Stasiun Bangil').addTo(staAktif);
const staAktif_wn = L.marker([-7.6618790653044915, 112.7549663659056]).bindPopup('Stasiun Wonokerto').addTo(staAktif);
const staAktif_skj = L.marker([-7.71919862328283, 112.72342480823578]).bindPopup('Stasiun Sukorejo').addTo(staAktif);
const staAktif_sn = L.marker([-7.754828085865252, 112.72441362357777]).bindPopup('Stasiun Sengon').addTo(staAktif);
const staAktif_lw = L.marker([-7.836466790750451, 112.6976478082377]).bindPopup('Stasiun Lawang').addTo(staAktif);
const staAktif_sgs = L.marker([-7.896753214776016, 112.66610162358016]).bindPopup('Stasiun Singosari').addTo(staAktif);
const staAktif_bmg = L.marker([-7.939736846382421, 112.64493926591015]).bindPopup('Stasiun Blimbing').addTo(staAktif);
const staAktif_ml = L.marker([-7.97727986678661, 112.63702390824]).bindPopup('Stasiun Malang').addTo(staAktif);
const staAktif_mlk = L.marker([-7.9946081488017935, 112.63252895495847]).bindPopup('Stasiun Malangkotalama').addTo(staAktif);
const staAktif_psi = L.marker([-8.069049071845066, 112.5984511082416]).bindPopup('Stasiun Pakisaji').addTo(staAktif);
const staAktif_kpn = L.marker([-8.131732009825072, 112.57325330824261]).bindPopup('Stasiun Kepanjen').addTo(staAktif);
const staAktif_nb = L.marker([-8.15161056278889, 112.51680503707823]).bindPopup('Stasiun Ngebruk').addTo(staAktif);
const staAktif_sbp = L.marker([-8.158055725861908, 112.47839853707836]).bindPopup('Stasiun Sumberpucung').addTo(staAktif);
const staAktif_pgj = L.marker([-8.156718423583767, 112.42011625057229]).bindPopup('Stasiun Pohgajih').addTo(staAktif);
const staAktif_ksb = L.marker([-8.148908917784508, 112.36352305241975]).bindPopup('Stasiun Kesamben').addTo(staAktif);
const staAktif_wg = L.marker([-8.088096027572822, 112.32004326591264]).bindPopup('Stasiun Wlingi').addTo(staAktif);
const staAktif_mst = L.marker([-7.240753581107323, 112.72669127939272]).bindPopup('Stasiun Mesigit').addTo(staAktif);
const staAktif_klm = L.marker([-7.2196966176859085, 112.73508847939243]).bindPopup('Stasiun Kalimas').addTo(staAktif);
const staAktif_sbi = L.marker([-7.248149561740208, 112.73114839658177]).bindPopup('Stasiun Surabaya Pasarturi').addTo(staAktif);


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
