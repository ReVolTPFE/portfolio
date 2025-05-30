<script setup lang="ts">
import { useRoute } from 'vue-router';
import { findProjectBySlug } from '~/data/projects';

const route = useRoute();
const project = findProjectBySlug(route.params.slug as string);
console.log(typeof route.params.slug, route.params.slug);
</script>

<template>
	<div v-if="project" class="max-w-3xl mx-auto p-6">
		<h1 class="text-4xl font-bold mb-4">{{ project.title }}</h1>
		<img :src="project.image" :alt="project.title" class="rounded-lg mb-6" >
		<p class="mb-4">{{ project.description }}</p>

		<ul class="mb-6 text-sm text-gray-500">
			<li><strong>Technos :</strong>
				<ul>
					<li v-for="(tech, index) in project.technologies" :key="index">{{ tech }}</li>
				</ul>
			</li>
			<li><strong>Date :</strong> {{ project.date }}</li>
			<li><strong>Tags :</strong>
				<ul>
					<li v-for="(tag, index) in project.tags" :key="index">{{ tag }}</li>
				</ul>
			</li>
		</ul>

		<div class="flex gap-4">
			<a
				v-if="project.demoLink"
				:href="project.demoLink"
				target="_blank"
				class="btn"
			>Voir le site</a>
			<a
				v-if="project.codeLink"
				:href="project.codeLink"
				target="_blank"
				class="btn"
			>Code source</a>
		</div>
	</div>
	<div v-else class="text-center py-20 text-gray-400">Projet introuvable.</div>
</template>
