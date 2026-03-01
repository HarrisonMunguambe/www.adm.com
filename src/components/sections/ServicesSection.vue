<template>
  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Services Section - Versão Corrigida
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
  <section class="services-section pt-120 pb-120">
    <div class="container">
      <!-- Cabeçalho da seção -->
      <div class="section-header text-center" data-aos="fade-up">
        <span class="section-tag">
          <i class="fas fa-concierge-bell mr-2"></i>
          NOSSOS SERVIÇOS
        </span>
        <h2 class="section-title">
          Os Nossos
          <span class="title-line-highlight">Serviços</span>
          Aeroportuários
        </h2>
        <p class="section-description">
          Conheça as principais áreas de atuação da Aeroportos de Moçambique.
        </p>
      </div>

      <!-- Carrossel de serviços -->
      <div class="services-carousel" ref="carouselRef">
        <!-- Container dos cards -->
        <div class="carousel-container">
          <!-- Botões de navegação - AGORA FORA DO CONTAINER -->
          <!-- <button class="nav-btn nav-prev" @click="prevSlide" :disabled="isAnimating">
            <i class="fas fa-chevron-left"></i>
          </button>

          <button class="nav-btn nav-next" @click="nextSlide" :disabled="isAnimating">
            <i class="fas fa-chevron-right"></i>
          </button> -->

          <!-- Track com os slides -->
          <div class="carousel-track" :style="trackStyle">
            <!-- Primeiro slide - 3 serviços -->
            <div class="carousel-slide">
              <div class="services-grid">
                <!-- Card 1 - Gestão Aeroportuária -->
                <div class="service-card">
                  <div class="card-icon-wrapper">
                    <div class="card-icon">
                      <i class="fas fa-broadcast-tower"></i>
                    </div>
                  </div>
                  <h3 class="card-title">Gestão Aeroportuária</h3>
                  <p class="card-text">
                    Administração eficiente das infraestruturas e coordenação das operações aéreas
                    nacionais com padrões internacionais.
                  </p>
                  <router-link to="/servicos/gestao" class="card-link">
                    <span>Saber mais</span>
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>

                <!-- Card 2 - Serviços ao Passageiro -->
                <div class="service-card">
                  <div class="card-icon-wrapper">
                    <div class="card-icon">
                      <i class="fas fa-users"></i>
                    </div>
                  </div>
                  <h3 class="card-title">Serviços ao Passageiro</h3>
                  <p class="card-text">
                    Informação de voos, apoio ao público e facilitação de embarque e desembarque com
                    qualidade e eficiência.
                  </p>
                  <router-link to="/servicos/passageiros" class="card-link">
                    <span>Saber mais</span>
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>

                <!-- Card 3 - Segurança -->
                <div class="service-card">
                  <div class="card-icon-wrapper">
                    <div class="card-icon">
                      <i class="fas fa-shield-alt"></i>
                    </div>
                  </div>
                  <h3 class="card-title">Segurança</h3>
                  <p class="card-text">
                    Controlo rigoroso, inspeção e resposta a emergências aeronáuticas para proteção
                    de pessoas e infraestruturas.
                  </p>
                  <router-link to="/servicos/seguranca" class="card-link">
                    <span>Saber mais</span>
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Segundo slide - 3 serviços -->
            <div class="carousel-slide">
              <div class="services-grid">
                <!-- Card 4 - Serviços Comerciais -->
                <div class="service-card">
                  <div class="card-icon-wrapper">
                    <div class="card-icon">
                      <i class="fas fa-store"></i>
                    </div>
                  </div>
                  <h3 class="card-title">Serviços Comerciais</h3>
                  <p class="card-text">
                    Gestão de concessões, lojas, restauração e parcerias estratégicas para dinamizar
                    os aeroportos.
                  </p>
                  <router-link to="/servicos/comerciais" class="card-link">
                    <span>Saber mais</span>
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>

                <!-- Card 5 - Carga Aérea -->
                <div class="service-card">
                  <div class="card-icon-wrapper">
                    <div class="card-icon">
                      <i class="fas fa-boxes"></i>
                    </div>
                  </div>
                  <h3 class="card-title">Carga Aérea</h3>
                  <p class="card-text">
                    Infraestrutura logística para operações de carga nacional e internacional com
                    eficiência.
                  </p>
                  <router-link to="/servicos/carga" class="card-link">
                    <span>Saber mais</span>
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>

                <!-- Card 6 - Modernização -->
                <div class="service-card">
                  <div class="card-icon-wrapper">
                    <div class="card-icon">
                      <i class="fas fa-chart-line"></i>
                    </div>
                  </div>
                  <h3 class="card-title">Modernização</h3>
                  <p class="card-text">
                    Investimento contínuo em inovação, expansão e sustentabilidade das
                    infraestruturas.
                  </p>
                  <router-link to="/servicos/desenvolvimento" class="card-link">
                    <span>Saber mais</span>
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Indicadores - AGORA FORA DO CONTAINER E ABAIXO -->
        <div class="carousel-indicators">
          <span
            v-for="(_, index) in totalSlides"
            :key="index"
            class="indicator"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>

      <!-- Call to action -->
      <div class="text-center mt-5" data-aos="fade-up">
        <router-link to="/servicos" class="btn--base btn-outline">
          Explorar todos os serviços
          <i class="fas fa-chevron-right ml-2"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const totalSlides = 2
const isAnimating = ref(false)
const autoPlayInterval = ref(null)
const carouselRef = ref(null)

// Computed para o estilo do track
const trackStyle = computed(() => ({
  transform: `translateX(-${currentSlide.value * 100}%)`,
}))

// Funções de navegação
const nextSlide = () => {
  if (isAnimating.value) return
  isAnimating.value = true
  currentSlide.value = (currentSlide.value + 1) % totalSlides
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}

const prevSlide = () => {
  if (isAnimating.value) return
  isAnimating.value = true
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}

const goToSlide = (index) => {
  if (isAnimating.value || index === currentSlide.value) return
  isAnimating.value = true
  currentSlide.value = index
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}

// Auto-play a cada 7 segundos
const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
  }
}

onMounted(() => {
  startAutoPlay()

  // Adicionar event listeners para pausar em interação
  if (carouselRef.value) {
    carouselRef.value.addEventListener('mouseenter', stopAutoPlay)
    carouselRef.value.addEventListener('mouseleave', startAutoPlay)
    carouselRef.value.addEventListener('touchstart', stopAutoPlay)
    carouselRef.value.addEventListener('touchend', startAutoPlay)
  }
})

onUnmounted(() => {
  stopAutoPlay()
  if (carouselRef.value) {
    carouselRef.value.removeEventListener('mouseenter', stopAutoPlay)
    carouselRef.value.removeEventListener('mouseleave', startAutoPlay)
  }
})
</script>

<style scoped>
.services-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  position: relative;
  overflow: hidden;
}

/* Elementos decorativos */
.services-section::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(242, 228, 22, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.services-section::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(3, 1, 64, 0.03) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Cabeçalho */
.section-header {
  margin-bottom: 50px;
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
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.2;
  color: #030140;
  margin-bottom: 25px !important;
}

.title-line {
  display: inline-block;
  font-size: 2.5rem;
  margin-right: 10px;
}

.title-line-highlight {
  display: inline-block;
  color: #f2e416;
  font-size: 2.8rem;
  text-shadow: 0 2px 10px rgba(242, 228, 22, 0.2);
  margin-right: 10px;
}

.section-description {
  font-size: 1.1rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
}

/* Carrossel */
.services-carousel {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}

.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 10px 20px;
}

/* Botões de navegação - CORRIGIDO */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  border: 2px solid rgba(242, 228, 22, 0.3);
  color: #030140;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 20;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(3, 1, 64, 0.1);
}

.nav-prev {
  left: -20px; /* Posiciona fora do grid mas ainda visível */
}

.nav-next {
  right: -20px; /* Posiciona fora do grid mas ainda visível */
}

.nav-btn:hover:not(:disabled) {
  background: #f2e416;
  border-color: #f2e416;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 25px rgba(242, 228, 22, 0.3);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Indicadores - CORRIGIDO (agora abaixo) */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
  position: relative;
  z-index: 15;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(3, 1, 64, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.indicator.active {
  background: #f2e416;
  transform: scale(1.3);
  box-shadow: 0 0 15px rgba(242, 228, 22, 0.5);
}

.indicator:hover {
  background: rgba(242, 228, 22, 0.5);
}

/* Card de serviço */
.service-card {
  background: white;
  border-radius: 30px;
  padding: 35px 25px;
  box-shadow: 0 15px 35px rgba(3, 1, 64, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(242, 228, 22, 0.1);
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Efeito de brilho */
.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(242, 228, 22, 0.1), transparent);
  transition: left 0.7s ease;
  pointer-events: none;
}

.service-card:hover::before {
  left: 100%;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 50px rgba(3, 1, 64, 0.15);
  border-color: #f2e416;
}

/* Ícone - CORRIGIDO para garantir visibilidade */
.card-icon-wrapper {
  margin-bottom: 25px;
  position: relative;
  width: fit-content;
}

.card-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(242, 228, 22, 0.15), rgba(242, 228, 22, 0.05));
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

.card-icon i {
  font-size: 2.5rem;
  color: #030140;
  transition: all 0.4s ease;
}

.service-card:hover .card-icon {
  background: #f2e416;
  border-radius: 50%;
}

.service-card:hover .card-icon i {
  color: #030140;
  transform: scale(1.1);
}

/* Título */
.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #030140;
  margin-bottom: 15px;
  line-height: 1.3;
}

/* Texto */
.card-text {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 25px;
  flex: 1;
  font-size: 0.95rem;
}

/* Link */
.card-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #030140;
  font-weight: 600;
  text-decoration: none;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  width: fit-content;
}

.card-link i {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.card-link:hover {
  color: #f2e416;
  border-bottom-color: #f2e416;
}

.card-link:hover i {
  transform: translateX(8px);
}

/* Botão outline */
.btn-outline {
  background: transparent;
  border: 2px solid #030140;
  color: #030140;
  padding: 14px 35px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: #030140;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(3, 1, 64, 0.2);
}

.ml-2 {
  margin-left: 8px;
}

/* Responsividade */
@media (max-width: 1200px) {
  .nav-prev {
    left: 0;
  }

  .nav-next {
    right: 0;
  }
}

@media (max-width: 992px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .section-title {
    font-size: 2.4rem;
  }

  .title-line {
    font-size: 2.2rem;
  }

  .title-line-highlight {
    font-size: 2.4rem;
  }

  .nav-btn {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 60px 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 10px;
  }

  .section-title {
    font-size: 2rem;
  }

  .title-line {
    font-size: 1.8rem;
  }

  .title-line-highlight {
    font-size: 2rem;
  }

  .service-card {
    padding: 25px 20px;
  }

  .card-icon {
    width: 70px;
    height: 70px;
  }

  .card-icon i {
    font-size: 2rem;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .nav-btn {
    display: none; /* Esconde botões em mobile */
  }

  .carousel-indicators {
    margin-top: 20px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .title-line {
    font-size: 1.6rem;
  }

  .title-line-highlight {
    font-size: 1.8rem;
  }

  .card-icon {
    width: 60px;
    height: 60px;
  }

  .card-icon i {
    font-size: 1.6rem;
  }
}
</style>
