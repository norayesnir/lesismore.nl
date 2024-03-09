<script setup lang="ts">
	const props = defineProps({
		data: {
			type: Object,
			required: true,
		},
	});

	const data = ref(props.data);
	console.log(data.value.ContentBlock);
</script>

<template>
	<div
		class="flex gap-4 colunms"
		v-if="
			data &&
			data.ContentBlock &&
			data.ContentBlock.__typename === 'ContentBlock' &&
			data.ContentBlock.colunm &&
			data.ContentBlock.colunm.length > 0
		"
		v-for="(colunm, index) in (data.ContentBlock.colunm || []).filter(
			Boolean
		)"
		:key="index"
	>
		<AppContent v-if="colunm" :data="colunm" />
	</div>
</template>

<style lang="scss" scoped></style>
