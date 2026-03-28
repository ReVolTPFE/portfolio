<script setup lang="ts">
import { allSkills } from '~/data/skills/skills';
import LinkButton from '~/components/LinkButton.vue';

const route = useRoute();
const slug = route.params.slug as string;

const skill = allSkills.find(s => s.slug === slug);

if (!skill) {
	throw createError({ statusCode: 404, statusMessage: 'Compétence non trouvée' });
}

// Récupérer les projets liés via Nuxt Content
const { data: allProjects } = await useAsyncData('all-projects-for-skills', () =>
	queryCollection('projects').select('slug', 'title').all()
);

// Récupérer les projets liés
const relatedProjects = computed(() => {
	if (!allProjects.value) return [];
	return skill.relatedProjects
		.map(projectSlug => allProjects.value!.find(p => p.slug === projectSlug))
		.filter(Boolean);
});

// Fonction pour obtenir le nom du projet à partir du slug
const getProjectName = (projectSlug: string): string => {
	const project = allProjects.value?.find(p => p.slug === projectSlug);
	return project?.title ?? projectSlug;
};
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
					class="w-32 h-32 object-contain"
				>
			</div>

			<h1 class="text-4xl font-bold text-center mb-8 text-primary">{{ skill.name }}</h1>

			<!-- Définition -->
			<section class="mb-8">
				<h2 class="text-2xl font-bold text-primary mb-4">Ma définition</h2>
				<p class="text-lg leading-relaxed whitespace-pre-line">{{ skill.definition.trim() }}</p>
			</section>

			<!-- Expériences / Preuves -->
			<section class="mb-8">
				<h2 class="text-2xl font-bold text-primary mb-4">Mes expériences / éléments de preuves</h2>
				<ul class="space-y-4">
					<li v-for="(ev, index) in skill.evidence" :key="index" class="flex items-start gap-2">
						<span class="text-primary mt-1 flex-shrink-0">▸</span>
						<div>
							<p class="text-lg">{{ (ev as { paragraph: string; link: string }).paragraph }}</p>
							<NuxtLink
								v-if="(ev as { paragraph: string; link: string }).link"
								:to="`/projects/${(ev as { paragraph: string; link: string }).link}`"
								class="text-tertiary hover:underline font-bold mt-1 inline-block"
							>
								→ Voir le projet : {{ getProjectName((ev as { paragraph: string; link: string }).link) }}
							</NuxtLink>
							<NuxtLink
								v-if="(ev.externalLink && ev.externalLink !== '')"
								:to="ev.externalLink"
								target="_blank"
								class="text-tertiary hover:underline font-bold mt-1 inline-block"
							>
								→ Voir le projet : {{ ev.externalLink }}
							</NuxtLink>
						</div>
					</li>
				</ul>
			</section>

			<!-- Autocritique -->
			<section class="mb-8">
				<h2 class="text-2xl font-bold text-primary mb-4">Mon autocritique</h2>
				<p class="text-lg leading-relaxed whitespace-pre-line">{{ skill.autocritique.trim() }}</p>
			</section>

			<!-- Évolution -->
			<section class="mb-8">
				<h2 class="text-2xl font-bold text-primary mb-4">Mon évolution</h2>
				<p class="text-lg leading-relaxed whitespace-pre-line">{{ skill.evolution.trim() }}</p>
			</section>

			<!-- Projets liés -->
			<section v-if="relatedProjects.length > 0">
				<h2 class="text-2xl font-bold text-primary mb-4">Projets associés</h2>
				<div class="flex flex-wrap gap-3">
					<NuxtLink
						v-for="project in relatedProjects"
						:key="project?.slug"
						:to="`/projects/${project?.slug}`"
						class="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition-colors"
					>
						{{ project?.title }}
					</NuxtLink>
				</div>
			</section>
		</div>
	</div>
</template>
