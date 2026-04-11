<script setup lang="ts">
import LinkButton from '~/components/LinkButton.vue';

const route = useRoute();
const slug = route.params.slug as string;

// Récupérer la compétence via Nuxt Content
const { data: skill } = await useAsyncData(`skill-${slug}`, () =>
	queryCollection('skills').where('slug', '=', slug).first()
);

if (!skill.value) {
	throw createError({ statusCode: 404, statusMessage: 'Compétence non trouvée' });
}

// Récupérer les projets liés via Nuxt Content
const { data: allProjects } = await useAsyncData('all-projects-for-skills', () =>
	queryCollection('projects').select('slug', 'title').all()
);

// Récupérer les projets liés
const relatedProjects = computed(() => {
	if (!allProjects.value || !skill.value) return [];
	return skill.value.relatedProjects
		.map(projectSlug => allProjects.value!.find(p => p.slug === projectSlug))
		.filter(Boolean);
});
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

			<div v-if="skill" class="mt-8">
				<div class="flex justify-center my-8">
					<Icon v-if="skill.isIcon" :name="skill.image" class="text-tertiary w-24 h-24" />
					<img
						v-else
						:src="skill.image"
						:alt="skill.name"
						class="w-32 h-32 object-contain"
					>
				</div>

				<h1 class="text-4xl font-bold text-center mb-3 text-primary">{{ skill.name }}</h1>

				<div class="flex justify-center gap-1 mb-8">
					<Icon
						v-for="star in 5"
						:key="star"
						name="mdi:star"
						class="w-7 h-7"
						:class="star <= skill.level ? 'text-yellow-400' : 'text-gray-light'"
					/>
				</div>

				<!-- Contenu Markdown rendu via Nuxt Content -->
				<div class="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-tertiary prose-a:font-bold prose-strong:text-white">
					<ContentRenderer :value="skill" />
				</div>

				<!-- Projets liés -->
				<section v-if="relatedProjects.length > 0" class="mt-12">
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
	</div>
</template>
