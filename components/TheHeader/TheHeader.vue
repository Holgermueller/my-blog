<template>
  <div class="main-nav-container">
    <v-app-bar-nav-icon class="nav-icon" @click.stop="drawer = !drawer" fixed></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" class="drawer" hide-overlay floating fixed temporary>
      <v-list-item class="nav-list-item">
        <nuxt-link to="/" tag="li" class="page-link">
          <a>Home</a>
        </nuxt-link>
      </v-list-item>

      <v-list-item class="nav-list-item">
        <nuxt-link to="/previous" tag="li" class="page-link">
          <a>Previous Posts</a>
        </nuxt-link>
      </v-list-item>

      <v-list-item class="nav-list-item">
        <nuxt-link to="/about" tag="li" class="page-link">
          <a>About</a>
        </nuxt-link>
      </v-list-item>

      <v-list-item class="nav-list-item">
        <nuxt-link to="/contact" tag="li" class="page-link">
          <a>Contact</a>
        </nuxt-link>
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
  }
};
</script>

<style scoped>
.main-nav-container {
  z-index: 1;
}
.drawer {
  z-index: 2;
  background-color: #3366FF;
}
.nav-list-item:first-child {
  margin-top: 5rem;
}
.nav-icon {
  margin-top: 1rem;
  margin-left: 1rem;
  border: 2px solid #ffffff;
  color: #ffffff;
}
.nav-list-item {
  padding-top: 1rem;
}
.page-link a {
  text-decoration: none;
  display: block;
  color: #000000;
}
.page-link {
  height: 100%;
  display: flex;
  list-style: none;
  padding: 0.3rem;
}
.page-link a:hover,
.page-link a:active,
.page-link.nuxt-link-exact-active a {
  color: #ffffff;
}
.page-link.nuxt-link-exact-active {
  border-bottom: 3px solid #ffffff;
}
</style>
