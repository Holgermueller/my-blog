<template>
  <v-app class="body">
    <TheHeader />
    <main class="main-content">
      <nuxt />
    </main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from "../components/TheHeader/TheHeader";
import TheFooter from "../components/TheFooter/TheFooter";

export default {
  components: {
    TheHeader,
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
a:hover {
  cursor: pointer;
}
</style>
