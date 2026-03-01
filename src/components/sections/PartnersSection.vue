<template>
  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Partners Section - Parceiros
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
  <section class="partners-section pt-120 pb-120">
    <div class="container">
      <!-- Cabeçalho da seção -->
      <div class="section-header text-center" data-aos="fade-up">
        <span class="section-tag">
          <i class="fas fa-handshake mr-2"></i>
          PARCEIROS INSTITUCIONAIS
        </span>
        <h2 class="section-title">
          <span class="title-line">Conectamos Moçambique</span>
          <span class="title-line-highlight">ao mundo com os melhores parceiros</span>
        </h2>
        <p class="section-description">
          Trabalhamos em conjunto com as principais companhias aéreas e entidades do setor para
          oferecer a melhor experiência aos passageiros e garantir a excelência operacional.
        </p>
      </div>

      <!-- Grid de parceiros principais (companhias aéreas) -->
      <div class="airlines-grid" data-aos="fade-up">
        <div class="partner-card">
          <div class="partner-logo">
            <img
              src="@/assets/images/Partners/linhas-aereas-de-mocambique-logo-png_seeklogo-277287.png"
              alt="LAM - Linhas Aéreas de Moçambique"
            />
          </div>
          <p class="partner-name">LAM</p>
        </div>

        <div class="partner-card">
          <div class="partner-logo">
            <img src="@/assets/images/Partners/TAP-Portugal-Logo.png" alt="TAP Air Portugal" />
          </div>
          <p class="partner-name">TAP Air Portugal</p>
        </div>

        <div class="partner-card">
          <div class="partner-logo">
            <img src="@/assets/images/Partners/Qatar-Airways-logo.jpg" alt="Qatar Airways" />
          </div>
          <p class="partner-name">Qatar Airways</p>
        </div>

        <div class="partner-card">
          <div class="partner-logo">
            <img src="@/assets/images/Partners/Airlink-Logo.png" alt="Airlink" />
          </div>
          <p class="partner-name">Airlink</p>
        </div>

        <div class="partner-card">
          <div class="partner-logo">
            <img
              src="@/assets/images/Partners/Ethiopian_Airlines_Logo.svg.png"
              alt="Ethiopian Airlines"
            />
          </div>
          <p class="partner-name">Ethiopian Airlines</p>
        </div>

        <div class="partner-card">
          <div class="partner-logo">
            <img src="@/assets/images/Partners/TAAG_logo.png" alt="TAAG" />
          </div>
          <p class="partner-name">TAAG</p>
        </div>
        <div class="partner-card">
          <div class="partner-logo">
            <img src="@/assets/images/Partners/649e1c738c189557e58cf78e1ec21cfe.jpg" alt="Fly Emirates" />
          </div>
          <p class="partner-name">Fly Emirates</p>
        </div>
        <div class="partner-card">
          <div class="partner-logo">
            <img src="@/assets/images/Partners/mahslogo.png" alt="MAHS" />
          </div>
          <p class="partner-name">MAHS</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
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
  margin-bottom: 20px;
}

.title-line {
  display: block;
  font-size: 2.5rem;
}

.title-line-highlight {
  display: block;
  color: #f2e416;
  font-size: 2.8rem;
  text-shadow: 0 2px 10px rgba(242, 228, 22, 0.2);
}

.section-description {
  font-size: 1.1rem;
  color: #4a5568;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Grid de companhias aéreas */
.airlines-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.partner-card {
  background: white;
  border-radius: 16px;
  padding: 25px 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(3, 1, 64, 0.03);
  transition: all 0.3s ease;
  border: 1px solid rgba(242, 228, 22, 0.1);
  cursor: pointer;
}

.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(3, 1, 64, 0.08);
  border-color: #f2e416;
}

.partner-logo {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.partner-logo img {
  max-width: 100%;
  max-height: 60px;
  width: auto;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.partner-card:hover .partner-logo img {
  filter: grayscale(0);
}

.partner-name {
  color: #4a5568;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
}

/* Responsividade */
@media (max-width: 992px) {
  .airlines-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .partners-section {
    padding: 60px 0;
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

  .airlines-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
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

  .airlines-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .partner-card {
    padding: 15px 10px;
  }

  .partner-logo {
    height: 60px;
  }

  .partner-logo img {
    max-height: 45px;
  }

  .partner-name {
    font-size: 0.8rem;
  }
}
</style>
