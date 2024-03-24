<script setup lang="ts">
	const props = defineProps({
		data: {
			type: Object,
			required: true,
		},
	});

	const buttons = props.data.value?.buttons.filter(Boolean);
</script>

<template>
	<section
		class="relative mb-20 max-w-[2000px] mx-auto overflow-hidden container-rounding shadow-2xl"
	>
		<div class="text-white grid-container">
			<div class="py-[10rem] flex flex-col gap-4 md:w-2/3">
				<h1 v-if="props.data.title && props.data.title.length" class="h1">
					{{ props.data.title }}
				</h1>

				<div
					v-if="props.data.text && props.data.text.length"
					v-html="props.data.text"
				></div>

				<div class="flex flex-wrap gap-4 lg:gap-8 align-center">
					<Button
						v-if="buttons && buttons.length"
						v-for="(button, index) in buttons.filter(Boolean)"
						:key="index"
						:data="button"
					/>
				</div>
			</div>
		</div>

		<div class="absolute inset-0 w-full overflow-hidden -z-10">
			<div class="absolute inset-0 z-10 bg-black/50"></div>
			<NuxtPicture
				v-if="props.data.image"
				class="[&>img]:object-center [&>img]:object-cover [&>img]:w-full [&>img]:h-full"
				format="webp"
				:placeholder="[50, 25, 75, 5]"
				:src="props.data.image.url"
				:alt="props.data.image.alt"
			/>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	@media screen and (min-width: 2000px) {
		.container-rounding {
			@apply rounded-[32px];
		}
	}
</style>
