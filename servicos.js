// Inicia o mapa
var map = L.map('map').setView([-26.05, 32.59], 10);



// Fundo do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Carrega GeoJSON
fetch('postopolicial.geojson')
  .then(response => response.json())
  .then(data => {
    const customIcon = L.icon({
      iconUrl: 'policia.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });
    
    L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: customIcon });
      },
      onEachFeature: function (feature, layer) {
        layer.bindPopup(`
          <strong>${feature.properties.nome}</strong><br>
          ${feature.properties.descricao}
        `);
      }
    }).addTo(map);
  })
  .catch(error => console.error('Erro ao carregar GeoJSON:', error));
  fetch('bombas.geojson')
  .then(response => response.json())
  .then(data => {
    const customIcon = L.icon({
      iconUrl: 'bombas.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });
    
    L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: customIcon });
      },
      onEachFeature: function (feature, layer) {
        layer.bindPopup(`
          <strong>${feature.properties.nome}</strong><br>
          ${feature.properties.descricao}
        `);
      }
    }).addTo(map);
  })
   fetch('saude.geojson')
  .then(response => response.json())
  .then(data => {
    const customIcon = L.icon({
      iconUrl: 'saude.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });
    
    L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: customIcon });
      },
      onEachFeature: function (feature, layer) {
        layer.bindPopup(`
          <strong>${feature.properties.nome}</strong><br>
          ${feature.properties.descricao}
        `);
      }
    }).addTo(map);
  })