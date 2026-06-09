<template>
  <section class="history-section ptb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 text-center">
          <div class="section-header" data-aos="fade-up" data-aos-duration="1200">
            <span class="sub-title">
              <i class="fas fa-history mr-2"></i>
              <span>A Nossa História</span>
            </span>
            <h2 class="section-title">
              Marcos que nos <span class="text-highlight">definem</span>
            </h2>
            <p class="section-description">
              Ao longo de mais de 70 anos, a ADM tem escrito a história da aviação em Moçambique.
            </p>
          </div>
        </div>
      </div>

      <div class="history-area">
        <!-- Item 1: 1954 - Criação dos SAC -->
        <div class="history-item">
          <div class="history-thumb" data-aos="fade-right" data-aos-duration="1200">
            <img :src="img1954" alt="Serviços de Aeronáutica Civil - 1954" />
          </div>
          <div class="history-content" data-aos="fade-left" data-aos-duration="1200">
            <div class="year-badge">1954</div>
            <h3 class="title">Criação dos Serviços de Aeronáutica Civil (SAC)</h3>
            <p>
              A 11 de Maio de 1954, são criados os primeiros Serviços de Aeronáutica Civil (SAC),
              marcando o início da gestão organizada das infraestruturas aeroportuárias em
              Moçambique. Esta foi a base para o desenvolvimento da aviação civil no país.
            </p>
          </div>
        </div>

        <!-- Item 2: 1976 - Direcção Nacional de Aviação Civil -->
        <div class="history-item">
          <div class="history-thumb" data-aos="fade-left" data-aos-duration="1200">
            <img :src="img1976" alt="Direcção Nacional de Aviação Civil - 1976" />
          </div>
          <div class="history-content" data-aos="fade-right" data-aos-duration="1200">
            <div class="year-badge">1976</div>
            <h3 class="title">Direcção Nacional de Aviação Civil</h3>
            <p>
              Após a independência nacional, em 1976, é criada a Direcção Nacional de Aviação Civil,
              com o objectivo de coordenar e desenvolver a aviação civil moçambicana, consolidando a
              soberania sobre o espaço aéreo e infraestruturas.
            </p>
          </div>
        </div>

        <!-- Item 3: 1990 - Constituição da ADM, EP -->
        <div class="history-item">
          <div class="history-thumb" data-aos="fade-right" data-aos-duration="1200">
            <img :src="img1990" alt="Aeroportos de Moçambique, EP - 1990" />
          </div>
          <div class="history-content" data-aos="fade-left" data-aos-duration="1200">
            <div class="year-badge">1990</div>
            <h3 class="title">Constituição da Aeroportos de Moçambique, E.P.</h3>
            <p>
              É formalmente criada a Aeroportos de Moçambique, E.P. (ADM), assumindo a gestão de
              todos os aeroportos e aeródromos do país, com a missão de garantir operações seguras e
              eficientes.
            </p>
          </div>
        </div>

        <!-- Item 4: 2010 - Modernização do Aeroporto de Maputo -->
        <div class="history-item">
          <div class="history-thumb" data-aos="fade-left" data-aos-duration="1200">
            <img :src="img2010" alt="Modernização do Aeroporto de Maputo - 2010" />
          </div>
          <div class="history-content" data-aos="fade-right" data-aos-duration="1200">
            <div class="year-badge">2010</div>
            <h3 class="title">Modernização do Aeroporto de Maputo</h3>
            <p>
              O Aeroporto Internacional de Maputo passa por uma profunda modernização, com a
              ampliação do terminal, novas pontes de embarque e sistemas de segurança, elevando a
              capacidade e o padrão de serviço.
            </p>
          </div>
        </div>

        <!-- Item 5: 2020 - Expansão da rede e certificações -->
        <div class="history-item">
          <div class="history-thumb" data-aos="fade-right" data-aos-duration="1200">
            <img :src="img2020" alt="Expansão da rede - 2020" />
          </div>
          <div class="history-content" data-aos="fade-left" data-aos-duration="1200">
            <div class="year-badge">2020</div>
            <h3 class="title">Expansão e certificações internacionais</h3>
            <p>
              A ADM expande a sua actuação para 8 aeroportos internacionais e diversos aeródromos
              regionais, alcançando certificações internacionais de segurança e qualidade, como a
              ISO 9001, consolidando-se como referência na África Austral.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// imagens da pasta ADM para timeline
import img1954 from '@/assets/images/ADM/624432067_1534931198642280_7496995454634640722_n copy.jpg.jpeg'
import img1976 from '@/assets/images/ADM/616176225_1514855020649898_8839484872168926276_n copy.jpg.jpeg'
import img1990 from '@/assets/images/ADM/624737115_1534931181975615_1551209417469668367_n copy.jpg.jpeg'
import img2010 from '@/assets/images/ADM/Aeroportos-de-Mocambique.jpg'
import img2020 from '@/assets/images/ADM/625837045_1534931278642272_6568906601830722982_n copy.jpg.jpeg'
</script>

<style scoped>
.history-section {
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  padding: 100px 0;
}

/* Cabeçalho da seção */
.section-header {
  margin-bottom: 60px;
}

.sub-title {
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

.sub-title i {
  color: #f2e416;
}

.sub-title span {
  color: #030140;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #030140;
  margin-bottom: 15px;
}

.text-highlight {
  color: #f2e416;
  position: relative;
  display: inline-block;
}

.section-description {
  color: #4a5568;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
}

/* Área da timeline */
.history-area {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.history-area::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, #f2e416, transparent);
  opacity: 0.3;
  z-index: 1;
}

/* Cada item da timeline */
.history-item {
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 2;
}

.history-item:last-child {
  margin-bottom: 0;
}

/* Alternância: imagem à esquerda, conteúdo à direita */
.history-item:nth-child(odd) {
  flex-direction: row;
}

.history-item:nth-child(even) {
  flex-direction: row-reverse;
}

/* Coluna da imagem */
.history-thumb {
  flex: 0 0 45% !important;
  max-width: 45% !important;
  height: 300px !important; /* altura fixa para todas as imagens */
  min-height: 0 !important; /* remove qualquer min-height anterior */
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(3, 1, 64, 0.15);
  border: 3px solid #f2e416;
  transition: transform 0.5s ease;
}

.history-thumb img {
  width: 100% !important;
  height: 100% !important;
  display: block;
  object-fit: cover; /* Garante que as imagens preencham toda a área sem distorcer */
  transition: transform 0.5s ease;
}

/* Responsividade mantida */
@media (max-width: 992px) {
  .history-thumb {
    height: 250px !important;
    flex: 0 0 100% !important;
    max-width: 100% !important;
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .history-thumb {
    height: 220px !important;
  }
}

/* Coluna do conteúdo */
.history-content {
  flex: 0 0 45%;
  max-width: 45%;
  padding: 30px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(3, 1, 64, 0.05);
  border: 1px solid rgba(242, 228, 22, 0.2);
  position: relative;
  transition: all 0.3s ease;
}

.history-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(3, 1, 64, 0.1);
  border-color: #f2e416;
}

/* Badge do ano */
.year-badge {
  display: inline-block;
  background: #030140;
  color: #f2e416;
  font-size: 1.8rem;
  font-weight: 800;
  padding: 5px 25px;
  border-radius: 50px;
  margin-bottom: 20px;
  border: 2px solid #f2e416;
  box-shadow: 0 5px 15px rgba(3, 1, 64, 0.2);
}

/* Título */
.history-content .title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #030140;
  margin-bottom: 15px;
  line-height: 1.3;
}

/* Texto */
.history-content p {
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 0;
}

/* Responsividade */
@media (max-width: 992px) {
  .section-title {
    font-size: 2.4rem;
  }

  .history-item,
  .history-item:nth-child(odd),
  .history-item:nth-child(even) {
    flex-direction: column;
    text-align: center;
  }

  .history-thumb,
  .history-content {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .history-thumb {
    margin-bottom: 30px;
  }

  .history-area::before {
    left: 20px;
  }

  .year-badge {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .history-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .history-content {
    padding: 20px;
  }

  .history-content .title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .year-badge {
    font-size: 1.3rem;
    padding: 3px 18px;
  }
}
</style>
