<template>
  <div class="about-page">
    <!-- Banner da Página -->
    <section class="hero-banner">
      <div class="banner-bg" :style="{ backgroundImage: `url(${bannerImage})` }"></div>
      <div class="banner-overlay"></div>

      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-8 col-xl-7">
            <div class="banner-content" data-aos="fade-up" data-aos-duration="1200">
              <!-- Badge institucional -->
              <div class="badge-wrapper">
                <span class="badge-line"></span>
                <span class="badge-text">AEROPORTOS DE MOÇAMBIQUE</span>
                <span class="badge-line"></span>
              </div>

              <!-- Título principal -->
              <h1 class="banner-title">
                <span class="title-line text-white">Conectando</span>
                <span class="title-line highlight">Moçambique ao Mundo</span>
              </h1>

              <!-- Descrição -->
              <p class="banner-description">
                Gerimos a maior rede aeroportuária do país com orgulho nacional. Mais de 70 anos de
                história ligando Moçambique ao mundo, com padrões internacionais de qualidade e a
                hospitalidade que nos caracteriza.
              </p>

              <!-- Botões de ação -->
              <div class="banner-actions">
                <router-link to="/sobre-nos" class="btn btn-primary">
                  <i class="fas fa-chevron-right"></i>
                  Conheça a nossa história
                </router-link>
                <router-link to="/voos" class="btn btn-outline">
                  <i class="fas fa-plane-departure"></i>
                  Consultar voos
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Onda decorativa (opcional) -->
      <div class="banner-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>

    <!-- Seção Principal Sobre -->
    <section class="about-section about--style page-wrapper-two ptb-60">
      <div class="container">
        <div class="row justify-content-center align-items-center mb-30-none">
          <!-- Coluna da Imagem / Vídeo -->
          <div class="col-xl-6 col-lg-6 mb-30">
            <div class="about-thumb" data-aos="fade-right" data-aos-duration="1200">
              <!-- Imagem principal -->
              <img
                src="@/assets/images/ADM/616176225_1514855020649898_8839484872168926276_n copy.jpg.jpeg"
                alt="Aeroporto Internacional de Maputo"
                class="img-fluid"
              />

              <!-- Elemento decorativo -->
              <div class="about-element-two" data-aos="fade-up" data-aos-duration="1200">
                <img
                  src="@/assets/images/ADM/616176225_1514855020649898_8839484872168926276_n copy.jpg.jpeg"
                  alt="elemento decorativo"
                />
              </div>

              <!-- Badge de qualidade -->
              <div class="quality-badge">
                <i class="fas fa-certificate"></i>
                <span>ISO 9001:2025</span>
              </div>

              <!-- Botão de vídeo (overlay) -->
              <div class="about-video-wrapper">
                <div class="video-main">
                  <div class="promo-video">
                    <div class="waves-block">
                      <div class="waves wave-1"></div>
                      <div class="waves wave-2"></div>
                      <div class="waves wave-3"></div>
                    </div>
                  </div>
                  <a
                    class="video-icon"
                    data-rel="lightcase:myCollection"
                    href="https://www.youtube.com/embed/Hw4ctvV25H0"
                    target="_blank"
                  >
                    <i class="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Coluna do Conteúdo -->
          <div class="col-xl-6 col-lg-6 mb-30">
            <div class="about-content" data-aos="fade-left" data-aos-duration="1200">
              <!-- Badge institucional -->
              <span class="sub-title">
                <i class="fas fa-history mr-2"></i>
                A NOSSA HISTÓRIA
              </span>

              <!-- Título principal -->
              <h2 class="title">
                Mais de <span class="text-highlight">70 anos</span> a ligar Moçambique ao mundo
              </h2>

              <!-- Descrição com informações reais da ADM -->
              <div class="about-description">
                <p class="lead-text">
                  A Aeroportos de Moçambique, E.P. (ADM) é a empresa pública responsável pela
                  gestão, operação e desenvolvimento da rede aeroportuária nacional.
                </p>
                <p>
                  A nossa história começou em <strong>11 de Maio de 1954</strong>, com a criação dos
                  primeiros <strong>Serviços de Aeronáutica Civil (SAC)</strong>. Após a
                  independência nacional, em <strong>1976</strong>, foi criada a
                  <strong>Direcção Nacional de Aviação Civil</strong>, que mais tarde deu origem à
                  ADM, consolidando a gestão dos aeroportos moçambicanos.
                </p>
                <p>
                  Hoje, orgulhamo-nos de gerir <strong>8 aeroportos internacionais</strong> e
                  diversos aeródromos regionais, conectando Moçambique a destinos em África, Europa,
                  Ásia e Médio Oriente.
                </p>
              </div>

              <!-- Rodapé com call to action adicional -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Missão, Visão e Valores -->
    <section class="mission-section pt-60 pb-120 bg-light">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <span class="section-tag">
            <i class="fas fa-bullseye mr-2"></i>
            MISSÃO, VISÃO & VALORES
          </span>
          <h2 class="section-title">O que nos <span class="text-highlight">move</span></h2>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="mission-card">
              <div class="card-icon">
                <i class="fas fa-bullseye"></i>
              </div>
              <h3>Missão</h3>
              <p>
                Garantir a gestão eficiente e segura das infraestruturas aeroportuárias, promovendo
                a conectividade de Moçambique com o mundo e contribuindo para o desenvolvimento
                económico e social do país.
              </p>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="mission-card">
              <div class="card-icon">
                <i class="fas fa-eye"></i>
              </div>
              <h3>Visão</h3>
              <p>
                Ser referência em gestão aeroportuária em África, reconhecida pela excelência
                operacional, inovação e pela qualidade dos serviços prestados aos passageiros e
                parceiros.
              </p>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="mission-card">
              <div class="card-icon">
                <i class="fas fa-heart"></i>
              </div>
              <h3>Valores</h3>
              <ul class="values-list-mini">
                <li><i class="fas fa-check"></i> Segurança</li>
                <li><i class="fas fa-check"></i> Integridade</li>
                <li><i class="fas fa-check"></i> Excelência</li>
                <li><i class="fas fa-check"></i> Sustentabilidade</li>
                <li><i class="fas fa-check"></i> Espírito de equipa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TimelineSection />

    <!-- Seção de Aeroportos (destaque rápido) -->
    <section class="airports-highlight-section pt-120 pb-120">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <span class="section-tag">
            <i class="fas fa-map-marked-alt mr-2"></i>
            A NOSSA REDE
          </span>
          <h2 class="section-title">
            Aeroportos <span class="text-highlight">Internacionais</span>
          </h2>
          <p class="section-description">
            De norte a sul do país, garantimos a conectividade de Moçambique com o mundo.
          </p>
        </div>

        <div class="airports-grid">
          <div
            class="airport-card"
            v-for="airport in airports"
            :key="airport.code"
            data-aos="fade-up"
            :data-aos-delay="airport.delay"
          >
            <div class="airport-code">{{ airport.code }}</div>
            <h3>{{ airport.name }}</h3>
            <p><i class="fas fa-map-pin"></i> {{ airport.location }}</p>
          </div>
        </div>

        <div class="text-center mt-5" data-aos="fade-up">
          <router-link to="/aeroportos" class="btn--base btn-outline">
            Ver todos os aeroportos
            <i class="fas fa-arrow-right ml-2"></i>
          </router-link>
        </div>
      </div>
    </section>

    <PartnersSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TimelineSection from '@/components/sections/TimelineSection.vue'
import PartnersSection from '@/components/sections/PartnersSection.vue'
import { computed } from 'vue'

// Import da imagem (certifique-se de que o caminho está correto)
import bannerImageSrc from '@/assets/images/ADM/616176225_1514855020649898_8839484872168926276_n copy.jpg.jpeg'

// Se preferir usar o caminho direto (caso a importação não funcione)
const bannerImage = bannerImageSrc
// Lista de aeroportos para a seção de destaque
const airports = [
  { code: 'MPM', name: 'Aeroporto Internacional de Maputo', location: 'Maputo', delay: 100 },
  { code: 'BEW', name: 'Aeroporto Internacional da Beira', location: 'Beira', delay: 200 },
  { code: 'APL', name: 'Aeroporto de Nampula', location: 'Nampula', delay: 300 },
  { code: 'POL', name: 'Aeroporto de Pemba', location: 'Pemba', delay: 400 },
  { code: 'VNX', name: 'Aeroporto de Vilankulo', location: 'Vilankulo', delay: 500 },
  { code: 'TET', name: 'Aeroporto de Tete', location: 'Tete', delay: 600 },
  { code: 'UEL', name: 'Aeroporto de Quelimane', location: 'Quelimane', delay: 700 },
  { code: 'VPY', name: 'Aeroporto de Chimoio', location: 'Chimoio', delay: 800 },
]
</script>

<style scoped>
/* ===== Banner da Página ===== */
.page-banner {
  position: relative;
  padding: 120px 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  z-index: 1;
}

.page-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(3, 1, 64, 0.85) 0%, rgba(3, 1, 64, 0.7) 100%);
  z-index: -1;
}

.banner-content {
  text-align: center;
  color: #fff;
}

.sub-title {
  display: inline-block;
  font-size: 1rem;
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

.banner-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
}

.text-highlight {
  color: #f2e416;
  position: relative;
  display: inline-block;
}

.breadcrumb {
  display: inline-flex;
  background: rgba(255, 255, 255, 0.15);
  padding: 12px 30px;
  border-radius: 50px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(242, 228, 22, 0.3);
}

.breadcrumb-item {
  font-size: 1rem;
  color: #f2e416;
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

/* ===== Seção Sobre ===== */
.about-section {
  background: #ffffff;
  position: relative;
  overflow: hidden;
}

.about-thumb {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(3, 1, 64, 0.15);
}

.about-thumb img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.about-thumb:hover img {
  transform: scale(1.05);
}

.about-element-two {
  position: absolute;
  top: -30px;
  right: -30px;
  opacity: 0.1;
  z-index: 1;
}

.quality-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  padding: 10px 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid #f2e416;
  z-index: 2;
}

.quality-badge i {
  color: #f2e416;
  font-size: 1.2rem;
}

.quality-badge span {
  color: #030140;
  font-weight: 600;
}

.about-video-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.video-main {
  position: relative;
}

.promo-video {
  position: relative;
}

.waves-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
}

.waves {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(242, 228, 22, 0.15);
  border-radius: 50%;
  opacity: 0;
  animation: waves 3s ease-in-out infinite;
}

.wave-1 {
  animation-delay: 0s;
}
.wave-2 {
  animation-delay: 1s;
}
.wave-3 {
  animation-delay: 2s;
}

@keyframes waves {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.video-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: #f2e416;
  border-radius: 50%;
  color: #030140;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  z-index: 4;
  text-decoration: none;
}

.video-icon:hover {
  transform: scale(1.1);
  background: #ffef57;
  box-shadow: 0 0 30px rgba(242, 228, 22, 0.5);
}

/* Conteúdo */
.about-content {
  padding-left: 30px;
}

.about-content .sub-title {
  margin-bottom: 15px;
  background: rgba(242, 228, 22, 0.1);
  color: #030140;
  border-left: 4px solid #f2e416;
}

.title {
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.2;
  color: #030140;
  margin-bottom: 25px;
}

.about-description {
  margin-bottom: 30px;
}

.lead-text {
  font-size: 1.2rem;
  font-weight: 500;
  color: #030140;
  margin-bottom: 15px;
  border-left: 3px solid #f2e416;
  padding-left: 20px;
}

.about-description p {
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 15px;
}

/* Estatísticas */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 35px;
}

.stat-item {
  text-align: center;
  background: #f8fafc;
  padding: 15px;
  border-radius: 15px;
  border: 1px solid rgba(242, 228, 22, 0.1);
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #f2e416;
  line-height: 1.2;
}

.stat-label {
  color: #4a5568;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Área de contacto */
.about-contact-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #f8fafc, #ffffff);
  border-radius: 20px;
  padding: 25px;
  margin-bottom: 25px;
  border: 1px solid rgba(242, 228, 22, 0.2);
  position: relative;
  overflow: hidden;
}

.contact-element {
  position: absolute;
  top: -20px;
  right: -20px;
  opacity: 0.1;
}

.contact-info-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: rgba(242, 228, 22, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-icon i {
  color: #f2e416;
  font-size: 1.8rem;
}

.contact-details .call-title {
  font-size: 1rem;
  color: #718096;
  margin-bottom: 5px;
  font-weight: 500;
}

.call-phone {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 5px;
}

.call-phone a {
  color: #030140;
  text-decoration: none;
  transition: color 0.3s;
}

.call-phone a:hover {
  color: #f2e416;
}

.call-note {
  color: #a0aec0;
  font-size: 0.85rem;
}

.contact-cta .btn--base {
  background: #030140;
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
}

.contact-cta .btn--base:hover {
  background: #0a075f;
  transform: translateX(-3px);
}

/* Lista de valores */
.values-list ul {
  list-style: none;
  padding: 0;
  margin: 0 0 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.values-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4a5568;
  font-size: 1rem;
}

.values-list li i {
  color: #f2e416;
}

.about-footer-btn .btn-outline {
  background: transparent;
  border: 2px solid #030140;
  color: #030140;
  padding: 14px 35px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
}

.about-footer-btn .btn-outline:hover {
  background: #030140;
  color: white;
}

.ml-2 {
  margin-left: 8px;
}

/* ===== Seção Missão, Visão e Valores ===== */
.mission-section {
  background: linear-gradient(135deg, #f8fafc, #ffffff);
}

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
  color: #030140;
  margin-bottom: 15px;
}

.section-description {
  color: #4a5568;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
}

.mission-card {
  background: white;
  border-radius: 30px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(3, 1, 64, 0.05);
  border: 1px solid rgba(242, 228, 22, 0.1);
  height: 100%;
  transition: all 0.3s ease;
}

.mission-card:hover {
  transform: translateY(-10px);
  border-color: #f2e416;
  box-shadow: 0 25px 50px rgba(3, 1, 64, 0.1);
}

.card-icon {
  width: 80px;
  height: 80px;
  background: rgba(242, 228, 22, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
}

.card-icon i {
  font-size: 2.5rem;
  color: #f2e416;
}

.mission-card h3 {
  color: #030140;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.mission-card p {
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 0;
}

.values-list-mini {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.values-list-mini li {
  padding: 8px 0;
  color: #4a5568;
  display: flex;
  align-items: center;
  gap: 8px;
}

.values-list-mini li i {
  color: #f2e416;
}

/* ===== Seção de Aeroportos ===== */
.airports-highlight-section {
  background: white;
}

.airports-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 40px;
}

.airport-card {
  background: #f8fafc;
  border-radius: 20px;
  padding: 25px 20px;
  text-align: center;
  border: 1px solid rgba(242, 228, 22, 0.1);
  transition: all 0.3s ease;
}

.airport-card:hover {
  transform: translateY(-5px);
  border-color: #f2e416;
  box-shadow: 0 15px 30px rgba(3, 1, 64, 0.05);
}

.airport-code {
  background: #030140;
  color: #f2e416;
  font-weight: 800;
  font-size: 1.2rem;
  padding: 5px 12px;
  border-radius: 30px;
  display: inline-block;
  margin-bottom: 15px;
}

.airport-card h3 {
  color: #030140;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.airport-card p {
  color: #718096;
  font-size: 0.9rem;
  margin: 0;
}

.airport-card p i {
  color: #f2e416;
  margin-right: 5px;
}

.btn-outline {
  background: transparent;
  border: 2px solid #030140;
  color: #030140;
  padding: 14px 35px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: #030140;
  color: white;
}

/* Responsividade */
@media (max-width: 992px) {
  /* reduce about-section top padding on smaller screens */
  .about-section.ptb-60 {
    padding-top: 30px !important;
    padding-bottom: 30px !important;
  }
  .mission-section.pt-60 {
    padding-top: 30px !important;
  }
  .banner-title {
    font-size: 2.8rem;
  }

  .title {
    font-size: 2.4rem;
  }

  .about-content {
    padding-left: 0;
    margin-top: 40px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .airports-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-banner {
    padding: 80px 0;
  }

  .banner-title {
    font-size: 2rem;
  }

  .title {
    font-size: 2rem;
  }

  .about-contact-area {
    flex-direction: column;
    text-align: center;
  }

  .contact-info-wrapper {
    flex-direction: column;
  }

  .values-list ul {
    justify-content: center;
  }

  .airports-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .banner-title {
    font-size: 1.8rem;
  }

  .title {
    font-size: 1.8rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
} /* ===== Banner Hero - CORRIGIDO ===== */
.hero-banner {
  position: relative;
  min-height: 100vh; /* altura total */
  display: flex;
  align-items: center;
  overflow: hidden;
  color: #fff;
  padding-top: 80px;
  padding-bottom: 60px;
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  animation: slowZoom 20s infinite alternate;
}

@keyframes slowZoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(3, 1, 64, 0.85) 0%,
    rgba(3, 1, 64, 0.6) 50%,
    rgba(242, 228, 22, 0.2) 100%
  );
  z-index: 2;
}

.container {
  position: relative;
  z-index: 3;
}

.min-vh-100 {
  min-height: 100vh; /* garante que a linha ocupe toda a altura */
}

/* Conteúdo do banner - alinhado à esquerda */
.banner-content {
  max-width: 700px;
  text-align: left; /* ← importante: alinhar à esquerda */
  animation: fadeUp 1s ease;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Badge decorativo */
.badge-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  justify-content: flex-start; /* ← alinhar à esquerda */
}

.badge-line {
  flex: 0 1 60px; /* largura fixa para as linhas laterais */
  height: 2px;
  background: linear-gradient(90deg, transparent, #f2e416, transparent);
}

.badge-text {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: #f2e416;
  text-transform: uppercase;
  white-space: nowrap;
}

/* Título */
.banner-title {
  margin-bottom: 25px;
}

.title-line {
  display: block;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.title-line.highlight {
  color: #f2e416;
  font-size: 4rem;
  font-weight: 800;
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  display: inline-block;
}

.title-line.highlight::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 12px;
  background: rgba(242, 228, 22, 0.25);
  z-index: -1;
  border-radius: 6px;
}

/* Descrição */
.banner-description {
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 35px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
}

/* Botões */
.banner-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 45px;
  justify-content: flex-start; /* ← alinhar à esquerda */
}

.btn {
  padding: 15px 35px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: #f2e416;
  color: #030140;
  box-shadow: 0 8px 20px rgba(242, 228, 22, 0.3);
}

.btn-primary:hover {
  background: #ffef57;
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(242, 228, 22, 0.4);
}

.btn-outline {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  backdrop-filter: blur(5px);
}

.btn-outline:hover {
  border-color: #f2e416;
  color: #f2e416;
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.05);
}

/* Mini estatísticas */
.mini-stats {
  display: flex;
  gap: 40px;
  justify-content: flex-start; /* ← alinhar à esquerda */
}

.stat {
  text-align: left;
}

.stat-value {
  display: block;
  font-size: 2.2rem;
  font-weight: 800;
  color: #f2e416;
  line-height: 1;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Onda inferior */
.banner-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  line-height: 0;
  z-index: 4;
}

.banner-wave svg {
  display: block;
  width: 100%;
  height: auto;
}

/* Responsividade - manter alinhamento esquerdo também em mobile */
@media (max-width: 992px) {
  .title-line {
    font-size: 2.8rem;
  }
  .title-line.highlight {
    font-size: 3.2rem;
  }
  .mini-stats {
    gap: 30px;
  }
  .stat-value {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .hero-banner {
    min-height: 90vh;
    padding: 60px 0;
    /* Removido text-align: center */
  }
  .banner-content {
    margin: 0; /* sem centralização */
    text-align: left;
  }
  .title-line {
    font-size: 2.2rem;
  }
  .title-line.highlight {
    font-size: 2.6rem;
  }
  .banner-description {
    font-size: 1rem;
    margin-left: 0;
    margin-right: 0;
  }
  .banner-actions {
    justify-content: flex-start;
  }
  .mini-stats {
    justify-content: flex-start;
  }
  .badge-wrapper {
    justify-content: flex-start;
  }
  .badge-line {
    flex: 0 1 40px; /* reduz um pouco em mobile */
  }
}

@media (max-width: 480px) {
  .title-line {
    font-size: 1.8rem;
  }
  .title-line.highlight {
    font-size: 2.2rem;
  }
  .banner-actions {
    flex-direction: column;
    align-items: stretch;
  }
  .btn {
    justify-content: center;
  }
  .mini-stats {
    flex-wrap: wrap;
    gap: 20px;
  }
  .stat {
    flex: 1 1 40%;
  }
  .banner-wave {
    display: none;
  }
}
</style>
