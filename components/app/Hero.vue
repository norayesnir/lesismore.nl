<script lang="ts" setup>
	import { GetHero } from "@/queries/content-items/hero";

	const response = await useAsyncQuery(GetHero);
	const data = ref(response.data);

	const style = [
		data.value.Hero.background_color && !data.value.Hero.type
			? "bg-" + data.value.Hero.background_color
			: null,
		data.value.Hero.background_color && data.value.Hero.type
			? "bg-" +
			  data.value.Hero.background_color +
			  "-" +
			  data.value.Hero.type
			: null,
	].filter(Boolean);
</script>

<template>
	<div
		v-if="data.Hero"
		class="relative flex flex-col-reverse items-center grid-cols-12 md:gap-4 md:grid"
	>
		<div
			:class="style"
			class="flex flex-col grid-cols-11 col-span-10 xl:col-span-11 gap-4 md:gap-8 p-4 md:grid rounded-xl md:rounded-[32px] md:rounded-tl-[128px] md:rounded-br-[128px] py-10 lg:py-20"
		>
			<div class="flex flex-col col-span-6 col-start-2 gap-6 md:gap-8">
				<h1 class="h2 hyphens-auto lg:hyphens-none lg:h1">
					{{ data.Hero.title }}
				</h1>
				<div v-html="data.Hero.text"></div>
				<div class="flex flex-wrap gap-4 lg:gap-8 align-center">
					<Button
						v-if="data.Hero.buttons.length"
						v-for="button in data.Hero.buttons"
						:data="button"
					/>
				</div>
			</div>
		</div>
		<NuxtImg
			:src="data.Hero.image.url"
			class="md:absolute my-auto px-10 md:px-0 right-0 bottom-0 md:max-h-[calc(100%+64px)] rounded-[32px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[600px]"
		/>
	</div>
</template>
