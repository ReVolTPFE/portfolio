<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';
import LinkButton from '~/components/LinkButton.vue';

const currentYear = new Date().getFullYear();
const currentAge = currentYear - 2002;
</script>

<template>
	<section id="profile" class="section-spacing">
		<SectionTitle title="Qui suis-je ?" subtitle="Mon profil" />

		<div class="grid grid-cols-4 gap-4">
			<div class="col-span-4 sm:col-start-2 sm:col-end-4 lg:col-span-1 bg-primary text-white rounded-xl p-4 space-y-4">
				<p class="flex items-center"><Icon name="material-symbols:id-card" class="text-white mr-4 block w-4 min-w-4" /> Arnaud Steiner</p>
				<p class="flex items-center"><Icon name="mingcute:birthday-2-fill" class="text-white mr-4 block w-4 min-w-4" /> {{ currentAge }} ans (2002)</p>
				<p class="flex items-center"><Icon name="material-symbols:code-blocks" class="text-white mr-4 block w-4 min-w-4" /> Développeur web</p>
				<p class="flex items-center"><Icon name="solar:diploma-bold" class="text-white mr-4 block w-4 min-w-4" /> Diplôme en ingénierie logicielle en cours</p>
				<p class="flex items-center"><Icon name="solar:point-on-map-bold" class="text-white mr-4 block w-4 min-w-4" /> Strasbourg</p>
			</div>
			<div class="col-span-4 lg:col-span-3 p-4 pb-0 space-y-4 my-auto">
				<p>Je suis passionné de programmation web depuis mes 16 ans, où j'ai commencé à apprendre en autodidacte.</p>

				<p>
					A travers les années, j'ai pu effectuer de nombreux
					<NuxtLink to="/projects" class="text-primary font-bold">projets personnels et pour des associations</NuxtLink>,
					toujours en privilégiant la qualité et la satisfaction des utilisateurs. Je me sers de mes projets
					comme d'un bac à sable pour me former constamment aux nouvelles évolutions technologiques.
				</p>

				<p>
					Ayant déjà passé 4 années d'alternance dans différentes entreprises et agences web, je sais travailler
					en équipe et communiquer avec les clients comme les collaborateurs internes. C'est à l'aide de ces expériences,
					que je continue d'apprendre et de me perfectionner chaque jour.
				</p>

				<div class="mt-4">
					<LinkButton link="/#contact" bg-color="bg-secondary" text="Me contacter" />
				</div>
			</div>
		</div>
	</section>
</template>
