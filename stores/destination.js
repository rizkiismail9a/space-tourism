import { defineStore } from "pinia";
export const useDestinationStore = defineStore("destination", {
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
    };
  },
  persist: true,
});
