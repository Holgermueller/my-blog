<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center"></div>
      <v-card>
        <v-card-title class="headline">Writing</v-card-title>
        <v-card-text>Links for individual blogs will appear here:</v-card-text>
      </v-card>

      <PostPreview
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :id="post.id"
        :previewText="post.previewText"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import PostPreview from "../../components/PostPreview/PostPreview";
export default {
  components: {
    PostPreview
  },
  data() {
    return {
      posts: [
        {
          title: "First post",
          previewText: "Line from post",
          id: "first-post"
        },
        {
          title: "Second post",
          previewText: "Line from post",
          id: "second-post"
        }
      ]
    };
  }
};
</script>
