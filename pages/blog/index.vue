<script lang="ts" setup>
	import { GetArchive } from "~/queries/blog/getArchive";
	import { ref, watch } from "vue";

	interface Article {
		_id: string;
		title: string;
		excerpt: string;
		_created_on: string;
		_locale: string;
		cover: { url: string }[];
		shuffledArray: number[];
		class: string;
	}

	const response = await useAsyncQuery(GetArchive);

	const data = ref(response.data);

	const shuffleArray = (array: number[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const articles = ref<Article[]>(
		data.value?.Articles.items.map((article: any, index: number) => ({
			...article,
			class: `col-span-${shuffleArray([3, 4, 5])[index % 3]}`,
		}))
	);
</script>

<template>
	<div>
		<h1>Blog</h1>
		<div class="grid grid-cols-12 gap-4 lg:gap-8">
			<div
				v-if="articles && articles.length"
				v-for="article in articles"
				:class="article.class"
			>
				<LazyAppBlogPostCard
					:id="article._id"
					:key="article._id"
					v-if="article._id"
				/>
			</div>
		</div>
	</div>
</template>
