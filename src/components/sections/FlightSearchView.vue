<template>
  <div class="flight-search-page">
    <!-- Banner da Página - Design novo -->
    <!-- Banner da Página - Versão melhorada com foto -->
    <section
      class="page-banner"
      :style="{ backgroundImage: `url('/src/assets/images/bg/inner-bg.png')` }"
    >
      <div class="banner-overlay"></div>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <div class="banner-content">
              <h1 class="banner-title text-white">Pesquisa de Voos</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/">Início</router-link></li>
                  <li class="breadcrumb-item active" aria-current="page">Voos</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Seção de Pesquisa Principal -->
    <section class="search-section pt-120 pb-120">
      <div class="container">
        <div class="search-wrapper">
          <div class="search-tabs">
            <button
              class="tab-btn"
              :class="{ active: searchType === 'flight' }"
              @click="searchType = 'flight'"
            >
              <i class="fas fa-plane"></i>
              Por Número do Voo
            </button>
            <button
              class="tab-btn"
              :class="{ active: searchType === 'airport' }"
              @click="searchType = 'airport'"
            >
              <i class="fas fa-map-marker-alt"></i>
              Por Aeroporto
            </button>
          </div>

          <div class="search-box-container">
            <!-- Pesquisa por Número do Voo -->
            <div v-if="searchType === 'flight'" class="search-input-group">
              <i class="fas fa-search input-icon"></i>
              <input
                type="text"
                v-model="flightNumber"
                placeholder="Digite o número do voo (ex: TM101, EK764)"
                @keyup.enter="searchFlights"
              />
              <button class="search-btn" @click="searchFlights" :disabled="loading">
                <i class="fas fa-search" v-if="!loading"></i>
                <i class="fas fa-spinner fa-spin" v-else></i>
                {{ loading ? 'Buscando...' : 'Pesquisar' }}
              </button>
            </div>

            <!-- Pesquisa por Aeroporto -->
            <div v-else class="search-input-group airport-search">
              <i class="fas fa-map-pin input-icon"></i>
              <input
                type="text"
                v-model="airportCode"
                placeholder="Código do aeroporto (ex: MPM, LIS, JNB)"
                maxlength="3"
                @keyup.enter="searchFlights"
              />
              <select v-model="flightType" class="flight-type-select">
                <option value="departure">Partidas</option>
                <option value="arrival">Chegadas</option>
              </select>
              <button class="search-btn" @click="searchFlights" :disabled="loading">
                <i class="fas fa-search" v-if="!loading"></i>
                <i class="fas fa-spinner fa-spin" v-else></i>
                {{ loading ? 'Buscando...' : 'Pesquisar' }}
              </button>
            </div>
          </div>

          <!-- Sugestões de Aeroportos (quando pesquisa por aeroporto) -->
          <div v-if="searchType === 'airport'" class="airport-suggestions">
            <span class="suggestions-label">Aeroportos de Moçambique:</span>
            <div class="suggestions-chips">
              <button
                v-for="code in mozambiqueAirports"
                :key="code"
                class="chip"
                @click="selectAirport(code)"
              >
                {{ code }}
              </button>
            </div>
          </div>
        </div>

        <!-- Resultados da Pesquisa -->
        <div v-if="searchPerformed" class="results-section">
          <!-- Loading State -->
          <div v-if="loading" class="loading-state">
            <i class="fas fa-spinner fa-spin fa-3x"></i>
            <p>A buscar voos...</p>
          </div>

          <!-- Error State -->
          <div v-else-if="error" class="error-state">
            <i class="fas fa-exclamation-triangle fa-3x"></i>
            <p>{{ error }}</p>
            <button class="retry-btn" @click="searchFlights">Tentar novamente</button>
          </div>

          <!-- No Results -->
          <div v-else-if="!searchResults || searchResults.length === 0" class="no-results">
            <i class="fas fa-plane-slash fa-3x"></i>
            <p>Nenhum voo encontrado para a pesquisa realizada.</p>
          </div>

          <!-- Results List -->
          <div v-else class="results-list">
            <div class="results-header">
              <h2>
                <i class="fas fa-plane mr-2"></i>
                Resultados da Pesquisa
              </h2>
              <span class="results-count">{{ searchResults.length }} voo(s) encontrado(s)</span>
            </div>

            <div class="flights-grid">
              <div
                v-for="flight in searchResults"
                :key="flight.flight_number + flight.departure.scheduled"
                class="flight-card"
              >
                <div class="flight-card-header">
                  <div class="airline-info">
                    <span class="airline-name">{{ flight.airline }}</span>
                    <span class="flight-number">{{ flight.flight_number }}</span>
                  </div>
                  <div class="flight-status" :class="getStatusClass(flight.status)">
                    {{ flight.status }}
                  </div>
                </div>

                <div class="flight-route">
                  <!-- Origem/Partida -->
                  <div class="route-point">
                    <div class="airport-code">{{ flight.departure.airport }}</div>
                    <div class="airport-name">{{ flight.departure.airport_name }}</div>
                    <div class="flight-time">
                      <i class="far fa-clock"></i>
                      {{ formatTime(flight.departure.scheduled) }}
                    </div>
                    <div class="flight-details">
                      <span v-if="flight.departure.terminal">
                        <i class="fas fa-building"></i> Terminal {{ flight.departure.terminal }}
                      </span>
                      <span v-if="flight.departure.gate">
                        <i class="fas fa-door-open"></i> Portão {{ flight.departure.gate }}
                      </span>
                    </div>
                  </div>

                  <!-- Ícone de voo -->
                  <div class="route-icon">
                    <i
                      class="fas fa-plane"
                      :class="{
                        departure: searchType === 'airport' && flightType === 'departure',
                        arrival: searchType === 'airport' && flightType === 'arrival',
                      }"
                    ></i>
                  </div>

                  <!-- Destino/Chegada -->
                  <div class="route-point destination">
                    <div class="airport-code">{{ flight.arrival.airport }}</div>
                    <div class="airport-name">{{ flight.arrival.airport_name }}</div>
                    <div class="flight-time">
                      <i class="far fa-clock"></i>
                      {{ formatTime(flight.arrival.scheduled) }}
                    </div>
                    <div class="flight-details">
                      <span v-if="flight.arrival.terminal">
                        <i class="fas fa-building"></i> Terminal {{ flight.arrival.terminal }}
                      </span>
                      <span v-if="flight.arrival.gate">
                        <i class="fas fa-door-open"></i> Portão {{ flight.arrival.gate }}
                      </span>
                      <span v-if="flight.arrival.baggage">
                        <i class="fas fa-suitcase"></i> Bagagem: {{ flight.arrival.baggage }}
                      </span>
                    </div>
                  </div>
                </div>

                <div class="flight-card-footer">
                  <div v-if="flight.departure.delay" class="delay-info">
                    <i class="fas fa-exclamation-circle"></i>
                    Atraso na partida: {{ flight.departure.delay }} minutos
                  </div>
                  <div v-else-if="flight.arrival.delay" class="delay-info">
                    <i class="fas fa-exclamation-circle"></i>
                    Atraso na chegada: {{ flight.arrival.delay }} minutos
                  </div>
                  <div v-else class="on-time">
                    <i class="fas fa-check-circle"></i>
                    Voo dentro do horário
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Informações Adicionais -->
    <section class="info-section pt-20 pb-120 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="info-card">
              <i class="fas fa-headset"></i>
              <h3>Precisa de ajuda?</h3>
              <p>Contacte a nossa central de atendimento ao passageiro</p>
              <a href="tel:+25821465900" class="info-link">+258 21 465 900</a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="info-card">
              <i class="fas fa-clock"></i>
              <h3>Check-in</h3>
              <p>Recomenda-se chegar com 2 horas de antecedência para voos internacionais</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="info-card">
              <i class="fas fa-suitcase"></i>
              <h3>Bagagem</h3>
              <p>Consulte as regras de bagagem da sua companhia aérea</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import moment from 'moment'
import { searchFlightsByAirport, searchFlightByNumber } from '@/services/flightService'

const route = useRoute()

// Estados
const searchType = ref('flight') // 'flight' ou 'airport'
const flightNumber = ref('')
const airportCode = ref('')
const flightType = ref('departure') // 'departure' ou 'arrival'
const loading = ref(false)
const error = ref(null)
const searchPerformed = ref(false)
const searchResults = ref([])

// Aeroportos de Moçambique para sugestões
const mozambiqueAirports = ['MPM', 'BEW', 'APL', 'POL', 'VNX', 'TET', 'UEL', 'VPY']

// Verificar se veio algum parâmetro na URL
if (route.query.search) {
  const query = route.query.search.toUpperCase()
  if (/^[A-Z]{3}$/.test(query)) {
    searchType.value = 'airport'
    airportCode.value = query
  } else {
    searchType.value = 'flight'
    flightNumber.value = query
  }
  setTimeout(() => searchFlights(), 100)
}

// Função principal de pesquisa
const searchFlights = async () => {
  if (searchType.value === 'flight' && !flightNumber.value.trim()) return
  if (searchType.value === 'airport' && !airportCode.value.trim()) return

  loading.value = true
  error.value = null
  searchPerformed.value = true
  searchResults.value = []

  try {
    if (searchType.value === 'flight') {
      const flight = await searchFlightByNumber(flightNumber.value)
      searchResults.value = flight ? [flight] : []
    } else {
      searchResults.value = await searchFlightsByAirport(
        airportCode.value.toUpperCase(),
        flightType.value,
      )
    }
  } catch (err) {
    console.error('Erro na pesquisa:', err)
    error.value = 'Servidor não respondeu. Verifique sua conexão.'
  } finally {
    loading.value = false
  }
}

// Selecionar aeroporto sugerido
const selectAirport = (code) => {
  airportCode.value = code
  searchFlights()
}

// Formatar hora
const formatTime = (dateString) => {
  if (!dateString) return '--:--'
  return moment(dateString).format('HH:mm')
}

// Classe CSS para status
const getStatusClass = (status) => {
  const statusMap = {
    Programado: 'status-scheduled',
    'Em voo': 'status-active',
    Aterrou: 'status-landed',
    Cancelado: 'status-cancelled',
    Desviado: 'status-diverted',
  }
  return statusMap[status] || 'status-default'
}
</script>

<style scoped>
/* ===== Banner no novo estilo ===== */
.banner-section {
  position: relative;
  padding: 100px 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  z-index: 1;
}

.banner-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* overlay escuro */
  z-index: -1;
}

.banner-content {
  text-align: center;
  color: #fff;
}

.banner-content .title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.breadcrumb-area {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  border-radius: 30px;
  backdrop-filter: blur(5px);
}

.breadcrumb {
  display: flex;
  justify-content: center;
  background: transparent;
  margin: 0;
  padding: 0;
}

.breadcrumb-item {
  font-size: 1rem;
  color: #f2e416; /* dourado */
}

.breadcrumb-item a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-item a:hover {
  color: #f2e416;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: '/';
  color: #fff;
  padding: 0 8px;
}

.breadcrumb-item.active {
  color: #f2e416;
}

/* ===== Estilos existentes (mantidos) ===== */
.search-section {
  background: #f8fafc;
}

.search-wrapper {
  max-width: 900px;
  margin: 0 auto 50px;
  background: white;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(3, 1, 64, 0.05);
  border: 1px solid rgba(242, 228, 22, 0.1);
}

.search-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 15px;
}

.tab-btn {
  background: transparent;
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 600;
  color: #718096;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.tab-btn i {
  color: #f2e416;
}

.tab-btn.active {
  background: #030140;
  color: white;
}

.tab-btn.active i {
  color: #f2e416;
}

.search-box-container {
  margin-bottom: 20px;
}

.search-input-group {
  display: flex;
  align-items: center;
  background: #f8fafc;
  border-radius: 60px;
  padding: 5px;
  border: 2px solid rgba(242, 228, 22, 0.2);
  transition: all 0.3s ease;
}

.search-input-group:focus-within {
  border-color: #f2e416;
  box-shadow: 0 0 0 3px rgba(242, 228, 22, 0.1);
}

.input-icon {
  color: #f2e416;
  font-size: 1.2rem;
  padding: 0 15px;
}

.search-input-group input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 15px 0;
  font-size: 1rem;
  color: #030140;
  outline: none;
}

.search-input-group input::placeholder {
  color: #a0aec0;
}

.flight-type-select {
  background: #f8fafc;
  border: 2px solid rgba(242, 228, 22, 0.2);
  padding: 12px 25px;
  border-radius: 50px;
  font-size: 0.95rem;
  color: #030140;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  margin-right: 10px;
}

.flight-type-select:focus {
  border-color: #f2e416;
}

.search-btn {
  background: #030140;
  border: none;
  padding: 15px 40px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-btn:hover:not(:disabled) {
  background: #0a075f;
  transform: translateX(-3px);
}

.search-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.airport-search .search-input-group {
  display: flex;
  align-items: center;
}

.airport-suggestions {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}

.suggestions-label {
  display: block;
  color: #4a5568;
  font-size: 0.95rem;
  margin-bottom: 15px;
  font-weight: 500;
}

.suggestions-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  background: #f8fafc;
  border: 2px solid rgba(242, 228, 22, 0.2);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #030140;
  cursor: pointer;
  transition: all 0.3s ease;
}

.chip:hover {
  background: #f2e416;
  border-color: #f2e416;
  transform: translateY(-2px);
}

.results-section {
  margin-top: 50px;
}

.loading-state,
.error-state,
.no-results {
  text-align: center;
  padding: 80px 20px;
  background: white;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(3, 1, 64, 0.05);
}

.loading-state i,
.error-state i,
.no-results i {
  color: #f2e416;
  margin-bottom: 20px;
}

.loading-state p,
.error-state p,
.no-results p {
  color: #4a5568;
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.retry-btn {
  background: #030140;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.retry-btn:hover {
  background: #0a075f;
  transform: translateY(-2px);
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.results-header h2 {
  color: #030140;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}

.results-header h2 i {
  color: #f2e416;
}

.results-count {
  background: white;
  padding: 8px 20px;
  border-radius: 50px;
  color: #030140;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(3, 1, 64, 0.05);
}

.flights-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.flight-card {
  background: white;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(3, 1, 64, 0.05);
  border: 1px solid rgba(242, 228, 22, 0.1);
  transition: all 0.3s ease;
}

.flight-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(3, 1, 64, 0.1);
  border-color: #f2e416;
}

.flight-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f2e416;
}

.airline-info {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.airline-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #030140;
}

.flight-number {
  background: rgba(242, 228, 22, 0.1);
  color: #030140;
  padding: 5px 15px;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 700;
}

.flight-status {
  padding: 6px 18px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
}

.status-scheduled {
  background: #e2e8f0;
  color: #4a5568;
}
.status-active {
  background: #c6f6d5;
  color: #22543d;
}
.status-landed {
  background: #bee3f8;
  color: #1e4e6c;
}
.status-cancelled {
  background: #fed7d7;
  color: #9b2c2c;
}
.status-diverted {
  background: #feebc8;
  color: #7b341e;
}
.status-default {
  background: #e2e8f0;
  color: #4a5568;
}

.flight-route {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 30px;
  margin-bottom: 25px;
}

.route-point {
  text-align: left;
}

.route-point.destination {
  text-align: right;
}

.airport-code {
  font-size: 2.2rem;
  font-weight: 800;
  color: #030140;
  line-height: 1;
  margin-bottom: 5px;
}

.airport-name {
  color: #4a5568;
  font-size: 1rem;
  margin-bottom: 15px;
}

.flight-time {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4a5568;
  font-size: 1rem;
  margin-bottom: 10px;
}

.flight-time i {
  color: #f2e416;
}

.flight-details {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #718096;
  font-size: 0.9rem;
}

.flight-details i {
  color: #f2e416;
  width: 20px;
}

.route-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.route-icon i {
  font-size: 2rem;
  color: #f2e416;
  transform: rotate(90deg);
}

.route-icon i.departure {
  transform: rotate(-45deg);
}

.route-icon i.arrival {
  transform: rotate(45deg);
}

.flight-card-footer {
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
  text-align: center;
}

.delay-info {
  color: #e53e3e;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
}

.delay-info i {
  color: #e53e3e;
}

.on-time {
  color: #38a169;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
}

.on-time i {
  color: #38a169;
}

.info-section {
  background: linear-gradient(135deg, #f8fafc, #ffffff);
}

.info-card {
  text-align: center;
  padding: 40px 30px;
  background: white;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(3, 1, 64, 0.05);
  border: 1px solid rgba(242, 228, 22, 0.1);
  height: 100%;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-10px);
  border-color: #f2e416;
}

.info-card i {
  font-size: 2.5rem;
  color: #f2e416;
  margin-bottom: 20px;
}

.info-card h3 {
  color: #030140;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.info-card p {
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 20px;
}

.info-link {
  color: #030140;
  font-weight: 700;
  font-size: 1.2rem;
  text-decoration: none;
  border-bottom: 2px solid #f2e416;
  padding-bottom: 5px;
  transition: all 0.3s ease;
}

.info-link:hover {
  color: #f2e416;
}

/* Responsividade */
@media (max-width: 992px) {
  .banner-content .title {
    font-size: 2.5rem;
  }

  .search-input-group.airport-search {
    flex-wrap: wrap;
  }

  .flight-type-select {
    width: 100%;
    margin: 10px 0;
  }

  .search-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .banner-section {
    padding: 60px 0;
  }

  .banner-content .title {
    font-size: 2rem;
  }

  .breadcrumb-item {
    font-size: 0.9rem;
  }

  .search-tabs {
    flex-direction: column;
  }

  .tab-btn {
    width: 100%;
    justify-content: center;
  }

  .search-wrapper {
    padding: 20px;
  }

  .search-input-group {
    flex-direction: column;
    background: transparent;
    border: none;
    padding: 0;
  }

  .input-icon {
    display: none;
  }

  .search-input-group input {
    width: 100%;
    background: #f8fafc;
    border: 2px solid rgba(242, 228, 22, 0.2);
    border-radius: 50px;
    padding: 15px 20px;
    margin-bottom: 10px;
  }

  .results-header {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .results-header h2 {
    font-size: 1.5rem;
  }

  .flight-route {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .route-point.destination {
    text-align: left;
  }

  .route-icon {
    transform: rotate(90deg);
  }

  .flight-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .flight-status {
    align-self: flex-start;
  }

  .info-section .row {
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .banner-content .title {
    font-size: 1.6rem;
  }

  .airline-info {
    flex-direction: column;
    align-items: flex-start;
  }

  .airport-code {
    font-size: 1.8rem;
  }
}
.page-banner {
  position: relative;
  padding: 150px 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  z-index: 1;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(3, 1, 64, 0.8) 0%, rgba(3, 1, 64, 0.5) 100%);
  z-index: -1;
}

.banner-content {
  text-align: center;
  color: #fff;
  animation: fadeInUp 1s ease;
}

.banner-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
}

.breadcrumb {
  display: inline-flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  padding: 12px 30px;
  border-radius: 50px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(242, 228, 22, 0.3);
  margin: 0;
}

.breadcrumb-item {
  font-size: 1.1rem;
  color: #f2e416;
  font-weight: 500;
}

.breadcrumb-item a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-item a:hover {
  color: #f2e416;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: '/';
  color: #fff;
  padding: 0 10px;
}

.breadcrumb-item.active {
  color: #f2e416;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .page-banner {
    padding: 100px 0;
  }
  .banner-title {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
  .breadcrumb {
    padding: 8px 20px;
  }
  .breadcrumb-item {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .banner-title {
    font-size: 1.8rem;
  }
}
</style>
