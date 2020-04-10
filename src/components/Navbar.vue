<template>
  <nav>
    <div
      class="navbar navbar-expand-md fixed-top navbar-light bg-light"
      :class="{ 'nav--hidden': !showNavbar}"
    >
      <div class="d-flex container">
        <router-link to="/">
          <img src="../assets/icon-fc-small copy.png" width="55" height="55" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="showNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse px-2" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/finca">Finca Esperanza</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/roasters">Roasters</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/aboutus">About Us</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Menu</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="https://www.facebook.com/TwoBirdsCoffee/">FaceBook</a>
                <a class="dropdown-item" href="https://www.instagram.com/twobirdscoffee/">Instagram</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Contact Us</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>




<script>
export default {
  data() {
    return {
      showNavbar: true,
      hideDropDown: true,
      lastScrollPosition: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 30) {
        return;
      }

      // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      if (this.hideDropDown === true) {
        this.hideDropDown = currentScrollPosition < this.lastScrollPosition;
      }
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition;
    }
  }
};
</script>





