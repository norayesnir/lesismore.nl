<script setup lang="ts">
import { useMenuStore } from "@/stores/navigation/hamburgerStore";
const menuStore = useMenuStore();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <ul class="flex flex-col lg:gap-2 lg:flex-row">
    <li v-for="item in props.data" :key="item._id">
      <AppNavigationMenuItem :item="item" v-if="item.children && item.children.length">
        <AppNavigationRoutes
          :data="item.children"
          class="lg:!flex-col lg:absolute lg:bg-white/80 lg:min-w-[300px] lg:p-4 lg:rounded-xl lg:shadow-xl lg:backdrop-blur-sm"
        />
      </AppNavigationMenuItem>

      <AppNavigationMenuItem :item="item" v-else />
    </li>
  </ul>
</template>
