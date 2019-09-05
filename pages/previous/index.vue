<template>
  <div id="previousWritingIndexPage">
    <v-card class="page-header">
      <v-card-title class="headline">Previous</v-card-title>
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
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: "draft",
        starts_with: "blog/"
      })
      .then(res => {
        return {
          posts: res.data.stories.map(post => {
            return {
              id: post.slug,
              title: post.content.title,
              previewText: post.content.preview_text
            };
          })
        };
      });
  }
  // data() {
  //   return {
  //     posts: [
  //       {
  //         title: "First post",
  //         previewText: "Line from post",
  //         id: "first-post"
  //       },
  //       {
  //         title: "Second post",
  //         previewText: "Line from post",
  //         id: "second-post"
  //       },
  //       {
  //         title: "Third post",
  //         previewText: "Some text",
  //         id: "third-post"
  //       },
  //       {
  //         title: "Fourth post",
  //         previewText: "Even more text",
  //         id: "fourth-post"
  //       }
  //     ]
  //   };
  // }
};
</script>

<style scoped>
.page-header {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
}
.headline {
  justify-content: center;
}
</style>
