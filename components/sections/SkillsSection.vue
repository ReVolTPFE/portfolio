<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';
import SkillsCategory from '~/components/SkillsCategory.vue';

const frontendSkills = [
	{
		name: 'HTML/Twig',
		image: '',
	},
	{
		name: 'SCSS/Tailwind',
		image: '',
	},
	{
		name: 'JavaScript',
		image: '',
	},
	{
		name: 'VueJS/NuxtJS',
		image: '',
	},
];

const backendSkills = [
	{
		name: 'PHP',
		image: '',
	},
	{
		name: 'Symfony',
		image: '',
	},
	{
		name: 'SQL',
		image: '',
	},
	{
		name: 'TypeScript',
		image: '',
	},
];

const otherSkills = [
	{
		name: 'Git',
		image: '',
	},
	{
		name: 'Docker',
		image: '',
	},
	{
		name: 'CI/CD',
		image: '',
	},
	{
		name: 'Linux',
		image: '',
	},
];
</script>

<template>
	<section id="skills" class="section-spacing bg-gray-blue text-white">
		<SectionTitle title="Compétences" subtitle="Savoir-faire" />

		<SkillsCategory title="Frontend" :skills="frontendSkills" />
		<SkillsCategory title="Backend" :skills="backendSkills" :inverted="true" />
		<SkillsCategory title="Autres" :skills="otherSkills" />
	</section>
</template>
