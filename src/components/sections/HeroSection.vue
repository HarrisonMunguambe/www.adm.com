<script setup>
import institutionalVideo from '@/assets/videos/FDownloader.net-1498831011900862-(1080p) (online-video-cutter.com) (2).webm'
</script>

<template>
  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Video Showcase Section - A Alma dos Aeroportos
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
  <section class="video-showcase-section">
    <!-- Vídeo de Fundo em Loop (agora como background da seção) -->
    <div class="video-background-container">
      <video class="bg-video" autoplay muted loop playsinline>
        <source :src="institutionalVideo" type="video/webm" />
        Seu navegador não suporta vídeo HTML5.
      </video>
      <!-- Overlay suave para melhor legibilidade -->
      <div class="video-overlay"></div>
    </div>

    <!-- Conteúdo sobreposto ao vídeo -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="video-content text-center" data-aos="fade-up" data-aos-duration="1500">
            <!-- Badge "Em Movimento" -->
            <span class="badge-live">
              Conectando
              <span class="pulse-dot"></span>Continentes
            </span>

            <!-- Título Principal -->
            <h2 class="video-title">
              Onde Moçambique <span class="text-highlight">Encontra o Mundo</span>
            </h2>

            <!-- Descrição -->
            <p class="video-description">
              Mais de 5 milhões de passageiros por ano. Dezenas de voos diários. Histórias que
              cruzam fronteiras. Este é o ritmo dos nossos aeroportos.
            </p>

            <!-- Botões de chamada à ação -->
            <div class="video-btn mt-5">
              <router-link to="/sobre-nos" class="btn--base btn-primary btn-large">
                <i class="fas fa-play-circle mr-2"></i>
                Conheça a nossa história
              </router-link>

              <router-link to="/estatisticas" class="btn-outline-primary btn-large-outline">
                <i class="fas fa-chart-bar mr-2"></i>
                Ver números
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-showcase-section {
  position: relative;
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 80px 0;
  background: #030140;
}

/* Container do vídeo de fundo */
.video-background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.bg-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.72;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      135deg,
      rgba(3, 1, 64, 0.62) 0%,
      rgba(3, 1, 64, 0.45) 45%,
      rgba(15, 103, 179, 0.35) 100%
    ),
    linear-gradient(0deg, rgba(3, 1, 64, 0.35) 0%, rgba(3, 1, 64, 0.05) 40%);
  z-index: 2;
}

.container {
  position: relative;
  z-index: 3;
}

.video-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* Badge "Ao Vivo" */
.badge-live {
  display: inline-block;
  background: rgba(242, 228, 22, 0.14);
  padding: 8px 24px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: 1px solid rgba(242, 228, 22, 0.45);
  color: #f2e416;
  text-transform: uppercase;
}

.pulse-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #00a86b; /* Verde para indicar "ativo" */
  border-radius: 50%;
  margin-right: 10px;
  animation: pulse 1.8s infinite;
  box-shadow: 0 0 0 0 rgba(0, 168, 107, 0.5);
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 168, 107, 0.5);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 12px rgba(0, 168, 107, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 168, 107, 0);
  }
}

/* Título */
.video-title {
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 25px;
  color: #ffffff;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.35);
}

.text-highlight {
  color: #f2e416;
  position: relative;
  display: inline-block;
}

.text-highlight::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  height: 8px;
  background: rgba(242, 228, 22, 0.22);
  z-index: -1;
  border-radius: 4px;
}

/* Descrição */
.video-description {
  font-size: 1.25rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.92);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
}

/* Botões */
.video-btn {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: #f2e416;
  color: #030140;
  border: none;
  padding: 15px 35px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(242, 228, 22, 0.22);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.btn-primary:hover {
  background: #ffef57;
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(242, 228, 22, 0.3);
}

.btn-outline-primary {
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(255, 255, 255, 0.45);
  color: #ffffff;
  padding: 15px 35px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.btn-outline-primary:hover {
  background: rgba(255, 255, 255, 0.18);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

.btn-large,
.btn-large-outline {
  padding: 15px 35px;
  font-size: 1.1rem;
}

.mr-2 {
  margin-right: 10px;
}

/* Indicador de scroll */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  text-align: center;
  color: #ffffff;
  animation: bounce 2.5s infinite;
  cursor: pointer;
}

.scroll-text {
  display: block;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 5px;
  opacity: 0.7;
}

.scroll-indicator i {
  font-size: 1.2rem;
  opacity: 0.7;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Responsividade */
@media (max-width: 992px) {
  .video-title {
    font-size: 2.5rem;
  }

  .video-description {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .video-showcase-section {
    min-height: 70vh;
    padding: 60px 0;
  }

  .video-title {
    font-size: 2rem;
  }

  .video-description {
    font-size: 1rem;
    padding: 0 15px;
  }

  .video-btn {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .btn-primary,
  .btn-outline-primary {
    width: 100%;
    max-width: 280px;
    justify-content: center;
    padding: 12px 25px;
  }

  .badge-live {
    font-size: 0.8rem;
    padding: 6px 18px;
  }

  .scroll-indicator {
    display: none; /* Esconde em mobile para não ocupar espaço */
  }
}

@media (max-width: 480px) {
  .video-title {
    font-size: 1.7rem;
  }

  .text-highlight::after {
    bottom: 4px;
    height: 6px;
  }
}
</style>
