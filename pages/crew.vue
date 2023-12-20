<template>
  <div id="CrewPage" class="h-screen sm:h-fit md:h-screen">
    <div id="MainContent" class="w-full flex flex-col items-center pt-[88px] sm:pt-[136px] md:pt-[212px]">
      <div id="Title" class="font-BarlowCond text-[16px] sm:text-[20px] tracking-[2.7px] sm:tracking-[3.38px] text-white uppercase sm:w-full sm:text-left sm:px-[38.5px] md:px-[166.5px]">
        <span class="text-white/25 font-bold">02</span> Meet your crew
      </div>
      <div id="CrewWrapper" class="w-full flex flex-col sm:flex-col-reverse md:flex-row-reverse md:absolute md:bottom-0 sm:pt-[60x]">
        <div id="CrewImages" class="w-full h-fit my-[32px] sm:mb-0 sm:self-end">
          <img src="/hurley.png" class="h-[223px] sm:h-[525px] md:h-[600px] object-contain md:object-cover mx-auto" alt="" />
        </div>
        <div id="CrewInfo" class="w-full flex flex-col sm:flex-col-reverse md:self-center">
          <div id="SliderShow" class="w-full flex items-center gap-6 justify-center">
            <div class="w-[10px] h-[10px] bg-white/25 cursor-pointer rounded-full"></div>
            <div class="w-[10px] h-[10px] bg-white/25 cursor-pointer rounded-full"></div>
            <div class="w-[10px] h-[10px] bg-white/25 cursor-pointer rounded-full"></div>
            <div class="w-[10px] h-[10px] bg-white/25 cursor-pointer rounded-full"></div>
          </div>
          <div id="CrewInfo__Text" class="font-Bellefair flex flex-col items-center my-[32px]">
            <h2 class="uppercase text-white/[49.51%] text-[16px] sm:text-[24px]">Commander</h2>
            <h1 class="text-white uppercase mt-[8px] mb-[16px] text-[24px] sm:text-[40px]">Douglas Hurley</h1>
            <p class="font-Barlow text-main-purple text-[15px] sm:text-[16px] leading-[25px] sm:leading-[28px] text-center px-[24px] sm:px-[155px]">
              Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
