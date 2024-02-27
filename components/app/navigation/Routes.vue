<template>
  <ul class="flex flex-col lg:gap-2 lg:flex-row">
    <li
      :class="menuStore.state ? 'border-b border-neutral-10 last-of-type:border-none' : ''"
      v-for="item in props.data"
      :key="item._id"
    >
      <AppNavigationMenuItem :item="item" />
    </li>
  </ul>
</template>

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
