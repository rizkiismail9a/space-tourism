<template>
  <div id="HomePage" class="h-screen flex items-center flex-col justify-center gap-10">
    <div id="MainContent" class="text-center bg-green-50/25 mx-[24px]">
      <h3 id="Jargon" class="font-BarlowCond text-[16px] text-white tracking-[2.7px]">SO, YOU WANT TO TRAVEL TO</h3>
      <h1 id="Title" class="font-Bellefair text-[80px] text-white leading-[100px] my-[16px]">SPACE</h1>
      <p class="font-Barlow text-main-purple text-[15px] leading-[25px]">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
      </p>
    </div>
    <div id="ExploreButton" class="mt-[81px] relative">
      <div class="h-[150px] w-[150px] uppercase rounded-full bg-white text-main-black"></div>
      <button class="bg-transparent hover:bg-white/25 w-[200px] h-[200px] rounded-full absolute -top-6 -left-6 cursor-pointer text-main-black uppercase">Explore</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#HomePage {
  background: url("/home.png") no-repeat fixed center;
  background-size: cover;
}
@media screen and (max-width: 660px) {
  #HomePage {
    background: url("/home-sm.png") no-repeat fixed center;
    background-size: cover;
  }
}
</style>
