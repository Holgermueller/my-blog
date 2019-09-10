<template>
  <nuxt-link :to="'/previous/' + id">
    <v-hover v-slot:default="{ hover }">
      <v-card class="post-preview" :elevation="hover ? 12 : 2">
        <v-card-text>
          <article>
            <div class="preview-title">{{title}}</div>
            <hr />
            <div class="preview-text">{{previewText}}</div>
          </article>
        </v-card-text>
      </v-card>
    </v-hover>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.post-preview {
  width: 75%;
  margin: 1rem auto;
  height: 10rem;
}
.preview-title {
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.preview-text {
  margin-top: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
