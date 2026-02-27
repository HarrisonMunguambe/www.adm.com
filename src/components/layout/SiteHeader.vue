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
                aria-label="Toggle navigation"
              >
                <span class="fas fa-bars"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav main-menu ml-auto">
                  <li class="menu_has_children">
                    <a href="#0">Home</a>
                    <ul class="sub-menu">
                      <li><router-link to="/index">Home One</router-link></li>
                      <li><router-link to="/index-two">Home Two</router-link></li>
                      <li><router-link to="/index-dark">Home Dark</router-link></li>
                    </ul>
                  </li>
                  <li><router-link to="/about">About Us</router-link></li>
                  <li class="menu_has_children">
                    <a href="#0">Pages</a>
                    <ul class="sub-menu">
                      <li><router-link to="/service">Service</router-link></li>
                      <li><router-link to="/service-details">Service Details</router-link></li>
                      <li><router-link to="/deals">Deals</router-link></li>
                      <li><router-link to="/deals-details">Deals Details</router-link></li>
                      <li><router-link to="/package">Package</router-link></li>
                      <li><router-link to="/package-details">Package Details</router-link></li>
                      <li><router-link to="/course">Our Course</router-link></li>
                      <li><router-link to="/course-details">Course Details</router-link></li>
                      <li><router-link to="/team">Our Team</router-link></li>
                      <li><router-link to="/team-details">Team Details</router-link></li>
                      <li><router-link to="/faq">FAQ</router-link></li>
                      <li><router-link to="/register">Sign Up</router-link></li>
                      <li><router-link to="/login">Sign In</router-link></li>
                      <li><router-link to="/404">404 Page</router-link></li>
                    </ul>
                  </li>
                  <li class="menu_has_children">
                    <a href="#0">Blog</a>
                    <ul class="sub-menu">
                      <li><router-link to="/blog">Blog</router-link></li>
                      <li><router-link to="/blog-classic">Blog Classic</router-link></li>
                      <li><router-link to="/blog-details">Blog Details</router-link></li>
                    </ul>
                  </li>
                  <li><router-link to="/faq">Faq</router-link></li>
                  <li><router-link to="/contact">Contact Us</router-link></li>
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
                          placeholder="Search Product..."
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
                        ><i class="icon-btn-icon"></i> Book Now</router-link
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
