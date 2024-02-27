<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const style = [
  props.data.color ? "btn--" + props.data.color : null,
  props.data.type ? "btn--" + props.data.type : null,
].filter(Boolean);

const iconAlignment =
  props.data.alignment === "left"
    ? "flex-row"
    : props.data.alignment === "right"
    ? "flex-row-reverse"
    : null;
</script>

<template>
  <NuxtLink
    class="btn"
    :class="(style, iconAlignment)"
    :to="`/${props.data.link_to_page[0]._slug}`"
  >
    <Icon v-if="props.data.icon_shortcode" :name="props.data.icon_shortcode" />
    <img v-else :src="props.data.icon.url" />
    {{ props.data.title }}
  </NuxtLink>
</template>

<style lang="scss" scoped>
.btn {
  --primary: #87a68f;
  --alt: #ffffff;
  --secondary: #628364;

  @apply py-3 
    px-8 
    border-2 
    justify-center 
    no-underline 
    rounded-full 
    gap-2 
    leading-4 
    border-[var(--primary)] 
    bg-[var(--primary)] 
    text-[var(--alt)] 
    transition-colors 
    items-center;

  &:hover {
    @apply bg-[var(--secondary)] 
      border-[var(--secondary)];
  }

  &--secondary {
    --primary: #fc958c;
    --secondary: #9d3e42;
  }

  &--cta {
    --primary: #f38145;
    --secondary: #762c1e;
  }

  &--white {
    --primary: #ffffff;
    --secondary: #686c73;
  }

  &--black {
    --primary: #000000;
    --secondary: #686c73;
  }

  &--outline {
    @apply bg-transparent
      text-[var(--primary)];

    &:hover {
      @apply text-[var(--alt)];
    }
  }

  &--link {
    @apply px-0 
      border-transparent 
      bg-transparent 
      text-[var(--primary)];

    &:hover {
      @apply bg-transparent 
        border-transparent 
        text-[var(--secondary)];
    }
  }

  &--ghost {
    --primary: rgba(255, 255, 255, 0.24);
    --alt: #ffffff;
    --secondary: rgba(255, 255, 255, 0.12);
  }
}
</style>
