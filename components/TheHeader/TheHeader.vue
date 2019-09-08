<template>
  <header class="main-header">
    <v-app-bar-nav-icon class="nav-icon" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" floating temporary>
      <v-list-item>
        <nuxt-link to="/" tag="li" class="page-link">
          <a>Home</a>
        </nuxt-link>
      </v-list-item>

      <v-list-item>
        <nuxt-link to="/previous" tag="li" class="page-link">
          <a>Previous Posts</a>
        </nuxt-link>
      </v-list-item>

      <v-list-item>
        <nuxt-link to="/about" tag="li" class="page-link">
          <a>About</a>
        </nuxt-link>
      </v-list-item>

      <v-list-item>
        <nuxt-link to="/contact" tag="li" class="page-link">
          <a>Contact</a>
        </nuxt-link>
      </v-list-item>
    </v-navigation-drawer>
  </header>
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
.main-header {
  z-index: 1;
}
.nav-icon {
  margin-top: 1rem;
  margin-left: 1rem;
  border: 2px solid white;
  color: white;
}
.page-link a {
  text-decoration: none;
  display: block;
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
  color: #06c4d1;
}
.page-link.nuxt-link-exact-active {
  border-bottom: 3px solid #06c4d1;
}
</style>
