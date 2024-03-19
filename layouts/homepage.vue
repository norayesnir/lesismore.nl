<script setup lang="ts">
	import { useMenuStore } from "@/stores/navigation/hamburgerStore";
	import { SpeedInsights } from "@vercel/speed-insights/nuxt";

	const menuStore = useMenuStore();
</script>

<template>
	<div>
		<SpeedInsights />
		<AppNavigationMenu class="relative z-[100]">
			<AppSocials
				:class="
					menuStore.state
						? 'block col-start-2 row-start-2 row-span-3'
						: 'hidden'
				"
			/>
		</AppNavigationMenu>

		<div class="relative md:pt-[72px]">
			<slot />
		</div>
		<AppFooterMenu class="pt-20" />
	</div>
</template>
