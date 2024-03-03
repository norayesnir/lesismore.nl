<script setup lang="ts">
import { useMenuStore } from "@/stores/navigation/hamburgerStore";
import { GetMainNavigation } from "@/queries/navigation";
const response = await useAsyncQuery(GetMainNavigation);
const data = ref(response.data);

const menuStore = useMenuStore();
</script>

<template>
  <div class="fixed bg-white grid-container" :class="menuStore.state ? 'h-screen' : ''">
    <div
      class="grid items-center justify-between w-full grid-cols-2 gap-8 py-3 mx-auto grid-container-content lg:flex"
    >
      <Logo />
      <AppNavigationHamburger class="ml-auto" />
      <AppNavigationRoutes
        :data="data.Navigation.menu_items"
        class="col-span-2 lg:flex"
        :class="menuStore.state ? '' : 'hidden'"
      />
      <Button
        :data="data.Navigation.cta"
        class="col-span-2 lg:flex"
        :class="menuStore.state ? '' : 'hidden'"
      />
    </div>
  </div>
</template>
~/queries/navigation
