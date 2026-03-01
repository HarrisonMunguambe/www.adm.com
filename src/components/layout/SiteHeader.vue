<template>
  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Start Header
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
  <header class="header-section header-section-one">
    <div class="header">
      <div class="header-bottom-area">
        <div class="container-fluid">
          <div class="header-menu-content">
            <nav class="navbar navbar-expand-lg p-0">
              <router-link class="site-logo site-title" to="/"
                ><img
                  class="adm-logo-header"
                  src="@/assets/images/brand/logoADM.jpg"
                  alt="site-logo"
              /></router-link>
              <button
                class="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Alternar navega&ccedil;&atilde;o"
              >
                <span class="fas fa-bars"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav main-menu ml-auto">
                  <li><router-link to="/">In&iacute;cio</router-link></li>
                  <li><router-link :to="{ path: '/', hash: '#sobre' }">Sobre</router-link></li>
                  <li class="menu_has_children">
                    <router-link :to="{ path: '/', hash: '#aeroportos' }">Aeroportos</router-link>
                    <ul class="sub-menu">
                      <li>
                        <a
                          href="http://aeroporto-maputo.com/"
                          target="_blank"
                          rel="noopener noreferrer"
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
                  </li>
                  <li><router-link :to="{ path: '/', hash: '#servicos' }">Servi&ccedil;os</router-link></li>
                  <li><router-link :to="{ path: '/', hash: '#noticias' }">Not&iacute;cias</router-link></li>
                  <li><router-link :to="{ path: '/', hash: '#contactos' }">Contactos</router-link></li>
                </ul>
                <div class="header-right">
                  <div class="header-action-area">
                    <div class="header-action">
                      <router-link to="/voos" class="btn--base"
                        ><i class="icon-btn-icon"></i> Consultar Voos</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        End Header
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
</template>

<style scoped>
.adm-logo-header {
  width: 110px;
  height: auto;
  border-radius: 899px;
}

@media only screen and (max-width: 991px) {
  .adm-logo-header {
    width: 120px;
  }
}
</style>
