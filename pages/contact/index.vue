<template>
  <div id="contactPage">
    <v-card class="page-header">
      <v-card-title class="page-title">Contact</v-card-title>
    </v-card>

    <a href="https://twitter.com/thatHMMueller">
      <v-card class="contact-card">
        <v-card-title class="headline">
          <span class="mdi mdi-twitter"></span>Twitter
        </v-card-title>
      </v-card>
    </a>

    <a href="https://www.instagram.com/holgerj9/">
      <v-card class="contact-card">
        <v-card-title class="headline">
          <span class="mdi mdi-instagram"></span>Instagram
        </v-card-title>
      </v-card>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page-header {
  width: 45%;
  margin-left: auto;
  margin-right: auto;
}
.page-title {
  margin: 1rem;
  justify-content: center;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 3rem;
}
.contact-card {
  width: 55%;
  margin: 1rem auto;
}
a {
  text-decoration: none;
}
</style>
