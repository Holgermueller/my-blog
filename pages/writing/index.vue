<template>
  <div id="writingIndexPage">
    <v-card class="page-header">
      <v-card-title class="headline">Writing</v-card-title>
      <v-card-text>Check out my previous posts below:</v-card-text>
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
        },
        {
          title: "Third post",
          previewText: "Some text",
          id: "third-post"
        },
        {
          title: "Fourth post",
          previewText: "Even more text",
          id: "fourth-post"
        }
      ]
    };
  }
};
</script>

<style scoped>
#writingIndexPage {
  margin-bottom: 5rem;
}
.page-header {
  margin-top: 7rem;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}
.headline {
  justify-content: center;
}
</style>
