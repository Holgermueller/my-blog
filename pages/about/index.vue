<template>
  <div id="aboutPage">
    <v-card class="page-header">
      <v-card-title class="headline">{{title}}</v-card-title>
      <v-card-text></v-card-text>
    </v-card>
    <v-card class="content-card">
      <v-card-text>
        <p>{{content}}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: context.isDev ? "draft" : "published",
        starts_with: "about/"
      })
      .then(res => {
        return {
          title: res.data.stories[0].content.Title,
          content: res.data.stories[0].content.Content
        };
      });
  }
};
</script>

<style scoped>
.page-header {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
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
  white-space: pre;
}
</style>
