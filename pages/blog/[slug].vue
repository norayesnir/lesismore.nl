<script setup lang="ts">
	import { GetArticle } from "~/queries/blog/getArticle";

	const route = useRoute();
	const currentRoute = route.params.slug as string;

	const response = await useAsyncQuery(GetArticle, {
		slug: currentRoute,
	});

	const data = ref(response.data);

	interface ArticleHero {
		_id: string;
		__typename: string;
		title: string;
		text: string;
		image: {
			url: string;
		}[];
	}

	// interface SEO {
	// 	title?: string;
	// 	description?: string;
	// 	social_media_image?: [{ id?: string; url?: string }];
	// }

	// const articleSEO = ref<SEO>({
	// 	title: article.value?.seo.title,
	// 	description: article.value?.seo.description,
	// 	social_media_image: article.value?.seo.social_media_image,
	// });

	// definePageMeta({
	// 	meta: [
	// 		{
	// 			name: "og:title",
	// 			content: articleSEO.value?.title,
	// 		},
	// 		{
	// 			name: "description",
	// 			content: articleSEO.value?.description,
	// 		},
	// 		{
	// 			name: "og:image",
	// 			content: articleSEO.value?.social_media_image?.map(
	// 				(image) => image.url
	// 			),
	// 		},
	// 	],
	// });

	const getContent = ref(
		data.value?.Article.content
			.filter((content: any) => content && content.__typename)
			.map((content: any) => [content, content.__typename])
	);

	const articleHero = {
		_id: data.value?.Article._id,
		__typename: data.value?.Article.__typename,
		title: data.value?.Article.title,
		text: data.value?.Article.excerpt,
		image: data.value?.Article.cover[0],
	} as ArticleHero;
</script>

<template>
	<div class="grid-container-screen">
		<AppContentImage :data="articleHero" v-if="articleHero" />

		<div class="grid-container">
			<template v-for="content in getContent">
				<component
					:v-if="content[0] && content[1]"
					v-bind:is="`App${content[1]}`"
					:data="content[0]"
				/>
			</template>
		</div>
	</div>
</template>
