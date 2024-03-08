<script setup lang="ts">
	import { useMenuStore } from "@/stores/navigation/hamburgerStore";

	const menuStore = useMenuStore();
</script>

<template>
	<div>
		<AppNavigationMenu class="z-10">
			<AppNavigationSocials
				:class="
					menuStore.state
						? 'block col-start-2 row-start-2 row-span-3'
						: 'absolute z-10 hidden lg:block top-[150px]'
				"
			/>
		</AppNavigationMenu>
		<div class="relative grid-container md:pt-[72px] h-[200vh]">
			<slot />
		</div>
	</div>
</template>
