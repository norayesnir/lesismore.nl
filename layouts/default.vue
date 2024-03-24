<script>
	import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
	<div>
		<SpeedInsights />
		<AppNavigationMenu class="z-10" />
		<div class="relative grid-container">
			<slot />
		</div>
		<AppFooterMenu class="pt-20" />
	</div>
</template>
