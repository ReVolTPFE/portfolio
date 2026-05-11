<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';
import ProjectCard from '~/components/ProjectCard.vue';
import LinkButton from '~/components/LinkButton.vue';

const { data: projects } = await useAsyncData('trending-projects', () =>
	queryCollection('projects').where('trending', '=', true).order('date', 'DESC').all()
);
</script>

<template>
	<section id="portfolio" class="section-spacing">
		<SectionTitle title="Projets" subtitle="Mes expériences"/>

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
