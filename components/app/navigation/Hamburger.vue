<template>
  <div class="lg:hidden" @click="menuStore.toggle()">
    <Icon
      :name="menuStore.state ? 'ic:baseline-close' : 'ic:baseline-menu'"
      class="w-8 h-8 cursor-pointer"
    />
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from "@/stores/navigation/hamburgerStore";
const menuStore = useMenuStore();

// const closeMenuOnResize = () => {
//   if (window.innerWidth > 975) {
//     close();
//   }
// };

// onMounted(() => {
//   window.addEventListener("resize", closeMenuOnResize);
// });

// onUnmounted(() => {
//   window.removeEventListener("resize", closeMenuOnResize);
// });
</script>
