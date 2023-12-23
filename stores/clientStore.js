import { defineStore } from "pinia";
export const useClientStore = defineStore("clientStore", {
  state: () => {
    return {
      activeDestination: {
        id: 1,
        name: "moon",
        desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        estimation: "3 days",
        image: "/moon.png",
      },
      activeCrew: {
        id: 1,
        name: "Douglas Hurley",
        position: "Commander",
        desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        image: "/hurley.png",
      },
      activeTech: {
        id: 1,
        name: "LAUNCH VEHICLE",
        about:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      },
    };
  },
  persist: true,
});
