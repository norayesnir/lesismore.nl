<script lang="ts" setup>
	import { GetPost } from "~/queries/blog/getPost";

	const props = defineProps({
		id: String,
	});

	const response = await useAsyncQuery(GetPost, {
		id: props.id,
	});

	const data = ref(response.data);
	const post = ref(data.value?.Article);

	const createdAt = new Date(post.value?._created_on).toLocaleDateString(
		post.value?._locale,
		{
			year: "numeric",
			month: "long",
			day: "numeric",
		}
	);
</script>

<template>
	<article
		class="relative rounded-[32px] overflow-hidden h-full w-full text-white min-h-[300px] p-4 flex justify-between flex-col"
	>
		<span>{{ createdAt }}</span>
		<div class="text-right">
			<h1 class="font-medium text-[20px]">{{ post.title }}</h1>
			<div v-html="post.excerpt"></div>
		</div>
		<div class="absolute inset-0 w-full h-full -z-20">
			<NuxtImg
				:src="post.cover[0].url"
				class="object-cover w-full h-full"
			/>
		</div>
		<div class="absolute inset-0 bg-gradient-to-t from-black -z-10"></div>
	</article>
</template>

<style lang="scss" scoped></style>
