<script setup lang="ts">
	import { background, rounding, alignment } from "~/utils/styling";

	const props = defineProps({
		data: {
			type: Object,
			required: true,
		},
	});

	const style = [
		background(props.data.background_color, true),
		rounding(props.data.rounding),
		alignment(props.data.alignment),
	]
		.filter(Boolean)
		.join(" ");
</script>

<template>
	<div
		class="flex flex-col items-center grid-cols-12 gap-4 md:grid md:gap-8"
	>
		<div
			:class="style"
			class="rounded-[32px] flex flex-col w-full gap-4 p-4 py-20 md:px-8 md:gap-6 md:col-span-7"
		>
			<h1 class="h1">{{ props.data.title }}</h1>
			<div v-html="props.data.text"></div>

			<div class="flex flex-wrap gap-4 lg:gap-8 align-center">
				<Button v-for="button in props.data.buttons" :data="button" />
			</div>
		</div>

		<figure
			v-if="props.data.image"
			class="relative hidden overflow-hidden md:block rounded-3xl md:col-span-5 drop-shadow-2xl"
		>
			<NuxtImg :src="props.data.image.url" :alt="props.data.image.alt" />
		</figure>
	</div>
</template>
