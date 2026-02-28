<template>
  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start About Section - Sobre a ADM
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
  <section class="about-section">
    <div class="container">
      <div class="row align-items-center g-5">
        <!-- Coluna da Imagem (esquerda) com Slider AutomÃ¡tico -->
        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
          <div class="about-image-wrapper">
            <div class="about-image-main">
              <!-- Slider AutomÃ¡tico -->
              <div class="image-slider">
                <div
                  v-for="(image, index) in sliderImages"
                  :key="index"
                  class="slide"
                  :class="{ active: currentSlide === index }"
                >
                  <img :src="image" :alt="'ADM - Imagem ' + (index + 1)" class="img-fluid" />
                </div>
              </div>

              <!-- Indicadores do Slider -->
              <div class="slider-indicators">
                <span
                  v-for="(_, index) in sliderImages"
                  :key="index"
                  class="indicator"
                  :class="{ active: currentSlide === index }"
                  @click="currentSlide = index"
                ></span>
              </div>

              <!-- Badge flutuante com anos de histÃ³ria -->
              <div class="floating-badge">
                <div class="badge-content">
                  <span class="badge-number">45</span>
                  <span class="badge-text">Anos de<br />ExcelÃªncia</span>
                </div>
              </div>

              <!-- Badge de qualidade -->
              <div class="quality-badge">
                <i class="fas fa-certificate"></i>
                <span>ISO 9001:2025</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Coluna do ConteÃºdo (direita) -->
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
          <div class="about-content">
            <!-- Tag de identificaÃ§Ã£o -->
            <span class="section-tag">
              <i class="fas fa-building mr-2"></i>
              SOBRE A ADM â€¢ EP
            </span>

            <!-- TÃ­tulo principal melhorado -->
            <h2 class="about-title">
              <span class="title-line">Conectando MoÃ§ambique</span>
              <span class="title-line-highlight">ao Mundo</span>
            </h2>

            <!-- DescriÃ§Ã£o institucional melhorada -->
            <div class="about-description">
              <p class="lead-text">
                A Aeroportos de MoÃ§ambique Ã© a porta de entrada para um paÃ­s de sonhos, negÃ³cios e
                oportunidades.
              </p>

              <p>
                Com mais de 45 anos de histÃ³ria, evoluÃ­mos dos primeiros ServiÃ§os de AeronÃ¡utica
                Civil (SAC) para nos tornar uma referÃªncia em infraestrutura aeroportuÃ¡ria na Ãfrica
                Austral. Gerimos com orgulho a maior rede aeroportuÃ¡ria do paÃ­s, conectando
                MoÃ§ambique a 15 destinos internacionais atravÃ©s dos nossos 7 aeroportos
                internacionais.
              </p>

              <p class="highlight-text">
                <i class="fas fa-quote-left"></i>
                A nossa missÃ£o vai alÃ©m de gerir aeroportos. Trabalhamos diariamente para garantir
                que cada passageiro tenha uma experiÃªncia segura, eficiente e acolhedora, refletindo
                o verdadeiro espÃ­rito moÃ§ambicano.
              </p>
            </div>

            <!-- BotÃµes de aÃ§Ã£o -->
            <div class="about-buttons">
              <router-link to="/sobre-nos" class="btn--base btn-primary">
                <i class="fas fa-chevron-right mr-2"></i>
                ConheÃ§a a nossa histÃ³ria
              </router-link>

              <router-link to="/contactos" class="btn-outline-primary">
                <i class="fas fa-envelope mr-2"></i>
                Fale connosco
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Importar as imagens do slider (3 imagens)
import sliderImg1 from '@/assets/images/ADM/616176225_1514855020649898_8839484872168926276_n copy.jpg.jpeg'
import sliderImg2 from '@/assets/images/ADM/624432067_1534931198642280_7496995454634640722_n copy.jpg.jpeg'
import sliderImg3 from '@/assets/images/ADM/624737115_1534931181975615_1551209417469668367_n copy.jpg.jpeg'

// Array com as imagens do slider
const sliderImages = [sliderImg1, sliderImg2, sliderImg3]

// Slide atual (comeÃ§a no 0)
const currentSlide = ref(0)

// Intervalo para troca automÃ¡tica
let slideInterval = null

// FunÃ§Ã£o para avanÃ§ar para o prÃ³ximo slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % sliderImages.length
}

// Iniciar o slider automÃ¡tico
onMounted(() => {
  slideInterval = setInterval(nextSlide, 4000) // Troca a cada 4 segundos
})

// Limpar o intervalo quando o componente for destruÃ­do
onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
})
</script>

<style scoped>
.about-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #fafbfc 0%, #f5f7fa 100%);
  position: relative;
  overflow: hidden;
}

/* Elementos decorativos de fundo */
.about-section::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(242, 228, 22, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.about-section::after {
  content: '';
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(3, 1, 64, 0.03) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 2;
}

/* ===== ESTILOS DA IMAGEM COM SLIDER ===== */
.about-image-wrapper {
  position: relative;
  padding-right: 0;
}

.about-image-main {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(3, 1, 64, 0.15);
  aspect-ratio: 1/1;
  min-height: 560px;
}

/* Slider */
.image-slider {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  pointer-events: none;
}

.slide.active {
  opacity: 1;
  pointer-events: auto;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Indicadores do Slider */
.slider-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #f2e416;
  border-color: #f2e416;
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(242, 228, 22, 0.5);
}

.indicator:hover {
  background: #f2e416;
  border-color: #f2e416;
}

/* Badge flutuante (anos de histÃ³ria) */
.floating-badge {
  position: absolute;
  bottom: 30px;
  left: -20px;
  background: #030140;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(3, 1, 64, 0.3);
  z-index: 20;
  animation: float 3s ease-in-out infinite;
}

.badge-content {
  display: flex;
  align-items: center;
  gap: 15px;
}

.badge-number {
  font-size: 2.8rem;
  font-weight: 800;
  color: #f2e416;
  line-height: 1;
}

.badge-text {
  color: white;
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 500;
  text-transform: uppercase;
}

/* Badge de qualidade */
.quality-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  padding: 10px 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(242, 228, 22, 0.3);
  z-index: 20;
}

.quality-badge i {
  color: #f2e416;
  font-size: 1.2rem;
}

.quality-badge span {
  color: #030140;
  font-weight: 600;
  font-size: 0.9rem;
}

/* ===== ESTILOS DO CONTEÃšDO ===== */
.about-content {
  padding-left: 20px;
}

.section-tag {
  display: inline-block;
  background: rgba(242, 228, 22, 0.1);
  color: #030140;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1px;
  padding: 8px 18px;
  border-radius: 50px;
  border-left: 4px solid #f2e416;
  margin-bottom: 20px;
}

/* TÃ­tulo melhorado com duas linhas */
.about-title {
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.2;
  color: #030140;
  margin-bottom: 25px;
}

.title-line {
  display: block;
  font-size: 2.5rem;
}

.title-line-highlight {
  display: block;
  color: #f2e416;
  font-size: 2.8rem;
}


.about-description {
  margin-bottom: 35px;
}

.lead-text {
  font-size: 1.2rem;
  font-weight: 500;
  color: #030140;
  margin-bottom: 20px;
  border-left: 3px solid #f2e416;
  padding-left: 20px;
}

.about-description p {
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 20px;
}

.highlight-text {
  background: rgba(242, 228, 22, 0.05);
  padding: 20px 25px;
  border-radius: 15px;
  border-left: 4px solid #f2e416;
  font-style: italic;
  color: #2d3748;
  position: relative;
}

.highlight-text i {
  color: #f2e416;
  font-size: 1.2rem;
  margin-right: 10px;
  opacity: 0.7;
}

/* BotÃµes */
.about-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn-primary {
  background: #030140;
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 8px 20px rgba(3, 1, 64, 0.2);
}

.btn-primary:hover {
  background: #0a075f;
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(3, 1, 64, 0.3);
}

.btn-outline-primary {
  background: transparent;
  border: 2px solid #030140;
  color: #030140;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.btn-outline-primary:hover {
  background: #030140;
  color: white;
  transform: translateY(-2px);
}

.mr-2 {
  margin-right: 10px;
}

/*animaÃ§Ãµes */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsividade */
@media (max-width: 1200px) {
  .about-title {
    font-size: 2.4rem;
  }

  .title-line {
    font-size: 2.2rem;
  }

  
  .about-image-main {
    aspect-ratio: 5/4;
    min-height: 500px;
  }
}

@media (max-width: 992px) {
  .about-section {
    padding: 70px 0;
  }

  .about-image-wrapper {
    padding-right: 0;
    margin-bottom: 40px;
  }

  
  .about-image-main {
    aspect-ratio: 4/3;
    min-height: auto;
  }

  .about-content {
    padding-left: 0;
  }

  .floating-badge {
    left: 10px;
  }
}

@media (max-width: 768px) {
  .about-title {
    font-size: 2rem;
  }

  .title-line {
    font-size: 1.8rem;
  }

  .title-line-highlight {
    font-size: 2rem;
  }

  .floating-badge {
    padding: 15px;
  }

  .badge-number {
    font-size: 2.2rem;
  }

  .quality-badge {
    top: 10px;
    right: 10px;
    padding: 6px 15px;
  }

  .about-buttons {
    flex-direction: column;
  }

  .btn-primary,
  .btn-outline-primary {
    width: 100%;
    justify-content: center;
  }

  .slider-indicators {
    bottom: 15px;
  }

  .indicator {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 480px) {
  .about-title {
    font-size: 1.8rem;
  }

  .title-line {
    font-size: 1.6rem;
  }

  .title-line-highlight {
    font-size: 1.8rem;
  }

  .lead-text {
    font-size: 1.1rem;
  }

  .floating-badge {
    left: 5px;
    bottom: 15px;
    padding: 12px;
  }

  .badge-number {
    font-size: 1.8rem;
  }

  .badge-text {
    font-size: 0.8rem;
  }
}
</style>

