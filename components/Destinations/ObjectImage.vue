<template>
  <div id="ObjectImage">
    <img v-if="imageSrc.name === 'moon'" src="/moon.png" class="w-[170px] sm:w-[300px] md:w-[445px] h-[170px] sm:h-[300px] md:h-[445px] mt-[32px] mb-[26px] rolling" :alt="imageSrc.name" />
    <img v-else-if="imageSrc.name === 'mars'" src="/mars.png" class="w-[170px] sm:w-[300px] md:w-[445px] h-[170px] sm:h-[300px] md:h-[445px] mt-[32px] mb-[26px] rolling" :alt="imageSrc.name" />
    <img v-else-if="imageSrc.name === 'europa'" src="/europa.png" class="w-[170px] sm:w-[300px] md:w-[445px] h-[170px] sm:h-[300px] md:h-[445px] mt-[32px] mb-[26px] rolling" :alt="imageSrc.name" />
    <img v-else src="/titan.png" class="w-[170px] sm:w-[300px] md:w-[445px] h-[170px] sm:h-[300px] md:h-[445px] mt-[32px] mb-[26px] rolling" :alt="imageSrc.name" />
  </div>
</template>

<script setup>
import { useClientStore } from "~/stores/clientStore";
const clientStore = useClientStore();
const imageSrc = computed(() => {
  return clientStore.activeDestination;
});
</script>

<style scoped>
.rolling {
  position: relative !important;
  animation: rolling 0.8s ease-in 1 normal forwards;
}
@keyframes rolling {
  0% {
    opacity: 0;
    transform: translateX(-400px) rotate(180deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
}
</style>
