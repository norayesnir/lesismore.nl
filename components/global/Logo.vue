<script lang="ts" setup>
import { GetLogo } from "@/queries/logo/get-logo";

const props = defineProps({
  icon: Boolean,
});

const response = await useAsyncQuery(GetLogo);
const data = ref(response.data);
</script>

<template>
  <NuxtLink to="/">
    <img
      v-if="data"
      :src="icon ? data.Logo.icon.url : data.Logo.logo.url"
      :alt="data.Logo.title"
      class="h-full"
    />
  </NuxtLink>
</template>
