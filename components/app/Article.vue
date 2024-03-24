<script lang="ts" setup>
	import { GetPost } from "~/queries/blog/getPost";

	const props = defineProps({
		data: Object,
	});

	const response = await useAsyncQuery(GetPost, {
		id: props.data?._id,
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
	<NuxtLink :to="`/blog/${post._slug}`">
		<article
			class="relative rounded-[32px] overflow-hidden h-full w-full text-white min-h-[300px] p-4 flex justify-between flex-col shadow-2xl"
		>
			<span v-if="createdAt && createdAt.length">{{ createdAt }}</span>
			<div class="text-right">
				<h1
					v-if="post.title && post.title.length"
					class="font-medium text-[20px]"
				>
					{{ post.title }}
				</h1>
				<div
					v-if="post.excerpt && post.excerpt.length"
					class="text-xs font-thin md:text-sm xl:text-base"
					v-html="post.excerpt"
				></div>
			</div>
			<div class="absolute inset-0 w-full h-full -z-20">
				<NuxtImg
					v-if="post.cover && post.cover.length"
					:src="post.cover[0].url"
					class="object-cover w-full h-full"
				/>
			</div>
			<div
				class="absolute inset-0 bg-gradient-to-t from-black -z-10"
			></div>
		</article>
	</NuxtLink>
</template>

<style lang="scss" scoped></style>
