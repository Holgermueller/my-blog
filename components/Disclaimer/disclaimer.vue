<template>
  <div>
    <v-tooltip right>
      <template v-slot:activator="{ on }">
        <v-card v-on="on" class="tooltip">
          <h3 class="disclaimer">
            Disclaimer
            <span class="mdi mdi-help-circle-outline"></span>
          </h3>
        </v-card>
      </template>

      <span class="overlay">
        <h2>Disclaimer:</h2>
        <p>I'm an infrequent poster on these sites. But followers are a commodity these days, so follow me.</p>
      </span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
.tooltip {
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
.disclaimer {
  padding: 0.5rem;
  font-size: 1rem;
}
.overlay {
  background-color: #000;
}
</style>
