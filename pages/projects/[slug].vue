<script setup lang="ts">
import {useRoute} from 'vue-router';
import {findProjectBySlug} from '~/data/projects';

const route = useRoute();
const project = findProjectBySlug(route.params.slug as string);
console.log(typeof route.params.slug, route.params.slug);
</script>

<!--<template>-->
<!--	<div v-if="project" class="max-w-3xl mx-auto p-6">-->
<!--		<h1 class="text-4xl font-bold mb-4 text-primary">{{ project.title }}</h1>-->
<!--		<p class="mb-4">{{ project.description }}</p>-->
<!--&lt;!&ndash;		<img :src="project.image" :alt="project.title" class="rounded-lg mb-6" >&ndash;&gt;-->

<!--		<ul class="mb-6 text-sm text-white bg-tertiary">-->
<!--			<li><strong>Technos :</strong>-->
<!--				<ul>-->
<!--					<li v-for="(tech, index) in project.technologies" :key="index">{{ tech }}</li>-->
<!--				</ul>-->
<!--			</li>-->
<!--			<li><strong>Date :</strong> {{ project.date }}</li>-->
<!--			<li><strong>Tags :</strong>-->
<!--				<ul>-->
<!--					<li v-for="(tag, index) in project.tags" :key="index">{{ tag }}</li>-->
<!--				</ul>-->
<!--			</li>-->
<!--		</ul>-->

<!--		<div class="flex gap-4">-->
<!--			<a-->
<!--				v-if="project.demoLink"-->
<!--				:href="project.demoLink"-->
<!--				target="_blank"-->
<!--				class="btn"-->
<!--			>Voir le site</a>-->
<!--			<a-->
<!--				v-if="project.codeLink"-->
<!--				:href="project.codeLink"-->
<!--				target="_blank"-->
<!--				class="btn"-->
<!--			>Code source</a>-->
<!--		</div>-->
<!--	</div>-->
<!--	<div v-else class="text-center py-20 text-gray-400">Projet introuvable.</div>-->
<!--</template>-->

<template>
	<!-- Hero Section -->
	<div v-if="project">
		<section class="bg-white py-16">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{{ project.title }}</h1>
					<p class="text-xl text-gray-600 mb-6">{{ project.description }}</p>

					<div class="flex flex-wrap justify-center gap-4 mb-8">
						<span class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
							Client : {{ project.actors.client }}
						</span>
						<span class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
							Projet : {{ project.companyProject }}
						</span>
						<span class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
							Mon entreprise : {{ project.company }}
						</span>
						<span class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
							Date : {{ project.date }}
						</span>
					</div>

					<div class="flex flex-wrap justify-center gap-4">
						<a
							v-if="project.demoLink"
							:href="project.demoLink"
							target="_blank"
							class="bg-primary text-center py-2.5 px-5 rounded-md inline-block text-white"
						>
							Voir le projet
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Technologies Section -->
		<section class="py-16 bg-gray-50">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold text-gray-900 mb-4">Technologies utilisées</h2>
					<p class="text-gray-600">Stack technique et outils employés pour ce projet</p>
				</div>
				<div class="flex flex-wrap justify-center gap-6">
					<div
						v-for="(tech, index) in project.technologies"
						:key="index"
						class="w-[150px] bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
					>
						<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
							<Icon :name="tech.icon" class="text-primary w-7 h-7" />
						</div>
						<h3 class="font-semibold text-gray-900">{{ tech.text }}</h3>
					</div>
				</div>
			</div>
		</section>

		<!-- Project Overview Section -->
		<section class="py-16 bg-white">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="grid lg:grid-cols-2 gap-12">
					<div>
						<h2 class="text-3xl font-bold text-gray-900 mb-6">Contexte du projet</h2>
						<div class="bg-gray-50 p-6 rounded-xl mb-8">
							<p class="text-gray-700 leading-relaxed">
								{{ project.context.description }}
							</p>
						</div>

						<h3 class="text-xl font-semibold text-gray-900 mb-4">Objectifs</h3>
						<ul class="space-y-3">
							<li v-for="(goal, index) in project.context.goals" :key="index" class="flex items-center">
								<div class="mr-3 flex items-center">
									<Icon name="mdi:check-circle-outline" class="text-success w-7 h-7" />
								</div>
								<span class="text-gray-700">{{ goal }}</span>
							</li>
						</ul>
					</div>

					<div>
						<h2 class="text-3xl font-bold text-gray-900 mb-6">Équipe projet</h2>
						<div class="space-y-4">
							<div class="bg-gray-50 p-4 rounded-lg">
								<h4 class="font-semibold text-gray-900 mb-2">Client</h4>
								<p class="text-gray-700">{{ project.actors.client }}</p>
							</div>
							<div class="bg-gray-50 p-4 rounded-lg">
								<h4 class="font-semibold text-gray-900 mb-2">Développeur</h4>
								<p class="text-gray-700">{{ project.actors.developer }}</p>
							</div>
							<div class="bg-gray-50 p-4 rounded-lg">
								<h4 class="font-semibold text-gray-900 mb-2">Chef de projet</h4>
								<p class="text-gray-700">{{ project.actors.projectManager }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Key Features Section -->
		<section class="py-16 bg-gray-50">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold text-gray-900 mb-4">Fonctionnalités clés</h2>
					<p class="text-gray-600">Les principales fonctionnalités développées pour ce projet</p>
				</div>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div v-for="(feature, index) in project.keyFeatures" :key="index" class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
						<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
							<Icon :name="feature.icon" class="text-primary w-7 h-7" />
						</div>
						<p class="text-gray-700 leading-relaxed">{{ feature.text }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Technical Solutions Section -->
		<section class="py-16 bg-white">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold text-gray-900 mb-4">Solutions techniques</h2>
					<p class="text-gray-600">Architecture et choix techniques pour répondre aux besoins</p>
				</div>
				<div class="grid md:grid-cols-2 gap-8">
					<div v-for="(solution, index) in project.technicalSolutions" :key="index" class="bg-gray-50 p-6 rounded-xl">
						<div class="flex items-center">
							<div class="mr-4 flex items-center">
								<Icon :name="solution.icon" class="text-primary w-7 h-7" />
							</div>
							<p class="text-gray-700 leading-relaxed">{{ solution.text }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Challenges Section -->
		<section class="py-16 bg-gray-50">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold text-gray-900 mb-4">Défis relevés</h2>
					<p class="text-gray-600">Les principaux challenges techniques et fonctionnels du projet</p>
				</div>
				<div class="grid md:grid-cols-3 gap-8">
					<div v-for="(challenge, index) in project.challenges" :key="index" class="bg-white p-6 rounded-xl shadow-sm">
						<div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
							<Icon :name="challenge.icon" class="text-orange-600 w-7 h-7" />
						</div>
						<h3 class="font-semibold text-gray-900 mb-3">{{ challenge.title }}</h3>
						<p class="text-gray-700 leading-relaxed">{{ challenge.text }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Results Section -->
		<section class="py-16 bg-white">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold text-gray-900 mb-4">Résultats obtenus</h2>
					<p class="text-gray-600">Les bénéfices et impacts mesurés du projet</p>
				</div>
				<div v-if="!project.pending" class="grid md:grid-cols-3 gap-8">
					<div v-for="(result, index) in project.results" :key="index" class="bg-success/5 p-6 rounded-xl border border-success/20">
						<div class="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
							<Icon :name="result.icon" class="text-success w-7 h-7" />
						</div>
						<p class="text-gray-700 leading-relaxed">{{ result.text }}</p>
					</div>
				</div>
				<div v-else class="text-align-center">
					<div v-for="(result, index) in project.results" :key="index" class="bg-purple-500/5 p-6 rounded-xl border border-purple-500/20">
						<div class="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
							<Icon :name="result.icon" class="text-purple-500 w-7 h-7" />
						</div>
						<p class="text-gray-700 leading-relaxed">{{ result.text }}</p>
					</div>
				</div>
			</div>
		</section>
	</div>

	<div v-else class="text-center py-20 text-gray-400">Projet introuvable.</div>
</template>
