<script setup lang="ts">
	import { GetPage } from "~/queries/pages/getPage";

	definePageMeta({
		layout: "homepage",
	});

	const response = await useAsyncQuery(GetPage, {
		slug: "home",
	});

	const data = ref(response.data);

	const getContent = ref(
		data.value?.Page.stack
			.filter((content: any) => content._id && content.__typename)
			.map((content: any) => [content._id, content.__typename])
	);

	console.log(getContent.value);
</script>

<template>
	<div class="grid-container">
		<AppHero />

		<component
			v-for="content in getContent"
			class="py-20"
			:v-if="content[0] && content[1]"
			v-bind:is="`App${content[1]}`"
			:id="content[0]"
		/>
	</div>
</template>
