<template>
  <div id="indexPage">
    <v-card class="page-header">
      <v-card-title class="name">Holger Mueller</v-card-title>
      <v-card-text class="subtitle-1">Writer Traveller Enthusiast</v-card-text>
    </v-card>
    <br />
    <v-card class="content-card">
      <v-card-title class="home-page-title">{{ title }}</v-card-title>
      <v-card-text>
        <div class="subtitle-1">{{ location }}</div>
        <div class="subtitle-1">{{ dateTime | changeDateFilter }}</div>
        <div class="subtitle-1">Listening to: {{ listeningTo }}</div>
        <hr />
        <p>{{ blogbody }}</p>
      </v-card-text>
      <!-- <hr />
      <v-card-actions>{{tags}}</v-card-actions>-->
    </v-card>
  </div>
</template>

<script>
const moment = require("moment");

export default {
  components: {},
  asyncData({}) {},
  filters: {
    changeDateFilter: (value) => {
      return moment(value).format("dddd, Do MMMM YYYY, LT");
    },
  },
};
</script>

<style scoped>
.page-header {
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
.name {
  justify-content: center;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 3rem;
  margin: 1rem;
}
.home-page-title {
  justify-content: center;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 3rem;
  margin: 1rem;
}
.subtitle-1 {
  text-align: center;
}
.content-card {
  width: 85%;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}
.content-card p {
  white-space: pre-wrap;
  margin-top: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #000;
}
hr {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}
</style>
