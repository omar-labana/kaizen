<template>
  <div>
    <v-btn rounded color="primary">
      <v-icon small>mdi-web</v-icon>
      <v-icon small>mdi-abjad-arabic</v-icon>
      
    </v-btn>
    <v-btn rounded color="primary" class="hidden-md-and-down">
      <v-icon meduim>mdi-dots-grid</v-icon>
      <div>Services</div>
    </v-btn>
    <v-btn rounded small color="primary"
      ><v-icon> mdi-account-outline </v-icon>
      <div class="hidden-md-and-down">Log in</div>
    </v-btn>
    <v-btn light rounded>Sign up</v-btn>
    <v-app-bar-nav-icon dark class="hidden-lg-and-up"></v-app-bar-nav-icon>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>