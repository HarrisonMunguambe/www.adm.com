<template>
  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Start Footer
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
  <footer id="contactos" class="footer-section section--bg pt-120">
    <div class="footer-element" data-aos="fade-left" data-aos-duration="1200">
      <img src="@/assets/images/element/element-1.png" alt="elemento" />
    </div>
    <div class="container">
      <div class="footer-top-area">
        <div class="row mb-30-none">
          <div class="col-12 mb-30">
            <div class="footer-intro">
              <div class="footer-logo">
                <router-link class="site-logo site-title" to="/"
                  ><img
                    class="adm-logo-footer"
                    src="@/assets/images/brand/logoADM.jpg"
                    alt="logo da ADM"
                /></router-link>
              </div>
              <div class="footer-intro-text">
                <p class="text-white fw-bold">
                  A Aeroportos de Mo&ccedil;ambique garante a gest&atilde;o e opera&ccedil;&atilde;o
                  de infraestruturas aeroportu&aacute;rias estrat&eacute;gicas, promovendo
                  conectividade nacional e internacional com seguran&ccedil;a, qualidade e
                  efici&ecirc;ncia. Gerimos a maior rede aeroportuária do país com orgulho nacional.
                  Conectamos Moçambique ao mundo com segurança, eficiência e a hospitalidade que nos
                  caracteriza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom-area">
        <div class="row mb-30-none">
          <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div class="footer-widget">
              <h4 class="title">Aeroportos</h4>
              <ul class="footer-list">
                <li>
                  <a href="http://aeroporto-maputo.com/" target="_blank" rel="noopener noreferrer"
                    >Maputo (MPM)</a
                  >
                </li>
                <li><router-link to="/aeroportos/beira">Beira (BEW)</router-link></li>
                <li><router-link to="/aeroportos/nampula">Nampula (APL)</router-link></li>
                <li><router-link to="/aeroportos/vilankulo">Vilankulo (VNX)</router-link></li>
                <li><router-link to="/aeroportos/pemba">Pemba (POL)</router-link></li>
                <li><router-link to="/aeroportos/tete">Tete (TET)</router-link></li>
                <li><router-link to="/aeroportos/quelimane">Quelimane (UEL)</router-link></li>
                <li><router-link to="/aeroportos/chimoio">Chimoio (VPY)</router-link></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div class="footer-widget">
              <h4 class="title">Servi&ccedil;os ao Passageiro</h4>
              <ul class="footer-list">
                <li><router-link to="/voos">Partidas e chegadas</router-link></li>
                <li>
                  <router-link to="/servicos">Informa&ccedil;&atilde;o de bagagem</router-link>
                </li>
                <li><router-link to="/servicos">Assist&ecirc;ncia especial</router-link></li>
                <li><router-link to="/servicos">Perguntas frequentes</router-link></li>
                <li>
                  <router-link :to="{ path: '/', hash: '#aeroportos' }"
                    >Companhias a&eacute;reas</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-6 mb-30">
            <div class="footer-widget">
              <h4 class="title">Institucional</h4>
              <ul class="footer-list">
                <li><router-link :to="{ path: '/', hash: '#sobre' }">Sobre a ADM</router-link></li>
                <li>
                  <router-link :to="{ path: '/', hash: '#noticias' }">Not&iacute;cias</router-link>
                </li>
                <li>
                  <router-link :to="{ path: '/', hash: '#servicos' }">Servi&ccedil;os</router-link>
                </li>
                <li>
                  <router-link :to="{ path: '/', hash: '#contactos' }">Contactos</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="footer-widget">
              <h4 class="title">Contacto</h4>
              <p>
                Receba atualiza&ccedil;&otilde;es sobre opera&ccedil;&otilde;es
                aeroportu&aacute;rias, hor&aacute;rios e servi&ccedil;os dos Aeroportos de
                Mo&ccedil;ambique.
              </p>
              <form class="subscribe-form">
                <label class="subscribe-icon"><i class="las la-envelope"></i></label>
                <input
                  type="text"
                  class="form--control fw-bold"
                  placeholder="Insira o seu e-mail"
                />
                <button type="submit" class="btn--base">
                  Subscrever <i class="icon-btn-icon ml-1"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="social-area">
          <ul class="footer-social">
            <li>
              <a
                href="https://www.facebook.com/search/top?q=aeroportos%20de%20mo%C3%A7ambique"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="fab fa-facebook-f"></i
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
        <p>&copy; 2026 Aeroportos de Mo&ccedil;ambique. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        End Footer
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
</template>

<style scoped>
.adm-logo-footer {
  width: 160px;
  height: auto;
  border-radius: 888px;
}

.footer-intro {
  display: flex;
  align-items: center;
  gap: 24px;
}

.footer-intro-text p {
  margin: 0;
  max-width: 900px;
}

@media only screen and (max-width: 767px) {
  .footer-intro {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
