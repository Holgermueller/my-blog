<template>
  <div class="main-nav-container">
    <v-app-bar-nav-icon class="nav-icon" @click.stop="drawer = !drawer" fixed></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" class="drawer" width="100%" hide-overlay floating fixed temporary>
      <v-list-item class="nav-list-item">
        <nuxt-link to="/" tag="li" class="page-link">
          <a>
            <span class="mdi mdi-home"></span>
            Home
          </a>
        </nuxt-link>
      </v-list-item>

      <v-list-item class="nav-list-item">
        <nuxt-link to="/previous" tag="li" class="page-link">
          <a>
            <span class="mdi mdi-pencil-outline"></span>
            Previous Posts
          </a>
        </nuxt-link>
      </v-list-item>

      <v-list-item class="nav-list-item">
        <nuxt-link to="/about" tag="li" class="page-link">
          <a>
            <span class="mdi mdi-account-circle"></span>
            About
          </a>
        </nuxt-link>
      </v-list-item>

      <v-list-item class="nav-list-item">
        <nuxt-link to="/contact" tag="li" class="page-link">
          <a>
            <span class="mdi mdi-laptop"></span>
            Contact
          </a>
        </nuxt-link>
      </v-list-item>

      <v-list-item class="nav-list-item">
        <div class="close" @click="closeNav" text>
          <span class="mdi mdi-close"></span>
          Close
        </div>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  },
  methods: {
    closeNav() {
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
.main-nav-container {
  z-index: 1;
}
.drawer {
  z-index: 2;
  background-color: #659dbd;
}
.nav-list-item:first-child {
  margin-top: 5rem;
}
.nav-icon {
  margin-top: 1rem;
  margin-left: 1rem;
}
.nav-list-item {
  padding-top: 1rem;
}
.page-link a {
  text-decoration: none;
  display: block;
  color: #000000;
  font-family: "Pt Sans Narrow", sans-serif;
  font-size: 2rem;
}
.close {
  font-family: "Pt Sans Narrow", sans-serif;
  font-size: 2rem;
}
.close,
.page-link {
  height: 100%;
  display: flex;
  list-style: none;
  padding: 0.3rem;
}
.close:hover,
.page-link a:hover,
.page-link a:active,
.page-link.nuxt-link-exact-active a {
  color: #ffffff;
  cursor: pointer;
}
.page-link.nuxt-link-exact-active {
  border-bottom: 3px solid #ffffff;
}
</style>
