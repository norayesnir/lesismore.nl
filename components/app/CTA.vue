<script setup lang="ts">
	import { GetCTA } from "~/queries/content-items/cta";
	import { background, rounding, alignment } from "~/utils/styling";

	const props = defineProps({
		id: {
			type: String,
			required: true,
		},
	});

	const id = props.id as string;

	const response = await useAsyncQuery(GetCTA, {
		id,
	});

	const data = ref(response.data);

	const buttons = data.value.CTA.quote.buttons;

	const style = [
		background(data.value.background_color, true) ?? "bg-jaffa-500",
		alignment(data.value.alignment) ?? "",
	]
		.filter(Boolean)
		.join(" ");
</script>

<template>
	<div class="grid-container-screen">
		<img
			class="w-full translate-y-[.5px]"
			src="/border.svg"
			alt="border"
		/>
		<div
			class="flex flex-col w-full gap-4 p-4 px-4 py-10 md:px-8 sm:px-6 md:gap-6 bg-jaffa-200"
			:class="style"
		>
			<NuxtImg
				v-if="
					data.CTA.quote.image &&
					data.CTA.quote.image.url &&
					data.CTA.quote.image.url.length
				"
				:src="data.CTA.quote.image.url"
				:alt="data.CTA.quote.image.alt"
				class="hidden w-full rounded-3xl lg:block"
			/>

			<div class="flex flex-col gap-4 text-center text-white">
				<h2 v-if="data.CTA.quote.title" class="h1 text-jaffa-20">
					{{ data.CTA.quote.title }}
				</h2>
				<div v-if="data.CTA.quote.text" v-html="data.CTA.quote.text"></div>

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
		<img
			class="w-full rotate-180 -translate-y-[.5px]"
			src="/border.svg"
			alt="border"
		/>
	</div>
</template>
