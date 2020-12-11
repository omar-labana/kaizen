<template>
  <div class="mx-5">
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search Templates"
      single-line
      hide-details
    ></v-text-field>
    <v-combobox
      v-model="select"
      :items="items"
      label="Categories"
      multiple
      chips
      class="mt-6"
    ></v-combobox>
    <v-container class="gallery">
      <v-row>
        <v-col v-for="n in 12" :key="n" class="d-flex child-flex" cols="6">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 9}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 9}`"
            aspect-ratio="1"
            class="grey lighten-2 target"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: ["Vuetify", "Programming"],
      items: ["Programming", "Design", "Vue", "Vuetify"],
      search: "as",
    };
  },
};
</script>

<style>
.gallery {
  height: 70vh;
  overflow: auto;
}
.target {
  cursor: pointer;
}
</style>