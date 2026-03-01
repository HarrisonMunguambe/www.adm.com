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
              IATA e a referência do voo a partir ou aterrar em um dos aeroportos para verificar
              infomacaões detalhadas sobre horários, status e portões de embarque.

              <!-- Caixa de pesquisa principal -->
            </p>

            <div class="search-container">
              <div class="search-box">
                <i class="fas fa-search search-icon"></i>
                <input
                  type="text"
                  v-model="airportCode"
                  placeholder="Digite a referência do voo (ex:TM 100)"
                  @keyup.enter="searchFlights"
                />
                <button class="search-btn" @click="searchFlights">Pesquisar voos</button>
              </div>

              <!-- Códigos sugeridos -->
            </div>

            <!-- Call to action única -->
            <div class="flight-cta">
              <router-link to="/voos" class="btn--base">
                <i class="fas fa-plane-departure mr-2"></i>
                Ver página completa de voos
                <i class="fas fa-arrow-right ml-2"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const airportCode = ref('')

// Imagem de fundo (mesma da seção anterior)
const backgroundImage =
  '/src/assets/images/ADM/625385843_1534931231975610_3054440981549519282_n copy.jpg.jpeg'

const backgroundStyle = computed(() => ({
  backgroundImage: `url('${backgroundImage}')`,
}))

// Códigos dos 8 aeroportos
const suggestedCodes = ['MPM', 'BEW', 'APL', 'POL', 'VNX', 'TET', 'UEL', 'VPY']

// Funções
const selectCode = (code) => {
  airportCode.value = code
  searchFlights()
}

const searchFlights = () => {
  if (!airportCode.value) return

  router.push({
    path: '/voos',
    query: { airport: airportCode.value.toUpperCase() },
  })
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

/* Overlay escuro (igual à seção anterior) */
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

/* Elemento decorativo (opcional) */
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

/* Conteúdo alinhado à esquerda */
.flight-content {
  color: #fff;
  max-width: 800px;
  text-align: left;
}

/* Badge */
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

/* Título */
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
}

.text-highlight::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 8px;
  background: rgba(242, 228, 22, 0.3);
  z-index: -1;
}

/* Descrição */
.flight-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.9);
  text-align: left;
}

/* Container de pesquisa */
.search-container {
  margin-bottom: 40px;
  text-align: left;
}

/* Caixa de pesquisa */
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

.search-btn:hover {
  background: #ffef57;
  transform: translateX(-3px);
  box-shadow: 0 5px 15px rgba(242, 228, 22, 0.3);
}

/* Sugestões de código */
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

/* Call to action */
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

/* Responsividade */
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
}
</style>
