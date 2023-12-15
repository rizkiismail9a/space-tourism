<template>
  <nav id="Navbar" class="text-white fixed md:top-[40px] top-0 z-[2] w-full">
    <div id="NavbarWrapper" class="flex items-center max-w-[1440px] mx-auto justify-between w-full">
      <div id="Logo">
        <img src="/logo.png" class="md:ml-[55px] sm:ml-[39px] sm:w-[48px] sm:h-[48px] w-[40px] h-[40px] ml-[24px]" alt="" />
        <img v-if="!showNavbar" src="/show-navbar.png" alt="" class="me-[24px] h-[21px] w-[24px] cursor-pointer sm:hidden block" @click="showNavbar = true" />
      </div>
      <div
        id="Links"
        class="sm:relative h-[96px] md:w-[830px] sm:w-[450px] w-full sm:justify-evenly md:px-10 bg-white/[0.04] backdrop-blur-md flex md:flex-row items-center justify-self-end absolute"
        :class="{ showNavbar: showNavbar === true }"
      >
        <div id="WhiteLine" class="absolute bg-white w-[473px] h-[1px] -left-[443px] z-[10] md:inline-block hidden"></div>
        <img src="/close-navbar.svg" class="absolute top-9 right-7 sm:hidden block cursor-pointer" alt="" @click="showNavbar = !showNavbar" />
        <p class="font-BarlowCond md:text-[1rem] sm:text-[14px] text-[1rem] md:tracking-[2.7px] tracking-[2.7px] sm:tracking-[2.36px] uppercase"><span class="font-bold me-[14px] md:inline-block sm:hidden">00</span>Home</p>
        <p class="font-BarlowCond md:text-[1rem] sm:text-[14px] text-[1rem] md:tracking-[2.7px] tracking-[2.7px] sm:tracking-[2.36px] uppercase"><span class="font-bold me-[14px] md:inline-block sm:hidden">01</span>DESTINATION</p>
        <p class="font-BarlowCond md:text-[1rem] sm:text-[14px] text-[1rem] md:tracking-[2.7px] tracking-[2.7px] sm:tracking-[2.36px] uppercase"><span class="font-bold me-[14px] md:inline-block sm:hidden">02</span>CREW</p>
        <p class="font-BarlowCond md:text-[1rem] sm:text-[14px] text-[1rem] md:tracking-[2.7px] tracking-[2.7px] sm:tracking-[2.36px] uppercase"><span class="font-bold me-[14px] md:inline-block sm:hidden">03</span>TECHNOLOGY</p>
      </div>
    </div>
  </nav>
</template>

<script setup>
const showNavbar = ref(false);
</script>

<style scoped>
@media screen and (max-width: 660px) {
  #Logo {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  #Links {
    top: 0;
    right: -1000px;
    height: 100vh;
    flex-direction: column;
    width: 64%;
    gap: 32px;
    padding-top: 118px;
    padding-left: 32px;
    align-items: flex-start;
    transition: all 0.4s ease-in-out;
  }
  .showNavbar {
    right: 0 !important;
  }
}
</style>
