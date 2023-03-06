<template>
  <header class="header-section header-section-fixed" id="we">
    <!-- Header section container -->
    <div class="header-section-container">
      <!-- Header menu section -->
      <div class="header-menu-section">
        <!-- Header menu section container -->
        <div class="header-menu-section-container">
          <!-- Navbar -->
          <nav class="navbar navbar-expand-lg">
            <!-- container -->
            <div class="container gx-4">
              <!-- Logo -->
              <a class="navbar-brand" href="index.html" title="C-PLUS">
                <div class="transparent" alt="C-PLUS">
                  <h4 class="font-weight-900" style="color: black">
                    Crawling Plus
                  </h4>
                </div>
                <div class="normal" alt="C-PLUS" style="color: black">
                  <h4 class="font-weight-900">Crawling Plus</h4>
                </div>
              </a>
              <!-- /End Logo -->

              <!-- Toggler button -->
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobile-menu"
                aria-controls="mobile-menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-wd">MENU</span>
                <span class="navbar-toggler-lines-wrapper">
                  <i class="navbar-toggler-line navbar-toggler-line-top"></i>
                  <i class="navbar-toggler-line navbar-toggler-line-middle"></i>
                  <i class="navbar-toggler-line navbar-toggler-line-bottom"></i>
                </span></button
              ><!-- /End Toggler button -->
              <!-- Header menu (Desktop) -->
              <div class="header-menu desktop-menu navbar-collapse">
                <!-- Header menu links -->
                <ul class="navbar-nav ms-auto">
                  <!-- Home -->
                  <li class="nav-item">
                    <!-- <router-link class="nav-link" :to="{ name: 'ClientMain' }"
                      ><span>HOME</span></router-link
                    > -->
                    <span> ABOUT ME </span>
                  </li>
                  <!-- Portfolio -->
                  <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'FindRobots' }"
                      ><span>FIND ROBOT</span></router-link
                    >
                  </li>

                  <!-- Shop -->
                  <li class="nav-item">
                    <span> CRAWLING </span>
                  </li>
                </ul>
                <!-- /End Header menu links -->
              </div>
              <!-- /End Header menu (Desktop) -->
            </div>
            <!-- /End container -->

            <!-- Header menu (Mobile) -->
            <div
              class="header-menu mobile-menu collapse"
              id="mobile-menu"
            ></div>
            <!-- /End Header menu (Mobile) -->
          </nav>
          <!-- /End Navbar -->
        </div>
        <!-- /End Header menu section container -->
      </div>
      <!-- /End Header menu section -->
    </div>
    <!-- /End Header section container -->
  </header>
  <!-- /End Header section -->
</template>

<script>
export default {};
</script>

<style>
</style>