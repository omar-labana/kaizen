<template>
  <div class="mx-5">
    <!-- TEST -->

    <div>
      <v-tabs icons-and-text dark height="60"  show-arrows="">
        <v-tab class="mt-2">
          <p class="caption mt-1">Library</p>
          <v-icon small>mdi-image-multiple</v-icon>
        </v-tab>
        <v-tab class="mt-2">
          <p class="caption mt-1">Upload</p>
          <v-icon small>mdi-upload</v-icon>
        </v-tab>
        <v-tab class="mt-2">
          <p class="caption mt-1">Free</p>
          <v-icon small>mdi-currency-usd-off</v-icon>
        </v-tab>
        <v-tab class="mt-2">
          <p class="caption mt-1">Social</p>
          <v-icon small>mdi-axis-arrow</v-icon>
        </v-tab>
        
      </v-tabs>
    </div>
    <!-- TEST -->
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
      search: "",
      toggle_exclusive: undefined,
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