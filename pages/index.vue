<template>
  <div id="indexPage">
    <v-card class="page-header">
      <v-card-title class="headline">Holger Mueller</v-card-title>
      <v-card-text class="subtitle-1">Writer Traveller Enthusiast</v-card-text>
    </v-card>
    <br />
    <v-card class="content-card">
      <v-card-title class="headline">Newest post will go here</v-card-title>
      <v-card-text>content will go here...</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
.page-header {
  margin-top: 7rem;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}
.headline {
  justify-content: center;
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
</style>
