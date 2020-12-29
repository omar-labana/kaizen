<template>
  <div class="home">
    
    <v-container>
      <v-row>
        <v-col>
          <v-card shaped outlined elevation="5">
            <v-img
              src="../assets/kc.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>Wooden Key Chains</v-card-title>
            </v-img>

            <!-- <v-card-actions >
              <v-spacer></v-spacer>

            </v-card-actions> -->
              <v-btn tile  color="primary" class="ml-3 mb-3 mt-3"  large to="/mobile">
                <v-icon left> mdi-pencil </v-icon>
                Start Creating
              </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- what -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  methods: {
    bass: function () {
      console.log(this.ha);
      this.ha = "";
    },
  },
  data: () => ({
    ha: "",
  }),
};
</script>
<style >
.ape {
  overflow: hidden;
}
</style>