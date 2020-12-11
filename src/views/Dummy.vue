<template>
  <div>
    <v-navigation-drawer permanent absolute width="400" dark>
      <v-divider class="secondary"></v-divider>
      <v-container>
        <v-row>
          <v-col cols="2">
            <div
              @click="sad"
              class="d-flex flex-column align-center white--text hover"
              v-for="i in icons"
              :key="i.id"
            >
              <v-icon class="icon">{{ i.icon }}</v-icon>
              <p class="name caption">{{ i.name }}</p>
            </div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="10"></v-col>
        </v-row>
      </v-container>
      <!-- TEST -->
      <v-tab href="#tab-1">
        Recents
        <v-icon>mdi-phone</v-icon>
      </v-tab>
      <!-- TEST -->
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  methods: {
    sad: () => console.log(1),
  },
  data: () => ({
    icons: [
      {
        name: "Templates",
        icon: "mdi-star-four-points-outline",
        id: "1",
      },
      {
        name: "Cliparts",
        icon: "mdi-dots-hexagon",
        id: "2",
      },
      {
        name: "Images",
        icon: "mdi-image-multiple-outline",
        id: "3",
      },
      {
        name: "Product",
        icon: "mdi-tshirt-crew-outline",
        id: "4",
      },
      {
        name: "Text",
        icon: "mdi-format-text-variant-outline",
        id: "5",
      },
      {
        name: "Shapes",
        icon: "mdi-shape-outline",
        id: "6",
      },
      {
        name: "Layers",
        icon: "mdi-layers-triple-outline",
        id: "7",
      },
      {
        name: "Drawing",
        icon: "mdi-pencil-outline",
        id: "8",
      },
    ],
  }),
};
</script>

<style scoped>
.hover:hover {
  color: red;
  cursor: pointer;
}
</style>