<template>
  <v-app class="holy">
    <AceHeader></AceHeader>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AceHeader from "./components/Header/AceHeader";

export default {
  name: "App",

  components: {
    AceHeader,
  },

  data: () => ({
    //
  }),
};
</script>
<style >
.holy {
  min-width: 300px;
}
</style>