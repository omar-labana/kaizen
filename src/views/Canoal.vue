<template>
  <div class="main">
    <v-file-input
      label="File input"
      filled
      prepend-icon="mdi-camera"
      @change="addImageToCanvas"
      hide-input
    ></v-file-input>
    <div class="my-10 d-flex justify-center">
      <canvas ref="can"></canvas>
    </div>
  </div>
</template>

<script>
import { fabric } from "fabric";
export default {
  data: () => ({
    canvas: null,
  }),
  mounted() {
    const ref = this.$refs.can;
    this.canvas = new fabric.Canvas(ref, {
      backgroundColor: "#010332",
      backgroundImage:
        "https://media.discordapp.net/attachments/735600055217815706/785509985899118602/redtshirt.png?width=650&height=650",
      selectionColor: "white",
      selectionLineWidth: 2,
      width: 650,
      height: 650,
    });
  },
  methods: {
    addImageToCanvas(e) {
      const url = URL.createObjectURL(e);
      fabric.Image.fromURL(url, (img) => {
        this.canvas.add(img);
      });
    },
  },
};
</script>

<style>
</style>