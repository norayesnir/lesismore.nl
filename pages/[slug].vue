<script setup lang="ts">
	import { GetPage } from "~/queries/pages/getPage";
	import { GetContentBlock } from "~/queries/content-items/content-block";

	const route = useRoute();
	const currentRoute = route.params.slug as string;

	const response = await useAsyncQuery(GetPage, {
		slug: currentRoute,
	});
	const data = ref(response.data);

	// for (const block of data.value.Page.stack) {
	// 	if (block.__typename === "ContentBlock") {
	// 		const contentBlock = await useAsyncQuery(GetContentBlock, {
	// 			id: block._id,
	// 		});
	// 		const contentBlockData = ref(contentBlock.data);
	// 		console.log(
	// 			contentBlockData.value.ContentBlock.__typename,
	// 			contentBlockData.value.ContentBlock.colunm[0].title
	// 		);
	// 	}
	// }

	const contentBlocksData = ref<any[]>([]);

	(async () => {
		const promises = data.value.Page.stack.map(async (block: any) => {
			if (block.__typename === "ContentBlock") {
				const contentBlock = await useAsyncQuery(GetContentBlock, {
					id: block._id,
				});
				return contentBlock.data;
			}
		});

		contentBlocksData.value = await Promise.all(promises.filter(Boolean));
	})();
</script>

<template>
	<div :class="`page-${(route.params.slug as string)}`">
		<AppContentImage v-if="data.Page.hero" :data="data.Page.hero" />

		<div class="py-20">
			<h3>Content Block</h3>
			<AppContentBlock
				v-if="contentBlocksData && contentBlocksData.length > 0"
				v-for="block in contentBlocksData.filter(Boolean)"
				:data="block"
			/>
			<!-- <AppContentBlock v-if="contentBlocks" :data="contentBlocks" /> -->
		</div>
	</div>
</template>
