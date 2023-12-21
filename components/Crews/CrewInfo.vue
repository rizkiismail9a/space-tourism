<template>
  <div id="CrewInfo" class="w-full flex flex-col sm:flex-col-reverse md:self-center">
    <div id="SliderShow" class="w-full flex items-center gap-6 justify-center">
      <div
        v-for="(crew, index) in crews"
        :key="crew.id"
        class="w-[10px] h-[10px] cursor-pointer rounded-full"
        :class="{ 'bg-white': activeCrew.id === crew.id, ' bg-white/25': activeCrew.id !== crew.id }"
        @click="setActiveCrew(index)"
      ></div>
    </div>
    <div id="CrewInfo__Text" class="font-Bellefair flex flex-col items-center my-[32px]">
      <h2 class="uppercase text-white/[49.51%] text-[16px] sm:text-[24px]">{{ activeCrew.position }}</h2>
      <h1 class="text-white uppercase mt-[8px] mb-[16px] text-[24px] sm:text-[40px]">{{ activeCrew.name }}</h1>
      <p class="font-Barlow text-main-purple text-[15px] sm:text-[16px] leading-[25px] sm:leading-[28px] text-center px-[24px] sm:px-[155px]">
        {{ activeCrew.desc }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useClientStore } from "~/stores/clientStore";
const clientStore = useClientStore();
const activeCrew = computed(() => {
  return clientStore.activeCrew;
});
const crews = ref([
  {
    id: 1,
    name: "Douglas Hurley",
    position: "Commander",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "/hurley.png",
  },
  {
    id: 2,
    name: "MARK SHUTTLEWORTH",
    position: "Mission Specialist",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "/mark.png",
  },
  {
    id: 3,
    name: "Victor Glover",
    position: "pilot",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: "/victor.png",
  },
  {
    id: 4,
    name: "Anousheh Ansari",
    position: "Flight Engineer",
    desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    image: "/ansari.png",
  },
]);
function setActiveCrew(index) {
  clientStore.activeCrew = crews.value[index];
}
</script>

<style scoped></style>
