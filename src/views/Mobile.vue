<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-alert border="right" color="primary" dismissible text type="info"
            >Please make sure that you view this on mobile sized screen.</v-alert
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="d-flex justify-center">
            <canvas ref="can"></canvas>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- models -->
    <v-bottom-sheet v-model="sheet3" scrollable>
      <v-sheet class="text-center" height="200px">
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-btn
                large
                outlined
                rounded
                @click.prevent="changeTemp(`default`)"
              >
                <v-icon dark> mdi-circle-outline </v-icon>
                Default
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn
                large
                outlined
                rounded
                @click.prevent="changeTemp(`square`)"
              >
                <v-icon dark> mdi-square-outline </v-icon>
                Square
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn
                large
                outlined
                rounded
                @click.prevent="changeTemp(`hexagon`)"
              >
                <v-icon dark> mdi-hexagon-outline </v-icon>
                Hexagon
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn
                large
                outlined
                rounded
                @click.prevent="changeTemp(`custom`)"
              >
                <v-icon dark> mdi-shape-outline </v-icon>
                Custom
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
    <v-bottom-sheet v-model="sheet4" scrollable>
      <v-sheet class="text-center" height="">
        <v-container>
          <v-row>
            <h1>
            //TODO 
            </h1>
          </v-row>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
    <v-bottom-sheet v-model="sheet5" scrollable>
      <v-sheet class="text-center" height="200">
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-combobox
                v-model="select"
                :items="items"
                label="Wood Type"
                outlined
                dense
              ></v-combobox>
            </v-col>
            <v-col cols="6">
              <v-combobox
                v-model="size"
                :items="sizeItems"
                label="Size"
                outlined
                dense
              ></v-combobox>
            </v-col>
            <v-col cols="12">
              <v-btn tile color="primary" class="" large to="/mobile">
                <v-icon left> mdi-cart-check </v-icon>
                Check Out
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
    <!-- models -->
    <v-bottom-sheet v-model="sheet" scrollable>
      <v-sheet class="text-center" height="200px">
        <!-- <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >
          close
        </v-btn> -->
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-file-input
                append-icon="mdi-image"
                hint="Upload an image to your design."
                label="Image"
                outlined
                persistent-hint
                small-chips
                prepend-icon=""
                shaped
                @change="addImageToCanvas"
                rounded
                truncate-length="3"
              ></v-file-input>
            </v-col>
            <v-col cols="">
              <v-btn outlined large @click.prevent="openCliparts">
                <v-icon>mdi-shape-polygon-plus</v-icon>
                Cliparts
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
    <!-- models -->
    <!-- models -->
    <!-- <v-bottom-sheet v-model="sheet2" fullscreen>
      <v-sheet class="text-center" height="200px">
        <

        <v-container>
          <v-row>
            <v-col v-for="n in 12" :key="n" class="d-flex child-flex" cols="3">
              <v-img
                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                aspect-ratio="1"
                class="grey lighten-2 target"
              >
              </v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-bottom-sheet> -->
    <v-dialog
      v-model="sheet2"
      scrollable
      overlay-color="primary"
      dark
      transition="dialog-top-transition"
    >
      <v-container>
        <v-row class="white">
          <v-col v-for="n in 12" :key="n" class="d-flex child-flex" cols="6">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2 target"
              @click="
                addClipart(`https://picsum.photos/500/300?image=${n * 5 + 10}`)
              "
            >
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-dialog>
    <!-- models -->
    <!-- v-for="n in 8" :key="n" -->
    <!-- botttom navs -->
    <v-bottom-navigation v-model="value" fixed class="line">
      <v-btn value="template" @click.prevent="sheet3 = !sheet3">
        <span>Templates</span>
        <v-icon small>mdi-shape-outline</v-icon>
      </v-btn>

      <!-- <span> Add </span> -->

      <!-- <v-file-input
        prepend-icon="mdi-shape-square-rounded-plus"
        @change="addImageToCanvas"
        hide-input
        
      >
      </v-file-input> -->

      <v-btn value="plus" @click.prevent="sheet = !sheet">
        <span>Add</span>
        <v-icon>mdi-shape-square-rounded-plus</v-icon>
      </v-btn>
      <v-btn value="layers" @click.prevent="sheet4 = !sheet4">
        <span>Layers</span>

        <v-icon small>mdi-layers</v-icon>
      </v-btn>
      <v-btn value="product" @click.prevent="sheet5 = !sheet5">
        <span>Product</span>

        <v-icon small>mdi-dots-hexagon</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script>
import { fabric } from "fabric";
export default {
  data: () => ({
    value: "recent",
    canvas: undefined,
    sheet: false,
    sheet2: false,
    sheet3: false,
    sheet4: false,
    sheet5: false,
    temps: {
      default: require("../assets/default.png"),
      square: require("../assets/square.png"),
      hexagon: require("../assets/hexagon.png"),
    },
    layers: "",
    select: ["Palm Wood"],
    items: ["Palm Wood", "Walnut Wood", "Oak Wood", "Pine Wood"],
    size: ["2.5*2.5 CM"],
    sizeItems: ["2.5*2.5 CM", "5*5 CM", "7.5*7.5 CM"],
  }),
  mounted() {
    const ref = this.$refs.can;
    this.canvas = new fabric.Canvas(ref, {
      backgroundColor: "gray",
      backgroundImage: this.temps.default,
      selectionLineWidth: 2,
      width: 300,
      height: 300,
    });
  },
  methods: {
    addImageToCanvas(e) {
      const url = URL.createObjectURL(e);
      fabric.Image.fromURL(url, (img) => {
        img.scale(0.2);
        this.canvas.add(img);
      });
      this.sheet = false;
      // document.getElementById("ass").innerHTML = "";
    },
    openCliparts: function () {
      this.sheet = false;
      this.sheet2 = true;
    },
    addClipart(e) {
      fabric.Image.fromURL(e, (img) => {
        img.scale(0.2);
        img.set("top", 100);
        img.set("left", 100);

        this.canvas.add(img);
      });
      this.sheet2 = false;
    },
    changeTemp: function (shape) {
      switch (shape) {
        case "default":
          this.canvas.setBackgroundImage(
            this.temps.default,
            this.canvas.renderAll.bind(this.canvas)
          );
          console.log(this.canvas.getObjects()[0]);
          break;
        case "square":
          this.canvas.setBackgroundImage(
            this.temps.square,
            this.canvas.renderAll.bind(this.canvas)
          );
          break;
        case "hexagon":
          this.canvas.setBackgroundImage(
            this.temps.hexagon,
            this.canvas.renderAll.bind(this.canvas)
          );
          break;
        case "custom":
          this.canvas.setBackgroundImage(
            null,
            this.canvas.renderAll.bind(this.canvas)
          );
          break;

        default:
          break;
      }
    },
  },
  computed: {
    // layers: this.canvas.getObjects(),
  },
};
</script>
<style >
.line {
  border-top: 1px solid gray;
}
.try {
  overflow: unset;
}
</style>