<template>
  <div id="CrewPage" class="h-screen sm:h-fit md:h-screen">
    <div id="MainContent" class="w-full max-w-[1440px] mx-auto flex flex-col items-center pt-[88px] sm:pt-[136px] md:pt-[212px]">
      <h2 id="Title" class="font-BarlowCond text-[16px] sm:text-[20px] md:text-[28px] tracking-[2.7px] sm:tracking-[3.38px] md:tracking-[4.72px] text-white uppercase sm:w-full sm:text-left sm:px-[38.5px] md:px-[166.5px]">
        <span class="text-white/25 font-bold me-[16px]">02</span> Meet your crew
      </h2>
      <div id="CrewWrapper" class="w-full max-w-[1440px] mx-auto flex flex-col sm:flex-col-reverse md:flex-row-reverse md:absolute md:bottom-0 sm:pt-[60x]">
        <CrewImages></CrewImages>
        <CrewInfo></CrewInfo>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Crews | Space Tourism",
  ogTitle: "Crews | Space Tourism",
  description: "Do you wanna travel to space? Travel the space with us.",
  ogDescription: "Do you wanna travel to space? Travel the space with us to various destinations, expertise crews, and newest tehnologies! 🚀",
  ogImage: "/capsule.jpg",
  twitterCard: "summary_large_image",
});
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
