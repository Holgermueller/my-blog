<template>
  <div id="indexPage">
    <v-card class="page-header">
      <v-card-title class="headline">Holger Mueller</v-card-title>
      <v-card-text class="subtitle-1">Writer Traveller Enthusiast</v-card-text>
    </v-card>
    <br />
    <v-card class="content-card">
      <v-card-title class="headline">
        <div class="display-1 font-weight-bold">{{title}}</div>
      </v-card-title>
      <v-card-text>
        <div class="subtitle-1">{{location}}</div>
        <div class="subtitle-1">{{date_time}}</div>
        <p>{{content}}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {},
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: "draft",
        starts_with: "blog/"
      })
      .then(res => {
        return {
          title: res.data.stories[0].content.title,
          content: res.data.stories[0].content.content,
          location: res.data.stories[0].content.location,
          date_time: res.data.stories[0].content.date_time
        };
      });
  }
};
</script>

<style scoped>
.page-header {
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
.content-card p {
  text-indent: 1rem;
  white-space: pre;
  margin-top: 1rem;
}
</style>
