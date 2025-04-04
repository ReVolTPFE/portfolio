<script setup lang="ts">
const route = useRoute();

const { data: project } = await useAsyncData(route.path, () => {
	return queryCollection('projects').path(route.path).first();
});
</script>

<template>
	<div>
		<ContentRenderer
			v-if="project"
			:value="project"
		/>
	</div>
</template>
