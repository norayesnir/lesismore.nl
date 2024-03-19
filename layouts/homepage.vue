<script setup lang="ts">
	import { useMenuStore } from "@/stores/navigation/hamburgerStore";

	const menuStore = useMenuStore();
</script>

<template>
	<div>
		<AppNavigationMenu class="relative z-[100]">
			<AppNavigationSocials
				:class="
					menuStore.state
						? 'block col-start-2 row-start-2 row-span-3'
						: 'hidden'
				"
			/>
		</AppNavigationMenu>

		<div class="relative md:pt-[72px] h-[200vh]">
			<slot />
		</div>
	</div>
</template>
