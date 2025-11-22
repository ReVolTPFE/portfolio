<script setup lang="ts">
const props = defineProps({
	link: {
		type: String,
		required: true,
	},
	bgColor: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<NuxtLink
		:to="props.link"
		class="text-center py-2.5 px-5 rounded-md inline-block text-white"
		:class="props.bgColor"
	>
		{{ props.text }}
		<Icon name="material-symbols:arrow-right-alt-rounded" class="text-white text-2xl align-middle" />
	</NuxtLink>
</template>
