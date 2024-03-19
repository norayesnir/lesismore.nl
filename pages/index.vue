<script setup lang="ts">
	import { GetPage } from "~/queries/pages/getPage";

	definePageMeta({
		layout: "homepage",
	});

	const response = await useAsyncQuery(GetPage, {
		slug: "home",
	});

	const data = ref(response.data);

	const preContent = ref(
		data.value?.Page.stack
			.filter((content: any) => content._id && content.__typename)
			.map((content: any) => [content._id, content.__typename])
			.slice(0, 1)
	);

	const getContent = ref(
		data.value?.Page.stack
			.filter((content: any) => content._id && content.__typename)
			.map((content: any) => [content._id, content.__typename])
			.slice(1)
	);
</script>

<template>
	<div class="grid-container">
		<div>
			<AppSocials
				class="sticky top-[150px] mb-[225px] hidden lg:block -z-[101]"
			/>
			<div class="lg:pl-[calc((100vh/12)-16px)] lg:-mt-[555px]">
				<AppHero />

				<component
					v-for="content in preContent"
					class="py-20"
					:v-if="content[0] && content[1]"
					v-bind:is="`App${content[1]}`"
					:id="content[0]"
				/>
			</div>
		</div>
		<component
			v-for="content in getContent"
			class="pb-20"
			:v-if="content[0] && content[1]"
			v-bind:is="`App${content[1]}`"
			:id="content[0]"
		/>
	</div>
</template>
