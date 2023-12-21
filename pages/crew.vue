<template>
  <div id="CrewPage" class="h-screen sm:h-fit md:h-screen">
    <div id="MainContent" class="w-full flex flex-col items-center pt-[88px] sm:pt-[136px] md:pt-[212px]">
      <div id="Title" class="font-BarlowCond text-[16px] sm:text-[20px] tracking-[2.7px] sm:tracking-[3.38px] text-white uppercase sm:w-full sm:text-left sm:px-[38.5px] md:px-[166.5px]">
        <span class="text-white/25 font-bold">02</span> Meet your crew
      </div>
      <div id="CrewWrapper" class="w-full flex flex-col sm:flex-col-reverse md:flex-row-reverse md:absolute md:bottom-0 sm:pt-[60x]">
        <CrewImages></CrewImages>
        <CrewInfo></CrewInfo>
      </div>
    </div>
  </div>
</template>

<script setup>
import CrewImages from "~/components/Crews/CrewImages.vue";
import CrewInfo from "~/components/Crews/CrewInfo.vue";
</script>

<style scoped>
#CrewPage {
  background: url("/crew.jpg") no-repeat fixed center;
  background-size: cover;
}
@media screen and (max-width: 768px) {
  #CrewPage {
    background: url("/crew-mobile.jpg") no-repeat fixed center;
    background-size: cover;
  }
}
</style>
