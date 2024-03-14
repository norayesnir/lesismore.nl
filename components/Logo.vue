<script lang="ts" setup>
	import { useMenuStore } from "@/stores/navigation/hamburgerStore";
	const menuStore = useMenuStore();

	const props = defineProps({
		data: {
			type: Object,
			required: true,
		},
	});
</script>

<template>
	<NuxtLink to="/">
		<img
			v-if="props.data && props.data.url"
			@click="menuStore.close()"
			class="h-full max-w-[190px] xl:max-w-[250px] cursor-pointer"
			:src="props.data.url"
			:alt="props.data.caption"
		/>
	</NuxtLink>
</template>
