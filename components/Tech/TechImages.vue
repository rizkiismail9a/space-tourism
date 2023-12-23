<template>
  <img v-if="activeTech.id === 1" src="/rocket.jpg" class="h-[170px] sm:h-[310px] md:h-[527px] w-full md:w-[512px] object-cover object-bottom md:object-center mb-[34px] sm:mb-[56px] md:mb-0 slideUp" :alt="activeTech.name" />
  <img v-else-if="activeTech.id === 2" src="/port.jpg" class="h-[170px] sm:h-[310px] md:h-[527px] w-full md:w-[512px] object-cover object-bottom md:object-center mb-[34px] sm:mb-[56px] md:mb-0 slideUp" :alt="activeTech.name" />
  <img v-else src="/capsule.jpg" class="h-[170px] sm:h-[310px] md:h-[527px] w-full md:w-[512px] object-cover object-center md:object-center mb-[34px] sm:mb-[56px] md:mb-0 slideUp" :alt="activeTech.name" />
</template>

<script setup>
import { useClientStore } from "#imports";
const clientStore = useClientStore();
const activeTech = computed(() => {
  return clientStore.activeTech;
});
</script>

<style scoped>
.slideUp {
  position: relative !important;
  animation: sliding 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1 normal forwards;
}
@keyframes sliding {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@media screen and (max-width: 768px) {
  @keyframes sliding {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
