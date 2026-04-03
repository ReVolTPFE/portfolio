<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';
import SkillsCategory from '~/components/SkillsCategory.vue';
import LinkButton from '~/components/LinkButton.vue';

// Récupérer les compétences via Nuxt Content
const { data: allSkills } = await useAsyncData('all-skills', () =>
	queryCollection('skills').select('slug', 'name', 'image', 'isIcon', 'category', 'order').all()
);

const technicalSkills = computed(() =>
	(allSkills.value ?? [])
		.filter(s => s.category === 'technical')
		.sort((a, b) => a.order - b.order)
);

const softSkills = computed(() =>
	(allSkills.value ?? [])
		.filter(s => s.category === 'soft')
		.sort((a, b) => a.order - b.order)
);
</script>

<template>
	<section id="skills" class="section-spacing bg-gray-blue text-white">
		<SectionTitle title="Compétences" subtitle="Savoir-faire" />

		<SkillsCategory title="Compétences Techniques" :skills="technicalSkills" />
		<SkillsCategory title="Compétences Humaines" :skills="softSkills" :icons="true" />

		<div class="flex justify-center">
			<LinkButton link="/projects" bg-color="bg-primary" text="Voir mon travail" />
		</div>
	</section>
</template>
