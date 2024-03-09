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
	<div>
		<div
			:class="style"
			class="rounded-[32px] flex flex-col w-full gap-4 p-4 py-20 md:px-8 md:gap-6"
		>
			<h1 class="h1">{{ props.data.title }}</h1>
			<div v-html="props.data.text"></div>

			<div class="flex flex-wrap gap-4 lg:gap-8 align-center">
				<Button v-for="button in props.data.buttons" :data="button" />
			</div>
		</div>
	</div>
</template>
