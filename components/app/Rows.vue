<script setup lang="ts">
	const props = defineProps({
		data: {
			type: Object,
			required: true,
		},
	});

	const data = ref(props.data);

	// ? This is a computed property that returns the number of columns
	const columnCount = computed(() => {
		return Math.min(data.value.Row.column.length, 3);
	});
	const gridColumn = computed(() => {
		return `grid-cols-${columnCount.value}`;
	});
</script>

<template>
	<div
		class="grid gap-4 columns"
		:class="gridColumn"
		v-if="data.Row.column.length"
	>
		<AppContent v-for="column in data.Row.column" :data="column" />
	</div>
</template>
