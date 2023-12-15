<template>
  <div id="HomePage" class="h-screen"></div>
</template>

<script setup>
import MainLayout from "../layouts/MainLayout.vue";
</script>

<style scoped>
#HomePage {
  background: url("/home.png") no-repeat fixed center;
  background-size: cover;
}
@media screen and (max-width: 660px) {
  #HomePage {
    background: url("/home-sm.png") no-repeat fixed center;
    background-size: cover;
  }
}
</style>
