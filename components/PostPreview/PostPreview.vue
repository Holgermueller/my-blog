<template>
  <nuxt-link :to="'/previous/' + id">
    <v-card class="post-preview">
      <v-card-text>
        <article>
          <div class="headline font-weight-bold">{{title}}</div>
          <hr />
          <div>{{previewText}}</div>
        </article>
      </v-card-text>
    </v-card>
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
</style>
