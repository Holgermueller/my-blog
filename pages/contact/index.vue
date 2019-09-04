<template>
  <div id="contactPage">
    <v-card class="page-header">
      <v-card-title class="headline page-headline">Contact</v-card-title>
    </v-card>

    <a href="https://twitter.com/thatHMMueller">
      <v-card class="contact-card">
        <v-card-title class="headline">
          <span class="mdi mdi-twitter"></span>Twitter
        </v-card-title>
        <v-card-text class></v-card-text>
      </v-card>
    </a>

    <a href="https://www.instagram.com/holgerj9/">
      <v-card class="contact-card">
        <v-card-title class="headline">
          <span class="mdi mdi-instagram"></span>Instagram
        </v-card-title>
        <v-card-text class></v-card-text>
      </v-card>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page-header {
  margin-top: 7rem;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}
.page-headline {
  justify-content: center;
}
.contact-card {
  width: 55%;
  margin: 1rem auto;
}
a {
  text-decoration: none;
}
</style>
