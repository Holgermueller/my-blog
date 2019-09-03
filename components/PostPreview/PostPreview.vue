<template>
  <v-card class="post-preview">
    <v-card-text>
      <nuxt-link :to="id">
        <article >
          <div class="headline">{{title}}</div>
          <hr />
          <div>{{previewText}}</div>
        </article>
      </nuxt-link>
    </v-card-text>
  </v-card>
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
  width: 90%;
  margin: 1rem;
  height: 10rem;
}
</style>
