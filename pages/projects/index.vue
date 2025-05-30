<script setup lang="ts">
import { projects } from '~/data/projects';
import ProjectCard from '~/components/ProjectCard.vue';
</script>

<template>
	<div class="max-w-4xl mx-auto p-6">
		<h1 class="text-3xl font-bold mb-6">Mes projets</h1>

		<div class="mx-auto max-w-80 md:max-w-screen-md lg:max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
			<ProjectCard
				v-for="(project) in projects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</div>
</template>
