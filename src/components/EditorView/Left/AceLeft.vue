<template>
  <v-card max-width="400" class="my-1 maint" height="100%">
    <!-- <v-divider vertical></v-divider> -->
    <v-tabs vertical icons-and-text>
      <v-tab v-for="i in icons" :key="i.id">
        <h5>{{ i.name }}</h5>
        <v-icon left> {{ i.icon }} </v-icon>
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <Template></Template>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Cliparts></Cliparts>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Images></Images>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Product></Product>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
import Template from "./Template";
import Cliparts from "./Cliparts";
import Images from "./Images";
import Product from "./Product";
// import Template from "../components/EditorView/Left/Text";
// import Template from "../components/EditorView/Left/Shapes";
// import Template from "../components/EditorView/Left/Layers";
// import Template from "../components/EditorView/Left/Drawing";

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
  components: {
    Template,
    Cliparts,
    Images,
    Product,
  },
};
</script>

<style >
.v-tab {
  width: 50px;
}
.maint {
  height: 100vh;
}
</style>