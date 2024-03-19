<script>
	import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
	<div>
		<AppNavigationMenu class="z-10" />
		<div class="relative grid-container md:pt-[72px]">
			<slot />
		</div>
		<AppFooterMenu class="pt-20" />
	</div>
</template>
