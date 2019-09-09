<template>
  <v-app class="body">
    <TheNav />
    <main class="main-content">
      <nuxt />
    </main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheNav from "../components/TheNav/TheNav";
import TheFooter from "../components/TheFooter/TheFooter";

export default {
  components: {
    TheNav,
    TheFooter
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
body {
  font-family: "PT Sans Narrow", sans-serif;
}
.main-content {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
</style>
