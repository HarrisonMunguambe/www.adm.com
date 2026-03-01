<template>
  <section class="airports-map-section">
    <div class="container">
      <!-- Cabeçalho da seção -->
      <div class="section-header text-center" data-aos="fade-up">
        <span class="section-tag">
          <i class="fas fa-map-marked-alt mr-2"></i>
          NOSSA PRESENÇA
        </span>
        <h2 class="section-title">
          <span class="title-line">Rede de</span>
          <span class="title-line-highlight">Aeroportos</span>
        </h2>
        <p class="section-description">
          De norte a sul do país, garantimos a conectividade de Moçambique com o mundo.
        </p>
      </div>

      <!-- Container do Mapa MapTiler -->
      <div class="map-wrapper">
        <div
          ref="mapContainer"
          class="map-container"
          style="height: 600px; width: 100%; border-radius: 20px"
        ></div>

        <!-- Legenda -->
        <div class="map-legend">
          <div class="legend-item">
            <span class="legend-dot int-dot"></span>
            <span>Aeroportos Internacionais (7)</span>
          </div>
          <div class="legend-item">
            <span class="legend-dot reg-dot"></span>
            <span>Aeródromos Regionais (12)</span>
          </div>
          <div class="legend-item">
            <span class="legend-dot domestic-dot"></span>
            <span>Aeroportos Domésticos (7)</span>
          </div>
        </div>
      </div>

      <!-- Estatísticas Rápidas -->
      <div class="network-stats">
        <div class="stat-item">
          <div class="stat-number">7</div>
          <div class="stat-label">Internacionais</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">12</div>
          <div class="stat-label">Regionais</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">7</div>
          <div class="stat-label">Domésticos</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">26</div>
          <div class="stat-label">Total</div>
        </div>
      </div>

      <!-- Lista de Aeroportos por Categoria -->
      <div class="airports-grid">
        <h3 class="grid-title">Aeroportos Internacionais</h3>
        <div class="airport-chips">
          <div
            v-for="airport in internationalAirports"
            :key="airport.code"
            class="airport-chip int-chip"
            @mouseenter="highlightAirport(airport)"
            @mouseleave="unhighlightAirport(airport)"
            @click="flyToAirport(airport)"
          >
            <span class="chip-code">{{ airport.code }}</span>
            <span class="chip-name">{{ airport.name }}</span>
          </div>
        </div>

        <h3 class="grid-title mt-4">Aeródromos Regionais</h3>
        <div class="airport-chips">
          <div
            v-for="airport in regionalAirports"
            :key="airport.code"
            class="airport-chip reg-chip"
            @mouseenter="highlightAirport(airport)"
            @mouseleave="unhighlightAirport(airport)"
            @click="flyToAirport(airport)"
          >
            <span class="chip-code">{{ airport.code }}</span>
            <span class="chip-name">{{ airport.name }}</span>
          </div>
        </div>

        <h3 class="grid-title mt-4">Aeroportos Domésticos</h3>
        <div class="airport-chips">
          <div
            v-for="airport in domesticAirports"
            :key="airport.code"
            class="airport-chip domestic-chip"
            @mouseenter="highlightAirport(airport)"
            @mouseleave="unhighlightAirport(airport)"
            @click="flyToAirport(airport)"
          >
            <span class="chip-code">{{ airport.code }}</span>
            <span class="chip-name">{{ airport.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as maptilersdk from '@maptiler/sdk'
import '@maptiler/sdk/dist/maptiler-sdk.css'

// Configuração da API Key
const MAPTILER_API_KEY = 'HruxgdWgk4lSCfSm1Qd4'

// Referência ao container do mapa
const mapContainer = ref(null)
let map = null
let markers = []

// ==================== DADOS DOS AEROPORTOS ====================
// Coordenadas reais obtidas do Google Maps / OpenStreetMap

// Aeroportos Internacionais (7)
const internationalAirports = [
  {
    code: 'MPM',
    name: 'Aeroporto Internacional de Maputo',
    location: 'Maputo',
    lat: -25.9692,
    lng: 32.5732,
    destinations: '15 destinos',
    type: 'int',
    link: '/aeroportos/maputo',
  },
  {
    code: 'BEW',
    name: 'Aeroporto Internacional da Beira',
    location: 'Beira',
    lat: -19.8004,
    lng: 34.8871,
    destinations: '8 destinos',
    type: 'int',
    link: '/aeroportos/beira',
  },
  {
    code: 'APL',
    name: 'Aeroporto de Nampula',
    location: 'Nampula',
    lat: -15.1264,
    lng: 39.2648,
    destinations: '6 destinos',
    type: 'int',
    link: '/aeroportos/nampula',
  },
  {
    code: 'POL',
    name: 'Aeroporto de Pemba',
    location: 'Pemba',
    lat: -13.0237,
    lng: 40.5177,
    destinations: '5 destinos',
    type: 'int',
    link: '/aeroportos/pemba',
  },
  {
    code: 'VNX',
    name: 'Aeroporto de Vilankulo',
    location: 'Vilankulo',
    lat: -21.9922,
    lng: 35.3162,
    destinations: '4 destinos',
    type: 'int',
    link: '/aeroportos/vilankulo',
  },
  {
    code: 'INH',
    name: 'Aeroporto de Inhambane',
    location: 'Inhambane',
    lat: -23.865,
    lng: 35.3833,
    destinations: '3 destinos',
    type: 'int',
    link: '/aeroportos/inhambane',
  },
  {
    code: 'TET',
    name: 'Aeroporto de Tete',
    location: 'Tete',
    lat: -16.1643,
    lng: 33.5913,
    destinations: '4 destinos',
    type: 'int',
    link: '/aeroportos/tete',
  },
]

// Aeródromos Regionais (12)
const regionalAirports = [
  {
    code: 'UEL',
    name: 'Aeroporto de Quelimane',
    location: 'Quelimane',
    lat: -17.8555,
    lng: 36.8691,
    type: 'reg',
    link: '/aeroportos/quelimane',
  },
  {
    code: 'VJB',
    name: 'Aeroporto de Xai-Xai',
    location: 'Xai-Xai',
    lat: -25.0438,
    lng: 33.6443,
    type: 'reg',
    link: '/aeroportos/xai-xai',
  },
  {
    code: 'MNC',
    name: 'Aeroporto de Lichinga',
    location: 'Lichinga',
    lat: -13.274,
    lng: 35.2663,
    type: 'reg',
    link: '/aeroportos/lichinga',
  },
  {
    code: 'ANO',
    name: 'Aeroporto de Angoche',
    location: 'Angoche',
    lat: -16.1833,
    lng: 39.9167,
    type: 'reg',
    link: '/aeroportos/angoche',
  },
  {
    code: 'IBO',
    name: 'Aeroporto de Ibo',
    location: 'Ibo',
    lat: -12.35,
    lng: 40.5833,
    type: 'reg',
    link: '/aeroportos/ibo',
  },
  {
    code: 'PEX',
    name: 'Aeroporto de Pemba (Antigo)',
    location: 'Pemba',
    lat: -13.02,
    lng: 40.52,
    type: 'reg',
    link: '/aeroportos/pemba-antigo',
  },
  {
    code: 'MZQ',
    name: 'Aeroporto de Mueda',
    location: 'Mueda',
    lat: -11.6667,
    lng: 39.5667,
    type: 'reg',
    link: '/aeroportos/mueda',
  },
  {
    code: 'MGW',
    name: 'Aeroporto de Montepuez',
    location: 'Montepuez',
    lat: -13.1167,
    lng: 38.9833,
    type: 'reg',
    link: '/aeroportos/montepuez',
  },
  {
    code: 'VXC',
    name: 'Aeroporto de Lichinga (antigo)',
    location: 'Lichinga',
    lat: -13.3,
    lng: 35.2333,
    type: 'reg',
    link: '/aeroportos/lichinga-antigo',
  },
  {
    code: 'MUD',
    name: 'Aeroporto de Muidumbe',
    location: 'Muidumbe',
    lat: -11.8333,
    lng: 39.7667,
    type: 'reg',
    link: '/aeroportos/muidumbe',
  },
  {
    code: 'MPA',
    name: 'Aeroporto de Mocimboa da Praia',
    location: 'Mocimboa da Praia',
    lat: -11.35,
    lng: 40.35,
    type: 'reg',
    link: '/aeroportos/mocimboa',
  },
  {
    code: 'PTW',
    name: 'Aeroporto de Palma',
    location: 'Palma',
    lat: -10.7833,
    lng: 40.5,
    type: 'reg',
    link: '/aeroportos/palma',
  },
]

// Aeroportos Domésticos (7)
const domesticAirports = [
  {
    code: 'JCA',
    name: 'Aeroporto de João Correia',
    location: 'João Correia',
    lat: -24.7333,
    lng: 34.8833,
    type: 'dom',
    link: '/aeroportos/joao-correia',
  },
  {
    code: 'MTA',
    name: 'Aeroporto de Marrupa',
    location: 'Marrupa',
    lat: -13.2167,
    lng: 37.55,
    type: 'dom',
    link: '/aeroportos/marrupa',
  },
  {
    code: 'MZ',
    name: 'Aeroporto de Mocuba',
    location: 'Mocuba',
    lat: -16.85,
    lng: 38.25,
    type: 'dom',
    link: '/aeroportos/mocuba',
  },
  {
    code: 'MMO',
    name: 'Aeroporto de Marromeu',
    location: 'Marromeu',
    lat: -18.2833,
    lng: 35.95,
    type: 'dom',
    link: '/aeroportos/marromeu',
  },
  {
    code: 'MPM',
    name: 'Aeroporto de Mapulanguene',
    location: 'Mapulanguene',
    lat: -24.15,
    lng: 32.05,
    type: 'dom',
    link: '/aeroportos/mapulanguene',
  },
  {
    code: 'MZ',
    name: 'Aeroporto de Massangena',
    location: 'Massangena',
    lat: -21.55,
    lng: 32.9667,
    type: 'dom',
    link: '/aeroportos/massangena',
  },
  {
    code: 'ZSE',
    name: 'Aeroporto de Zumbo',
    location: 'Zumbo',
    lat: -15.6167,
    lng: 30.45,
    type: 'dom',
    link: '/aeroportos/zumbo',
  },
]

// Combinar todos para facilitar a busca
const allAirports = [...internationalAirports, ...regionalAirports, ...domesticAirports]

// ==================== FUNÇÕES DO MAPA ====================
onMounted(() => {
  if (!mapContainer.value) return

  // Inicializar MapTiler
  maptilersdk.config.apiKey = MAPTILER_API_KEY

  // Criar mapa com estilo profissional
  map = new maptilersdk.Map({
    container: mapContainer.value,
    style: maptilersdk.MapStyle.STREETS, // Podes escolher: OUTDOOR, SATELLITE, HYBRID, etc.
    center: [35.5296, -18.6657], // [lng, lat] - centro de Moçambique
    zoom: 5.5,
    navigationControl: true,
    geolocationControl: false,
    terrainControl: false,
  })

  // Adicionar controlos de navegação [citation:2]
  map.addControl(new maptilersdk.NavigationControl(), 'top-right')

  // Aguardar o mapa carregar antes de adicionar marcadores
  map.on('load', () => {
    addMarkersToMap()
  })
})

// Adicionar todos os marcadores ao mapa
const addMarkersToMap = () => {
  if (!map) return

  // Limpar marcadores anteriores se existirem
  markers.forEach((marker) => marker.remove())
  markers = []

  // Criar marcador para cada aeroporto
  allAirports.forEach((airport) => {
    // Criar elemento HTML personalizado para o marcador [citation:3]
    const markerElement = document.createElement('div')
    markerElement.className = `custom-marker marker-${airport.type}`
    markerElement.innerHTML = airport.type === 'int' ? '✈️' : '⬤'
    markerElement.style.cssText = `
      width: ${airport.type === 'int' ? '40px' : '32px'};
      height: ${airport.type === 'int' ? '40px' : '32px'};
      background: ${airport.type === 'int' ? '#f2e416' : airport.type === 'reg' ? '#030140' : '#4a5568'};
      border: 3px solid ${airport.type === 'int' ? '#030140' : '#f2e416'};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${airport.type === 'int' ? '#030140' : 'white'};
      font-size: ${airport.type === 'int' ? '18px' : '16px'};
      font-weight: bold;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      cursor: pointer;
      transition: transform 0.2s;
    `

    // Criar popup com informações do aeroporto
    const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(`
        <div class="custom-popup">
          <h4>${airport.name}</h4>
          <p><strong>Código:</strong> ${airport.code}</p>
          <p><strong>Localização:</strong> ${airport.location}</p>
          ${airport.destinations ? `<p><strong>Destinos:</strong> ${airport.destinations}</p>` : ''}
          <a href="${airport.link}" class="popup-link">Ver detalhes →</a>
        </div>
      `)

    // Criar e adicionar marcador
    const marker = new maptilersdk.Marker({ element: markerElement })
      .setLngLat([airport.lng, airport.lat])
      .setPopup(popup)
      .addTo(map)

    markers.push({ marker, airport })
  })
}

// Funções de interação
const highlightAirport = (airport) => {
  const found = markers.find((m) => m.airport.code === airport.code)
  if (found) {
    found.marker.togglePopup()
    // Efeito visual no marcador
    const element = found.marker.getElement()
    element.style.transform = 'scale(1.2)'
    element.style.zIndex = '1000'
  }
}

const unhighlightAirport = (airport) => {
  const found = markers.find((m) => m.airport.code === airport.code)
  if (found) {
    found.marker.togglePopup()
    const element = found.marker.getElement()
    element.style.transform = 'scale(1)'
    element.style.zIndex = 'auto'
  }
}

const flyToAirport = (airport) => {
  if (!map) return

  map.flyTo({
    center: [airport.lng, airport.lat],
    zoom: 12,
    speed: 0.8,
    curve: 1,
    easing: (t) => t,
  })

  // Abrir popup após voar
  setTimeout(() => {
    const found = markers.find((m) => m.airport.code === airport.code)
    if (found) found.marker.togglePopup()
  }, 1500)
}

// Limpar recursos ao desmontar
onUnmounted(() => {
  if (map) {
    map.remove()
  }
})
</script>

<style scoped>
.airports-map-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
}

.section-header {
  margin-bottom: 40px;
}

.section-tag {
  display: inline-block;
  background: rgba(242, 228, 22, 0.1);
  color: #030140;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1px;
  padding: 8px 20px;
  border-radius: 50px;
  border-left: 4px solid #f2e416;
  margin-bottom: 20px;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  color: #030140;
  margin-bottom: 20px;
}

.title-line {
  display: block;
  font-size: 2.8rem;
}

.title-line-highlight {
  display: block;
  color: #f2e416;
  font-size: 3.2rem;
  text-shadow: 0 2px 10px rgba(242, 228, 22, 0.2);
}

.section-description {
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 700px;
  margin: 0 auto;
}

.map-wrapper {
  position: relative;
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(3, 1, 64, 0.25);
}

.map-container {
  width: 100%;
  height: 600px;
}

/* Legenda */
.map-legend {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(242, 228, 22, 0.2);
  z-index: 1000;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  font-size: 0.85rem;
  color: #030140;
}

.legend-item:last-child {
  margin-bottom: 0;
}

.legend-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
}

.int-dot {
  background: #f2e416;
  border: 2px solid #030140;
}

.reg-dot {
  background: #030140;
  border: 2px solid #f2e416;
}

.domestic-dot {
  background: #4a5568;
  border: 2px solid #f2e416;
}

/* Estatísticas */
.network-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 40px;
  padding: 25px;
  background: white;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(3, 1, 64, 0.05);
  border: 1px solid rgba(242, 228, 22, 0.1);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.2rem;
  font-weight: 800;
  color: #030140;
  line-height: 1.2;
}

.stat-label {
  color: #718096;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Grid de Aeroportos */
.airports-grid {
  margin-top: 30px;
}

.grid-title {
  color: #030140;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 15px;
  border-left: 4px solid #f2e416;
  padding-left: 15px;
}

.airport-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.airport-chip {
  padding: 8px 16px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(3, 1, 64, 0.05);
}

.airport-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(3, 1, 64, 0.1);
}

.int-chip {
  background: rgba(242, 228, 22, 0.1);
  border: 1px solid #f2e416;
}

.reg-chip {
  background: rgba(3, 1, 64, 0.05);
  border: 1px solid #030140;
}

.domestic-chip {
  background: rgba(74, 85, 104, 0.1);
  border: 1px solid #4a5568;
}

.chip-code {
  font-weight: 800;
  color: #030140;
  font-size: 0.85rem;
}

.chip-name {
  color: #4a5568;
  font-size: 0.85rem;
}

.mt-4 {
  margin-top: 20px;
}

/* Popup personalizado */
:deep(.maplibregl-popup-content) {
  padding: 15px;
  border-radius: 12px;
  min-width: 220px;
  border: 1px solid #f2e416;
}

:deep(.custom-popup h4) {
  color: #030140;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
  border-bottom: 2px solid #f2e416;
  padding-bottom: 5px;
}

:deep(.custom-popup p) {
  color: #4a5568;
  font-size: 0.85rem;
  margin-bottom: 5px;
}

:deep(.popup-link) {
  display: inline-block;
  margin-top: 8px;
  color: #030140;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  border-bottom: 1px solid #f2e416;
  padding-bottom: 2px;
}

/* Responsividade */
@media (max-width: 768px) {
  .airports-map-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .title-line {
    font-size: 1.8rem;
  }

  .title-line-highlight {
    font-size: 2.2rem;
  }

  .map-container {
    height: 450px;
  }

  .map-legend {
    position: relative;
    bottom: auto;
    right: auto;
    margin: 20px 0 0;
  }

  .network-stats {
    flex-wrap: wrap;
    gap: 15px;
  }

  .stat-item {
    flex: 1 1 40%;
  }

  .stat-number {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .map-container {
    height: 400px;
  }

  .airport-chip {
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }
}
</style>
