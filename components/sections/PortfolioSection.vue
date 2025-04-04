<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';
import ProjectCard from '~/components/ProjectCard.vue';
import type {Project} from '~/types/types';
import LinkButton from '~/components/LinkButton.vue';

const projects: Project[] = [
	{
		id: 1,
		title: 'Lorem ipsum dolor sit amet',
		image: '/img/banner.jpg',
		technologies: 'Vue.js, Nuxt, TailwindCSS',
		demoLink: '',
		codeLink: '',
		category: 'web',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor eiusmod'
	},
	{
		id: 2,
		title: 'Lorem ipsum dolor',
		image: '/img/banner.jpg',
		technologies: 'Flutter, Firebase',
		demoLink: '',
		codeLink: '',
		category: 'app',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
	},
	{
		id: 3,
		title: 'Lorem ipsum',
		image: '/img/banner.jpg',
		technologies: 'Tech1, Tech2',
		demoLink: '',
		codeLink: '',
		category: 'design',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
	}
];
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
			<LinkButton link="/portfolio" bg-color="bg-primary" text="Voir tous mes projets" />
		</div>
	</section>
</template>
