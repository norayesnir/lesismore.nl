<script setup lang="ts">
	import { background, rounding, alignment } from "~/utils/styling";

	const props = defineProps({
		data: {
			type: Object,
			required: true,
		},
	});

	const data = ref(props.data);

	const buttons = data.value?.buttons;

	const style = [
		background(data.value?.background_color, true),
		rounding(data.value?.rounding),
		alignment(data.value?.alignment),
		background(data.value?.background_color, true)
			? "p-4 py-20 md:px-8 sm:px-6 px-4"
			: "p-0",
	]
		.filter(Boolean)
		.join(" ");
</script>

<template>
	<div
		class="rounded-[32px] flex flex-col w-full gap-4 md:gap-6"
		:class="style"
	>
		<NuxtImg
			v-if="data.image && data.image.url && data.image.url.length"
			:src="data.image.url"
			:alt="data.image.alt"
			class="w-full rounded-3xl"
		/>

		<div
			v-if="
				(data.title && data.title.length) ||
				(data.text && data.text.length) ||
				(data.text && buttons.length)
			"
			class="flex flex-col gap-4"
		>
			<h3>{{ data.title }}</h3>
			<div v-html="data.text"></div>

			<div
				v-if="buttons && buttons.length"
				class="flex flex-wrap gap-4 lg:gap-8 align-center"
			>
				<Button
					v-if="buttons && buttons.length"
					v-for="(button, index) in buttons.filter(Boolean)"
					:key="index"
					:data="button"
				/>
			</div>
		</div>
	</div>
</template>
