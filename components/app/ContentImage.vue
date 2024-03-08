<script setup lang="ts">
	const props = defineProps({
		data: {
			type: Object,
			required: true,
		},
	});
</script>

<template>
	<div class="flex gap-4 md:gap-8">
		<div class="w-1/2">
			<h1 class="h1">{{ data.title }}</h1>
			<div v-html="data.text"></div>
		</div>
		<div class="w-1/2">
			<NuxtImg
				class="rounded-3xl"
				:src="data.image.url"
				:alt="data.image.alt"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
