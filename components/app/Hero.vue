<script lang="ts" setup>
import { GetHero } from "@/queries/content-items/hero";

const response = await useAsyncQuery(GetHero);
const data = ref(response.data);

const style = [
  data.value.Hero.background_color.color && !data.value.Hero.background_color.type
    ? "bg-" + data.value.Hero.background_color.color
    : null,
  data.value.Hero.background_color.color && data.value.Hero.background_color.type
    ? "bg-" + data.value.Hero.background_color.color + "-" + data.value.Hero.background_color.type
    : null,
].filter(Boolean);
</script>

<template>
  <div v-if="data.Hero" class="relative grid-cols-12 gap-4 md:grid">
    <div></div>
    <div
      :class="style"
      class="flex flex-col grid-cols-11 col-span-10 gap-4 md:gap-8 p-4 md:grid rounded-[32px] rounded-tl-[128px] rounded-br-[128px] py-20"
    >
      <div class="flex flex-col col-span-6 col-start-2 gap-4 md:gap-8">
        <h1 class="h1">{{ data.Hero.title }}</h1>
        <div v-html="data.Hero.text"></div>
        <div class="flex gap-8 align-center">
          <Button
            v-if="data.Hero.buttons.length"
            v-for="button in data.Hero.buttons"
            :data="button"
          />
        </div>
      </div>
    </div>
    <NuxtImg :src="data.Hero.image.url" class="absolute right-0 bottom-0 h-[calc(100%+64px)]" />
  </div>
</template>
