<template>
  <Navbar></Navbar>
  <div class="bg-black">
    <NuxtPage
      :transition="{
        name: 'page',
        mode: 'out-in',
      }"
    />
  </div>
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from {
  opacity: 0;
  transform: translateX(1000px);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(-1000px);
}
</style>
