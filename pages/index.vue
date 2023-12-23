<template>
  <div id="HomePage" class="h-screen flex items-center flex-col md:flex-row justify-center md:justify-between sm:gap-10 gap-1 md:w-full">
    <div id="MainContent" class="text-center md:text-left mx-[24px] sm:mx-[162px] mt-[106px] md:w-[445px] md:mx-auto">
      <h3 id="Jargon" class="font-BarlowCond text-[16px] sm:text-[20px] md:text-[28px] text-white tracking-[2.7px] sm:tracking-[3.38px] md:tracking-[4.72px]">SO, YOU WANT TO TRAVEL TO</h3>
      <h1 id="Title" class="font-Bellefair text-[80px] sm:text-[150px] text-white leading-[100px] sm:leading-[150px] md:leading-normal my-[16px] sm:my-[24px]">SPACE</h1>
      <p class="font-Barlow text-main-purple text-[15px] sm:text-[16px] md:text-[18px] leading-[25px] sm:leading-[28px] md:leading-[32px]">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
      </p>
    </div>
    <NuxtLink to="/destination" id="ExploreButton" class="mt-[70px] mb-[20px] sm:mt[156px] md:mt-0 relative md:mx-auto">
      <div class="h-[150px] sm:h-[242px] md:w-[274px] w-[150px] sm:w-[242px] md:h-[274px] uppercase rounded-full bg-white text-main-black"></div>
      <button
        class="bg-transparent hover:bg-white/25 w-[200px] sm:w-[320px] md:w-[380px] h-[200px] sm:h-[320px] md:h-[380px] rounded-full absolute -top-6 sm:-top-9 md:-top-[20%] -left-6 sm:-left-9 md:-left-[20%] cursor-pointer sm:text-[32px] text-main-black uppercase"
      >
        Explore
      </button>
    </NuxtLink>
  </div>
</template>

<script setup></script>

<style scoped>
#HomePage {
  background: url("/home.webp") no-repeat fixed center;
  background-size: cover;
}
@media screen and (max-width: 768px) {
  #HomePage {
    background: url("/home-sm.webp") no-repeat fixed center;
    background-size: cover;
  }
}
</style>
