<template>
  <section id="aeroportos" class="airports-map-section">
    <div class="container">
      <!-- Cabeçalho da seção -->
      <div class="section-header text-center" data-aos="fade-up">
        <span class="section-tag">
          <i class="fas fa-map-marked-alt mr-2"></i>
          NOSSA PRESENÇA
        </span>
        <h2 class="section-title">
          <span class="title-line">Rede de</span>
          <span class="title-line-highlight">Aeroportos </span> Nacionais
        </h2>
        <p class="section-description">
          De norte a sul do país, garantimos a conectividade de Moçambique com o mundo.
          Contrubuirndo para o desenvolvimento económico e turístico de Moçambique.
        </p>
      </div>

      <!-- Container do Mapa MapTiler -->
      <div class="map-wrapper">
        <div
          ref="mapContainer"
          class="map-container"
          style="height: 600px; width: 100%; border-radius: 20px"
        ></div>

        <!-- Legenda simplificada -->
        <div class="map-legend">
          <div class="legend-item">
            <span class="legend-dot int-dot"></span>
            <span>Aeroportos Internacionais (8)</span>
          </div>
        </div>
      </div>

      <!-- Estatísticas Rápidas - Atualizadas -->
      <div class="network-stats">
        <div class="stat-item">
          <div class="stat-number">8</div>
          <div class="stat-label">Aeroportos</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">7</div>
          <div class="stat-label">Províncias</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">15+</div>
          <div class="stat-label">Destinos</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">5.2M</div>
          <div class="stat-label">Passageiros</div>
        </div>
      </div>

      <!-- Lista de Aeroportos - Única categoria -->
      <!-- <div class="airports-grid">
        <h3 class="grid-title">Aeroportos de Moçambique</h3>
        <div class="airport-chips">
          <div
            v-for="airport in mozambiqueAirports"
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
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as maptilersdk from '@maptiler/sdk'
import '@maptiler/sdk/dist/maptiler-sdk.css'

// Configuração da API Key via ambiente (.env)
const MAPTILER_API_KEY = import.meta.env.VITE_MAPTILER_API_KEY || ''

// Vista inicial para enquadramento semelhante ao exemplo visual
const INITIAL_CENTER = [37.2, -18.8]
const INITIAL_ZOOM = 4.6

// Referência ao container do mapa
const mapContainer = ref(null)
let map = null
let markers = []

// ==================== DADOS CORRETOS DOS 8 AEROPORTOS ====================
const mozambiqueAirports = [
  {
    code: 'MPM',
    name: 'Aeroporto Internacional de Maputo',
    location: 'Maputo',
    lat: -25.9692,
    lng: 32.5732,
    type: 'int',
    link: '/aeroportos/maputo',
  },
  {
    code: 'BEW',
    name: 'Aeroporto Internacional da Beira',
    location: 'Beira',
    lat: -19.8004,
    lng: 34.8871,
    type: 'int',
    link: '/aeroportos/beira',
  },
  {
    code: 'APL',
    name: 'Aeroporto Internacional de Nampula',
    location: 'Nampula',
    lat: -15.1264,
    lng: 39.2648,
    type: 'int',
    link: '/aeroportos/nampula',
  },
  {
    code: 'VNX',
    name: 'Aeroporto Internacional de Vilankulo',
    location: 'Vilankulo',
    lat: -21.9922,
    lng: 35.3162,
    type: 'int',
    link: '/aeroportos/vilankulo',
  },
  {
    code: 'POL',
    name: 'Aeroporto de Pemba',
    location: 'Pemba',
    lat: -13.0237,
    lng: 40.5177,
    type: 'int',
    link: '/aeroportos/pemba',
  },
  {
    code: 'TET',
    name: 'Aeroporto de Tete',
    location: 'Tete',
    lat: -16.1643,
    lng: 33.5913,
    type: 'int',
    link: '/aeroportos/tete',
  },
  {
    code: 'UEL',
    name: 'Aeroporto de Quelimane',
    location: 'Quelimane',
    lat: -17.8555,
    lng: 36.8691,
    type: 'int',
    link: '/aeroportos/quelimane',
  },
  {
    code: 'VPY',
    name: 'Aeroporto de Chimoio',
    location: 'Chimoio',
    lat: -19.1513,
    lng: 33.429,
    type: 'int',
    link: '/aeroportos/chimoio',
  },
]

// ==================== FUNÇÕES DO MAPA ====================
onMounted(() => {
  if (!mapContainer.value) return

  // Inicializar MapTiler
  maptilersdk.config.apiKey = MAPTILER_API_KEY

  // Criar mapa com estilo profissional
  map = new maptilersdk.Map({
    container: mapContainer.value,
    style: maptilersdk.MapStyle.STREETS,
    center: INITIAL_CENTER,
    zoom: INITIAL_ZOOM,
    navigationControl: true,
    geolocationControl: false,
    terrainControl: false,
  })

  map.addControl(new maptilersdk.NavigationControl(), 'top-right')

  map.on('load', () => {
    addMarkersToMap()
  })
})

// Adicionar marcadores ao mapa
const addMarkersToMap = () => {
  if (!map) return

  markers.forEach((marker) => marker.remove())
  markers = []

  mozambiqueAirports.forEach((airport) => {
    // Criar elemento HTML para o marcador
    const markerElement = document.createElement('div')
    markerElement.className = 'custom-marker'
    markerElement.innerHTML = '✈️'
    markerElement.style.cssText = `
      width: 40px;
      height: 40px;
      background: #f2e416;
      border: 3px solid #030140;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #030140;
      font-size: 18px;
      font-weight: bold;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      cursor: pointer;
      transition: transform 0.2s;
    `

    // Criar popup
    const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(`
      <div class="custom-popup">
        <h4>${airport.name}</h4>
        <p><strong>Código IATA:</strong> ${airport.code}</p>
        <p><strong>Localização:</strong> ${airport.location}</p>
        <a href="${airport.link}" class="popup-link">Ver detalhes →</a>
      </div>
    `)

    // Adicionar marcador
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

  setTimeout(() => {
    const found = markers.find((m) => m.airport.code === airport.code)
    if (found) found.marker.togglePopup()
  }, 1500)
}

// Limpar recursos
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
  margin-bottom: 25px !important;
}

.title-line {
  display: inline-block;
  font-size: 2.8rem;
  color: #030140 !important;
  margin-right: 10px;
}

.title-line-highlight {
  display: inline-block;
  color: #f2e416;
  font-size: 3.2rem;
  text-shadow: 0 2px 10px rgba(242, 228, 22, 0.2);
}

.section-description {
  font-size: 1.1rem;
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

/* Legenda simplificada */
.map-legend {
  position: absolute;
  bottom: 10px;
  left: 11px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  padding: 12px 20px;
  border-radius: 50px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(242, 228, 22, 0.2);
  z-index: 1000;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: #030140;
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

/* Estatísticas atualizadas */
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
  gap: 12px;
}

.airport-chip {
  padding: 10px 20px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(3, 1, 64, 0.05);
  background: rgba(242, 228, 22, 0.1);
  border: 1px solid #f2e416;
}

.airport-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(242, 228, 22, 0.2);
}

.chip-code {
  font-weight: 800;
  color: #030140;
  font-size: 0.9rem;
}

.chip-name {
  color: #4a5568;
  font-size: 0.9rem;
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
    display: inline-block;
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
    padding: 8px 16px;
    font-size: 0.8rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}
</style>
