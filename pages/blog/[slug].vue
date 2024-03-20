<script setup lang="ts">
	import { GetArticle } from "~/queries/blog/getArtivles";

	const route = useRoute();
	const currentRoute = route.params.slug as string;

	const response = await useAsyncQuery(GetArticle, {
		slug: currentRoute,
	});

	const data = ref(response.data);

	const getContent = ref(
		data.value?.Page.stack
			.filter((content: any) => content._id && content.__typename)
			.map((content: any) => [content._id, content.__typename])
	);
</script>

<template>
	<div :class="`page-${(route.params.slug as string)}`">
		<AppContentImage v-if="data.Page.hero" :data="data.Page.hero" />

		<template v-for="content in getContent">
			<component
				class="py-20"
				:v-if="content[0] && content[1]"
				v-bind:is="`App${content[1]}`"
				:id="content[0]"
			/>
		</template>
	</div>
</template>
