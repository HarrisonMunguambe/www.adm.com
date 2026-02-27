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
              <router-link class="site-logo site-title" to="/index"
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
                  <li class="menu_has_children">
                    <a href="#0">In&iacute;cio</a>
                    <ul class="sub-menu">
                      <li><router-link to="/index">P&aacute;gina Inicial 1</router-link></li>
                      <li><router-link to="/index-two">P&aacute;gina Inicial 2</router-link></li>
                      <li><router-link to="/index-dark">P&aacute;gina Inicial Escura</router-link></li>
                    </ul>
                  </li>
                  <li><router-link to="/about">Sobre N&oacute;s</router-link></li>
                  <li class="menu_has_children">
                    <a href="#0">P&aacute;ginas</a>
                    <ul class="sub-menu">
                      <li><router-link to="/service">Servi&ccedil;os</router-link></li>
                      <li><router-link to="/service-details">Detalhes do Servi&ccedil;o</router-link></li>
                      <li><router-link to="/deals">Ofertas</router-link></li>
                      <li><router-link to="/deals-details">Detalhes da Oferta</router-link></li>
                      <li><router-link to="/package">Pacotes</router-link></li>
                      <li><router-link to="/package-details">Detalhes do Pacote</router-link></li>
                      <li><router-link to="/course">Nossos Cursos</router-link></li>
                      <li><router-link to="/course-details">Detalhes do Curso</router-link></li>
                      <li><router-link to="/team">Nossa Equipa</router-link></li>
                      <li><router-link to="/team-details">Detalhes da Equipa</router-link></li>
                      <li><router-link to="/faq">Perguntas Frequentes</router-link></li>
                      <li><router-link to="/register">Registar</router-link></li>
                      <li><router-link to="/login">Entrar</router-link></li>
                      <li><router-link to="/404">P&aacute;gina 404</router-link></li>
                    </ul>
                  </li>
                  <li class="menu_has_children">
                    <a href="#0">Blog</a>
                    <ul class="sub-menu">
                      <li><router-link to="/blog">Blog</router-link></li>
                      <li><router-link to="/blog-classic">Blog Cl&aacute;ssico</router-link></li>
                      <li><router-link to="/blog-details">Detalhes do Blog</router-link></li>
                    </ul>
                  </li>
                  <li><router-link to="/faq">FAQ</router-link></li>
                  <li><router-link to="/contact">Contactos</router-link></li>
                </ul>
                <div class="header-right">
                  <div class="search-bar d-none d-lg-block">
                    <a href="#0"><i class="fas fa-search"></i></a>
                    <div class="header-top-search-area">
                      <form
                        class="header-search-form"
                        action="https://gamblingscript.com/search"
                        method="GET"
                      >
                        <input
                          type="search"
                          name="keyword"
                          id="header_search"
                          placeholder="Pesquisar..."
                        />
                        <button class="header-search-btn"><i class="fas fa-search"></i></button>
                      </form>
                    </div>
                  </div>
                  <div class="header-action-area">
                    <router-link to="/service-details" class="action-btn two"
                      ><i class="icon-btn-icon"></i
                    ></router-link>
                    <div class="header-action">
                      <router-link to="/service-details" class="btn--base"
                        ><i class="icon-btn-icon"></i> Reservar Agora</router-link
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
