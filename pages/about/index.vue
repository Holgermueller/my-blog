<template>
  <div id="aboutPage">
    <v-card class="page-header">
      <v-card-title class="page-title">{{header}}</v-card-title>
    </v-card>
    <v-card class="content-card">
      <v-card-text class="content-container">
        <p class="content">{{aboutBody}}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { createClient } from "../../plugins/contentful";
const contentfulClient = createClient();

export default {
  asyncData({ data }) {
    return Promise.all([
      contentfulClient.getEntries({
        content_type: "about",
        order: "-sys.id"
      })
    ])
      .then(([page]) => {
        return {
          header: page.items[0].fields.aboutHeader,
          aboutBody: page.items[0].fields.aboutBody
        };
      })
      .catch(console.error);
  }
};
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
.content-card {
  width: 85%;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}
.headline {
  justify-content: center;
}
#aboutPage p {
  white-space: pre-wrap;
}
p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
