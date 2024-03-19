<script lang="ts" setup>
	import { GetSocials } from "~/queries/content-items/socials";

	const response = await useAsyncQuery(GetSocials);
	const data = ref(response.data);

	const props = defineProps({
		horizontal: Boolean,
	});
</script>

<template>
	<div
		class="flex items-center justify-end w-full gap-4 text-white socials"
		:class="{
			'!w-[50px] h-[500px] lg:h-[330px] flex flex-col items-center justify-between gap-4 text-black':
				!horizontal,
		}"
	>
		<div class="relative" :class="{ 'h-[330px] w-full': !horizontal }">
			<h3
				class="font-thin"
				:class="{
					'w-max text-nowrap absolute left-0 origin-top-left rotate-90 h-[50px] translate-x-[50px]':
						!horizontal,
				}"
			>
				{{ data.Socials.title }}
			</h3>
		</div>
		<div
			class="flex items-center gap-4"
			:class="{ 'flex-col': !horizontal }"
		>
			<a
				v-for="item in data.Socials.socials"
				:key="item._id"
				:aria-label="item.title"
				:href="item.href"
				target="_blank"
				rel="noopener noreferrer"
			>
				<NuxtImg
					v-if="item.icon.asset && item.icon.asset.url"
					:src="item.icon.asset.url"
					:alt="item.title"
					width="32"
					height="32"
				/>
				<Icon v-else size="24" :name="item.icon.shortcode" />
			</a>
		</div>
	</div>
</template>
