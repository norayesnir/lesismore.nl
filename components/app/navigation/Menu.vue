<script setup lang="ts">
import { useMenuStore } from "@/stores/navigation/hamburgerStore";
import { GetMainNavigation } from "@/queries/navigation";
const response = await useAsyncQuery(GetMainNavigation);
const data = ref(response.data);

const menuStore = useMenuStore();
</script>

<template>
  <div class="sticky top-0 bg-white grid-container" :class="menuStore.state ? 'h-screen' : ''">
    <div
      class="grid items-center justify-between w-full grid-cols-[1fr_50px] grid-rows-[56px,auto,auto,1fr] gap-8 py-3 mx-auto grid-container-content lg:flex"
      :class="menuStore.state ? 'h-full' : 'h-20'"
    >
      <Logo class="my-auto" />
      <AppNavigationHamburger class="ml-auto" />
      <AppNavigationRoutes
        :data="data.Navigation.menu_items"
        class="col-span-2 col-start-1 row-start-2 lg:flex"
        :class="menuStore.state ? '' : 'hidden'"
      />
      <Button
        :data="data.Navigation.cta"
        class="col-span-2 col-start-1 row-start-3 lg:!flex"
        :class="menuStore.state ? '' : '!hidden'"
      />
      <AppNavigationSocials
        :class="
          menuStore.state
            ? 'block col-start-2 row-start-2 row-span-3'
            : 'absolute z-10 hidden lg:block top-[150px]'
        "
      />
    </div>
  </div>
</template>
