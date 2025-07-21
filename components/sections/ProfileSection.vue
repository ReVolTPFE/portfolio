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
				<p class="flex items-center"><Icon name="iconamoon:like-fill" class="text-white mr-4 block w-4 min-w-4" /> Centres d'intérêt :</p>
				<p class="flex items-center"><Icon name="material-symbols:book-2-rounded" class="text-white mx-4 block w-4 min-w-4" /> Lecture : romans, thrillers</p>
				<p class="flex items-center"><Icon name="material-symbols:sports-motorsports" class="text-white mx-4 block w-4 min-w-4" /> Sport automobile : SimRacing, F1</p>
				<p class="flex items-center"><Icon name="material-symbols:videogame-asset" class="text-white mx-4 block w-4 min-w-4" /> Jeux vidéo</p>
			</div>

			<div class="col-span-4 lg:col-span-3 p-4 pb-0 space-y-4 my-auto">
				<h3 class="text-primary font-bold text-xl">Mon expérience professionnelle et personnelle</h3>

				<p>Je suis passionné de programmation web depuis mes 16 ans, où j'ai commencé à apprendre en autodidacte.</p>

				<p>
					A travers les années, j'ai pu effectuer de nombreux
					<NuxtLink to="/projects" class="text-primary font-bold">projets personnels et en entreprise</NuxtLink>,
					toujours en privilégiant la qualité et la satisfaction des utilisateurs. Je me sers de mes projets personnels
					comme d'un bac à sable pour me former constamment aux nouvelles évolutions technologiques.
				</p>

				<p>
					Ayant déjà passé 4 années d'alternance dans différentes entreprises et agences web, je sais travailler
					en équipe et communiquer avec les clients comme les collaborateurs internes. C'est à l'aide de ces expériences,
					que je continue d'apprendre et de me perfectionner chaque jour.
				</p>

				<h3 class="text-primary font-bold text-xl">Mon approche projet</h3>

				<h4 class="text-secondary font-bold text-lg">Analyse</h4>

				<p>
					Que ce soit pour une nouvelle tâche ou un projet complet, je ne commence jamais à coder avant d'avoir une vision clair de l'objectif.
					J'ai pris l'habitude de me renseigner sur le contexte global et précis du travail à faire en incluant :
				</p>
				<ul class="ml-5">
					<li class="list-disc">la prise de notes pour clarifier les besoins</li>
					<li class="list-disc">les questions permettant d'éviter les zones d'ombres</li>
					<li class="list-disc">les schémas pour anticiper la structure, les données...</li>
					<li class="list-disc">le découpage des fonctionnalités pour rester clair sur les tâches à accomplir</li>
				</ul>

				<p>
					J'ai donc toujours pour objectif d'être certain de la marche à suivre avant de me lancer dans le code.
					Tout ceci me permet d'être plus rapide et efficace.
				</p>

				<h4 class="text-secondary font-bold text-lg">Code</h4>

				<p>
					La phase de code est généralement la plus longue.
					Grâce à l'analyse faite au préalable, je peux coder mes fonctionnalités de manière structurée.
					J'applique naturellement des principes tels que DRY (Don't Repeat Yourself), le test des fonctionnalités, l'utilisation de Git...
					Je pense toujours à rédiger un code propre, lisible et évolutif, de sorte à ce que n'importe quel autre développeur puisse prendre la suite sans souci.
					L'optimisation est une des chose les plus importantes que je vérifie (notamment pour les requêtes SQL ou le temps de traitement du code).
				</p>

				<h4 class="text-secondary font-bold text-lg">Review</h4>

				<p>Une fois le code créé et les premières vérifications faites, je vérifie plusieurs points :</p>

				<ul class="ml-5">
					<li class="list-disc">Sécurité du code</li>
					<li class="list-disc">Aucun effet de bord</li>
					<li class="list-disc">Tout ce qui a été demandé est fonctionnel et optimisé</li>
					<li class="list-disc">Ecriture de documentation détaillée si nécessaire</li>
				</ul>

				<p>Au final, j'ai donc un plan structuré pour mon travail, ce qui me permet d'être efficace au quotidien.</p>

				<div class="mt-4">
					<LinkButton link="/#contact" bg-color="bg-secondary" text="Me contacter" />
				</div>
			</div>
		</div>
	</section>
</template>
