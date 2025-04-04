<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () => queryCollection('projects').all());
</script>

<template>
	<div>
		<div>Mes projets</div>

		<ul>
			<li v-for="project in projects" :key="project.id">
				<NuxtLink :to="project.path">{{ project.title }}</NuxtLink>
			</li>
		</ul>
	</div>
</template>
