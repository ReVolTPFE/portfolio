<script setup lang="ts">
import { allCareerExperiences } from '~/data/career/career';
import LinkButton from '~/components/LinkButton.vue';

const route = useRoute();
const slug = route.params.slug as string;

const careerItem = allCareerExperiences.find(s => s.slug === slug);

if (!careerItem) {
	throw createError({ statusCode: 404, statusMessage: 'Expérience non trouvée' });
}

const isCompany = !!careerItem.company;
const isSchool = !!careerItem.school;

const data = isCompany ? careerItem.company : careerItem.school;
</script>

<template>
	<div class="py-10">
		<div class="container mx-auto px-4 max-w-4xl">
			<LinkButton
				link="/#career"
				bg-color="bg-primary"
				text="Retour au parcours"
				left-arrow
			/>

			<div class="flex justify-center my-8">
				<img
					v-if="data?.logo"
					:src="data.logo"
					:alt="data.name"
					class="w-32 h-32 object-cover shadow-lg"
				>
			</div>

			<h1 class="text-4xl font-bold text-center mb-2 text-primary">{{ data?.name }}</h1>
            
			<template v-if="isCompany && careerItem.company">
				<p class="text-center text-lg text-tertiary font-semibold mb-1">{{ careerItem.company.jobTitle }}</p>
				<p class="text-center text-gray-500 mb-1">{{ careerItem.company.details?.status }}</p>
				<p class="text-center text-gray-500 mb-2">{{ careerItem.company.period }}</p>
				<p class="text-center text-gray-400 text-sm mb-4">{{ careerItem.company.address }}</p>
                
				<div class="text-center mb-8">
					<a 
						:href="careerItem.company.link" 
						target="_blank" 
						class="text-primary hover:underline"
					>
						Visiter le site →
					</a>
				</div>

				<section class="mb-8">
					<h2 class="text-2xl font-bold text-primary mb-4">Mes missions</h2>
					<ul class="space-y-2">
						<li v-for="(mission, index) in careerItem.company.details?.missions" :key="index" class="flex items-start">
							<span class="text-primary mr-2">▸</span>
							<span>{{ mission }}</span>
						</li>
					</ul>
				</section>

				<section v-if="careerItem.company.details?.projectLinks?.length" class="mb-8">
					<h2 class="text-2xl font-bold text-primary mb-4">Projets réalisés</h2>
					<ul class="space-y-2">
						<li v-for="(project, index) in careerItem.company.details.projectLinks" :key="index">
							<NuxtLink 
								:to="`/projects/${project.link}`" 
								class="text-tertiary hover:underline flex items-start"
							>
								<span class="text-primary mr-2">▸</span>
								<span>{{ project.text }}</span>
							</NuxtLink>
						</li>
					</ul>
				</section>

				<section v-if="careerItem.company.details?.skillLinks?.length" class="mb-8">
					<h2 class="text-2xl font-bold text-primary mb-4">Compétences utilisées</h2>
					<div class="flex flex-wrap gap-2">
						<NuxtLink 
							v-for="(skill, index) in careerItem.company.details.skillLinks" 
							:key="index"
							:to="`/skills/${skill.link}`"
							class="px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
						>
							{{ skill.text }}
						</NuxtLink>
					</div>
				</section>
			</template>

			<template v-else-if="isSchool && careerItem.school">
				<p class="text-center text-lg text-tertiary font-semibold mb-2">{{ careerItem.school.diplome }}</p>
				<p class="text-center text-gray-500 mb-2">{{ careerItem.school.period }}</p>
				<p class="text-center text-gray-400 text-sm mb-4">{{ careerItem.school.address }}</p>
                
				<div class="text-center mb-8">
					<a 
						:href="careerItem.school.link" 
						target="_blank" 
						class="text-primary hover:underline"
					>
						Visiter le site →
					</a>
				</div>

				<section class="mb-8">
					<h2 class="text-2xl font-bold text-primary mb-4">Contenu de la formation</h2>
					<ul class="space-y-2">
						<li v-for="(detail, index) in careerItem.school.details" :key="index" class="flex items-start">
							<span class="text-primary mr-2">▸</span>
							<span>{{ detail }}</span>
						</li>
					</ul>
				</section>
			</template>
		</div>
	</div>
</template>
