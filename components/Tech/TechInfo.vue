<template>
  <div id="TechInfo" class="flex flex-col items-center md:flex-row md:w-[630px] md:mx-auto">
    <div id="Slider" class="flex md:flex-col gap-7 mb-[26px] sm:mb-[44px] md:mb-0">
      <div
        v-for="tech in technologies"
        :key="tech.id"
        class="bg-transparent border-white/25 border hover:border-white cursor-pointer rounded-full w-[40px] sm:w-[58px] md:w-[80px] h-[40px] sm:h-[58px] md:h-[80px] flex items-center justify-center font-Bellefair text-[16px] sm:text-[24px] md:text-[32px]"
        :class="{ 'bg-white text-main-black': activeTech.id === tech.id, 'text-white border-white/25': activeTech.id !== tech.id }"
        @click="setActiveTech(tech.id)"
      >
        {{ tech.id }}
      </div>
    </div>
    <div id="TechInfo" class="flex flex-col items-center md:items-start md:ml-[80px]">
      <p class="font-BarlowCond text-[14px] sm:text-[16px] uppercase tracking-[2.36px] sm:tracking-[2.7px] text-main-purple mb-[9px] sm:mb-[16px] md:mb-[11px]">THE TERMINOLOGY…</p>
      <h1 class="uppercase font-Bellefair text-[24px] sm:text-[40px] md:text-[56px] text-white mb-[16px]">{{ activeTech.name }}</h1>
      <p class="font-Barlow text-main-purple text-[15px] sm:text-[16px] md:text-[18px] leading-[25px] sm:leading-[28px] md:leading-[32px] px-[24px] sm:px-[155px] md:px-0 text-center md:text-left sm:mb-[97px] md:mb-0 md:w-[444px]">
        {{ activeTech.about }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useClientStore } from "#imports";
const clientStore = useClientStore();
const technologies = ref([
  {
    id: 1,
    name: "LAUNCH VEHICLE",
    about:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 2,
    name: "SPACEPORT",
    about:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: 3,
    name: "SPACE CAPSULE",
    about:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
]);
const activeTech = computed(() => {
  return clientStore.activeTech;
});
function setActiveTech(id) {
  clientStore.activeTech = technologies.value[id - 1];
}
</script>

<style lang="scss" scoped></style>
