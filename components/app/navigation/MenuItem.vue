<template>
  <NuxtLink
    v-if="props.item.link_to_page[0]._slug !== 'home'"
    class="flex items-center gap-2 py-2"
    :class="menuStore.state ? 'w-full py-4' : 'px-4'"
    :to="`/${props.item.link_to_page[0]._slug}`"
    @click="menuStore.close()"
  >
    {{ props.item.title }}
    <Icon v-if="menuStore.state" name="ic:baseline-arrow-forward" class="w-4 h-4 ml-auto" />
  </NuxtLink>
</template>

<script setup lang="ts">
import { useMenuStore } from "@/stores/navigation/hamburgerStore";

const menuStore = useMenuStore();
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
