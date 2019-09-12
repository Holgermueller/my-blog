<template>
  <div id="contactPage">
    <v-card class="page-header">
      <v-card-title class="page-title">Contact</v-card-title>
    </v-card>

    <Disclaimer />

    <v-hover v-slot:default="{ hover }">
      <v-card class="contact-card" :elevation="hover ? 12 : 2">
        <a href="https://twitter.com/thatHMMueller">
          <v-card-title class="headline">
            <span class="mdi mdi-twitter"></span>
            Twitter
          </v-card-title>
        </a>
      </v-card>
    </v-hover>

    <v-hover v-slot:default="{ hover }">
      <v-card class="contact-card" :elevation="hover ? 12 : 2">
        <a href="https://www.instagram.com/holgerj9/">
          <v-card-title class="headline">
            <span class="mdi mdi-instagram"></span>
            Instagram
          </v-card-title>
        </a>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import Disclaimer from "../../components/Disclaimer/disclaimer";
export default {
  components: {
    Disclaimer
  }
};
</script>

<style scoped>
.page-header {
  width: fit-content;
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
  width: fit-content;
  color: #000;
}
a:hover {
  color: blue;
}
</style>
