<template>
  <nav id="Navbar" class="text-white fixed md:top-[40px] top-0 z-[2] w-full">
    <div id="NavbarWrapper" class="flex items-center max-w-[1440px] mx-auto justify-between w-full">
      <div id="Logo">
        <img src="/logo.png" class="md:ml-[55px] sm:ml-[39px] sm:w-[48px] sm:h-[48px] w-[40px] h-[40px] ml-[24px]" alt="" />
        <img v-if="!showNavbar" src="/show-navbar.png" alt="" class="me-[24px] h-[21px] w-[24px] cursor-pointer sm:hidden block" @click="showNavbar = true" />
      </div>
      <!-- Navbar links -->
      <div
        id="Links"
        class="sm:relative sm:h-[96px] md:w-[830px] sm:w-[450px] w-full sm:justify-evenly md:px-10 bg-white/[0.04] backdrop-blur-md flex md:flex-row items-center justify-self-end absolute"
        :class="{ showNavbar: showNavbar === true }"
      >
        <div id="WhiteLine" class="absolute bg-white w-[473px] h-[1px] -left-[443px] z-[10] md:inline-block hidden"></div>
        <img src="/close-navbar.svg" class="absolute top-9 right-7 sm:hidden block cursor-pointer" alt="" @click="showNavbar = !showNavbar" />
        <NuxtLink
          id="LinkToHome"
          to="/"
          class="font-BarlowCond md:text-[1rem] sm:text-[14px] text-[1rem] md:tracking-[2.7px] tracking-[2.7px] sm:tracking-[2.36px] uppercase flex flex-row sm:flex-col sm:w-fit w-full sm:justify-center justify-between text-center sm:h-full h-[31px] items-center sm:relative"
        >
          <div class="h-fit"><span class="font-bold me-[14px] md:inline-block sm:hidden">00</span>Home</div>
          <div class="underline h-full w-[4px] bg-white sm:w-full sm:h-[3px]"></div>
        </NuxtLink>
        <NuxtLink
          id="LinkToDestination"
          to="/destination"
          class="font-BarlowCond md:text-[1rem] sm:text-[14px] text-[1rem] md:tracking-[2.7px] tracking-[2.7px] sm:tracking-[2.36px] uppercase flex flex-row sm:flex-col sm:w-fit w-full sm:justify-center justify-between text-center sm:h-full h-[31px] items-center sm:relative"
        >
          <div><span class="font-bold me-[14px] md:inline-block sm:hidden">01</span>Destination</div>
          <div class="underline h-full w-[4px] bg-white sm:w-full sm:h-[3px]"></div>
        </NuxtLink>
        <NuxtLink
          id="LinkToCrew"
          to="/crew"
          class="font-BarlowCond md:text-[1rem] sm:text-[14px] text-[1rem] md:tracking-[2.7px] tracking-[2.7px] sm:tracking-[2.36px] uppercase flex flex-row sm:flex-col sm:w-fit w-full sm:justify-center justify-between text-center sm:h-full h-[31px] items-center sm:relative"
        >
          <div><span class="font-bold me-[14px] md:inline-block sm:hidden">03</span>Crew</div>
          <div class="underline h-full w-[4px] bg-white sm:w-full sm:h-[3px]"></div>
        </NuxtLink>
        <NuxtLink
          id="LinkToTech"
          to="/tech"
          class="font-BarlowCond md:text-[1rem] sm:text-[14px] text-[1rem] md:tracking-[2.7px] tracking-[2.7px] sm:tracking-[2.36px] uppercase flex flex-row sm:flex-col sm:w-fit w-full sm:justify-center justify-between text-center sm:h-full h-[31px] items-center sm:relative"
        >
          <div><span class="font-bold me-[14px] md:inline-block sm:hidden">04</span>Technology</div>
          <div class="underline h-full w-[4px] bg-white sm:w-full sm:h-[3px]"></div>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const showNavbar = ref(false);
</script>

<style scoped>
.underline {
  position: absolute;
  opacity: 0;
  bottom: 0;
  transform: translateX(-60px);
}
#LinkToHome:hover .underline,
#LinkToDestination:hover .underline,
#LinkToCrew:hover .underline,
#LinkToTech:hover .underline {
  opacity: 50.21%;
  transform: translate(0px);
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.router-link-exact-active .underline {
  opacity: 1 !important;
  transform: translate(0px);
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
@media screen and (max-width: 640px) {
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
    gap: 40px;
    padding-top: 118px;
    padding-left: 32px;
    align-items: flex-start;
    transition: all 0.4s ease-in-out;
  }
  .showNavbar {
    right: 0 !important;
  }

  .underline {
    position: relative;
    top: 0;
    bottom: 0;
    transform: translateY(-60px);
  }
}
</style>
