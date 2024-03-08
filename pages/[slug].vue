<script setup lang="ts">
	import { useRoute } from "vue-router";
	import { GetPage } from "~/queries/pages/getPage";

	const route = useRoute();
	const currentRoute = route.params.slug as string;

	const response = await useAsyncQuery(GetPage, {
		slug: currentRoute,
	});
	const data = ref(response.data);
	console.log(data.value);
</script>

<template>
	<div :class="`page-${(route.params.slug as string)}`">
		<AppContentImage v-if="data.Page.hero" :data="data.Page.hero" />
	</div>
</template>
