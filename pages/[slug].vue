<template>
  <div :class="`page-${(route.params.slug as string)}`">
    {{ route.params.slug as string }}
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>
