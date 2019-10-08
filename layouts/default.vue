<template>
  <v-app class="body">
    <TheNav />
    <main class="main-content">
      <nuxt />
    </main>
    <v-footer class="footer" absolute>
      <span class="footer-info">&copy; 2019 Holger Mueller</span>
    </v-footer>
  </v-app>
</template>

<script>
import TheNav from "../components/TheNav/TheNav";

export default {
  components: {
    TheNav
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.body {
  background-color: #fbeec1 !important;
}
.main-content {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.footer {
  z-index: 0;
  background-color: inherit;
}
.footer-info {
  margin: auto;
  padding: 4px;
}
</style>
