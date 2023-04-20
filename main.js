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
const staAktif_tes = L.marker([-7.258743864373199, 112.68699607939315]).bindPopup('Stasiun Tandes').addTo(staAktif);
const staAktif_kda = L.marker([-7.25104027515005, 112.65817770822828]).bindPopup('Stasiun Kandangan').addTo(staAktif);
const staAktif_ido = L.marker([-7.176784648037818, 112.66436306589787]).bindPopup('Stasiun Indro').addTo(staAktif);
const staAktif_bnw = L.marker([-7.233810593698186, 112.61523538124013]).bindPopup('Stasiun Benowo').addTo(staAktif);
const staAktif_cme = L.marker([-7.224149006786186, 112.57064417939259]).bindPopup('Stasiun Cerme').addTo(staAktif);
const staAktif_dd = L.marker([-7.154570796329577, 112.52031287939143]).bindPopup('Stasiun Duduk').addTo(staAktif);
const staAktif_lmg = L.marker([-7.1122464209963, 112.4201070793908]).bindPopup('Stasiun Lamongan').addTo(staAktif);
const staAktif_sbn = L.marker([-7.099601782008123, 112.35536219288454]).bindPopup('Stasiun Surabayan').addTo(staAktif);
const staAktif_pc = L.marker([-7.097489513833277, 112.26989233706124]).bindPopup('Stasiun Pucuk').addTo(staAktif);
const staAktif_geb = L.marker([-7.101920722949443, 112.22218937939074]).bindPopup('Stasiun Gembong').addTo(staAktif);
const staAktif_bbt = L.marker([-7.105922546539403, 112.16871490822605]).bindPopup('Stasiun Babat').addTo(staAktif);
const staAktif_bwo = L.marker([-7.130925784240699, 112.09981145240323]).bindPopup('Stasiun Bowerno').addTo(staAktif);
const staAktif_srj = L.marker([-7.177381308029633, 112.00153396589795]).bindPopup('Stasiun Sumberejo').addTo(staAktif);
const staAktif_kps = L.marker([-7.199062396195924, 111.93321799473361]).bindPopup('Stasiun Kapas').addTo(staAktif);
const staAktif_bj = L.marker([-7.163858705263676, 111.88639926589774]).bindPopup('Stasiun Bojonegoro').addTo(staAktif);
const staAktif_kit = L.marker([-7.13144288450464, 111.76729525055569]).bindPopup('Stasiun Kalitidu').addTo(staAktif);
const staAktif_tbo = L.marker([-7.171889178777146, 111.6542548677453]).bindPopup('Stasiun Tobo').addTo(staAktif);


const staNonaktif = L.layerGroup();
const staNonaktif_gng = L.marker([-7.584716676572663, 112.72460973591234], {icon: redIcon}).bindPopup('Ex Stasiun Gununggangsir').addTo(staNonaktif);
const staNonaktif_pbn = L.marker([-7.461393739798361, 112.5643338151328], {icon: redIcon}).bindPopup('Ex Stasiun Prambon').addTo(staNonaktif);
const staNonaktif_sur = L.marker([-7.179661322155987, 112.545114052404], {icon: redIcon}).bindPopup('Ex Stasiun Sumari').addTo(staNonaktif);
const staNonaktif_pandanan = L.marker([-7.130842724477226, 112.48133886931714], {icon: redIcon}).bindPopup('Ex Shelter Pandanan').addTo(staNonaktif);
const staNonaktif_kruwul = L.marker([-7.101007035881965, 112.3703047780907], {icon: redIcon}).bindPopup('Ex Shelter Kruwul').addTo(staNonaktif);
const staNonaktif_slr = L.marker([-7.093375884843318, 112.32171765240264], {icon: redIcon}).bindPopup('Ex Stasiun Sumlaran').addTo(staNonaktif);
const staNonaktif_syo = L.marker([-7.163666726398174, 112.0438668370623], {icon: redIcon}).bindPopup('Ex Shelter Sroyo').addTo(staNonaktif);
const staNonaktif_bsl = L.marker([-7.469259373306871, 112.48388956959967], {icon: redIcon}).bindPopup('Ex Shelter Bangsal').addTo(staNonaktif);
const staNonaktif_mgr = L.marker([-7.314114296347227, 112.73459826590003], {icon: redIcon}).bindPopup('Ex Shelter Margorejo').addTo(staNonaktif);
const staNonaktif_jms = L.marker([-7.329193404501409, 112.73142016774763], {icon: redIcon}).bindPopup('Ex Shelter Jemursari').addTo(staNonaktif);
const staNonaktif_ktl = L.marker([-7.340186197158462, 112.72953325055909], {icon: redIcon}).bindPopup('Ex Shelter Kertomenanggal').addTo(staNonaktif);
const staNonaktif_stp = L.marker([-7.368289056019354, 112.72927216774849], {icon: redIcon}).bindPopup('Ex Shelter Sawotratap').addTo(staNonaktif);
const staNonaktif_bjk = L.marker([-7.411926912936675, 112.72614591007833], {icon: redIcon}).bindPopup('Ex Shelter Banjarkemantren').addTo(staNonaktif);
const staNonaktif_bdr = L.marker([-7.427529132806169, 112.72298299473711], {icon: redIcon}).bindPopup('Ex Shelter Buduran').addTo(staNonaktif);
const staNonaktif_pwj = L.marker([-7.44210243548792, 112.71525464944723], {icon: redIcon}).bindPopup('Ex Shelter Pagerwojo').addTo(staNonaktif);

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
