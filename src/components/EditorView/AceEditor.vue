<template>
  <div>
    <div>
      <v-row class="raw">
        <v-col cols="3" class="raw">
          <Left></Left>
        </v-col>
        <v-col>
          <Middle></Middle>
        </v-col>
        <!-- <v-col>
          <Right></Right>
        </v-col> -->
      </v-row>
    </div>
  </div>
</template>

<script>
import Left from "./Left/AceLeft";
import Middle from "./Middle/AceMiddle";
// import Right from "./Right/AceRight";
export default {
  components: {
    Left,
    Middle,
    // Right,
  },
};
</script>

<style>
.raw {
  padding: 0;
  margin: 0;
}
</style>