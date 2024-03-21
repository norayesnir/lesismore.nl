<script lang="ts" setup>
	import { GetArchive } from "~/queries/blog/getArchive";

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

	function* shuffleNumbers() {
		const numbers = [3, 4, 5];
		while (true) {
			for (const number of numbers) {
				yield number;
			}
			numbers.sort(() => Math.random() - 0.5);
		}
	}

	const numberGenerator = shuffleNumbers();

	const articles = ref<Article[]>(
		data.value?.Articles.items.map((article: any) => ({
			...article,
			class: `col-span-${numberGenerator.next().value}`,
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
