<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true
	},
	subtitle: {
		type: String,
		required: true
	}
});
</script>

<template>
	<div class="text-center mb-12">
		<h2 class="text-3xl text-primary font-bold">{{ props.title }}</h2>
		<p class="text-gray-text">{{ props.subtitle }}</p>
	</div>
</template>
