<script lang="ts" setup>
	const props = defineProps({
		data: {
			type: Object,
			required: true,
		},
	});

	interface Tekst {
		_id: string;
		__typename: string;
		html: string;
	}

	const tekst = ref<Tekst>(props.data as Tekst);
</script>

<template>
	<div
		class="md:w-2/3 [&>ol]:list-decimal [&>ol]:list-outside [&>ol]:pl-4 [&>ol]:mb-4 [&>ul]:list-disc [&>ul]:list-outside [&>ul]:pl-4 [&>ul]:mt-4 [&>ul]:mb-4"
		v-if="tekst.html && tekst.html.length"
		v-html="tekst.html"
	></div>
</template>
