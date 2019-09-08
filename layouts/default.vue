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
.body {
  background-color: #BFEFFF;
}
.main-content {
  margin-bottom: 5rem;
}
</style>
