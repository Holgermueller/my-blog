<template>
  <div id="post">
    <v-card class="post-header">
      <v-card-title class="post-headline">{{title}}</v-card-title>
      <hr />
      <v-card-text>
        <ul class="subheader">
          <li>{{author}}</li>
          <li>{{location}}</li>
          <li>{{dateTime | changeDateFilter}}</li>
          <li>Listening to: {{listeningTo}}</li>
        </ul>
      </v-card-text>
    </v-card>

    <v-card class="post-content">
      <v-card-text>
        <p>{{content}}</p>
      </v-card-text>
      <hr />
      <v-card-actions>
        <nuxt-link to="/previous/previous">
          <!-- <v-btn text>{{tags}}</v-btn>
          <span></span> -->
          <v-btn class="back" text>BACK</v-btn>
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
const moment = require("moment");
import { createClient } from "~/plugins/contentful";
const contentfulClient = createClient();

export default {
  asyncData({ data, params }) {
    return Promise.all([contentfulClient.getEntry(params.singlePostId)])
      .then(([page]) => {
        return {
          title: page.fields.title,
          location: page.fields.location,
          dateTime: page.fields.dateTime,
          tags: page.fields.tags,
          content: page.fields.blogbody,
          author: page.fields.author,
          listeningTo: page.fields.listeningTo
        };
      })
      .catch(console.error);
  },
  filters: {
    changeDateFilter: value => {
      return moment(value).format("dddd, Do MMMM YYYY, LT");
    }
  }
};
</script>

<style scoped>
.post-header {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
}
.post-headline {
  justify-content: center;
  font-family: "Pt Sans Narrow", sans-serif;
  font-size: 2rem;
  margin: 1rem;
}
hr {
  width: 75%;
  margin: auto;
}
.subheader {
  list-style: none;
  font-weight: bold;
}
.post-content {
  width: 85%;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}
.post-content p {
  white-space: pre-wrap;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #000;
}
a {
  text-decoration: none;
  color: #000;
}
.back {
  text-decoration: none;
}
.back:hover {
  color: #659dbd;
}
</style>
