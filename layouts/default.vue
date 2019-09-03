<template>
  <v-app>
    <TheHeader />
    <nuxt />
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
