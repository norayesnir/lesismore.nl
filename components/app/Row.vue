<script setup lang="ts">
	import { GetRows } from "~/queries/content-items/rows";
	import { GetMostRecentArticles } from "~/queries/blog/getMostRecentArticles";

	const props = defineProps({
		id: {
			type: String,
			required: true,
		},
	});

	const id = props.id as string;
	const response = await useAsyncQuery(GetRows, { id });
	const data = ref(response.data);

	interface Article {
		__typename: string;
		_id: string;
		_slug: string;
		title: string;
		excerpt: string;
		cover: { id: string; caption: string; url: string }[];
	}

	interface Articles {
		Articles: {
			items: Article[];
		};
	}

	let mostRecentArticles: Ref<Articles[]> = ref([]);

	let getContent: Ref<any[]> = ref([]);

	if (data.value?.Row.most_recent_articles) {
		const response = await useAsyncQuery(GetMostRecentArticles);
		mostRecentArticles = ref(response.data);

		getContent = ref(
			// @ts-ignore
			mostRecentArticles.value?.Articles.items
				.map((content: any) => [content, content.__typename])
				.filter(Boolean)
		);
	} else {
		getContent = ref(
			data.value?.Row.column
				.filter((content: any) => content && content.__typename)
				.map((content: any) => [content, content.__typename])
				.filter(Boolean)
		);
	}

	const buttons = data.value?.Row.buttons.filter(Boolean);

	const columnCount = computed(() => {
		return Math.min(getContent.value.length, 3);
	});
	const gridColumn = computed(() => {
		return `grid-cols-${columnCount.value}`;
	});
</script>

<template>
	<section>
		<div v-if="data.Row.row_content" class="w-auto mb-6 md:w-2/3">
			<h1 v-if="data.Row.title && data.Row.title.length" class="mb-4 h2">
				{{ data.Row.title }}
			</h1>
			<div
				v-if="data.Row.text && data.Row.text.length"
				class="mb-4"
				v-html="data.Row.text"
			></div>
			<Button
				v-if="buttons && buttons.length"
				v-for="(button, index) in buttons.filter(Boolean)"
				:key="index"
				:data="button"
			/>
		</div>
		<div
			class="flex flex-col items-end gap-4 lg:gap-8 md:grid"
			:class="gridColumn"
			v-if="getContent && getContent.length"
		>
			<template v-for="content in getContent">
				<component
					:v-if="content[0] && content[1]"
					v-bind:is="`App${content[1]}`"
					:data="content[0]"
				/>
			</template>
		</div>
	</section>
</template>
