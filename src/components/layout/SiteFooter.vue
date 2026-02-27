<template>
  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Start Footer
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
  <footer class="footer-section section--bg pt-120">
    <div class="footer-element" data-aos="fade-left" data-aos-duration="1200">
      <img src="@/assets/images/element/element-1.png" alt="elemento" />
    </div>
    <div class="container">
      <div class="footer-top-area">
        <div class="row align-items-end mb-30-none">
          <div class="col-xl-4 col-lg-3 col-md-6 mb-30">
            <div class="footer-widget">
              <div class="footer-logo">
                <router-link class="site-logo site-title" to="/index"
                  ><img
                    class="adm-logo-footer"
                    src="@/assets/images/brand/logoADM.jpg"
                    alt="logo da ADM"
                /></router-link>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div class="footer-widget">
              <h4 class="widget-title">AEROPORTO DE MAPUTO (MPM)</h4>
              <ul class="footer-list">
                <li><a href="#0">Cidade de Maputo, Mo&ccedil;ambique</a></li>
                <li><a href="#0">Terminal Internacional</a></li>
                <li><a href="#0">Informa&ccedil;&otilde;es de voos e servi&ccedil;os</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-6 mb-30">
            <div class="footer-widget">
              <h4 class="widget-title">AEROPORTO DA BEIRA (BEW)</h4>
              <ul class="footer-list">
                <li><a href="#0">Cidade da Beira</a></li>

                <li><a href="#0">Atendimento ao passageiro</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div class="footer-widget">
              <h4 class="widget-title">AEROPORTO DE NAMPULA (APL)</h4>
              <ul class="footer-list">
                <li><a href="#0">Cidade de Nampula, Nampula</a></li>
                <li><a href="#0">Liga&ccedil;&atilde;o ao norte do pa&iacute;s</a></li>
                <li><a href="#0">Servi&ccedil;os de apoio ao viajante</a></li>
              </ul>
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
                <li><a href="#0">Maputo (MPM)</a></li>
                <li><a href="#0">Beira (BEW)</a></li>
                <li><a href="#0">Nampula (APL)</a></li>
                <li><a href="#0">Pemba (POL)</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div class="footer-widget">
              <h4 class="title">Servi&ccedil;os ao Passageiro</h4>
              <ul class="footer-list">
                <li><a href="#0">Partidas e chegadas</a></li>
                <li><a href="#0">Informa&ccedil;&atilde;o de bagagem</a></li>
                <li><a href="#0">Assist&ecirc;ncia especial</a></li>
                <li><a href="#0">Perguntas frequentes</a></li>
                <li><a href="#0">Companhias a&eacute;reas</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-6 mb-30">
            <div class="footer-widget">
              <h4 class="title">Institucional</h4>
              <ul class="footer-list">
                <li><a href="#0">Sobre a ADM</a></li>
                <li><a href="#0">Not&iacute;cias</a></li>
                <li><a href="#0">Carreiras</a></li>
                <li><a href="#0">Parcerias</a></li>
                <li><a href="#0">Transpar&ecirc;ncia</a></li>
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
                <input type="text" class="form--control" placeholder="Insira o seu e-mail" />
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
              <a href="#0"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="#0" class="active"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="#0"><i class="fab fa-youtube"></i></a>
            </li>
            <li>
              <a href="#0"><i class="fab fa-instagram"></i></a>
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
</style>
