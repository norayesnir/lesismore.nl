<script setup lang="ts">
	import { useMenuStore } from "@/stores/navigation/hamburgerStore";
	import { GetFooter } from "@/queries/navigation/getFooter";

	const response = await useAsyncQuery(GetFooter);
	const data = ref(response.data);

	const currentYear = new Date().getFullYear();
</script>

<template>
	<section>
		<img
			class="w-full translate-y-[.5px]"
			src="/border.svg"
			alt="border"
		/>

		<div class="w-full pt-20 bg-jaffa-dark grid-container">
			<div class="flex gap-20">
				<div
					v-if="data.Footer.navigations && data.Footer.navigations.length"
					v-for="navigation in data.Footer.navigations"
				>
					<ul class="flex flex-col">
						<li
							class="p-2 text-white hover:text-neutral-20"
							v-if="navigation.menu_items && navigation.menu_items.length"
							v-for="link in navigation.menu_items"
						>
							<NuxtLink :to="link.link_to_page[0]._slug">
								{{ link.title }}
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
			<div class="flex justify-between py-10">
				<div class="flex items-center w-full gap-10">
					<NuxtImg
						:src="data.Footer.logo.url"
						alt="Footer Logo"
						class="max-w-[200px]"
					/>
					<h1 class="text-white copyright h6">
						© Les is More {{ currentYear }}
					</h1>
				</div>

				<AppSocials class="hidden lg:flex" horizontal />
			</div>
		</div>
	</section>
</template>
