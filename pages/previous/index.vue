<template>
  <div id="previousWritingIndexPage">
    <v-card class="page-header">
      <v-card-title class="page-title">Previous Posts</v-card-title>
      <v-card-text class="subtitle-container">
        <div class="page-subtitle">Check out my previous posts below:</div>
      </v-card-text>
    </v-card>

    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :previewText="post.previewText"
    />
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful";
const contentfulClient = createClient();
import PostPreview from "~/components/PostPreview/PostPreview";

export default {
  components: {
    PostPreview
  },
  asyncData({ data }) {
    return Promise.all([
      contentfulClient.getEntries({
        content_type: "blogPost",
        order: "-sys.createdAt"
      })
    ])
      .then(([pages]) => {
        return {
          posts: pages.items.map(post => {
            return {
              id: post.sys.id,
              title: post.fields.title,
              previewText: post.fields.subtitle
            };
          })
        };
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.page-header {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  color: #000000;
}
.page-title {
  font-family: "PT Sans Narrow", sans-serif;
  justify-content: center;
  font-size: 2rem;
  margin: 0.5rem;
}
.page-subtitle {
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 1.25rem;
  color: #000000;
  text-align: center;
}
</style>
