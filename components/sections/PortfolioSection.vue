<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';
import ProjectCard from '~/components/ProjectCard.vue';
import type {Project} from '~/types/types';
import LinkButton from '~/components/LinkButton.vue';

// on cherche les 3 projets les plus récents uniquement
const { data: projects } = await useAsyncData<Project[]>('projects', () =>
	queryCollection('projects')
		.order('id', 'DESC')
		.limit(3)
		.all()
);
</script>

<template>
	<section id="portfolio" class="section-spacing">
		<SectionTitle title="Portfolio" subtitle="Mes expériences"/>

		<div class="mx-auto max-w-80 md:max-w-screen-md lg:max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
			<ProjectCard
				v-for="(project) in projects"
				:key="project.id"
				:project="project"
			/>
		</div>

		<div class="flex justify-center">
			<LinkButton link="/projects" bg-color="bg-primary" text="Voir tous mes projets" />
		</div>
	</section>
</template>
