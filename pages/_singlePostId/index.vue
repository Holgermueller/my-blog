<template>
  <div id="post">
    <v-card class="post-header">
      <v-card-title class="headline">{{title}}</v-card-title>
      <hr />
      <v-card-text>
        <ul class="subheader">
          <li>{{author}}</li>
          <li>{{location}}</li>
          <li>{{date_time}}</li>
        </ul>
      </v-card-text>
    </v-card>

    <v-card class="post-content">
      <v-card-text>
        <p>{{content}}</p>
        <div>{{tags}}</div>
      </v-card-text>
      <v-card-actions>
        <nuxt-link class="back" to="/previous">
          <v-btn text>BACK</v-btn>
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/blog/" + context.params.singlePostId, {
        version: "draft"
      })
      .then(res => {
        console.log(res.data);
        return {
          title: res.data.story.content.title,
          content: res.data.story.content.content,
          location: res.data.story.content.location,
          date_time: res.data.story.content.date_time,
          tags: res.data.story.content.tags,
          author: res.data.story.content.author
        };
      });
  }
  // mounted() {
  //   this.$storyblok.init();
  //   this.$storyblok.on("change", () => {
  //     location.reload(true);
  //   });
  // },
};
</script>

<style scoped>
.post-header {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
}
.headline {
  justify-content: center;
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
  white-space: pre;
}
.back {
  color: blue;
  text-decoration: none;
}
</style>
