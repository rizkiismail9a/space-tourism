<template>
  <div id="CrewImages" class="w-full h-fit my-[32px] sm:mb-0 sm:self-end">
    <img v-if="activeCrew.id === 1" src="/hurley.png" class="h-[223px] sm:h-[525px] md:h-[600px] object-contain md:object-cover mx-auto sliding" :alt="activeCrew.name" />
    <img v-else-if="activeCrew.id === 2" src="/mark.png" class="h-[223px] sm:h-[525px] md:h-[600px] object-contain md:object-cover mx-auto sliding" :alt="activeCrew.name" />
    <img v-else-if="activeCrew.id === 3" src="/victor.png" class="h-[223px] sm:h-[525px] md:h-[600px] object-contain md:object-cover mx-auto sliding" :alt="activeCrew.name" />
    <img v-else src="/ansari.png" class="h-[223px] sm:h-[525px] md:h-[600px] object-contain md:object-cover mx-auto sliding" :alt="activeCrew.name" />
  </div>
</template>

<script setup>
import { useClientStore } from "~/stores/clientStore";
const clientStore = useClientStore();
const activeCrew = computed(() => {
  return clientStore.activeCrew;
});
</script>

<style scoped>
.sliding {
  position: relative !important;
  animation: sliding 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1 normal forwards;
}
@keyframes sliding {
  0% {
    opacity: 0;
    /* transform: translateX(100px); */
  }
  100% {
    opacity: 1;
    /* transform: translateX(0); */
  }
}
</style>
