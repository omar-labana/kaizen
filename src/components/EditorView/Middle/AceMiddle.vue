
<template>
  <div class="sad">
    <div class="my-10 d-flex justify-center">
      <canvas ref="can"></canvas>
    </div>
    <v-btn color="primary" @click="saveImage"> Save</v-btn>
  </div>
</template>

<script>
import { fabric } from "fabric";

export default {
  mounted() {
    const ref = this.$refs.can;
    const canvas = new fabric.Canvas(ref, {
      backgroundColor: "#010332",
      backgroundImage:
        "https://media.discordapp.net/attachments/735600055217815706/785509985899118602/redtshirt.png?width=650&height=650",
      selectionColor: "white",
      selectionLineWidth: 2,
      width: this.getEditorSize(),
      height: this.getEditorSize(),
    });

    fabric.Image.fromURL(
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      function (oImg) {
        oImg.scale(0.3).set("flipX", true);
        canvas.add(oImg);
      }
    );
  },
  methods: {
    resizeEditor: function () {
      this.canvas.setDimensions({
        width: this.getEditorSize(),
        height: this.getEditorSize(),
      });
    },
    getEditorSize() {
      const windowWidth = window.innerWidth;
      let editorWidth;
      switch (true) {
        case windowWidth < 450:
          editorWidth = 300;
          break;
        case windowWidth < 900:
          editorWidth = 450;
          break;
        case windowWidth > 900:
          editorWidth = 650;
          break;
      }
      return editorWidth;
    },
    saveImage() {
      this.$refs.can.toDataURL("image/jpeg", 1.0);
    },
  },
  created() {
    window.addEventListener("resize", this.resizeEditor);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeEditor);
  },
};
</script>

<style>
</style>