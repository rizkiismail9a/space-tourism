<template>
  <div id="DestinationPage" class="h-screen overflow-y-scroll">
    <div id="MainContent" class="flex flex-col items-center justify-center h-full mt-[88px] sm:mt-[136px] md:mt-[50px]">
      <div id="Title" class="sm:w-full sm:pl-11 md:pl-[166px] md:mb-[64px]">
        <p class="font-BarlowCond tracking-[2.7px] sm:tracking-[3.38px] md:tracking-[4.72px] text-[16px] sm:text-[20px] md:text-[28px] text-white uppercase sm:text-left">
          <span class="text-white/25 me-[18px] font-bold">01</span>Pick your destination
        </p>
      </div>
      <div class="flex flex-col items-center md:flex-row md:justify-evenly md:w-full">
        <ObjectImage></ObjectImage>
        <DestinationInfo @active-object="setActiveDestination"></DestinationInfo>
      </div>
    </div>
  </div>
</template>

<script setup>
import DestinationInfo from "~/components/Destinations/DestinationInfo.vue";
import ObjectImage from "~/components/Destinations/ObjectImage.vue";
import { useClientStore } from "../stores/clientStore";
const clientStore = useClientStore();
const destinations = ref([
  {
    id: 1,
    name: "moon",
    desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    estimation: "3 days",
    image: "/moon.png",
  },
  {
    id: 2,
    name: "mars",
    desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    estimation: "9 months",
    image: "/mars.png",
  },
  {
    id: 3,
    name: "europa",
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin!",
    distance: "628 MIL. km",
    estimation: "3 years",
    image: "/europa.png",
  },
  {
    id: 4,
    name: "titan",
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    estimation: "7 years",
    image: "/titan.png",
  },
]);

function setActiveDestination(id) {
  clientStore.activeDestination = destinations.value[id - 1];
}
</script>

<style scoped>
#DestinationPage {
  background: url("/destination.png") no-repeat fixed center;
  background-size: cover;
}
@media screen and (max-width: 768px) {
  #DestinationPage {
    background: url("/destination-mobile.jpg") no-repeat fixed center;
    background-size: cover;
  }
}
</style>
