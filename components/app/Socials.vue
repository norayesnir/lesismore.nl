<script lang="ts" setup>
	import { GetSocials } from "~/queries/content-items/socials";

	const response = await useAsyncQuery(GetSocials);
	const data = ref(response.data);
</script>

<template>
	<div
		class="socials flex flex-col gap-4 justify-between w-[50px] h-[500px] lg:h-[330px] items-center"
	>
		<div class="relative w-full h-[330px]">
			<h3
				class="absolute left-0 w-max font-thin origin-top-left rotate-90 h-[50px] translate-x-[50px] text-nowrap"
			>
				{{ data.Socials.title }}
			</h3>
		</div>
		<div class="flex flex-col items-center gap-4">
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
