<template>
  <div id="ObjectDestination" class="flex flex-col items-center md:w-[445px]">
    <div id="slideBar" class="flex flex-row font-BarlowCond text-[14px] sm:text-[16px] gap-10 h-[28px] sm:h-[34px]">
      <div id="MoonNav" class="tracking-[2.36px] sm:tracking-[3.7px] text-main-purple uppercase cursor-pointer text-center relative" @click="activeObject(1)">
        <span class="h-full w-full">moon</span>
        <div class="absolute bottom-0 underline h-[3px] w-full bg-white" v-if="activeDestination.id === 1"></div>
        <div class="absolute bottom-0 underline h-[3px] w-full bg-white/25 hovered1" v-if="activeDestination.id !== 1"></div>
      </div>
      <div id="MarsNav" class="tracking-[2.36px] sm:tracking-[3.7px] text-main-purple uppercase cursor-pointer text-cente relative" @click="activeObject(2)">
        <span class="h-full">mars</span>
        <div class="absolute bottom-0 underline h-[3px] w-full bg-white" v-if="activeDestination.id === 2"></div>
        <div class="absolute bottom-0 underline h-[3px] w-full bg-white/25 hovered2"></div>
      </div>
      <div id="EuropaNav" class="tracking-[2.36px] sm:tracking-[3.7px] text-main-purple uppercase cursor-pointer text-center relative" @click="activeObject(3)">
        <span class="h-full">europa</span>
        <div class="absolute bottom-0 underline h-[3px] w-full bg-white" v-if="activeDestination.id === 3"></div>
        <div class="absolute bottom-0 underline h-[3px] w-full bg-white/25 hovered3"></div>
      </div>
      <div id="TitanNav" class="tracking-[2.36px] sm:tracking-[3.7px] text-main-purple uppercase cursor-pointer text-cente relative" @click="activeObject(4)">
        <span class="h-full">titan</span>
        <div class="absolute bottom-0 underline h-[3px] w-full bg-white" v-if="activeDestination.id === 4"></div>
        <div class="absolute bottom-0 underline h-[3px] w-full bg-white/25 hovered4"></div>
      </div>
    </div>
    <div id="ObjectInfo" class="flex flex-col items-center">
      <h1 id="ObjectName" class="text-white text-[56px] sm:text-[80px] font-Bellefair uppercase mt-[20px]">{{ activeDestination.name }}</h1>
      <p id="ObjeceDescription" class="font-Barlow text-[15px] sm:text-[16px] leading-[25px] sm:leading-[28px] text-main-purple text-center px-[24px]">{{ activeDestination.desc }}</p>
      <div class="w-[327px] my-[32px] bg-[#383B4B] h-[1px]"></div>
      <div class="flex flex-col items-center sm:flex-row sm:gap-16">
        <div>
          <p class="text-main-purple tracking-[2.36px] text-[14px] font-BarlowCond uppercase text-center">AVG. DISTANCE</p>
          <h3 class="text-white font-Bellefair text-[28px] mt-[12px] uppercase mb-[32px] sm:mb-0 text-center">{{ activeDestination.distance }}</h3>
        </div>
        <div>
          <p class="text-main-purple tracking-[2.36px] text-[14px] font-BarlowCond uppercase text-center">Est. travel time</p>
          <h3 class="text-white font-Bellefair text-[28px] mt-[12px] uppercase text-center">{{ activeDestination.estimation }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDestinationStore } from "#imports";

// const props = defineProps(["name", "desc", "distance", "estimation"]);
const emits = defineEmits(["activeObject"]);
const destinationStore = useDestinationStore();
function activeObject(objectId) {
  emits("activeObject", objectId);
}
const activeDestination = computed(() => {
  return destinationStore.activeDestination;
});
</script>

<style scoped>
.hovered1,
.hovered2,
.hovered3,
.hovered4 {
  transform: translateX(-100px);
  opacity: 0;
}
#MoonNav:hover .hovered1,
#MarsNav:hover .hovered2,
#EuropaNav:hover .hovered3,
#TitanNav:hover .hovered4 {
  transform: translateX(0);
  opacity: 1;
  transition: all 0.3s ease;
}
</style>
