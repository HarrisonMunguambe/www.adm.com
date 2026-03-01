<template>
  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start News Section - Últimas Notícias
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
  <section class="news-section pb-120">
    <div class="container">
      <!-- Cabeçalho da seção -->
      <div class="section-header text-center" data-aos="fade-up">
        <span class="section-tag">
          <i class="fas fa-newspaper mr-2"></i>
          COMUNICADOS E NOTÍCIAS
        </span>
        <h2 class="section-title">
          Últimas
          <span class="title-line-highlight">Notícias</span>
          e Comunicados
        </h2>
        <p class="section-description">
          Fique a par dos comunicados oficiais, novos voos, inaugurações e desenvolvimentos na rede
          de aeroportos de Moçambique.
        </p>
      </div>

      <!-- Grid de notícias -->
      <div class="news-grid">
        <!-- Notícia 1 -->
        <div class="news-card" data-aos="fade-up" data-aos-delay="100">
          <div class="news-image">
            <img
              src="@/assets/images/ADM/616176225_1514855020649898_8839484872168926276_n copy.jpg.jpeg"
              alt="Notícia ADM"
            />
            <div class="news-date">
              <span class="day">15</span>
              <span class="month">MAR</span>
            </div>
          </div>
          <div class="news-content">
            <div class="news-meta">
              <span class="news-category">Inauguração</span>
              <span class="news-time"><i class="far fa-clock"></i> 3 min</span>
            </div>
            <h3 class="news-title">
              <router-link to="/noticias/1">
                Aeroporto de Maputo recebe nova sala VIP para passageiros
              </router-link>
            </h3>
            <p class="news-excerpt">
              Espaço moderno oferece mais conforto e comodidades para viajantes frequentes e classes
              executivas.
            </p>
            <router-link to="/noticias/1" class="news-link">
              Ler mais <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>

        <!-- Notícia 2 -->
        <div class="news-card" data-aos="fade-up" data-aos-delay="200">
          <div class="news-image">
            <img
              src="@/assets/images/ADM/624432067_1534931198642280_7496995454634640722_n copy.jpg.jpeg"
              alt="Notícia ADM"
            />
            <div class="news-date">
              <span class="day">02</span>
              <span class="month">MAR</span>
            </div>
          </div>
          <div class="news-content">
            <div class="news-meta">
              <span class="news-category">Novo destino</span>
              <span class="news-time"><i class="far fa-clock"></i> 4 min</span>
            </div>
            <h3 class="news-title">
              <router-link to="/noticias/2">
                LAM anuncia voo direto Maputo - Luanda a partir de Maio
              </router-link>
            </h3>
            <p class="news-excerpt">
              Nova rota visa fortalecer as relações comerciais e turísticas entre Moçambique e
              Angola.
            </p>
            <router-link to="/noticias/2" class="news-link">
              Ler mais <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>

        <!-- Notícia 3 -->
        <div class="news-card" data-aos="fade-up" data-aos-delay="300">
          <div class="news-image">
            <img
              src="@/assets/images/ADM/625837045_1534931278642272_6568906601830722982_n copy.jpg.jpeg"
              alt="Notícia ADM"
            />
            <div class="news-date">
              <span class="day">18</span>
              <span class="month">FEV</span>
            </div>
          </div>
          <div class="news-content">
            <div class="news-meta">
              <span class="news-category">Prémio</span>
              <span class="news-time"><i class="far fa-clock"></i> 2 min</span>
            </div>
            <h3 class="news-title">
              <router-link to="/noticias/3">
                ADM distinguida com prémio de melhores práticas ambientais
              </router-link>
            </h3>
            <p class="news-excerpt">
              Reconhecimento internacional pelo programa de gestão sustentável de resíduos nos
              aeroportos.
            </p>
            <router-link to="/noticias/3" class="news-link">
              Ler mais <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Botão para ver todas -->
      <div class="text-center mt-5" data-aos="fade-up">
        <router-link to="/noticias" class="btn--base btn-outline">
          Ver todas as notícias
          <i class="fas fa-chevron-right ml-2"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.news-section {
  padding-bottom: 100px;
  padding-top: 20px;
  background: white;
  position: relative;
}

.section-header {
  margin-bottom: 60px;
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
  margin-bottom: 20px !important;
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
  max-width: 700px;
  margin: 0 auto;
}

/* Grid de notícias */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* Card de notícia */
.news-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(3, 1, 64, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(242, 228, 22, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(3, 1, 64, 0.1);
  border-color: #f2e416;
}

.news-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-card:hover .news-image img {
  transform: scale(1.1);
}

.news-date {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #030140;
  color: white;
  padding: 10px;
  border-radius: 12px;
  text-align: center;
  min-width: 60px;
  border: 2px solid #f2e416;
  z-index: 2;
}

.news-date .day {
  display: block;
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1;
  color: #f2e416;
}

.news-date .month {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.news-content {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  color: #718096;
  font-size: 0.85rem;
}

.news-category {
  background: rgba(242, 228, 22, 0.1);
  color: #030140;
  padding: 3px 12px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.news-time i {
  margin-right: 5px;
  color: #f2e416;
}

.news-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.4;
}

.news-title a {
  color: #030140;
  text-decoration: none;
  transition: color 0.3s ease;
}

.news-title a:hover {
  color: #f2e416;
}

.news-excerpt {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
  font-size: 0.95rem;
}

.news-link {
  color: #030140;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  margin-top: auto;
}

.news-link i {
  transition: transform 0.3s ease;
}

.news-link:hover {
  color: #f2e416;
}

.news-link:hover i {
  transform: translateX(5px);
}

/* Botão outline (reutilizar da seção anterior) */
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
  box-shadow: 0 10px 25px rgba(3, 1, 64, 0.2);
}

.ml-2 {
  margin-left: 8px;
}

/* Responsividade */
@media (max-width: 992px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .news-section {
    padding: 60px 0;
  }

  .news-grid {
    grid-template-columns: 1fr;
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

  .news-image {
    height: 200px;
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
}
</style>
