import { defineStore } from "pinia";

export const useMenuStore = defineStore("hamburger", {
  state: () => ({
    state: false,
  }),
  actions: {
    toggle() {
      this.state = !this.state;
    },
    close() {
      this.state = false;
    },
  },
});
