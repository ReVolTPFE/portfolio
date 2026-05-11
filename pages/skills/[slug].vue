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

// Récupérer toutes les compétences pour la navigation rapide
const { data: allSkills } = await useAsyncData('all-skills-nav', () =>
	queryCollection('skills').select('slug', 'name', 'image', 'isIcon', 'category', 'order').all()
);

const skillsNav = computed(() =>
	(allSkills.value ?? [])
		.slice()
		.sort((a, b) => {
			if (a.category !== b.category) return a.category === 'technical' ? -1 : 1;
			return a.order - b.order;
		})
);

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

				<div class="flex justify-center gap-1 mb-6">
					<Icon
						v-for="star in 5"
						:key="star"
						name="mdi:star"
						class="w-7 h-7"
						:class="star <= skill.level ? 'text-yellow-400' : 'text-gray-light'"
					/>
				</div>

				<!-- Navigation rapide entre compétences -->
				<nav class="flex flex-wrap justify-center gap-2 mb-10">
					<NuxtLink
						v-for="navSkill in skillsNav"
						:key="navSkill.slug"
						:to="`/skills/${navSkill.slug}`"
						class="p-[2px] rounded-full transition hover:scale-105"
						:class="navSkill.slug === skill.slug
							? 'bg-gradient-to-br from-purple-600 to-pink-600'
							: 'bg-gradient-to-br from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600'"
					>
						<span
							class="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-white"
							:class="navSkill.slug === skill.slug ? 'text-secondary' : 'text-primary'"
						>
							<Icon
								v-if="navSkill.isIcon"
								:name="navSkill.image"
								class="w-4 h-4 text-tertiary"
							/>
							<img
								v-else
								:src="navSkill.image"
								:alt="navSkill.name"
								class="w-4 h-4 object-contain"
							>
							{{ navSkill.name }}
						</span>
					</NuxtLink>
				</nav>

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
