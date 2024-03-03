<script setup lang="ts">
import { useMenuStore } from "@/stores/navigation/hamburgerStore";
const menuStore = useMenuStore();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const child = ref(props.item.children);
const children = ref(false);
const toggleMenuItem = () => {
  children.value = !children.value;
};

const hoverMenuItem = () => {
  children.value = true;
};
</script>

<template>
  <div v-if="child && child.length" @mouseenter="hoverMenuItem()" @mouseleave="toggleMenuItem()">
    <div class="flex items-center gap-2 py-2" :class="menuStore.state ? 'w-full' : 'px-4'">
      <NuxtLink
        v-if="props.item.link_to_page"
        @click="menuStore.close()"
        :to="`/${props.item.link_to_page[0]._slug}`"
      >
        {{ props.item.title }}
      </NuxtLink>
      <Icon
        @click="toggleMenuItem()"
        name="material-symbols:chevron-right"
        class="ml-4"
        :class="children ? 'rotate-90' : ''"
      />
    </div>
    <div :class="children ? 'pl-4 border-l border-l-neutral-10' : 'hidden'">
      <slot />
    </div>
  </div>

  <NuxtLink
    v-else-if="props.item.link_to_page"
    class="flex items-center gap-2 py-2 hover:text-jaffa-500"
    :class="menuStore.state ? 'w-full' : 'px-4'"
    :to="`/${props.item.link_to_page[0]._slug}`"
    @click="menuStore.close()"
  >
    {{ props.item.title }}
  </NuxtLink>
</template>

<style scoped>
.router-link-active {
  @apply text-jaffa;
}
</style>
