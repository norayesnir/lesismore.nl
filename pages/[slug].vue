<script setup lang="ts">
	import { GetPage } from "~/queries/pages/getPage";

	const route = useRoute();
	const currentRoute = route.params.slug as string;

	const response = await useAsyncQuery(GetPage, {
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
	<div class="grid-container-screen">
		<AppContentImage v-if="data.Page.hero" :data="data.Page.hero" />
		<div class="grid-container">
			<template v-for="content in getContent">
				<component
					class="py-20"
					:v-if="content[0] && content[1]"
					v-bind:is="`App${content[1]}`"
					:id="content[0]"
				/>
			</template>
		</div>
	</div>
</template>
