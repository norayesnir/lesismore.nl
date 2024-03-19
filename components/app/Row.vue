<script setup lang="ts">
	import { GetRows } from "~/queries/content-items/rows";

	const props = defineProps({
		id: {
			type: String,
			required: true,
		},
	});

	const id = props.id as string;

	const response = await useAsyncQuery(GetRows, {
		id,
	});

	const data = ref(response.data);

	const columnCount = computed(() => {
		return Math.min(data.value.Row.column.length, 3);
	});
	const gridColumn = computed(() => {
		return `grid-cols-${columnCount.value}`;
	});
</script>

<template>
	<div
		class="flex flex-col items-end gap-4 lg:gap-8 md:grid"
		:class="gridColumn"
		v-if="data.Row.column.length"
	>
		<AppColumn v-for="column in data.Row.column" :data="column" />
	</div>
</template>
