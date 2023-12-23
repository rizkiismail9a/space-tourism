<template>
  <div id="TechPage" class="h-screen sm:h-fit md:h-screen">
    <div id="MainContent" class="flex flex-col items-center w-full max-w-[1440px] mx-auto pt-[88px] sm:pt-[136px] md:pt-[212px]">
      <h2
        id="Title"
        class="uppsercase text-white font-BarlowCond text-[16px] sm:text-[20px] md:text-[28px] tracking-[2.7px] sm:tracking-[3.38px] md:tracking-[4.72px] mb-[32px] sm:mb-[60px] md:mb-[26px] sm:w-full sm:text-left sm:pl-[38.5px] md:pl-[166.5px]"
      >
        <span class="text-bold text-white/25 me-[16px]">03</span>SPACE LAUNCH 101
      </h2>
      <div class="md:flex md:flex-row-reverse w-full md:items-center">
        <TechImages></TechImages>
        <TechInfo></TechInfo>
      </div>
    </div>
  </div>
</template>

<script setup>
import TechImages from "~/components/Tech/TechImages.vue";
import TechInfo from "~/components/Tech/TechInfo.vue";
</script>
<style scoped>
#TechPage {
  background: url("/tech.jpg") no-repeat fixed center;
  background-size: cover;
}
@media screen and (max-width: 768px) {
  #TechPage {
    background: url("/tech-tab.jpg") no-repeat fixed center;
    background-size: cover;
  }
}
@media screen and (max-width: 400px) {
  #TechPage {
    background: url("/tech-mobile.jpg") no-repeat fixed center;
    background-size: cover;
  }
}
</style>
