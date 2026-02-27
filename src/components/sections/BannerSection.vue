<template>
  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Start Banner - Aeroportos de Mo&ccedil;ambique
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
  <section class="banner-section">
    <!-- Elementos Decorativos -->
    <div class="banner-element" data-aos="fade-left" data-aos-duration="1200">
      <img src="@/assets/images/element/element-1.png" alt="elemento decorativo" />
    </div>
    <div class="banner-element-two">
      <img src="@/assets/images/element/element-3.png" alt="elemento decorativo" />
    </div>
    <div class="banner-element-three">
      <img src="@/assets/images/element/element-4.png" alt="elemento decorativo" />
    </div>
    <div class="banner-element-four">
      <img src="@/assets/images/element/element-5.png" alt="elemento decorativo" />
    </div>

    <!-- Redes Sociais -->
    <div class="banner-social-area">
      <ul class="banner-social">
        <li>
          <a
            href="https://facebook.com/aeroportosmocambique"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-facebook-f"></i
          ></a>
        </li>
        <li>
          <a
            href="https://twitter.com/aeroportosmz"
            target="_blank"
            rel="noopener noreferrer"
            class="active"
            ><i class="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a
            href="https://youtube.com/aeroportosmocambique"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-youtube"></i
          ></a>
        </li>
        <li>
          <a
            href="https://instagram.com/aeroportosmocambique"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-instagram"></i
          ></a>
        </li>
        <li>
          <a
            href="https://linkedin.com/company/aeroportos-mocambique"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </li>
      </ul>
    </div>

    <!-- Conte&uacute;do Principal do Banner -->
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center mb-30-none">
        <div class="col-xxl-5 col-xl-6 col-lg-12 mb-30">
          <div class="banner-content" data-aos="fade-right" data-aos-duration="1800">
            <!-- Badge Institucional -->
            <span class="sub-title"> <span>ADM</span> &bull; EP </span>

            <!-- T&iacute;tulo Principal -->
            <h1 class="title">
              Bem-vindo aos Aeroportos de <span class="text-highlight">Mo&ccedil;ambique</span>
            </h1>

            <!-- Subt&iacute;tulo Atrativo -->
            <h3 class="banner-subtitle">A sua porta de entrada para o mundo</h3>

            <!-- Descri&ccedil;&atilde;o -->
            <p class="banner-description">
              Gerimos a maior rede aeroportu&aacute;ria do pa&iacute;s com orgulho nacional.
              Conectamos Mo&ccedil;ambique ao mundo com seguran&ccedil;a, efici&ecirc;ncia e a
              hospitalidade que nos caracteriza. Mais de 70 anos de hist&oacute;ria ligando pessoas
              e culturas.
            </p>

            <!-- Bot&otilde;es de A&ccedil;&atilde;o (CTAs) -->
            <div class="banner-btn">
              <router-link to="/voos" class="btn--base banner-btn-reservar">
                Consultar Voos
                <i class="icon-btn-icon"></i>
              </router-link>

              <router-link to="/servicos" class="btn--base btn-secondary active">
                Nossos Servi&ccedil;os
                <i class="fas fa-arrow-right ml-2"></i>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Imagem/Ilustra&ccedil;&atilde;o do Banner -->
        <div class="col-xxl-7 col-xl-6 col-lg-6 mb-30">
          <div class="banner-thumb">
            <!-- Substituir pela imagem do Aeroporto de Maputo ou ilustra&ccedil;&atilde;o representativa -->
            <img
              src="@/assets/images/element/element-2.png"
              alt="Aeroporto Internacional de Maputo - Ilustra&ccedil;&atilde;o"
            />

            <!-- Badge de Destaque (Opcional) -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        End Banner
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
</template>

<style scoped>
/* Estilos adicionais para o banner */
.banner-content {
  margin-top: -48px;
}

.banner-subtitle {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 400;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.banner-welcome {
  margin-bottom: 0.75rem;
  color: #ffe96a;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.2px;
}

.text-highlight {
  color: #ffd700; /* Dourado - pode ajustar conforme as cores da ADM */
  font-weight: 700;
}

.banner-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.95);
}

.banner-section .banner-content .banner-btn a.banner-btn-reservar {
  background-color: #f2e416;
  border: 1px solid #f2e416;
  color: #030140;
  padding: 12px 25px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 800;
}

.banner-section .banner-content .banner-btn a.banner-btn-reservar::after {
  display: none;
}

.banner-section .banner-content .banner-btn a.banner-btn-reservar:hover,
.banner-section .banner-content .banner-btn a.banner-btn-reservar:focus {
  background-color: #f2e416;
  border-color: #f2e416;
  color: #030140;
}

.banner-section .banner-content .banner-btn a.banner-btn-reservar i::before {
  color: #030140;
}

.banner-section .banner-content .banner-btn a.banner-btn-reservar i {
  padding-left: 6px;
  transition: all 0.5s;
}

.banner-section .banner-content .banner-btn a.banner-btn-reservar:hover i::before,
.banner-section .banner-content .banner-btn a.banner-btn-reservar:focus i::before {
  color: #030140;
}

.banner-section .banner-content .banner-btn a.banner-btn-reservar:hover i,
.banner-section .banner-content .banner-btn a.banner-btn-reservar:focus i {
  padding-left: 10px;
}

.banner-section .banner-content .banner-btn a.btn-secondary.active {
  background: #0f67b3;
  border: 1px solid #0f67b3;
  color: #ffffff;
  padding: 12px 30px;
}

.banner-section .banner-content .banner-btn a.btn-secondary.active i::before {
  color: #ffffff;
}

.banner-section .banner-content .banner-btn a.btn-secondary.active:hover,
.banner-section .banner-content .banner-btn a.btn-secondary.active:focus {
  background: #1280de;
  border-color: #1280de;
  color: #ffffff;
}

.banner-section .banner-content .banner-btn a.btn-secondary.active:hover i::before,
.banner-section .banner-content .banner-btn a.btn-secondary.active:focus i::before {
  color: #ffffff;
}

.banner-stats {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #ffd700;
  line-height: 1.2;
}

.stat-label {
  display: block;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.banner-thumb {
  position: relative;
}

.banner-badge {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: float 3s ease-in-out infinite;
}

.badge-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.badge-content i {
  color: #0066b3;
  font-size: 1.2rem;
}

.badge-content span {
  color: #333;
  font-weight: 600;
  font-size: 0.9rem;
}

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
@media (max-width: 768px) {
  .banner-content {
    margin-top: -16px;
  }

  .banner-subtitle {
    font-size: 1.2rem;
  }

  .banner-stats {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .stat-item {
    flex: 1 1 40%;
  }

  .banner-badge {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: 20px;
    display: inline-block;
  }
}
</style>
