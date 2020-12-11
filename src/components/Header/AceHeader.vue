<template>
  <v-app-bar app color="primary" dark>
    <div class="container">
      <v-row>
        <div class="d-flex align-center">
          <v-toolbar-title>KAI | ZEN</v-toolbar-title>
        </div>

        <v-spacer></v-spacer>
        <RightHalf></RightHalf>
      </v-row>
    </div>
  </v-app-bar>
</template>

<script>
import RightHalf from "./RightHalf";
export default {
  name: "AceHeader",
  components: {
    RightHalf,
  },
};
</script>
