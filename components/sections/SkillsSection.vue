<script setup lang="ts">
import { frontendSkills, backendSkills, softSkills } from '~/data/skills/skills';
import SectionTitle from '~/components/SectionTitle.vue';
import SkillsCategory from '~/components/SkillsCategory.vue';
import LinkButton from '~/components/LinkButton.vue';
</script>

<template>
	<section id="skills" class="section-spacing bg-gray-blue text-white">
		<SectionTitle title="Compétences" subtitle="Savoir-faire" />

		<SkillsCategory title="Frontend" :skills="frontendSkills" />
		<SkillsCategory title="Backend" :skills="backendSkills" />
		<SkillsCategory title="Soft Skills" :skills="softSkills" :icons="true" />

		<div class="flex justify-center">
			<LinkButton link="/projects" bg-color="bg-primary" text="Voir mon travail" />
		</div>
	</section>
</template>
