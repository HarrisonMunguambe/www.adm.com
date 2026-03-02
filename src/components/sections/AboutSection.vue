<template>
  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Flight Tracking Section - Rastreio de Voos
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
  <section class="flight-track-section bg-overlay-base ptb-120 bg_img" :style="backgroundStyle">
    <!-- Elemento decorativo (opcional) -->
    <div class="flight-element">
      <img src="@/assets/images/element/element-8.png" alt="element" />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="flight-content">
            <!-- Badge simples -->
            <span class="sub-title">
              <i class="fas fa-radar mr-2"></i>
              RASTREIO DE VOOS
            </span>

            <!-- Título direto -->
            <h2 class="title">
              Acompanhe as Chegadas e Partidas
              <span class="text-highlight">em Tempo Real</span>
            </h2>

            <!-- Descrição clara e objetiva -->
            <p class="flight-description">
              Consulte a situação actual dos voos nos aeroportos de Moçambique. Utilize o código
              IATA do aeroporto (ex: MPM) ou o número do voo (ex: TM101) para verificar informações
              detalhadas sobre horários, status e portões de embarque.
            </p>

            <!-- Caixa de pesquisa principal -->
            <div class="search-container">
              <div class="search-box">
                <i class="fas fa-search search-icon"></i>
                <input
                  type="text"
                  v-model="searchQuery"
                  placeholder="Código do aeroporto (MPM) ou número do voo (TM101)"
                  @keyup.enter="searchFlights"
                />
                <button class="search-btn" @click="searchFlights" :disabled="loading">
                  <i class="fas fa-search" v-if="!loading"></i>
                  <i class="fas fa-spinner fa-spin" v-else></i>
                  {{ loading ? 'Buscando...' : 'Pesquisar' }}
                </button>
              </div>

              <!-- Códigos sugeridos -->
              <div class="code-suggestions">
                <span class="suggestions-label">Aeroportos:</span>
                <button
                  v-for="code in suggestedCodes"
                  :key="code"
                  class="code-chip"
                  @click="selectCode(code)"
                >
                  {{ code }}
                </button>
              </div>
            </div>

            <!-- Call to action única -->
            <div class="flight-cta">
              <router-link to="/voos" class="btn--base">
                <i class="fas fa-plane-departure mr-2"></i>
                Pesquisa por Referência do Voo
                <i class="fas fa-arrow-right ml-2"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL DE RESULTADOS - CORRIGIDO -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
          <div class="modal-container">
            <!-- Cabeçalho do Modal -->
            <div class="modal-header">
              <h3>
                <i class="fas fa-plane mr-2"></i>
                Resultados para: {{ searchQuery.toUpperCase() }}
              </h3>
              <button class="close-btn" @click="closeModal">
                <i class="fas fa-times"></i>
              </button>
            </div>

            <!-- Corpo do Modal -->
            <div class="modal-body">
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
                <p>Nenhum voo encontrado para "{{ searchQuery.toUpperCase() }}"</p>
              </div>

              <!-- Results List -->
              <div v-else class="results-list">
                <div class="results-stats">
                  <span>{{ searchResults.length }} voo(s) encontrado(s)</span>
                </div>

                <div class="flights-container">
                  <div
                    v-for="flight in searchResults"
                    :key="flight.flight_number"
                    class="flight-card"
                  >
                    <div class="flight-header">
                      <div class="flight-airline">
                        <span class="airline-name">{{ flight.airline }}</span>
                        <span class="flight-num">{{ flight.flight_number }}</span>
                      </div>
                      <div class="flight-status" :class="getStatusClass(flight.status)">
                        {{ flight.status }}
                      </div>
                    </div>

                    <div class="flight-route">
                      <!-- Partida -->
                      <div class="airport-info">
                        <div class="airport-code">{{ flight.departure.airport }}</div>
                        <div class="airport-name">{{ flight.departure.airport_name }}</div>
                        <div class="airport-time">
                          <i class="far fa-clock"></i>
                          Partida: {{ formatTime(flight.departure.scheduled) }}
                        </div>
                        <div v-if="flight.departure.terminal" class="airport-gate">
                          <i class="fas fa-building"></i> Terminal {{ flight.departure.terminal }}
                        </div>
                        <div v-if="flight.departure.gate" class="airport-gate">
                          <i class="fas fa-door-open"></i> Portão {{ flight.departure.gate }}
                        </div>
                      </div>

                      <!-- Ícone de voo -->
                      <div class="flight-path">
                        <i class="fas fa-plane"></i>
                      </div>

                      <!-- Chegada -->
                      <div class="airport-info destination">
                        <div class="airport-code">{{ flight.arrival.airport }}</div>
                        <div class="airport-name">{{ flight.arrival.airport_name }}</div>
                        <div class="airport-time">
                          <i class="far fa-clock"></i>
                          Chegada: {{ formatTime(flight.arrival.scheduled) }}
                        </div>
                        <div v-if="flight.arrival.terminal" class="airport-gate">
                          <i class="fas fa-building"></i> Terminal {{ flight.arrival.terminal }}
                        </div>
                        <div v-if="flight.arrival.gate" class="airport-gate">
                          <i class="fas fa-door-open"></i> Portão {{ flight.arrival.gate }}
                        </div>
                      </div>
                    </div>

                    <div class="flight-footer">
                      <div v-if="flight.departure.delay" class="flight-delay">
                        <i class="fas fa-clock"></i> Atraso: {{ flight.departure.delay }} min
                      </div>
                      <div v-if="flight.arrival.baggage" class="flight-baggage">
                        <i class="fas fa-suitcase"></i> Bagagem: {{ flight.arrival.baggage }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Rodapé do Modal -->
            <div class="modal-footer">
              <button class="btn-secondary" @click="closeModal">Fechar</button>
              <router-link
                :to="{ path: '/voos', query: { search: searchQuery.toUpperCase() } }"
                class="btn-primary"
              >
                Ver todos os detalhes
                <i class="fas fa-arrow-right ml-2"></i>
              </router-link>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import moment from 'moment'

const router = useRouter()
const searchQuery = ref('')
const showModal = ref(false)
const loading = ref(false)
const error = ref(null)
const searchResults = ref([])

// URL da API vinda do .env
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

// Imagem de fundo
const backgroundImage =
  '/src/assets/images/ADM/625385843_1534931231975610_3054440981549519282_n copy.jpg.jpeg'
const backgroundStyle = computed(() => ({
  backgroundImage: `url('${backgroundImage}')`,
}))

// Códigos dos 8 aeroportos
const suggestedCodes = ['MPM', 'BEW', 'APL', 'POL', 'VNX', 'TET', 'UEL', 'VPY']

// Função principal de pesquisa
const searchFlights = async () => {
  if (!searchQuery.value.trim()) return

  loading.value = true
  error.value = null
  showModal.value = true
  searchResults.value = []

  try {
    const query = searchQuery.value.toUpperCase().trim()

    // Verifica se é código de aeroporto (3 letras) ou número de voo
    if (/^[A-Z]{3}$/.test(query)) {
      // É código de aeroporto - busca voos
      const response = await axios.get(`${API_URL}/v1/flights/search`, {
        params: {
          airport_code: query,
          type: 'departure',
        },
      })
      searchResults.value = response.data.data || []
    } else {
      // É número de voo - busca voo específico
      const response = await axios.get(`${API_URL}/v1/flights/number/${query}`)
      searchResults.value = response.data.data ? [response.data.data] : []
    }
  } catch (err) {
    console.error('Erro:', err)

    if (err.response) {
      error.value = err.response.data.error || 'Erro no servidor'
    } else if (err.request) {
      error.value = 'Servidor não respondeu. Verifique sua conexão.'
    } else {
      error.value = err.message || 'Erro desconhecido'
    }

    searchResults.value = []
  } finally {
    loading.value = false
  }
}

// Selecionar código sugerido
const selectCode = (code) => {
  searchQuery.value = code
  searchFlights()
}

// Fechar modal
const closeModal = () => {
  showModal.value = false
  if (!loading.value) {
    searchResults.value = []
    error.value = null
  }
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
.flight-track-section {
  position: relative;
  padding: 100px 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
}

.flight-track-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(3, 1, 64, 0.9) 0%, rgba(3, 1, 64, 0.8) 100%);
  z-index: -1;
}

.flight-element {
  position: absolute;
  top: 50px;
  right: 50px;
  opacity: 0.1;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 2;
}

.flight-content {
  color: #fff;
  max-width: 800px;
  text-align: left;
}

.sub-title {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  color: #f2e416;
  background: rgba(242, 228, 22, 0.1);
  padding: 8px 20px;
  border-radius: 50px;
  border-left: 4px solid #f2e416;
}

.sub-title i {
  color: #f2e416;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #fff;
  text-align: left;
}

.text-highlight {
  color: #f2e416;
  position: relative;
  display: inline-block;
}

.flight-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.9);
  text-align: left;
}

.search-container {
  margin-bottom: 40px;
  text-align: left;
}

.search-box {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 60px;
  padding: 5px;
  border: 1px solid rgba(242, 228, 22, 0.3);
  margin-bottom: 15px;
  max-width: 700px;
}

.search-icon {
  color: #f2e416;
  font-size: 1.2rem;
  padding: 0 20px;
}

.search-box input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 18px 0;
  font-size: 1rem;
  color: #fff;
  outline: none;
}

.search-box input::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
}

.search-btn {
  background: #f2e416;
  border: none;
  padding: 15px 35px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  color: #030140;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  margin: 5px;
}

.search-btn:hover:not(:disabled) {
  background: #ffef57;
  transform: translateX(-3px);
  box-shadow: 0 5px 15px rgba(242, 228, 22, 0.3);
}

.search-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.code-suggestions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  text-align: left;
}

.suggestions-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-right: 5px;
}

.code-chip {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(242, 228, 22, 0.3);
  color: #fff;
  padding: 6px 15px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.code-chip:hover {
  background: #f2e416;
  color: #030140;
  transform: translateY(-2px);
  border-color: #f2e416;
}

.flight-cta {
  margin-top: 30px;
  text-align: left;
}

.btn--base {
  background: transparent;
  color: #fff;
  border: 2px solid #f2e416;
  padding: 16px 40px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.btn--base:hover {
  background: #f2e416;
  color: #030140;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(242, 228, 22, 0.3);
}

.btn--base i {
  transition: transform 0.3s ease;
}

.btn--base:hover i:last-child {
  transform: translateX(5px);
}

.mr-2 {
  margin-right: 8px;
}

.ml-2 {
  margin-left: 8px;
}

/* ===== ESTILOS DO MODAL - CORRIGIDOS ===== */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(3, 1, 64, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999 !important; /* Z-index altíssimo para sobrepor tudo */
  padding: 20px;
  margin: 0;
  overflow-y: auto;
}

.modal-container {
  background: white;
  border-radius: 30px;
  width: 100%;
  max-width: 1000px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 30px 60px rgba(3, 1, 64, 0.5);
  border: 2px solid #f2e416;
  animation: modalSlideIn 0.3s ease;
  position: relative;
  margin: auto;
  overflow: hidden;
}

@keyframes modalSlideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-header {
  padding: 20px 25px;
  border-bottom: 2px solid #f2e416;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #030140, #0a075f);
  border-radius: 30px 30px 0 0;
  flex-shrink: 0;
}

.modal-header h3 {
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
}

.modal-header h3 i {
  color: #f2e416;
}

.close-btn {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: #f2e416;
  color: #030140;
  transform: rotate(90deg);
}

.modal-body {
  padding: 25px;
  overflow-y: auto;
  flex: 1;
  background: #f8fafc;
}

.modal-footer {
  padding: 20px 25px;
  border-top: 1px solid rgba(3, 1, 64, 0.1);
  display: flex;
  justify-content: space-between;
  gap: 15px;
  background: white;
  border-radius: 0 0 30px 30px;
  flex-shrink: 0;
}

/* Estados do modal */
.loading-state,
.error-state,
.no-results {
  text-align: center;
  padding: 60px 20px;
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
  padding: 10px 25px;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.retry-btn:hover {
  background: #0a075f;
  transform: translateY(-2px);
}

.results-stats {
  margin-bottom: 20px;
  color: #4a5568;
  font-weight: 500;
}

.flights-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.flight-card {
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(3, 1, 64, 0.05);
  border: 1px solid rgba(242, 228, 22, 0.1);
  transition: all 0.3s ease;
}

.flight-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(3, 1, 64, 0.1);
  border-color: #f2e416;
}

.flight-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(242, 228, 22, 0.2);
}

.flight-airline {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.airline-name {
  font-weight: 600;
  color: #030140;
}

.flight-num {
  background: rgba(242, 228, 22, 0.1);
  color: #030140;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.flight-status {
  padding: 4px 12px;
  border-radius: 30px;
  font-size: 0.8rem;
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
  gap: 20px;
  margin-bottom: 15px;
}

.airport-info {
  text-align: left;
}

.airport-info.destination {
  text-align: right;
}

.airport-code {
  font-size: 1.5rem;
  font-weight: 800;
  color: #030140;
  line-height: 1;
  margin-bottom: 5px;
}

.airport-name {
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.airport-time {
  color: #4a5568;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.airport-time i,
.airport-gate i {
  color: #f2e416;
  margin-right: 5px;
}

.airport-gate {
  color: #4a5568;
  font-size: 0.9rem;
}

.flight-path {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flight-path i {
  font-size: 1.5rem;
  color: #f2e416;
  transform: rotate(90deg);
}

.flight-footer {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  border-top: 1px solid rgba(3, 1, 64, 0.05);
  color: #718096;
  font-size: 0.9rem;
  flex-wrap: wrap;
  gap: 10px;
}

.flight-delay i,
.flight-baggage i {
  color: #f2e416;
  margin-right: 5px;
}

.flight-delay {
  color: #e53e3e;
}

/* Botões do modal */
.btn-secondary {
  background: transparent;
  border: 2px solid #030140;
  color: #030140;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-secondary:hover {
  background: #030140;
  color: white;
}

.btn-primary {
  background: #030140;
  border: none;
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary:hover {
  background: #0a075f;
  transform: translateX(-3px);
}

/* Transição do modal */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Responsividade do modal */
@media (max-width: 992px) {
  .modal-container {
    max-width: 95%;
  }
}

@media (max-width: 768px) {
  .flight-track-section {
    padding: 70px 0;
  }

  .title {
    font-size: 2.2rem;
  }

  .flight-description {
    font-size: 1rem;
  }

  .search-box {
    flex-direction: column;
    background: transparent;
    border: none;
    padding: 0;
  }

  .search-icon {
    display: none;
  }

  .search-box input {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 50px;
    padding: 15px 20px;
    margin-bottom: 10px;
    border: 1px solid rgba(242, 228, 22, 0.3);
    text-align: center;
  }

  .search-btn {
    width: 100%;
    margin: 0;
  }

  .code-suggestions {
    gap: 8px;
    justify-content: flex-start;
  }

  .code-chip {
    padding: 5px 12px;
    font-size: 0.8rem;
  }

  .btn--base {
    width: 100%;
    padding: 14px 30px;
  }

  /* Modal responsivo */
  .modal-overlay {
    padding: 10px;
  }

  .modal-container {
    max-height: 95vh;
    border-radius: 20px;
  }

  .modal-header {
    padding: 15px 20px;
    border-radius: 20px 20px 0 0;
  }

  .modal-header h3 {
    font-size: 1.1rem;
  }

  .modal-body {
    padding: 15px;
  }

  .modal-footer {
    padding: 15px 20px;
    flex-direction: column;
  }

  .flight-route {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .airport-info.destination {
    text-align: left;
  }

  .flight-path {
    transform: rotate(90deg);
    margin: 10px 0;
  }

  .flight-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .flight-status {
    align-self: flex-start;
  }

  .btn-secondary,
  .btn-primary {
    width: 100%;
  }

  .flight-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.8rem;
  }

  .flight-description {
    font-size: 0.95rem;
  }

  .sub-title {
    font-size: 0.8rem;
    padding: 6px 15px;
  }

  .modal-body {
    padding: 10px;
  }

  .flight-card {
    padding: 15px;
  }

  .airport-code {
    font-size: 1.3rem;
  }

  .airport-name {
    font-size: 0.8rem;
  }

  .flight-header {
    margin-bottom: 10px;
  }

  .airline-name {
    font-size: 0.9rem;
  }

  .flight-num {
    font-size: 0.75rem;
  }
}
</style>
