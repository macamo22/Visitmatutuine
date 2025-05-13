// Inicia o mapa
var map = L.map('map').setView([-26.05, 32.59], 10);

// Fundo do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Carrega GeoJSON
fetch('acampar.geojson')
  .then(response => response.json())
  .then(data => {
    const customIcon = L.icon({
      iconUrl: 'acampar.png',
      iconSize: [24, 24],
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
  // GeoJSON de polígonos (ex: bairros)
fetch('lagos.geojson')
.then(res => res.json())
.then(data => {
  L.geoJSON(data, {
    style: {
      color: 'blue',
      weight: 2,
      fillColor: 'blue',
      fillOpacity: 0.4
    },
    onEachFeature: function (feature, layer) {
      // Verifica se existe um campo 'nome' no GeoJSON
      if (feature.properties && feature.properties.toponimo) {
        layer.bindPopup("<strong>lago:</strong> " + feature.properties.toponimo);
      } else {
        layer.bindPopup("Informação não disponível.");
      }
    }
  }).addTo(map);
});
// Carrega GeoJSON
fetch('pnmat.geojson')
  .then(response => response.json())
  .then(data => {
    const customIcon = L.icon({
      iconUrl: 'reserva.png',
      iconSize: [24, 24],
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