<template>
  <v-app>
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
.main-content {
  margin-top: 7rem;
  margin-bottom: 5rem;
}
</style>
