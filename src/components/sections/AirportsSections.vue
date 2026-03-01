<template>
  <section class="airports-map-section" ref="sectionRef">
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

        <!-- Legenda simplificada -->
        <div class="map-legend">
          <div class="legend-item">
            <span class="legend-dot int-dot"></span>
            <span>Aeroportos Internacionais (8)</span>
          </div>
        </div>
      </div>

      <!-- Estatísticas Rápidas com efeito de contador -->
      <div class="network-stats" ref="statsRef">
        <div class="stat-item" v-for="stat in stats" :key="stat.label">
          <div class="stat-number">
            <span class="counter">{{ animatedStats[stat.label] || stat.value }}</span>
            <span v-if="stat.suffix" class="stat-suffix">{{ stat.suffix }}</span>
          </div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
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

// Referências
const mapContainer = ref(null)
const sectionRef = ref(null)
const statsRef = ref(null)
let map = null
let markers = []
let observer = null

// ==================== ESTATÍSTICAS COM CONTADOR ====================
const stats = [
  { label: 'Aeroportos', value: 8, suffix: '' },
  { label: 'Províncias', value: 7, suffix: '' },
  { label: 'Destinos', value: 15, suffix: '+' },
  { label: 'Passageiros', value: 5.2, suffix: 'M' },
]

const animatedStats = ref({})

// Função para animar os números
const animateNumbers = () => {
  stats.forEach((stat) => {
    const target = stat.value
    const duration = 2000 // 2 segundos
    const stepTime = 20 // atualizar a cada 20ms
    const steps = duration / stepTime
    const increment = target / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        animatedStats.value[stat.label] = target + (stat.suffix ? '' : '')
        clearInterval(timer)
      } else {
        if (stat.label === 'Passageiros') {
          animatedStats.value[stat.label] = current.toFixed(1)
        } else {
          animatedStats.value[stat.label] = Math.floor(current)
        }
      }
    }, stepTime)
  })
}

// Configurar Intersection Observer
const setupObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers()
          observer.unobserve(entry.target) // Parar de observar após animar
        }
      })
    },
    { threshold: 0.3 },
  ) // Ativa quando 30% da seção está visível

  if (statsRef.value) {
    observer.observe(statsRef.value)
  }
}

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

  // Configurar observer para animação das estatísticas
  setupObserver()
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
  if (observer) {
    observer.disconnect()
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

/* Legenda simplificada */
.map-legend {
  position: absolute;
  bottom: 10px;
  left: 10px;
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

/* Estatísticas com efeito de contador */
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
  font-size: 2.5rem;
  font-weight: 800;
  color: #030140;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.counter {
  display: inline-block;
  min-width: 60px;
  text-align: right;
}

.stat-suffix {
  color: #f2e416;
  font-size: 2rem;
  font-weight: 700;
  margin-left: 2px;
}

.stat-label {
  color: #718096;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 5px;
}

/* Animação suave para o contador */
@keyframes countPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.stat-number .counter {
  animation: countPulse 0.3s ease-out;
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
    padding: 20px;
  }

  .stat-item {
    flex: 1 1 40%;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-suffix {
    font-size: 1.6rem;
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
    font-size: 1.6rem;
  }

  .stat-suffix {
    font-size: 1.3rem;
  }

  .counter {
    min-width: 40px;
  }
}
</style>
