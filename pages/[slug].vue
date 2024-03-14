<script setup lang="ts">
	import { GetPage } from "~/queries/pages/getPage";
	import { GetRows } from "~/queries/content-items/rows";

	const route = useRoute();
	const currentRoute = route.params.slug as string;

	const response = await useAsyncQuery(GetPage, {
		slug: currentRoute,
	});
	const data = ref(response.data);

	const rowsData = ref<any[]>([]);

	(async () => {
		const promises = data.value.Page.stack.map(async (row: any) => {
			if (row.__typename === "Row") {
				const rows = await useAsyncQuery(GetRows, {
					id: row._id,
				});
				return rows.data;
			}
		});

		rowsData.value = await Promise.all(promises.filter(Boolean));
	})();
</script>

<template>
	<div :class="`page-${(route.params.slug as string)}`">
		<AppContentImage v-if="data.Page.hero" :data="data.Page.hero" />

		<div class="py-20">
			<AppRows
				v-if="rowsData && rowsData.length"
				v-for="block in rowsData.filter(Boolean)"
				:data="block"
			/>
		</div>
	</div>
</template>
