<template>
  <div id="indexPage">
    <v-card class="page-header">
      <v-card-title class="display-2 name">Holger Mueller</v-card-title>
      <v-card-text class="subtitle-1">Writer Traveller Enthusiast</v-card-text>
    </v-card>
    <br />
    <v-card class="content-card">
      <v-card-title class="headline">
        <div class="display-1">{{title}}</div>
      </v-card-title>
      <v-card-text>
        <div class="subtitle-1">{{location}}</div>
        <div class="subtitle-1">{{dateTime}}</div>
        <p>{{blogbody}}</p>
      </v-card-text>
      <hr />
      <v-card-actions>{{tags}}</v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { createClient } from "../plugins/contentful";
const contentfulClient = createClient();

export default {
  components: {},
  asyncData({ data }) {
    return Promise.all([
      contentfulClient.getEntries({
        content_type: "blogPost",
        order: "-sys.createdAt"
      })
    ])
      .then(([pages]) => {
        return {
          title: pages.items[0].fields.title,
          blogbody: pages.items[0].fields.blogbody,
          dateTime: pages.items[0].fields.dateTime,
          tags: pages.items[0].fields.tags,
          location: pages.items[0].fields.location
        };
      })
      .catch(console.error);
  }
};
</script>

<style scoped>
.page-header {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
}
.name,
.headline {
  justify-content: center;
    font-family: "PT Sans Narrow", sans-serif;
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
}
hr {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}
</style>
