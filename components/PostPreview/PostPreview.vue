<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card class="post-preview" :elevation="hover ? 12 : 2">
        <nuxt-link class="link-to-article" :to="'/previous/' + id">
          <v-card-text>
            <article>
              <div class="preview-title">{{title}}</div>
              <hr />
              <div class="preview-date">Originally posted: {{previewDate | changeDateFilter}}</div>
              <div class="preview-text">{{previewText}}</div>
            </article>
          </v-card-text>
        </nuxt-link>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
const moment = require("moment");
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
    },
    previewDate: {
      type: String,
      required: true
    }
  },
  filters: {
    changeDateFilter: value => {
      return moment(value).format("dddd, Do MMMM YYYY, LT");
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}
a:hover {
  cursor: pointer;
  color: #659dbd;
}
.post-preview {
  width: 75%;
  margin: 1rem auto;
  height: 10rem;
}
.preview-title {
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
.preview-text {
  margin-top: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
