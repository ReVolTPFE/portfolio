<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';
import SkillsCategory from '~/components/SkillsCategory.vue';
import LinkButton from '~/components/LinkButton.vue';

const frontendSkills = [
	{
		name: 'HTML/Twig',
		// image: [
		// 	'/img/logos/HTML.webp',
		// 	'/img/logos/Twig.webp'
		// ],
		image: '/img/logos/HTML.webp',
	},
	{
		name: 'SASS/Tailwind',
		// image: [
		// 	'/img/logos/Sass.webp',
		// 	'/img/logos/TailwindCSS.webp'
		// ],
		image: '/img/logos/TailwindCSS.webp',
	},
	{
		name: 'JavaScript',
		image: '/img/logos/JavaScript.webp',
	},
	{
		name: 'VueJS/NuxtJS',
		// image: [
		// 	'/img/logos/VueJS.webp',
		// 	'/img/logos/NuxtJS.webp'
		// ],
		image: '/img/logos/NuxtJS.webp',
	},
];

const backendSkills = [
	{
		name: 'PHP',
		image: '/img/logos/PHP.webp',
	},
	{
		name: 'Symfony',
		image: '/img/logos/Symfony.webp',
	},
	{
		name: 'MySQL',
		image: '/img/logos/MySQL.webp',
	},
	{
		name: 'TypeScript',
		image: '/img/logos/TypeScript.webp',
	},
];

const otherSkills = [
	{
		name: 'Git',
		image: '/img/logos/Git.webp',
	},
	{
		name: 'Docker',
		image: '/img/logos/Docker.webp',
	},
	{
		name: 'CI/CD',
		image: '/img/logos/CICD.webp',
	},
	{
		name: 'Linux',
		image: '/img/logos/Linux.webp',
	},
];
</script>

<template>
	<section id="skills" class="section-spacing bg-gray-blue text-white">
		<SectionTitle title="Compétences" subtitle="Savoir-faire" />

		<SkillsCategory title="Frontend" :skills="frontendSkills" />
		<SkillsCategory title="Backend" :skills="backendSkills" :inverted="true" />
		<SkillsCategory title="Autres" :skills="otherSkills" />

		<div class="flex justify-center">
			<LinkButton link="/portfolio" bg-color="bg-primary" text="Voir mon travail" />
		</div>
	</section>
</template>
