<script lang="ts" setup>
	import { GetBlog } from "~/queries/pages/getBlog";
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

	const response = await useAsyncQuery(GetBlog, { slug: "blog" });
	const getArchive = await useAsyncQuery(GetArchive);

	const data = ref(response.data);
	const archive = ref(getArchive.data);

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
		archive.value?.Articles.items.map((article: any) => ({
			...article,
			class: `xl:col-span-${numberGenerator.next().value}`,
		}))
	);
</script>

<template>
	<section class="grid-container-screen">
		<AppContentImage v-if="data.Page.hero" :data="data.Page.hero" />

		<div class="grid-container">
			<div class="flex flex-wrap grid-cols-12 gap-4 md:grid lg:gap-8">
				<div
					v-if="articles && articles.length"
					v-for="article in articles"
					:class="article.class"
					class="transition-all md:col-span-6 lg:col-span-4"
				>
					<LazyAppArticle
						:data="article"
						:key="article._id"
						v-if="article._id"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
