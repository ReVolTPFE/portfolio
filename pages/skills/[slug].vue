<script setup lang="ts">
import { allSkills } from '~/data/skills/skills';
import LinkButton from '~/components/LinkButton.vue';

const route = useRoute();
const slug = route.params.slug as string;

const skill = allSkills.find(s => s.slug === slug);

if (!skill) {
	throw createError({ statusCode: 404, statusMessage: 'Compétence non trouvée' });
}
</script>

<template>
	<div class="py-10">
		<div class="container mx-auto px-4 max-w-4xl">
			<LinkButton
				link="/#skills"
				bg-color="bg-primary"
				text="Retour aux compétences"
				left-arrow
			/>

			<div class="flex justify-center my-8">
				<Icon v-if="skill.isIcon" :name="skill.image" class="text-tertiary w-24 h-24" />
				<img
					v-else
					:src="skill.image"
					:alt="skill.name"
					class="w-32 h-32"
				>
			</div>

			<h1 class="text-4xl font-bold text-center mb-8 text-primary">{{ skill.name }}</h1>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-primary mb-4">Ma définition</h2>
				<p class="text-lg">{{ skill.definition }}</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold text-primary mb-4">Mes expériences</h2>
				<ul class="space-y-2">
					<li v-for="(ev, index) in skill.evidence" :key="index" class="flex items-start">
						<span class="text-primary mr-2">▸</span>
						<span>{{ ev }}</span>
					</li>
				</ul>
			</section>

			<section>
				<h2 class="text-2xl font-bold text-primary mb-4">Mon autocritique et mon évolution</h2>
				<p class="text-lg">{{ skill.evolution }}</p>
			</section>
		</div>
	</div>
</template>
